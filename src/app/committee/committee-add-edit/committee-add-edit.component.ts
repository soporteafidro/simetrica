import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  CommitteeTypeEnum,
  CreateCommitteeInput,
  EntityState,
  GetCommitteeQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommitteeService } from '../committee.service';
import { Logger } from 'aws-amplify';
import { LocationService } from 'src/app/services/location.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
const logger = new Logger('committee-add-edit');
@Component({
  selector: 'app-committee-add-edit',
  templateUrl: './committee-add-edit.component.html',
  styleUrls: ['./committee-add-edit.component.scss'],
})
export class CommitteeAddEditComponent implements OnInit {
  committee: CreateCommitteeInput = {
    nombre: null,
    estado: EntityState.ACTIVE,
    user: null,
    tipoComite: null, // CommitteeTypeEnum
    periodicidadReunionesCEI: null,
    municipio: null,
    informacionContacto: null,
    resolucionInvima: null,
    costoEvaluacion: null,
  };
  editMode = false;
  expectedVersion = null;
  id = null;
  committees = [];
  locationOpction = [];
  periodicidadReuniones = [
    { value: 'Semanal', label: 'Semanal' },
    { value: 'Quincenal', label: 'Quincenal' },
    { value: 'Mensual', label: 'Mensual' },
    { value: 'Otra', label: 'Otra' },
  ];
  typeCommittee = [];
  isModal = false;
  isPeriodicidadReunionesOtra = false;
  currName = '';
  tipoPeriodicidadReuniones = null;

  @ViewChild('f', { static: true }) centerForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private sisec: SisecService,
    private committeeService: CommitteeService,
    private locations: LocationService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.isModal = this.config?.data?.isModal;
    const id = this.route.snapshot.params.id;
    this.committeeService
      .listCommittees()
      .then((response) => {
        logger.debug('listCommittees response', response);
        this.committees = response.items;
      })
      .catch((error) => logger.error('listCommittees error', error));

    this.typeCommittee = [
      { label: 'Externo', value: CommitteeTypeEnum.EXTERNO },
      { label: 'Institucional', value: CommitteeTypeEnum.INSTITUCIONAL },
    ];
    this.locationOpction = this.locations.getMunicipiosSI();
    if (id) {
      this.sisec.showSpinner('Consultando comités para su edición');
      this.editMode = true;
      this.committeeService
        .getCommittee(id)
        .then((response: GetCommitteeQuery) => {
          logger.debug('getCommittee response', response);
          this.expectedVersion = response.version;
          this.id = response.id;
          this.sisec.cleanQueryResponse(response);
          delete response.studyCenters;
          this.committee = Object.assign(this.committee, response);
          this.currName = this.committee.nombre;
          let periodicidad;
          for (const p of this.periodicidadReuniones) {
            if (this.committee.periodicidadReunionesCEI !== p.value) {
              periodicidad = true;
            } else {
              periodicidad = false;
              break;
            }
          }
          if (periodicidad) {
            this.tipoPeriodicidadReuniones = 'Otra';
            this.isPeriodicidadReunionesOtra = true;
          } else {
            this.tipoPeriodicidadReuniones =
              this.committee.periodicidadReunionesCEI;
          }
        })
        .catch((error) => logger.error('getCommittee error', error))
        .finally(() => this.sisec.hideSpinner());
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.committee.nombre = this.sisec.toUpperCaseFirstLetter(
        this.committee.nombre
      );
      this.committee.nombre = this.committee.nombre.trim();
      if (this.tipoPeriodicidadReuniones !== 'Otra') {
        this.committee.periodicidadReunionesCEI =
          this.tipoPeriodicidadReuniones;
      } else {
        if (this.committee.periodicidadReunionesCEI.trim() === '') {
          return this.messageService.add({
            severity: 'error',
            summary: 'Periodicidad no especificada',
            detail: `Debe especificar una periodicidad de las reuniones.`,
          });
        }
      }
      if (!this.isDuplicate()) {
        if (this.editMode) {
          this.sisec.showSpinner(
            'Editando el comité ' + this.committee.nombre + '...'
          );
          this.committeeService
            .updateCommittee(this.committee, this.id, this.expectedVersion)
            .then((response) => {
              logger.debug('updateComité response', response);
              this.router.navigate(['committees']);
              return this.messageService.add({
                severity: 'success',
                summary: 'Comité actualizado exitosamente',
                detail: `El comité fue actualizado exitosamente.`,
              });
            })
            .catch((error) => {
              logger.error('updateComité error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        } else {
          this.sisec.showSpinner('Creando nuevo comité...');
          logger.debug('createComité input', this.committee);
          this.committeeService
            .createCommittee(this.committee)
            .then((response) => {
              logger.debug('createComité response', response);
              this.committee.id = response.id;
              if (this.isModal === true) {
                this.ref.close(this.committee);
              } else {
                this.router.navigate(['committees']);
              }
              return this.messageService.add({
                severity: 'success',
                summary: 'Comité creado exitosamente',
                detail: `El comité fue creado exitosamente.`,
              });
            })
            .catch((error) => {
              logger.error('createComité error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar comité',
          detail: `Ya existe un comité con el nombre ingresado`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('Comité');
    }
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const comite = this.committees.filter(
        (x) => x.nombre === this.committee.nombre && x.nombre !== this.currName
      );
      if (comite.length > 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return (
        this.committees.findIndex(
          (x) => x.nombre === this.committee.nombre.trim()
        ) !== -1
      );
    }
  }

  onCancelar(): void {
    this.centerForm.reset();
    this.router.navigate(['/committees']);
  }

  periodicidadSeleccionada(): void {
    if (this.tipoPeriodicidadReuniones === 'Otra') {
      this.isPeriodicidadReunionesOtra = true;
      this.committee.periodicidadReunionesCEI = null;
    } else {
      this.isPeriodicidadReunionesOtra = false;
      this.committee.periodicidadReunionesCEI = null;
    }
  }
}
