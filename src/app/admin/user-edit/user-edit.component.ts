import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from '../admin.service';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { MessageService, SelectItem } from 'primeng/api';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { ListSponsorsQuery } from 'src/app/services/API.service';
import { NgForm } from '@angular/forms';
const logger = new Logger('user-edit');

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  @ViewChild('f', { static: true }) userForm: NgForm;
  user: any = {
    username: 'null',
    name: null,
    email: null,
    identificacion: null,
    phone_number: null,
    temp_password: null,
    patrocinador: 'NA',
  };

  visibilityPatrocinador = false;
  allGroups = [];
  selectedGroup = null;
  allSponsors = [];
  selectedSponsor = null;
  users = [];
  actualGroup = null;

  userCompaniesStr = '';
  userGroups = [];

  userCompanies = [];
  allCompanies = [];
  constructor(
    private sisec: SisecService,
    private adminuserService: AdminService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private sponsorsService: SponsorsService
  ) {}

  ngOnInit(): void {
    this.allGroups = this.createGroupsSI();
    const username = this.config.data.usuario;
    this.users = this.config.data.users;
    this.userCompaniesStr = this.config.data.userCompaniesStr;
    this.sisec.showSpinner('Consultando usuario: ' + username);
    this.allSponsors = this.config.data.allSponsors.sort();
    this.adminuserService
      .getUser(username)
      .then((response) => {
        logger.debug('getUser response', response);
        const user = {
          username: response.Username,
          name: this.getAttribute(response.UserAttributes, 'name'),
          email: this.getAttribute(response.UserAttributes, 'email'),
          phone_number: this.getAttribute(
            response.UserAttributes,
            'phone_number'
          ),
          patrocinador: this.getAttribute(
            response.UserAttributes,
            'custom:patrocinador'
          ),
          identificacion: this.getAttribute(
            response.UserAttributes,
            'custom:identificacion'
          ),
        };
        user.patrocinador = this.allSponsors.find(
          (x) => x.id === user.patrocinador
        );
        this.user = user;
        this.adminuserService
          .listGroupsForUser(username)
          .then((response2) => {
            logger.debug('listGroupsForUser response', response2);
            this.selectedGroup = response2.Groups[0].GroupName;
            this.rolSelected();
            this.actualGroup = response2.Groups[0].GroupName;
            this.sisec.hideSpinner();
          })
          .catch((error2) => {
            logger.error('listGroupsForUser error', error2);
            this.sisec.hideSpinner();
          });
      })
      .catch((error) => {
        logger.error('getUser error', error);
        this.sisec.hideSpinner();
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

  createGroupsSI(): SelectItem[] {
    const arr: SelectItem[] = [];
    for (const g of this.sisec.appGroups) {
      arr.push({
        value: g.value,
        label: g.label,
      });
    }
    return arr;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sisec.showSpinner('Editando usuario ' + this.user.username + '...');
      if (this.adminuserService.isDuplicate(this.users, this.user, true)) {
        this.sisec.hideSpinner();
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar usuario',
          detail: `El usuario ya existe`,
        });
      }
      if (
        this.selectedGroup === 'Supervisor' ||
        this.selectedGroup === 'Digitador'
      ) {
        if (!this.user.patrocinador.id) {
          this.sisec.hideSpinner();
          return this.messageService.add({
            severity: 'error',
            summary: 'Error al registrar usuario',
            detail: 'Es usuario debe tener un patrocinador asignado',
          });
        }
      }
      if (typeof this.user.patrocinador === 'object') {
        this.user.patrocinador = this.user.patrocinador.id;
      }
      this.user.phone_number = this.user.phone_number.replace(' ', '');
      if (this.selectedGroup === this.actualGroup) {
        this.adminuserService
          .updateUser(this.user.username, this.user)
          .then((response) => {
            logger.debug('updateUser response', response);
            this.user.rol = this.selectedGroup;
            this.ref.close(this.user);
            this.messageService.add({
              severity: 'success',
              summary: 'Usuario actualizado',
              detail: `El usuario fue actualizado exitosamente.`,
            });
          })
          .catch((error) => {
            logger.error('updateUser response', error);
          })
          .finally(() => this.sisec.hideSpinner());
      } else {
        this.adminuserService
          .removeUserFromGroup(this.user.username, this.actualGroup)
          .then((response) => {
            logger.debug('removeUserFromGroup response', response);
            this.adminuserService
              .addToGroup(this.user.username, this.selectedGroup)
              .then((response2) => {
                logger.debug('removeUserFromGroup response', response2);
                this.adminuserService
                  .updateUser(this.user.username, this.user)
                  .then((response3) => {
                    logger.debug('updateUser response', response3);
                    this.user.rol = this.selectedGroup;
                    this.ref.close(this.user);
                    this.messageService.add({
                      severity: 'success',
                      summary: 'Usuario actualizado',
                      detail: `El usuario fue actualizado exitosamente.`,
                    });
                    this.sisec.hideSpinner();
                  })
                  .catch((error3) => {
                    logger.error('updateUser error', error3);
                    this.sisec.hideSpinner();
                  });
              })
              .catch((error2) => {
                logger.error('addToGroup error', error2);
                this.sisec.hideSpinner();
              });
          })
          .catch((error) => {
            logger.error('removeUserFromGroup error', error);
            this.sisec.hideSpinner();
          });
      }
    } else {
      this.sisec.showInvalidFormError('Usuarios');
    }
  }

  onCancelar(): void {
    this.userForm.reset();
    this.ref.close(null);
  }

  rolSelected(): void {
    if (
      this.selectedGroup === 'Supervisor' ||
      this.selectedGroup === 'Medico' ||
      this.selectedGroup === 'Digitador'
    ) {
      this.visibilityPatrocinador = true;
    } else {
      this.visibilityPatrocinador = false;
      this.user.patrocinador = 'NA';
    }
  }
}
