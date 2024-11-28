import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddendumsService } from 'src/app/addendums/addendums.service';
import {
  AddendaByStudyQuery,
  EntityState,
  GetStudyQuery,
} from 'src/app/services/API.service';
import { CalculateDatesService } from 'src/app/services/calculate-dates.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies/studies.service';
const logger = new Logger('commitee-iteracion-add-edit');

@Component({
  selector: 'app-commitee-iteration-add-edit',
  templateUrl: './committee-iteration-add-edit.component.html',
  styleUrls: ['./committee-iteration-add-edit.component.scss'],
})
export class CommitteeIterationAddEditComponent implements OnInit {
  constructor(
    private sisec: SisecService,
    private studiesService: StudiesService,
    private calculateDatesService: CalculateDatesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private dateIITPipe: DateIITPipe,
    private addendumsService: AddendumsService
  ) {}

  studyCommitteeIterations = [];
  tiempoResolucionCE = null;
  tiempoPatrocinador = null;
  showOtroTipoAclaracion = false;
  isSometimientoInicial = false;
  iteracion = {
    id: null,
    studyID: null,
    studyCenterCommitteeID: null,
    tipoIteracion: null,
    tipoAclaracion: null,
    otroTipoAclaracion: null,
    fechaDeSometimientoCE: null,
    fechaRespuestaCE: null,
    estadoIteracion: null,
    informacionCarta: null,
    tiempoComite: null,
    tiempoPatrocinador: null,
    causalRetrasoPatrocinador: null,
    otroCausalRetrasoPatrocinador: null,
    notasDeSeguimiento: null,
    user: null,
    estado: EntityState.ACTIVE,
    addendumID: null,
  };
  editMode = false;
  version = null;
  fechaDeSometimientoCE: Date = null;
  fechaRespuestaCE: Date = null;
  minFechaDeSometimientoCE: Date = null;
  todayDate: Date = new Date();
  es = null;
  parentId = null;
  studyId = null;
  enmienda = null;
  study: GetStudyQuery;
  isEnmienda = false;

  tiposDeAclaracion = [
    { label: 'Consentimiento', value: 'Consentimiento' },
    { label: 'Póliza', value: 'Póliza' },
    {
      label: 'Estabilidad del medicamento',
      value: 'Estabilidad del medicamento',
    },
    { label: 'Diseño del estudio', value: 'Diseño del estudio' },
    {
      label: 'Documentación del investigador',
      value: 'Documentación del investigador',
    },
    { label: 'Otros', value: 'Otros' },
  ];

  estados = [
    { label: 'Aprobado', value: 'Aprobado' },
    { label: 'Rechazado', value: 'Rechazado' },
    { label: 'Con requerimiento', value: 'Con requerimiento' },
  ];

  causalesDeRetraso = [
    {
      label: 'Patrocinador',
      value: 'Patrocinador',
      items: [
        {
          label: 'Retraso en liberación de documentos por parte de Global ',
          value: 'Retraso en liberación de documentos por parte de Global ',
        },
        {
          label: 'Retraso en obtener respuesta de global ante un requerimiento',
          value: 'Retraso en obtener respuesta de global ante un requerimiento',
        },
        {
          label: 'Retraso en traducción de documentos al español ',
          value: 'Retraso en traducción de documentos al español ',
        },
        {
          label: 'Documentos incompletos o con errores ',
          value: 'Documentos incompletos o con errores ',
        },
        {
          label:
            'Demoras en la personalización de documentos y envío a los centros',
          value:
            'Demoras en la personalización de documentos y envío a los centros',
        },
        {
          label: 'Negociación de presupuestos con centros',
          value: 'Negociación de presupuestos con centros',
        },
        {
          label: 'Retrasos en la selección de centros',
          value: 'Retrasos en la selección de centros',
        },
        {
          label: 'Movimientos de personal al interior del equipo',
          value: 'Movimientos de personal al interior del equipo',
        },
        { label: 'Otro', value: 'Otro' },
      ],
    },
    {
      label: 'Centros de investigación ',
      value: 'Centros de investigación ',
      items: [
        {
          label: 'Demora en el sometimiento de documentos a CEI ',
          value: 'Demora en el sometimiento de documentos a CEI ',
        },
        {
          label:
            'Investigadores ocupados que no pueden atender presentación al CEI ',
          value:
            'Investigadores ocupados que no pueden atender presentación al CEI ',
        },
        {
          label: 'Demora en firmas de contrato ',
          value: 'Demora en firmas de contrato ',
        },
        {
          label: 'Demora en revisión de presupuesto ',
          value: 'Demora en revisión de presupuesto ',
        },
        {
          label: 'Múltiples trámites administrativos antes de someter a CEI',
          value: 'Múltiples trámites administrativos antes de someter a CEI',
        },
        {
          label:
            'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio',
          value:
            'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio',
        },
        {
          label:
            'Demoras en las negociaciones de presupuestos y Firma de contratos',
          value:
            'Demoras en las negociaciones de presupuestos y Firma de contratos',
        },
        {
          label:
            'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos',
          value:
            'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos',
        },
        {
          label:
            'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces',
          value:
            'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces',
        },
        {
          label:
            'Demoras en el envío de cartas de respuesta del comité de ética',
          value:
            'Demoras en el envío de cartas de respuesta del comité de ética',
        },
        { label: 'Otro', value: 'Otro' },
      ],
    },
    {
      label: 'CEI – Comité de Ética en Investigación ',
      value: 'CEI – Comité de Ética en Investigación ',
      items: [
        {
          label: 'Reuniones solo mensuales que retrasan revisiones ',
          value: 'Reuniones solo mensuales que retrasan revisiones ',
        },
        {
          label: 'Múltiples requerimientos',
          value: 'Múltiples requerimientos',
        },
        {
          label: 'Demora en emitir respuesta ',
          value: 'Demora en emitir respuesta ',
        },
        {
          label: 'Documentos incompletos o con errores ',
          value: 'Documentos incompletos o con errores ',
        },
        {
          label: 'No aceptación de documentos vía electrónica',
          value: 'No aceptación de documentos vía electrónica',
        },
        {
          label: 'Solicitud de pagos previos al sometimiento',
          value: 'Solicitud de pagos previos al sometimiento',
        },
        {
          label: 'Realización de una sola reunión mensual',
          value: 'Realización de una sola reunión mensual',
        },
        {
          label: 'Demora en la emisión de cartas de respuesta a trámites',
          value: 'Demora en la emisión de cartas de respuesta a trámites',
        },
        { label: 'Otro', value: 'Otro' },
      ],
    },
    {
      label: 'Invima',
      value: 'Invima',
      items: [
        {
          label: 'Documentos incompletos o con errores ',
          value: 'Documentos incompletos o con errores ',
        },
        { label: 'Sobrecarga de trabajo ', value: 'Sobrecarga de trabajo ' },
        {
          label:
            'Documento enviado a otra área o no ubicado por parte del INVIMA ',
          value:
            'Documento enviado a otra área o no ubicado por parte del INVIMA ',
        },
        {
          label: 'Trámite no considerado relevante ',
          value: 'Trámite no considerado relevante ',
        },
        {
          label:
            'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo',
          value:
            'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo',
        },
        {
          label: 'Daños temporales en la plataforma',
          value: 'Daños temporales en la plataforma',
        },
        {
          label:
            'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos',
          value:
            'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos',
        },
        {
          label: 'Demoras en las respuestas a tramites',
          value: 'Demoras en las respuestas a tramites',
        },
        { label: 'Otro', value: 'Otro' },
      ],
    },
  ];

  ngOnInit(): void {
    this.es = es;
    this.parentId = this.config.data?.parentId;
    this.studyId = this.config.data?.studyId;
    this.isEnmienda = this.config.data?.isEnmienda;
    this.iteracion.studyCenterCommitteeID =
      this.config.data?.studyCenterCommitteeID;
    this.studyCommitteeIterations = this.config.data?.committeeIterations
      ? this.config.data?.committeeIterations.sort((it1: any, it2: any) => {
          return (
            new Date(it1.createdAt).getTime() -
            new Date(it2.createdAt).getTime()
          );
        })
      : null;
    this.loadStudy();
    if (this.config.data?.selectedIterationId) {
      this.loadEditCommitteIterationData();
    } else {
      this.setMinDateSelection();
    }
    this.inicializarOpcionesDeTipoDeIteracion();

    if (this.isEnmienda) {
      this.addendumsService
        .getAddendum(this.parentId)
        .then((response) => {
          logger.debug('getAddendum response', response);
          this.enmienda = response;
          if (this.enmienda.fechaCasaMatriz) {
            this.enmienda.fechaCasaMatriz = new Date(
              this.enmienda.fechaCasaMatriz
            );
          }
          if (this.enmienda.fechaRecepcionPaquete) {
            this.enmienda.fechaRecepcionPaquete = new Date(
              this.enmienda.fechaRecepcionPaquete
            );
          }
          if (this.enmienda.fechaVersionEspanol) {
            this.enmienda.fechaVersionEspanol = new Date(
              this.enmienda.fechaVersionEspanol
            );
          }
          if (this.enmienda.fechaImplementacionPais) {
            this.enmienda.fechaImplementacionPais = new Date(
              this.enmienda.fechaImplementacionPais
            );
          }
        })
        .catch((error) => {
          logger.error('getAddendum error', error);
        });
    }
  }

  loadStudy(): void {
    this.studiesService
      .getStudy(this.studyId)
      .then((response: GetStudyQuery) => {
        logger.debug('getStudy response', response);
        this.study = response;
      })
      .catch((error) => logger.error('getStudy error', error));
  }

  loadEditCommitteIterationData(): void {
    this.sisec.showSpinner('Cargando datos...');
    this.studiesService
      .getStudyCommitteeIteration(this.config.data?.selectedIterationId)
      .then((editStudyCommitteeIteration) => {
        this.iteracion = {
          id: editStudyCommitteeIteration.id,
          studyID: editStudyCommitteeIteration.studyID,
          studyCenterCommitteeID:
            editStudyCommitteeIteration.studyCenterCommitteeID,
          tipoIteracion: editStudyCommitteeIteration.tipoIteracion,
          tipoAclaracion: editStudyCommitteeIteration.tipoAclaracion,
          otroTipoAclaracion: editStudyCommitteeIteration.otroTipoAclaracion,
          fechaDeSometimientoCE:
            editStudyCommitteeIteration.fechaDeSometimientoCE,
          fechaRespuestaCE: editStudyCommitteeIteration.fechaRespuestaCE,
          estadoIteracion: editStudyCommitteeIteration.estadoIteracion,
          informacionCarta: editStudyCommitteeIteration.informacionCarta,
          tiempoComite: editStudyCommitteeIteration.tiempoComite,
          tiempoPatrocinador: editStudyCommitteeIteration.tiempoPatrocinador,
          causalRetrasoPatrocinador:
            editStudyCommitteeIteration.causalRetrasoPatrocinador,
          otroCausalRetrasoPatrocinador:
            editStudyCommitteeIteration.otroCausalRetrasoPatrocinador,
          notasDeSeguimiento: editStudyCommitteeIteration.notasDeSeguimiento,
          user: editStudyCommitteeIteration.user,
          estado: editStudyCommitteeIteration.estado,
          addendumID: editStudyCommitteeIteration.addendumID,
        };
        this.version = editStudyCommitteeIteration.version;
        this.getDatesFromModel();
        this.onDateChanged();
      })
      .finally(() => {
        this.sisec.hideSpinner();
      });
    this.studyCommitteeIterations = this.config.data?.committeeIterations;
    this.editMode = true;
    this.setMinDateSelection();
  }

  inicializarOpcionesDeTipoDeIteracion(): void {
    // si es la primera interaccion, entonces forzamos a que sea Sometimiento inicial
    if (this.studyCommitteeIterations.length === 0) {
      this.iteracion.tipoIteracion = 'Sometimiento inicial';
      this.isSometimientoInicial = true;
    } else if (this.studyCommitteeIterations.length === 1) {
      if (this.editMode) {
        this.isSometimientoInicial = true;
      } else {
        this.iteracion.tipoIteracion = 'Respuesta aclaración';
        this.isSometimientoInicial = false;
      }
    } else {
      this.isSometimientoInicial = false;
      this.iteracion.tipoIteracion = 'Respuesta aclaración';
    }
  }

  setMinDateSelection(): void {
    if (this.studyCommitteeIterations.length > 0) {
      let mDate = null;
      if (this.studyCommitteeIterations.length === 1) {
        if (!this.editMode) {
          mDate =
            this.studyCommitteeIterations[
              this.studyCommitteeIterations.length - 1
            ].fechaRespuestaCE;
        }
      } else if (this.editMode) {
        mDate =
          this.studyCommitteeIterations[
            this.studyCommitteeIterations.length - 2
          ].fechaRespuestaCE;
      } else {
        mDate =
          this.studyCommitteeIterations[
            this.studyCommitteeIterations.length - 1
          ].fechaRespuestaCE;
      }
      this.minFechaDeSometimientoCE = new Date(mDate);
    }
  }

  setDatesBackToModel(): void {
    this.iteracion.fechaDeSometimientoCE =
      this.fechaDeSometimientoCE?.toString();
    this.iteracion.fechaRespuestaCE = this.fechaRespuestaCE?.toString();
  }

  getDatesFromModel(): void {
    if (this.iteracion.fechaDeSometimientoCE) {
      this.fechaDeSometimientoCE = new Date(
        this.iteracion.fechaDeSometimientoCE
      );
    }
    if (this.iteracion.fechaRespuestaCE) {
      this.fechaRespuestaCE = new Date(this.iteracion.fechaRespuestaCE);
    }
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  onCausalRetrasoSelected(): void {
    this.iteracion.otroCausalRetrasoPatrocinador = null;
  }

  onSubmit(form: NgForm): void {
    this.calculateTiempoPatrocinador();
    this.calculateTiempoRespuestaCE();
    this.setDatesBackToModel();
    this.validateAllDates(form);
    if (form.valid) {
      if (!this.isDuplicate()) {
        this.sisec.showSpinner('Guardando...');
        if (this.editMode) {
          this.updateCommitteeIteration();
        } else {
          this.createCommitteeIteration();
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar la Interacción',
          detail: `Ya existe una Interacción con la misma información.`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('Interacción');
    }
  }

  updateCommitteeIteration(): void {
    const updateStudyCommitteeIteration =
      this.studiesService.generateStudyComitteeIterationUpdateInput(
        this.iteracion,
        this.version
      );
    this.studiesService
      .updateStudyCommitteeIteration(updateStudyCommitteeIteration)
      .then((response) => {
        if (!this.isEnmienda) {
          this.calculateDatesService
            .setDatesToStudyCenterCommitteeIterations(
              this.iteracion.studyID,
              this.iteracion.studyCenterCommitteeID
            )
            .then((result) => {
              logger.debug(
                'setDatesToStudyCenterCommitteeIterations',
                response
              );
              this.ref.close('actualizada');
            })
            .catch((error) => {
              logger.error(
                'setDatesToStudyCenterCommitteeIterations error',
                error
              );
            })
            .finally(() => {
              this.sisec.hideSpinner();
              this.editMode = false;
            });
        } else {
          // TODO setDatesToAddendumStudyCenterCommitteeIterations
          logger.debug(
            'setDatesToAddendumStudyCenterCommitteeIterations',
            response
          );
          this.ref.close('actualizada');
        }
      })
      .catch((error) => {
        logger.error('updateStudyCommitteeIteration error', error);
      });
  }

  createCommitteeIteration(): void {
    if (this.isEnmienda) {
      this.iteracion.addendumID = this.parentId;
      this.iteracion.studyID = undefined;
    } else {
      this.iteracion.studyID = this.parentId;
      this.iteracion.addendumID = undefined;
    }
    this.studiesService
      .createStudyCommitteeIteration(this.iteracion)
      .then((response) => {
        if (!this.isEnmienda) {
          this.calculateDatesService
            .setDatesToStudyCenterCommitteeIterations(
              this.iteracion.studyID,
              this.iteracion.studyCenterCommitteeID
            )
            .then((result) => {
              logger.debug(
                'setDatesToStudyCenterCommitteeIterations',
                response
              );
              this.ref.close('creada');
            })
            .catch((error) => {
              logger.error(
                'setDatesToStudyCenterCommitteeIterations error',
                error
              );
            })
            .finally(() => this.sisec.hideSpinner());
        } else {
          // TODO setDatesToAddendumStudyCenterCommitteeIterations
          logger.debug(
            'setDatesToAddendumStudyCenterCommitteeIterations',
            response
          );
          this.ref.close('creada');
        }
      })
      .catch((error) => {
        logger.error('createStudyCommitteeIteration error', error);
      });
  }

  onDateChanged(): void {
    this.calculateTiempoPatrocinador();
    this.calculateTiempoRespuestaCE();
  }

  calculateTiempoPatrocinador(): void {
    let diasTotales = 0;
    if (
      this.studyCommitteeIterations.length >= 1 &&
      this.fechaDeSometimientoCE &&
      !this.isSometimientoInicial
    ) {
      let iteracionAnterior =
        this.studyCommitteeIterations[this.studyCommitteeIterations.length - 1];
      if (this.editMode) {
        iteracionAnterior =
          this.studyCommitteeIterations[
            this.studyCommitteeIterations.length - 2
          ];
      }
      diasTotales = this.calculateDifferenceOfDays(
        this.fechaDeSometimientoCE,
        new Date(iteracionAnterior.fechaRespuestaCE)
      );
      this.tiempoPatrocinador = diasTotales;
    } else {
      this.tiempoPatrocinador = null;
    }

    this.iteracion.tiempoPatrocinador = diasTotales;
  }

  calculateTiempoRespuestaCE(): void {
    const days = this.calculateDifferenceOfDays(
      this.fechaRespuestaCE,
      this.fechaDeSometimientoCE
    );

    if (days !== null) {
      this.tiempoResolucionCE = days;
    } else {
      this.tiempoResolucionCE = null;
    }
    this.iteracion.tiempoComite = days;
  }

  onTipoAclaracionSelected(): void {
    this.iteracion.otroTipoAclaracion = null;
    if (this.iteracion.tipoAclaracion.filter((s) => s === 'Otros').length > 0) {
      this.showOtroTipoAclaracion = true;
    } else {
      this.showOtroTipoAclaracion = false;
    }
  }

  calculateDifferenceOfDays(date1asString: Date, date2asString: Date): number {
    if (date1asString && date2asString) {
      const differenceInTime =
        date1asString.getTime() - date2asString.getTime();
      const differenceDays = differenceInTime / (1000 * 3600 * 24);
      return Math.round(differenceDays);
    }
    return null;
  }

  validateAllDates(studyForm: NgForm): void {
    if (this.isEnmienda) {
      const fechas = [
        {
          key: 'fecha aprobación protocolo casa matriz',
          value: this.enmienda.fechaCasaMatriz,
        },
        {
          key: 'Fecha envió paquete',
          value: this.enmienda.fechaRecepcionPaquete,
        },
        {
          key:
            'fecha de versión en español (' +
            this.dateIITPipe.transform(this.enmienda.fechaVersionEspanol) +
            ')',
          value: this.enmienda.fechaVersionEspanol,
        },
        { key: 'fecha de sometimiento CE', value: this.fechaDeSometimientoCE },
      ];
      CommonFunctionsService.validateDates(
        studyForm,
        'fechaDeSometimientoCE',
        0,
        3,
        fechas
      );
      CommonFunctionsService.validateDates(
        studyForm,
        'fechaRespuestaCE',
        0,
        4,
        fechas
      );
    } else {
      const fechas = [
        {
          key: 'fecha aprobación protocolo casa matriz',
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
          key:
            'fecha de versión en español (' +
            this.dateIITPipe.transform(this.study.fechaVersionEspaniol) +
            ')',
          value: this.study.fechaVersionEspaniol,
        },
        { key: 'fecha de sometimiento CE', value: this.fechaDeSometimientoCE },
      ];
      CommonFunctionsService.validateDates(
        studyForm,
        'fechaDeSometimientoCE',
        0,
        5,
        fechas
      );
      CommonFunctionsService.validateDates(
        studyForm,
        'fechaRespuestaCE',
        0,
        6,
        fechas
      );
    }
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const iteration = this.studyCommitteeIterations.filter(
        (x) =>
          x.tipoIteracion === this.iteracion.tipoIteracion &&
          x.fechaDeSometimientoCE === this.iteracion.fechaDeSometimientoCE
      );
      if (iteration.length > 1) {
        return true;
      } else if (iteration.length === 1) {
        return iteration[0].id !== this.iteracion.id;
      } else {
        return false;
      }
    } else {
      return (
        this.studyCommitteeIterations.findIndex(
          (x) =>
            x.tipoIteracion === this.iteracion.tipoIteracion &&
            x.fechaDeSometimientoCE === this.iteracion.fechaDeSometimientoCE
        ) !== -1
      );
    }
  }
}
