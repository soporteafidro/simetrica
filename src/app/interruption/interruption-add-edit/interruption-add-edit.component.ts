import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateInterruptionInput, EntityState, GetStudyQuery, InterrupcionReclutamientoTypeEnum, motivoInterrupcionTypeEnum, StudyState, UpdateStudyInput } from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { InterruptionService } from '../interruption.service';
import { Logger } from 'aws-amplify';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { StudiesService } from 'src/app/studies/studies.service';
import { MessageService } from 'primeng/api';
import { es } from 'src/locale/es';
const logger = new Logger('interrupcion-add-edit');

@Component({
  selector: 'app-interruption-add-edit',
  templateUrl: './interruption-add-edit.component.html',
  styleUrls: ['./interruption-add-edit.component.scss']
})
export class InterruptionAddEditComponent implements OnInit {

  interruption: CreateInterruptionInput = {
    studyID: null,
    estado: EntityState.ACTIVE,
    interrupcionReclutamiento: null,
    motivoInterrupcion: null,
    otroMotivoInterrupcion: null,
    fechaInicialInterrupcion: null,
    fechaFinalizacionTnterrupcion: null,
    user: null,
  };
  interruptionOriginal: CreateInterruptionInput = {
    studyID: null,
    estado: EntityState.ACTIVE,
    interrupcionReclutamiento: null,
    motivoInterrupcion: null,
    otroMotivoInterrupcion: null,
    fechaInicialInterrupcion: null,
    fechaFinalizacionTnterrupcion: null,
    user: null,
  };
  typeInterrupcionReclutamiento = [];
  typemotivoInterrupcion = [];
  inputMotiveInterruptionVisibility = false;
  editMode = false;
  id = null;
  expectedVersion = null;
  fechaInicio: Date = null;
  fechaFin: Date = null;
  minFechaFinalizacionInterrupcion: Date = null;
  currentDate: Date;
  es = null;
  study = null;

  @ViewChild('f', { static: true }) interruptionForm: NgForm;

  constructor(
    private sisec: SisecService,
    private interruptionService: InterruptionService,
    public studiesService: StudiesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.es = es;
    this.currentDate = new Date();
    this.interruption.studyID = this.config.data[0];
    if (this.config.data[1]) {
      this.id = this.config.data[1].id;
      this.expectedVersion = this.config.data[1].version;
      delete this.config.data[1].__typename;
      delete this.config.data[1].study;
      delete this.config.data[1].createdAt;
      delete this.config.data[1].updatedAt;
      delete this.config.data[1].version;
      this.interruption = {...this.config.data[1]};
      this.interruptionOriginal = {...this.config.data[1]};
      this.fechaInicio = new Date(this.interruption.fechaInicialInterrupcion);
      if (this.interruption.fechaFinalizacionTnterrupcion) {
        this.fechaFin = new Date(this.interruption.fechaFinalizacionTnterrupcion);
      }
      this.editMode = true;
    }
    this.interruption.motivoInterrupcion === motivoInterrupcionTypeEnum.OTRA ?
      this.inputMotiveInterruptionVisibility = true : this.inputMotiveInterruptionVisibility = false;
    this.typeInterrupcionReclutamiento = [
      {label: 'Centro', value: InterrupcionReclutamientoTypeEnum.CENTRO},
      {label: 'Pais', value: InterrupcionReclutamientoTypeEnum.PAIS}
    ];
    this.typemotivoInterrupcion = [
      {label: 'Aprobación enmienda', value: motivoInterrupcionTypeEnum.APROBACION_ENMIENDA},
      {label: 'Calidad', value: motivoInterrupcionTypeEnum.CALIDAD},
      {label: 'Medida Sanitaria', value: motivoInterrupcionTypeEnum.MEDIDA_SANITARIA},
      {label: 'Temas logisticos', value: motivoInterrupcionTypeEnum.TEMAS_LOGISTICOS},
      {label: 'Otra', value: motivoInterrupcionTypeEnum.OTRA},
    ];

    this.studiesService.getStudy(this.interruption.studyID).then((response: GetStudyQuery )=> {
      logger.debug('getStudy response', response);
      this.study = response;
    })
    .catch(error => {
      logger.error('getStudy error', error);
    });
  }

  interrupcionSelect(): void {
    this.interruption.otroMotivoInterrupcion = null;
    if (this.interruption.motivoInterrupcion === motivoInterrupcionTypeEnum.OTRA) {
      this.inputMotiveInterruptionVisibility = true;
    } else {
      this.inputMotiveInterruptionVisibility = false;
    }
  }

  setminFechaFinalizacionInterrupcion(): void {
    this.minFechaFinalizacionInterrupcion = new Date(this.fechaInicio);
  }

  onSubmit(form: NgForm): void {
    this.validateAllDates(form);

    if (form.valid) {
      this.interruption.fechaInicialInterrupcion = this.fechaInicio.toString();
      if (this.fechaFin) {
        this.interruption.fechaFinalizacionTnterrupcion = this.fechaFin?.toString() ? this.fechaFin?.toString() : "";
      }
      if (this.editMode) {
        this.sisec.showSpinner('Editando la Interrupción');
        this.interruptionService.updateInterruption(this.interruption, this.id, this.expectedVersion)
          .then(response => {
            logger.debug('updateInterruption response', response);
            this.interruption = Object.assign(this.interruption, response);
            this.messageService.add({
              severity: 'success',
              summary: 'Actualización exitosa',
              detail: `Se actualización exitosamente la interrupción`,
            });
            this.close(this.interruption, 'actualizar');
          })
          .catch(error => {
            logger.error('updateInterruption error', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Actualización fallida',
              detail: `La actualización de la interrupción falló`,
            });
            this.sisec.hideSpinner();
          })
          .finally(() => this.sisec.hideSpinner());
      } else {
        this.sisec.showSpinner('Creando nueva Interrupción...');
        logger.debug('createInterruption input', this.interruption);
        this.interruptionService.createInterruption(this.interruption)
          .then(response => {
            logger.debug('createInterruption response', response);
            const study: UpdateStudyInput = {
              id: this.study.id,
              estado: StudyState.SUSPENDIDO,
              expectedVersion: this.study.version
            };
            this.studiesService.updateStudy(study).then(response2 => {
              logger.debug('updateStudy response', response2);
              this.close(response, 'crear');
            })
            .catch(error => {
              logger.error('updateStudy error', error);
            });
          })
          .catch(error => {
            logger.error('createInterruption error', error);
            this.sisec.hideSpinner();
          })
          .finally(() => this.sisec.hideSpinner());
      }
    } else {
      this.sisec.showInvalidFormError('Interrupción');
    }
  }

  close(interrupcion?, accion?): void {
    this.ref.close([interrupcion, accion]);
  }

  validateAllDates(studyForm: NgForm): void {

    let fechas = [ {"key": "fecha de aprobación INVIMA","value": this.study.fechaAprobacionEstudioInvima},
                  {"key": "fecha inicial Interrupción","value": this.fechaInicio}]

    CommonFunctionsService.validateDates(studyForm,"fechaInicialInterrupcion",0,1,fechas);
    CommonFunctionsService.validateDates(studyForm,"fechaFinalizacionInterrupcion",0,2,fechas);
  }

}
