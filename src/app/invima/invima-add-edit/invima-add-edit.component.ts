import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddendumsService } from 'src/app/addendums/addendums.service';
import { EntityState, GetInvimaIterationQuery, GetStudyQuery, IteracionesByStudyQuery } from 'src/app/services/API.service';
import { CalculateDatesService } from 'src/app/services/calculate-dates.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies/studies.service';
const logger = new Logger('invima-add-edit');

@Component({
  selector: 'app-invima-add-edit',
  templateUrl: './invima-add-edit.component.html',
  styleUrls: ['./invima-add-edit.component.scss']
})
export class InvimaAddEditComponent implements OnInit {

  constructor(
    private sisec: SisecService,
    private studiesService: StudiesService,
    private addendumsService: AddendumsService,
    private calculateDatesService: CalculateDatesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService) { }

  @Input() isEnmienda = false;
  @ViewChild('f', { static: true }) invimaForm: NgForm;

  study: GetStudyQuery;
  studyId = null;
  parentId = null;


  minFechaDeSometimiento: Date = null;
  minFechaRespuestaInvima: Date = null;
  minFechaDeNotificacion: Date = null;

  fechaDeSometimiento: Date = null;
  fechaRespuestaInvima: Date = null;
  fechaDeNotificacion: Date = null;
  todayDate: Date = new Date();
  es = null;

  tipoDeRequerimientosSeleccionados: string[] = [];
  selectedIterationId: string;
  expectedVersion: number;
  showOtroTipoRequerimiento = false;
  editMode = false;
  isSometimientoInicial = false;

  tiempoInvima = null;
  tiempoPatrocinador = null;
  tiempoNotificacion = null;
  iteracion = {
    id: null,
    studyID: null,
    addendumID: null,
    tipoIteracion: null,
    tipoRequerimiento: null,
    otroTipoRequerimiento: null,
    fechaDeSometimiento: null,
    fechaRespuestaInvima: null,
    fechaDeNotificacion: null,
    estadoIteracion: null,
    resolucion: null,
    tiempoInvima: null,
    tiempoPatrocinador: null,
    tiempoNotificacion: null,
    causalRetrasoPatrocinador: null,
    otroCausalRetrasoPatrocinador: null,
    notasDeSeguimiento: null,
    estado: EntityState.ACTIVE,
    user: null
  };

  iteraciones: any[] = [];

  tipoDeIteracion = [{ label: 'Aclaración', value: 'Aclaración' }];

  tipoDeRequerimiento = [
    { label: 'Consentimiento', value: 'Consentimiento' },
    { label: 'Póliza', value: 'Póliza' },
    { label: 'Estabilidad del medicamento', value: 'Estabilidad del medicamento' },
    { label: 'Diseño del estudio', value: 'Diseño del estudio' },
    { label: 'Documentación del investigador', value: 'Documentación del investigador' },
    { label: 'Otros', value: 'Otros' },
  ];

  estados = [
    { label: 'Aprobado', value: 'Aprobado' },
    { label: 'Rechazado', value: 'Rechazado' },
    { label: 'Con requerimiento', value: 'Con requerimiento' },
  ];

  causalesDeRetraso = [
      {
          label: 'Patrocinador', value: 'Patrocinador',
          items: [
              {label: 'Retraso en liberación de documentos por parte de Global ', value: 'Retraso en liberación de documentos por parte de Global '},
              {label: 'Retraso en obtener respuesta de global ante un requerimiento', value: 'Retraso en obtener respuesta de global ante un requerimiento'},
              {label: 'Retraso en traducción de documentos al español ', value: 'Retraso en traducción de documentos al español '},
              {label: 'Documentos incompletos o con errores ', value: 'Documentos incompletos o con errores '},
              {label: 'Demoras en la personalización de documentos y envío a los centros', value: 'Demoras en la personalización de documentos y envío a los centros'},
              {label: 'Negociación de presupuestos con centros', value: 'Negociación de presupuestos con centros'},
              {label: 'Retrasos en la selección de centros', value: 'Retrasos en la selección de centros'},
              {label: 'Movimientos de personal al interior del equipo', value: 'Movimientos de personal al interior del equipo'},
              {label: 'Otro', value: 'Otro'},
          ]
      },
      {
          label: 'Centros de investigación ', value: 'Centros de investigación ',
          items: [
              {label: 'Demora en el sometimiento de documentos a CEI ', value: 'Demora en el sometimiento de documentos a CEI '},
              {label: 'Investigadores ocupados que no pueden atender presentación al CEI ', value: 'Investigadores ocupados que no pueden atender presentación al CEI '},
              {label: 'Demora en firmas de contrato ', value: 'Demora en firmas de contrato '},
              {label: 'Demora en revisión de presupuesto ', value: 'Demora en revisión de presupuesto '},
              {label: 'Múltiples trámites administrativos antes de someter a CEI', value: 'Múltiples trámites administrativos antes de someter a CEI'},
              {label: 'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio', value: 'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio'},
              {label: 'Demoras en las negociaciones de presupuestos y Firma de contratos', value: 'Demoras en las negociaciones de presupuestos y Firma de contratos'},
              {label: 'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos', value: 'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos'},
              {label: 'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces', value: 'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces'},
              {label: 'Demoras en el envío de cartas de respuesta del comité de ética', value: 'Demoras en el envío de cartas de respuesta del comité de ética'},
              {label: 'Otro', value: 'Otro'},
          ]
      },
      {
          label: 'CEI – Comité de Ética en Investigación ', value: 'CEI – Comité de Ética en Investigación ',
          items: [
              {label: 'Reuniones solo mensuales que retrasan revisiones ', value: 'Reuniones solo mensuales que retrasan revisiones '},
              {label: 'Múltiples requerimientos', value: 'Múltiples requerimientos'},
              {label: 'Demora en emitir respuesta ', value: 'Demora en emitir respuesta '},
              {label: 'Documentos incompletos o con errores ', value: 'Documentos incompletos o con errores '},
              {label: 'No aceptación de documentos vía electrónica', value: 'No aceptación de documentos vía electrónica'},
              {label: 'Solicitud de pagos previos al sometimiento', value: 'Solicitud de pagos previos al sometimiento'},
              {label: 'Realización de una sola reunión mensual', value: 'Realización de una sola reunión mensual'},
              {label: 'Demora en la emisión de cartas de respuesta a trámites', value: 'Demora en la emisión de cartas de respuesta a trámites'},
              {label: 'Otro', value: 'Otro'},
          ]
      },
      {
          label: 'Invima', value: 'Invima',
          items: [
              {label: 'Documentos incompletos o con errores ', value: 'Documentos incompletos o con errores '},
              {label: 'Sobrecarga de trabajo ', value: 'Sobrecarga de trabajo '},
              {label: 'Documento enviado a otra área o no ubicado por parte del INVIMA ', value: 'Documento enviado a otra área o no ubicado por parte del INVIMA '},
              {label: 'Trámite no considerado relevante ', value: 'Trámite no considerado relevante '},
              {label: 'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo', value: 'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo'},
              {label: 'Daños temporales en la plataforma', value: 'Daños temporales en la plataforma'},
              {label: 'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos', value: 'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos'},
              {label: 'Demoras en las respuestas a tramites', value: 'Demoras en las respuestas a tramites'},
              {label: 'Otro', value: 'Otro'},
          ]
      }
  ];

  ngOnInit(): void {
    this.es = es;
    this.studyId = this.config.data?.studyId;
    this.parentId = this.config.data?.parentId;
    this.editMode = this.config.data?.editMode;
    this.selectedIterationId = this.config.data?.iterationId;
    this.loadStudy();
    if (this.config.data?.isEnmienda) {
      this.isEnmienda = this.config.data?.isEnmienda;
    }
    if (this.editMode && this.selectedIterationId) {
      this.loadEditIteration();
    }
    this.loadIteraciones();
  }

  setDatesVariables(): void {
    if (this.iteracion.fechaDeSometimiento) {
      this.fechaDeSometimiento = new Date(this.iteracion.fechaDeSometimiento);
    }
    if (this.iteracion.fechaRespuestaInvima) {
      this.fechaRespuestaInvima = new Date(this.iteracion.fechaRespuestaInvima);
    }
    if (this.iteracion.fechaDeNotificacion) {
      this.fechaDeNotificacion = new Date(this.iteracion.fechaDeNotificacion);
    }
    this.tiempoInvima = this.iteracion.tiempoInvima;
    this.tiempoPatrocinador = this.iteracion.tiempoPatrocinador;
    this.tiempoNotificacion = this.iteracion.tiempoNotificacion;
  }

  setDatesBackToModel(): void {
    this.iteracion.fechaDeSometimiento = this.fechaDeSometimiento?.toString();
    this.iteracion.fechaRespuestaInvima = this.fechaRespuestaInvima?.toString();
    this.iteracion.fechaDeNotificacion = this.fechaDeNotificacion?.toString() ? this.fechaDeNotificacion?.toString() : "";
  }

  inicializarOpcionesDeTipoDeIteracion(): void {
    // si es la primera iteracion, entonces forzamos a que sea Sometimiento inicial
    if (this.iteraciones.length === 0) {
      this.iteracion.tipoIteracion = 'Sometimiento inicial';
    } else {
      if(this.iteraciones.length === 1 && this.editMode) {
        this.isSometimientoInicial = true;
      }else {
        this.isSometimientoInicial = false;

        // si ya fue creada la iteracion de respuesta requerimiento, y fue rechazada, entonces se agrega este tipo de iteracion
        if (this.iteraciones.filter(e => e.tipoDeIteracion === 'Respuesta requerimiento' || e.estadoIteracion === 'Rechazado').length > 0) {
          this.tipoDeIteracion.push({ label: 'Recurso de reposición', value: 'Recurso de reposición' });
        }

        // si aun no hay una iteracion con este tipo de respuesta requerimiento, entonces agregamos la opcion
        if (this.iteraciones.filter(e => e.tipoDeIteracion === 'Respuesta requerimiento').length === 0) {
          this.tipoDeIteracion.push({ label: 'Respuesta requerimiento', value: 'Respuesta requerimiento' });
        }
      }
    }

  }

  loadStudy(): void {
    this.studiesService.getStudy(this.studyId).then((response: GetStudyQuery) => {
      logger.debug('getStudy response', response);
      this.study = response;
    }).catch(error => logger.error('getStudy error', error))
  }

  loadIteraciones(): void {
    this.sisec.showSpinner('Consultando interacciones...');
    var loadIteraciones = !this.isEnmienda ? this.studiesService.iteracionesInvimaByStudy(this.parentId) : this.addendumsService.iteracionesInvimaByAddendum(this.parentId);

    loadIteraciones
      .then((response: IteracionesByStudyQuery) => {
        logger.debug('loadIteracionesInvima response', response);
        this.iteraciones = response.items.sort((it1: any, it2: any) => {
          return new Date(it1.createdAt).getTime() - new Date(it2.createdAt).getTime();
        });
        this.inicializarOpcionesDeTipoDeIteracion();
        this.setMinDateSelection();
      })
      .catch(error => {
        logger.error('loadIteracionesInvima error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  loadEditIteration(): void {
    this.sisec.showSpinner('Consultando Interacción...');
    this.studiesService.getIteracionINVIMA(this.selectedIterationId).then((response: GetInvimaIterationQuery) => {
      logger.debug('getIterationINVIMA response', response);
      this.expectedVersion = response.version;
      this.sisec.cleanQueryResponse(response);
      CommonFunctionsService.copyMatchingKeyValues(this.iteracion, response);
      this.tipoDeRequerimientosSeleccionados = response.tipoRequerimiento;
      this.setDatesVariables();

    }).catch(error => logger.error('getStudy error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  // si hay interacciones existentes para este estudio, entonces hay una fecha minima de seleccion, la cual es la de respuesta del INVIMA
  // de la ultima iteracion
  setMinDateSelection(): void {
    if (this.iteraciones.length > 0) {
      let mDate = null;
      if (this.iteraciones.length == 1) {
        if (!this.editMode) {
          mDate = this.iteraciones[this.iteraciones.length - 1].fechaRespuestaInvima;
        }
      } else if (this.editMode) {
        mDate = this.iteraciones[this.iteraciones.length - 2].fechaRespuestaInvima;
      } else {
        mDate = this.iteraciones[this.iteraciones.length - 1].fechaRespuestaInvima;
      }
      this.minFechaDeSometimiento = new Date(mDate);
      this.minFechaRespuestaInvima = new Date(mDate);
      this.minFechaDeNotificacion = new Date(mDate);
    }
  }

  onTipoIteracionSelected(): void {
    // siempre que haya un cambio aca, tengo que resetear el valor en los otros dos
    this.iteracion.tipoRequerimiento = null;
    this.iteracion.otroTipoRequerimiento = null;

    if (this.iteracion.tipoIteracion === 'Sometimiento inicial') {
      this.tiempoPatrocinador = '0 dias';
      this.iteracion.tiempoPatrocinador = 0;
    } else {
      this.calculateTiempoTotalPatrocinador();
    }
  }

  calculateTiempoTotalPatrocinador(): void {
    let diasTotales = 0;
    if (this.iteraciones.length >= 1 && this.fechaDeSometimiento && !this.isSometimientoInicial) {
      let iteracionAnterior = this.iteraciones[this.iteraciones.length - 1];
      if(this.editMode){
        iteracionAnterior = this.iteraciones[this.iteraciones.length - 2];
      }
      diasTotales = this.calculateDifferenceOfDays(this.fechaDeSometimiento, new Date(iteracionAnterior.fechaRespuestaInvima));
      this.tiempoPatrocinador = diasTotales;
    }
    else {
      this.tiempoPatrocinador = null;
    }

    this.iteracion.tiempoPatrocinador = diasTotales;
  }

  onTipoRequerimientoSelected(): void {
    this.iteracion.otroTipoRequerimiento = null;

    if (this.tipoDeRequerimientosSeleccionados.filter(s => s === 'Otros').length > 0) {
      this.showOtroTipoRequerimiento = true;
    } else {
      this.showOtroTipoRequerimiento = false;
    }
  }

  onCausalRetrasoSelected(): void {
    this.iteracion.otroCausalRetrasoPatrocinador = null;
  }

  onFechaSometimientoSelected(): void {
    this.calculateTiempoTotalInvima();
    this.calculateTiempoTotalPatrocinador();
    this.minFechaRespuestaInvima = new Date(this.fechaDeSometimiento);
    this.minFechaDeNotificacion = new Date(this.fechaDeSometimiento);
  }

  onFechaRespuestaInvimaSelected(): void {
    this.calculateTiempoTotalInvima();
    this.calculateTiempoNotificacion();
    this.minFechaDeNotificacion = new Date(this.fechaRespuestaInvima);
  }

  onFechaNotificacionInvimaSelected(): void {
    this.calculateTiempoNotificacion();
  }

  calculateTiempoTotalInvima(): void {
    const days = this.calculateDifferenceOfDays(this.fechaRespuestaInvima, this.fechaDeSometimiento);
    if (days !== null) {
      this.tiempoInvima = days;
    }
    else {
      this.tiempoInvima = null;
    }
    this.iteracion.tiempoInvima = days;
  }

  calculateTiempoNotificacion(): void {
    const days = this.calculateDifferenceOfDays(this.fechaDeNotificacion, this.fechaRespuestaInvima);
    if (days !== null) {
      this.tiempoNotificacion = days;
    }
    else {
      this.tiempoNotificacion = null;
    }
    this.iteracion.tiempoNotificacion = days;
  }

  calculateDifferenceOfDays(date1: Date, date2: Date): number {
    if (date1 && date2) {
      const differenceInTime = date1.getTime() - date2.getTime();
      const differenceDays = differenceInTime / (1000 * 3600 * 24);
      return differenceDays;
    }
    return null;
  }

  onCancelar(): void {
    if (!this.editMode) {
      this.invimaForm.reset();
    }
    this.ref.close('cancelado');
  }

  onSubmit(form: NgForm): void {
    this.calculateTiempoTotalInvima();
    this.calculateTiempoNotificacion();
    this.calculateTiempoTotalPatrocinador();
    this.setDatesBackToModel();
    this.validateAllDates(form);

    if (form.valid) {
      if (!this.isDuplicate()) {
        if (this.editMode) {
          this.updateIteration();
        } else {
          this.createIteration();
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar la Interacción',
          detail: `Ya existe una Interacción con la misma infomación.`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('Interacción');
    }
  }

  createIteration(): void {
    if (!this.isEnmienda) {
      this.iteracion.studyID = this.parentId;
      this.iteracion.addendumID = undefined;
    } else {
      this.iteracion.addendumID = this.parentId;
      this.iteracion.studyID = undefined;
    }
    logger.log('Onsubmit iteracion', this.iteracion);
    this.iteracion.tipoRequerimiento = this.tipoDeRequerimientosSeleccionados;
    this.sisec.showSpinner('Guardando...');
    this.studiesService.createIteracionINVIMA(this.iteracion)
      .then(response => {
        this.ref.close('creado');
        logger.debug('createIteracionINVIMA', response);
        if(!this.isEnmienda){
          this.calculateDatesService.setDatesToStudyWithINVIMAIteration(this.iteracion.studyID);
        }else {
          this.calculateDatesService.setDatesToAddendumWithINVIMAIteration(this.iteracion.addendumID);
        }
      })
      .catch(error => {
        logger.error('createIteracionINVIMA error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  updateIteration(): void {
    this.iteracion.tipoRequerimiento = this.tipoDeRequerimientosSeleccionados;
    const updateIterationInput = this.studiesService.generateUpdateINVIMAIterationInput(this.iteracion, this.expectedVersion);
    this.sisec.showSpinner('Guardando...');
    logger.debug('UpdateIterationINVIMA input', updateIterationInput);
    this.studiesService.updateIteracionINVIMA(updateIterationInput)
      .then(response => {
        this.ref.close('actualizado');
        logger.debug('UpdateIterationINVIMA response', response);

        if(!this.isEnmienda){
          this.calculateDatesService.setDatesToStudyWithINVIMAIteration(this.iteracion.studyID);
        }else {
          this.calculateDatesService.setDatesToAddendumWithINVIMAIteration(this.iteracion.addendumID);
        }
      })
      .catch(error => {
        logger.error('UpdateIterationINVIMA error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  validateAllDates(studyForm: NgForm): void {

    let fechas = [{"key": "fecha aprobación protocolo casa matriz","value": this.study.fechaAprobacionCasaMatriz},
    {"key": "fecha de factibilidad en Colombia","value": this.study.fechaFactibilidadColombia},
    {"key": "fecha de selección de Colombia","value": this.study.fechaSeleccionColombia},
    {"key": "fecha de recepción protocolo filial Colombia","value": this.study.fechaRecepcionFilialColombia},
    {"key": "fecha de versión en español","value": this.study.fechaVersionEspaniol},
    { "key": "fecha de radicación", "value": this.fechaDeSometimiento },
    { "key": "fecha de resolución INVIMA", "value": this.fechaRespuestaInvima }]

    CommonFunctionsService.validateDates(studyForm, "fechaDeSometimiento", 0, 5, fechas, true);
    CommonFunctionsService.validateDates(studyForm, "fechaRespuestaInvima", 0, 6, fechas);
    CommonFunctionsService.validateDates(studyForm, "fechaDeNotificacion", 0, 7, fechas);
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const iteration = this.iteraciones.filter(x => x.tipoIteracion === this.iteracion.tipoIteracion &&
        x.fechaDeSometimiento === this.iteracion.fechaDeSometimiento);
      if (iteration.length > 1) {
        return true;
      } else if (iteration.length == 1) {
        return iteration[0].id != this.iteracion.id;
      } else {
        return false;
      }
    } else {
      return this.iteraciones.findIndex(x => x.tipoIteracion == this.iteracion.tipoIteracion &&
        x.fechaDeSometimiento == this.iteracion.fechaDeSometimiento) !== -1;
    }
  }

}
