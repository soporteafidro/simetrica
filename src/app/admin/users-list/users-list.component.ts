import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from '../admin.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { SisecService } from 'src/app/services/sisec.service';
import { Subscription } from 'rxjs';
import {
  ListSponsorsQuery,
  SendNotificationInput,
} from 'src/app/services/API.service';
import { Logger } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { CreateUserComponent } from '../create-user/create-user.component';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { StateUserPipe } from '../state-user.pipe';
const logger = new Logger('user-list');

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  display = false;
  users = [];
  filterdUsers = [];
  userEditSubs: Subscription;
  userCreateSubs: Subscription;
  allSponsors = [];
  selectedSponsor;
  listToken = null;
  columns = [];
  first = 0;
  rows = 10;
  items: MenuItem[];
  userSelected = null;
  msgs = [
    { severity: 'warn', summary: '', detail: 'No se encontraron resultados.' },
  ];
  constructor(
    private adminService: AdminService,
    private sisec: SisecService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messages: MessageService,
    private sponsorsService: SponsorsService,
    private stateUserPipe: StateUserPipe
  ) {}

  ngOnInit(): void {
    this.sisec.showSpinner('Recuperando lista de usuarios...');
    this.sponsorsService
      .listSponsors()
      .then(async (response2: ListSponsorsQuery) => {
        logger.debug('listCompanies response', response2);
        this.allSponsors = response2.items;
        const userGroup = this.sisec.appGroups;
        for await (const uG of userGroup) {
          await this.completeGroupUserList(uG, this.allSponsors, null);
        }
        this.buildUsersList(this.users);
        this.sisec.hideSpinner();
      });

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      { value: 'Usuario', key: 'username' },
      { value: 'Nombre', key: 'name' },
      { value: 'Email', key: 'email' },
      { value: 'Patrocinador', key: 'patrocinador' },
      { value: 'Rol', key: 'rol' },
      { value: 'Estado', key: 'estado' },
    ];

    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.edit(this.userSelected);
        },
      },
      {
        label: 'Activar/Desactivar',
        icon: 'pi pi-user',
        command: () => {
          this.enabledDisabledUser(this.userSelected);
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteUserConfirmation(this.userSelected);
        },
      },
    ];
  }
  next(): void {
    this.first = this.first + this.rows;
  }
  prev(): void {
    this.first = this.first - this.rows;
  }
  reset(): void {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.users ? this.first === this.users.length - this.rows : true;
  }
  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }
  buildUsersList(users: any[]): void {
    this.users = users.map((user) => {
      return {
        username: user.username ? user.username : '---',
        name: user.name ? user.name : '---',
        email: user.email ? user.email : '---',
        identificacion: user.identificacion ? user.identificacion : '---',
        phone_number: user.phone_number ? user.phone_number : '---',
        patrocinador: user.patrocinador ? user.patrocinador : '---',
        rol: user.rol ? user.rol : '---',
        estado: this.stateUserPipe.transform(user.estado),
        activo: user.activo,
      };
    });
  }
  async completeGroupUserList(uG, sponsors, listToken): Promise<any> {
    await this.adminService
      .listUsersInGroup(uG.value, 50, listToken)
      .then((response) => {
        logger.debug('listUsersInGroup response', response);
        const newToken = response.NextToken;
        for (const u of response.rest.Users) {
          u.rol = uG.label;
        }
        for (const u of response.rest.Users) {
          u.username = u.Username;
          u.estado =
            u.UserStatus === 'FORCE_CHANGE_PASSWORD'
              ? 'FORCE_CHANGE_PASSWORD'
              : u.Enabled;
          u.activo = u.Enabled;
          u.name = this.getAttribute(u.Attributes, 'name');
          u.email = this.getAttribute(u.Attributes, 'email');
          u.phone_number = this.getAttribute(u.Attributes, 'phone_number');
          u.patrocinador = this.getAttribute(
            u.Attributes,
            'custom:patrocinador'
          );
          u.identificacion = this.getAttribute(
            u.Attributes,
            'custom:identificacion'
          );
        }
        for (const u of response.rest.Users) {
          const s = sponsors.find((x) => u.patrocinador === x.id);
          if (s) {
            u.patrocinador = s.nombre;
          }
        }
        this.users = this.users.concat(response.rest.Users);

        if (newToken) {
          this.completeGroupUserList(uG.value, sponsors, newToken);
        }
      })
      .catch((error) => {
        logger.error('listUsersInGroup response', error);
      });
  }
  getAttribute(attributes: [any], attName): string {
    let att = null;
    const a = attributes.find((x) => x.Name === attName);
    if (a) {
      att = a.Value;
    }
    return att;
  }
  edit(usuario): void {
    const ref = this.dialogService.open(UserEditComponent, {
      header: 'Grupos del usuario ' + usuario.username,
      width: '90%',
      closable: false,
      data: {
        usuario: usuario.username,
        allSponsors: this.allSponsors,
        users: this.users,
      },
    });
    ref.onClose.subscribe((data: any) => {
      if (data) {
        const index = this.users.findIndex((x) => x.username === data.username);
        const sponsor = this.allSponsors.find(
          (x) => x.id === data.patrocinador
        );
        data.estado = this.users[index].estado;
        data.patrocinador = sponsor.nombre;
        this.users.splice(index, 1, data);
      }
    });
  }
  openCreateUserModal(): void {
    const ref = this.dialogService.open(CreateUserComponent, {
      header: 'Crear usuario',
      width: '90%',
      data: this.users,
      closeOnEscape: false,
      dismissableMask: false,
    });
    this.userCreateSubs = ref.onClose.subscribe((data: any) => {
      if (data) {
        data.Username = data.username;
        this.users.push(data);
        this.filterdUsers.push(data);
      }
    });
  }
  deleteUserConfirmation(user): void {
    this.confirmationService.confirm({
      message: 'Se eliminará el usuario : ' + user.name,
      accept: () => {
        this.sisec.showSpinner('Eliminado usuario...');
        this.adminService
          .deleteUser(user.username)
          .then((response) => {
            logger.debug('deleteUser response', response);
            const index = this.users.findIndex(
              (x) => x.username === user.username
            );
            this.users.splice(index, 1);
            const index2 = this.filterdUsers.findIndex(
              (x) => x.username === user.username
            );
            this.filterdUsers.splice(index2, 1);
            const u = [...this.users];
            this.users = [];
            this.users = u;
            this.messages.add({
              severity: 'success',
              detail: 'Usuario eliminado exitosamente',
            });
          })
          .catch((error) => {
            logger.error('deleteUser error', error);
            this.sisec.showServiceError('eliminar un usuario');
          })
          .finally(() => this.sisec.hideSpinner());
      },
    });
  }
  selectUser(user): void {
    this.userSelected = user;
  }
  enabledDisabledUser(user): void {
    if (user.activo) {
      this.sisec.showSpinner(`Deshabilitado usuario: ${user.name}`);
      this.adminService
        .disableUser(user.username)
        .then((response) => {
          logger.debug('disableUser reponse', response);
          const index = this.users.findIndex(
            (x) => x.username === this.userSelected.username
          );
          this.users[index].activo = false;
          this.users[index].estado = 'Inactivo';
          this.messages.add({
            severity: 'success',
            detail: 'Usuario deshabilitado exitosamente',
          });
        })
        .catch((error) => {
          logger.debug('disableUser reponse', error);
        })
        .finally(() => this.sisec.hideSpinner());
    } else {
      this.sisec.showSpinner(`Habilitado usuario: ${user.name}`);
      this.adminService
        .enableUser(user.username)
        .then((response) => {
          logger.debug('disableUser reponse', response);
          const index = this.users.findIndex(
            (x) => x.username === this.userSelected.username
          );
          this.users[index].activo = true;
          this.users[index].estado = 'Activo';
          const inputMail: SendNotificationInput = {
            sendSMS: false,
            to: user.email,
            from: 'sisec@afidro.com',
            subject: 'Activación de usuario [sisec]',
            html: `Su usuario ${this.userSelected.username} ha sido activado y ya tiene acceso a <a href="${environment.URL}">SISEC</a>`,
          };
          this.sisec
            .sendEmail(inputMail)
            .then((response2) => {
              logger.debug('sendEmail response', response2);
            })
            .catch((error2) => {
              logger.error('sendEmail error', error2);
            })
            .finally(() => {
              this.sisec.hideSpinner();
            });
          this.messages.add({
            severity: 'success',
            detail: 'Usuario habilitado exitosamente',
          });
        })
        .catch((error) => {
          logger.debug('disableUser reponse', error);
          this.sisec.hideSpinner();
        });
    }
  }
}
