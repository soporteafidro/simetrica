import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SisecService } from 'src/app/services/sisec.service';
import { AdminService } from '../admin.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Logger } from 'aws-amplify';
import { MessageService, SelectItem } from 'primeng/api';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { ListSponsorsQuery } from 'src/app/services/API.service';
const logger = new Logger('create-user');
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @ViewChild('f', { static: true }) userForm: NgForm;
  user: any = {
    username: null,
    name: null,
    email: null,
    identificacion: null,
    phone_number: null,
    temp_password: null,
    patrocinador: null,
  };

  visibilityPatrocinador = false;
  allGroups = [];
  selectedGroup = null;
  allSponsors = [];
  selectedSponsor = null;
  users = [];

  constructor(
    private sisec: SisecService,
    private adminuserService: AdminService,
    public ref: DynamicDialogRef,
    private sponsorsService: SponsorsService,
    private messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.users = this.config.data;
    this.allGroups = this.createGroupsSI();
    this.sisec.showSpinner('Consultando compañías disponibles...');
    this.sponsorsService
      .listSponsors()
      .then((response: ListSponsorsQuery) => {
        logger.debug('listCompanies response', response);
        this.allSponsors = response.items.sort(this.orderAlphabetically);
      })
      .catch((error) => logger.error('listCompanies error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  orderAlphabetically(x, y) {
    return x.nombre.localeCompare(y.nombre);
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

  createRandomPassword(): void {
    let password = '';
    const minusculas = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    const mayusculas = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const simbolos = ['.', '-', '_', '$', '&', '#', '@'];
    for (let i = 0; i < 2; i++) {
      password +=
        minusculas[(Math.random() * (minusculas.length - 1)).toFixed(0)];
    }
    for (let i = 0; i < 2; i++) {
      password += numeros[(Math.random() * (numeros.length - 1)).toFixed(0)];
    }
    for (let i = 0; i < 2; i++) {
      password +=
        mayusculas[(Math.random() * (mayusculas.length - 1)).toFixed(0)];
    }
    for (let i = 0; i < 2; i++) {
      password += simbolos[(Math.random() * (simbolos.length - 1)).toFixed(0)];
    }
    this.user.temp_password = password;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sisec.showSpinner('Creando usuario...');
      if (this.adminuserService.isDuplicate(this.users, this.user, false)) {
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
      this.createRandomPassword();
      if (typeof this.user.patrocinador === 'object') {
        this.user.patrocinador = this.user.patrocinador.id;
      }
      this.user.phone_number = this.user.phone_number.replace(' ', '');
      this.adminuserService
        .createUser(this.user)
        .then((response) => {
          logger.debug('createUser response', response);
          this.sisec.showSpinner('Agregando usuario a los roles');
          this.adminuserService
            .addToGroup(this.user.username, this.selectedGroup)
            .then((response2) => {
              logger.debug('addToGroup response', response2);
              this.messageService.add({
                severity: 'success',
                summary: 'Usuario creado exitosamente',
                detail: 'El usuario fue creado y notificado exitosamente',
              });
            })
            .catch((error2) => logger.error('addToGroup error', error2));
          this.user.estado = 'Cambio de clave';
          this.user.rol = this.selectedGroup;
          if (this.user.patrocinador !== null) {
            const sponsor = this.allSponsors.find(
              (x) => x.id === this.user.patrocinador
            );
            this.user.patrocinador = sponsor.nombre;
          }
          this.ref.close(this.user);
        })
        .catch((error) => {
          logger.error('createUser error', error);
          this.sisec.showServiceError('crear un usuario');
        })
        .finally(() => this.sisec.hideSpinner());
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
      this.user.patrocinador = null;
    }
  }
}
