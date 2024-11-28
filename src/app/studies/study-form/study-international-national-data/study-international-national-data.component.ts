import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateStudyInput, GetStudyQuery } from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies.service';

const logger = new Logger('study-stepper');

@Component({
  selector: 'app-study-international-national-data',
  templateUrl: './study-international-national-data.component.html',
  styleUrls: ['./study-international-national-data.component.scss'],
})
export class StudyInternationalNationalDataComponent
  implements OnInit, AfterViewInit
{
  @Input() study: CreateStudyInput;
  @Output() onBtnAction = new EventEmitter<string>();

  studyId: string;
  editMode = false;
  currentDate: Date;
  porcentage = 22;
  expectedVersion: number;

  fechaLiberacionProtocolo: Date = null;
  fechaPrimerPacienteGlobal: Date = null;
  fechaCierreReclutamientoGlobal: Date = null;
  fechaRecepcionPaqueteInicialColombia: Date = null;
  fechaPrimerPacienteReclutadoColombia: Date = null;
  fechaCierreReclutamientoColombia: Date = null;
  es = null;

  constructor(
    private studyService: StudiesService,
    private sisec: SisecService,
    private router: Router,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.es = es;
    this.editMode = this.config?.data?.editMode;
    this.studyId = this.config?.data?.studyId;
    this.currentDate = new Date();
    if (this.editMode && this.studyId) {
      this.loadEditStudy();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculateDateRanges();
    }, 1000);
  }

  onSubmit(form: NgForm): void {
    this.validateSubjects(form);
    this.validateAllDates(form);

    if (form.valid) {
      this.sisec.showSpinner('Guardando...');
      this.setDatesBackToModel();
      logger.debug('study internationaldata input', this.study);

      if (this.editMode) {
        this.updateStudy();
      } else {
        this.createStudy();
      }
    } else {
      this.sisec.showInvalidFormError('datos internacionales y nacionales');
    }
  }

  prevStep(): void {
    this.onBtnAction.emit('prev');
  }

  calculateDifferenceOfDays(
    internationalFieldDate: string,
    nationalFieldDate: string,
    id: string
  ): void {
    if (this[internationalFieldDate] && this[nationalFieldDate]) {
      const internationalDate = new Date(this[internationalFieldDate]);
      const nationalDate = new Date(this[nationalFieldDate]);
      const differenceInTime =
        internationalDate.getTime() - nationalDate.getTime();
      const differenceDays = differenceInTime / (1000 * 3600 * 24);
      const elem = document.querySelector(`#${id}`);
      elem.innerHTML =
        '<strong class="data" style="font-size: 25px; color: #2D327E;">' +
        differenceDays +
        ' - D' +
        '</strong>';
    }
  }

  calculatePercentage(
    internationalFieldNumber: string,
    nationalFieldNumber: string,
    id: string
  ): void {
    const elem = document.querySelector(`#${id}`);
    if (
      this.study[internationalFieldNumber] &&
      this.study[nationalFieldNumber] &&
      this.study[internationalFieldNumber] != 0 &&
      this.study[nationalFieldNumber] != 0
    ) {
      const percentageRaw =
        (this.study[nationalFieldNumber] /
          this.study[internationalFieldNumber]) *
        100;
      const percentage = new Intl.NumberFormat('en', {
        maximumFractionDigits: 1,
        useGrouping: false,
      }).format(percentageRaw);
      elem.innerHTML =
        '<strong class="data" style="font-size: 25px; color: #2D327E;">' +
        percentage +
        ' %' +
        '</strong>';
    } else {
      elem.innerHTML = '';
    }
  }

  setDatesBackToModel(): void {
    this.study.fechaLiberacionProtocolo =
      this.fechaLiberacionProtocolo?.toString()
        ? this.fechaLiberacionProtocolo?.toString()
        : '';
    this.study.fechaPrimerPacienteGlobal =
      this.fechaPrimerPacienteGlobal?.toString()
        ? this.fechaPrimerPacienteGlobal?.toString()
        : '';
    this.study.fechaCierreReclutamientoGlobal =
      this.fechaCierreReclutamientoGlobal?.toString()
        ? this.fechaCierreReclutamientoGlobal?.toString()
        : '';
    this.study.fechaRecepcionPaqueteInicialColombia =
      this.fechaRecepcionPaqueteInicialColombia?.toString()
        ? this.fechaRecepcionPaqueteInicialColombia?.toString()
        : '';
    this.study.fechaPrimerPacienteReclutadoColombia =
      this.fechaPrimerPacienteReclutadoColombia?.toString()
        ? this.fechaPrimerPacienteReclutadoColombia?.toString()
        : '';
    this.study.fechaCierreReclutamientoColombia =
      this.fechaCierreReclutamientoColombia?.toString()
        ? this.fechaCierreReclutamientoColombia?.toString()
        : '';
  }

  createStudy(): void {
    this.studyService
      .createStudy(this.study)
      .then((response) => {
        logger.debug('createStudy response', response);
        this.router.navigate(['studies']);
        return this.messageService.add({
          severity: 'success',
          summary: 'Estudio creado exitosamente',
          detail: 'El estudio fue creado con éxito.',
        });
      })
      .catch((error) => {
        logger.error('createStudy error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  updateStudy(): void {
    const updateStudyInput = this.studyService.generateUpdateInput(
      this.study,
      this.expectedVersion
    );
    this.sisec.showSpinner('Guardando...');
    logger.debug('UpdateStudy input', updateStudyInput);
    this.studyService
      .updateStudy(updateStudyInput)
      .then((response) => {
        logger.debug('updateStudy response', response);
        this.ref.close('actualizado');
        return this.messageService.add({
          severity: 'success',
          summary:
            'Datos internacionales y nacionales actualizados exitosamente',
          detail:
            'Los datos internacionales y nacionales fueron actualizados con éxito.',
        });
      })
      .catch((error) => {
        logger.error('updateStudy error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  loadEditStudy(): void {
    this.sisec.showSpinner('Consultando estudio para su edición');
    this.editMode = true;
    this.studyService
      .getStudy(this.studyId)
      .then((response: GetStudyQuery) => {
        logger.debug('getStudy response', response);
        this.expectedVersion = response.version;
        this.sisec.cleanQueryResponse(response);
        this.study = response;

        this.setDatesVariables();
        logger.debug(this.study);
      })
      .catch((error) => logger.error('getStudy error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  calculateDateRanges(): void {
    this.calculateDifferenceOfDays(
      'fechaRecepcionPaqueteInicialColombia',
      'fechaLiberacionProtocolo',
      'diferenciaDiasRecepcionPaquete'
    );
    this.calculateDifferenceOfDays(
      'fechaPrimerPacienteReclutadoColombia',
      'fechaPrimerPacienteGlobal',
      'diferenciaDiasPaciente'
    );
    this.calculateDifferenceOfDays(
      'fechaCierreReclutamientoColombia',
      'fechaCierreReclutamientoGlobal',
      'fechaCierreReclutamiento'
    );
  }
  setDatesVariables(): void {
    if (this.study.fechaLiberacionProtocolo) {
      this.fechaLiberacionProtocolo = new Date(
        this.study.fechaLiberacionProtocolo
      );
    }
    if (this.study.fechaPrimerPacienteGlobal) {
      this.fechaPrimerPacienteGlobal = new Date(
        this.study.fechaPrimerPacienteGlobal
      );
    }
    if (this.study.fechaCierreReclutamientoGlobal) {
      this.fechaCierreReclutamientoGlobal = new Date(
        this.study.fechaCierreReclutamientoGlobal
      );
    }
    if (this.study.fechaRecepcionPaqueteInicialColombia) {
      this.fechaRecepcionPaqueteInicialColombia = new Date(
        this.study.fechaRecepcionPaqueteInicialColombia
      );
    }
    if (this.study.fechaPrimerPacienteReclutadoColombia) {
      this.fechaPrimerPacienteReclutadoColombia = new Date(
        this.study.fechaPrimerPacienteReclutadoColombia
      );
    }
    if (this.study.fechaCierreReclutamientoColombia) {
      this.fechaCierreReclutamientoColombia = new Date(
        this.study.fechaCierreReclutamientoColombia
      );
    }
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  validateSubjects(studyForm: NgForm): void {
    if (
      this.study.totalSujetosNivelGlobal &&
      this.study.numeroSujetosPlaneadosColombia &&
      this.study.totalSujetosNivelGlobal <
        this.study.numeroSujetosPlaneadosColombia
    ) {
      studyForm.controls[`numeroSujetosPlaneadosColombia`].setErrors({
        ...(studyForm.controls[`numeroSujetosPlaneadosColombia`].errors || {}),
        errorSujetos: `El número de sujetos planeados en Colombia debe ser menor o igual al global`,
      });
    } else {
      if (
        studyForm.controls[`numeroSujetosPlaneadosColombia`].hasError(
          'errorFecha'
        )
      ) {
        delete studyForm.controls[`numeroSujetosPlaneadosColombia`].errors[
          'errorFecha'
        ];
        studyForm.controls[
          `numeroSujetosPlaneadosColombia`
        ].updateValueAndValidity();
      }
    }
  }

  validateAllDates(studyForm: NgForm): void {
    let fechasPrimerFila = [
      {
        key: 'fecha de liberación del protocolo',
        value: this.fechaLiberacionProtocolo,
      },
    ];
    let fechasSegundaFila = [
      {
        key: 'fecha del primer paciente global',
        value: this.fechaPrimerPacienteGlobal,
      },
    ];
    let fechasTerceraFila = [
      {
        key: 'fecha cierre de reclutamiento global',
        value: this.fechaCierreReclutamientoGlobal,
      },
    ];

    let fechasAnteriores = [
      {
        key: 'fecha de aprobación protocolo casa matriz',
        value: this.study.fechaAprobacionCasaMatriz,
      },
      {
        key: 'fecha de factibilidad en Colombia',
        value: this.study.fechaFactibilidadColombia,
      },
      {
        key: 'fecha de selección de Colombia',
        value: this.study.fechaSeleccionColombia,
      },
      {
        key: 'fecha de recepción protocolo filial Colombia',
        value: this.study.fechaRecepcionFilialColombia,
      },
      {
        key: 'fecha de versión en español',
        value: this.study.fechaVersionEspaniol,
      },
      {
        key: 'fecha de aprobación INVIMA',
        value: this.study.fechaAprobacionEstudioInvima,
      },
    ];

    CommonFunctionsService.validateDates(
      studyForm,
      'fechaRecepcionPaqueteInicialColombia',
      0,
      1,
      fechasPrimerFila
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimerPacienteReclutadoColombia',
      0,
      1,
      fechasSegundaFila
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimerPacienteReclutadoColombia',
      0,
      5,
      fechasAnteriores,
      true
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaCierreReclutamientoColombia',
      0,
      1,
      fechasTerceraFila
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaCierreReclutamientoColombia',
      0,
      5,
      fechasAnteriores,
      true
    );
  }
}
