import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { AddendumsService } from '../addendums/addendums.service';
import { InterruptionService } from '../interruption/interruption.service';
import { EntityState, IteracionesByStudyQuery } from '../services/API.service';
import { CalculateDatesService } from '../services/calculate-dates.service';
import { SisecService } from '../services/sisec.service';
import { StudiesService } from '../studies/studies.service';
import { MassUploadService } from './mass-upload.service';
const logger = new Logger('mass-upload-intections-invima');

@Injectable({
  providedIn: 'root',
})
export class MassUploadIntectionsInvimaService {
  interactionsInvima: any = [];
  listAddendum: any = [];
  listStudy: any = [];
  interactionsInvimaAtributos = [
    'studyID',
    'addendumID',
    'tipoIteracion',
    'tipoRequerimiento',
    'otroTipoRequerimiento',
    'fechaDeSometimiento',
    'fechaRespuestaInvima',
    'fechaDeNotificacion',
    'estadoIteracion',
    'resolucion',
    'tiempoInvima',
    'tiempoPatrocinador',
    'tiempoNotificacion',
    'causalRetrasoPatrocinador',
    'otroCausalRetrasoPatrocinador',
    'notasDeSeguimiento',
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private addendumsService: AddendumsService,
    private calculateDatesService: CalculateDatesService,
    private sisecService: SisecService,
    private messages: MessageService,
    private router: Router,
    private massUploadService: MassUploadService,
    private studiesService: StudiesService
  ) {}
  async loadDataForIntectionsInvima(isEnmienda: boolean): Promise<any> {
    this.interactionsInvimaAtributos = [
      'studyID',
      'addendumID',
      'tipoIteracion',
      'tipoRequerimiento',
      'otroTipoRequerimiento',
      'fechaDeSometimiento',
      'fechaRespuestaInvima',
      'fechaDeNotificacion',
      'estadoIteracion',
      'resolucion',
      'tiempoInvima',
      'tiempoPatrocinador',
      'tiempoNotificacion',
      'causalRetrasoPatrocinador',
      'otroCausalRetrasoPatrocinador',
      'notasDeSeguimiento',
    ];
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Interacciones-invima',
      currentElements: [],
    };

    if (isEnmienda) {
      await this.massUploadService.listStudy().then((response) => {
        logger.debug('listStudy response', response);
        for (const s of response.items) {
          this.listAddendum = this.listAddendum.concat(s.addenda.items);
        }
      });
    } else {
      await this.massUploadService.listStudy().then((response) => {
        logger.debug('listStudy response', response);
        this.listStudy = response.items;
      });
    }

    this.constructorTemplate(isEnmienda).then((response) => {
      data.cols = response.plantilla.cols;
      data.wscols = response.plantilla.sizeCols;
      data.cols2 = response.colecciones.cols;
      data.wscols2 = response.colecciones.sizeCols;
      data.currentElements = this.interactionsInvima;
    });

    return data;
  }
  async constructorTemplate(isEnmienda: boolean): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    const sizePlantilla = [
      { wch: 25 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
    ];
    const objDelete = isEnmienda ? 'studyID' : 'addendumID';
    const i = this.interactionsInvimaAtributos.findIndex(
      (x) => x === objDelete
    );
    this.interactionsInvimaAtributos.splice(i, 1);
    for (let i = 0; i < this.interactionsInvimaAtributos.length; i++) {
      estructura[`col${i}`] = this.interactionsInvimaAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [['Catalogos', 'Opciones']];
    if (isEnmienda) {
      for (const s of this.listAddendum) {
        colecciones.push(['addendumID', s.descripcion]);
      }
    } else {
      for (const s of this.listStudy) {
        colecciones.push(['studyID', s.identificador]);
      }
    }
    colecciones.push(['tipoDeIteracion', 'Aclaración']);
    colecciones.push(['tipoDeIteracion', 'Sometimiento inicial']);
    colecciones.push(['tipoDeIteracion', 'Respuesta requerimiento']);
    colecciones.push(['tipoDeIteracion', 'Recurso de reposición']);
    colecciones.push(['tipoDeIteracion', 'Rechazado']);

    colecciones.push(['tipoDeRequerimiento', 'Consentimiento']);
    colecciones.push(['tipoDeRequerimiento', 'Póliza']);
    colecciones.push(['tipoDeRequerimiento', 'Estabilidad del medicamento']);
    colecciones.push(['tipoDeRequerimiento', 'Diseño del estudio']);
    colecciones.push(['tipoDeRequerimiento', 'Documentación del investigador']);
    colecciones.push(['tipoDeRequerimiento', 'Otros']);
    // SI ES OTRO SE DEBE LEER EL OTRO REQUERIMIENTO

    colecciones.push(['estados', 'Aprobado']);
    colecciones.push(['estados', 'Rechazado']);
    colecciones.push(['estados', 'Con requerimiento']);

    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Retraso en liberación de documentos por parte de Global',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Retraso en obtener respuesta de global ante un requerimiento',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Retraso en traducción de documentos al español',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Documentos incompletos o con errores',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Demoras en la personalización de documentos y envío a los centros',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Negociación de presupuestos con centros',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Retrasos en la selección de centros',
    ]);
    colecciones.push([
      'causalesDeRetraso - Patrocinador',
      'Movimientos de personal al interior del equipo',
    ]);
    colecciones.push(['causalesDeRetraso - Patrocinador', 'Otro']);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demora en el sometimiento de documentos a CEI',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Investigadores ocupados que no pueden atender presentación al CEI',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demora en firmas de contrato',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demora en revisión de presupuesto',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Múltiples trámites administrativos antes de someter a CEI',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demoras en las negociaciones de presupuestos y Firma de contratos',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces',
    ]);
    colecciones.push([
      'causalesDeRetraso - Centros de investigación',
      'Demoras en el envío de cartas de respuesta del comité de ética',
    ]);
    colecciones.push(['causalesDeRetraso - Centros de investigación', 'Otro']);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Reuniones solo mensuales que retrasan revisiones',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Múltiples requerimientos',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Demora en emitir respuesta',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Documentos incompletos o con errores',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'No aceptación de documentos vía electrónica',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Solicitud de pagos previos al sometimiento',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Realización de una sola reunión mensual',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Demora en la emisión de cartas de respuesta a trámites',
    ]);
    colecciones.push([
      'causalesDeRetraso - CEI – Comité de Ética en Investigación',
      'Otro',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Documentos incompletos o con errores',
    ]);
    colecciones.push(['causalesDeRetraso - Invima', 'Sobrecarga de trabajo']);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Documento enviado a otra área o no ubicado por parte del INVIMA ',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Trámite no considerado relevante',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Daños temporales en la plataforma',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos',
    ]);
    colecciones.push([
      'causalesDeRetraso - Invima',
      'Demoras en las respuestas a tramites',
    ]);
    colecciones.push(['causalesDeRetraso - Invima', 'Otro']);

    const sizeColecciones = [{ wch: 75 }, { wch: 40 }];
    return {
      plantilla: {
        cols: plantilla,
        sizeCols: sizePlantilla,
      },
      colecciones: {
        cols: colecciones,
        sizeCols: sizeColecciones,
      },
    };
  }
  async validateMassUpload(
    interactionsInvima: any[],
    isEnmienda: boolean
  ): Promise<any> {
    const interactionsInvimaWithError: any = [];
    for (const iInvima of interactionsInvima) {
      iInvima.validatedError = true;
      iInvima.errorDecription = {};
      let minFechas;
      let iteraciones = [];

      var loadIteraciones = iInvima.studyID
        ? this.studiesService.iteracionesInvimaByStudy(iInvima.studyID)
        : this.addendumsService.iteracionesInvimaByAddendum(iInvima.addendumID);

      await loadIteraciones.then((response: IteracionesByStudyQuery) => {
        logger.debug('loadIteracionesInvima response', response);
        iteraciones = response.items.sort((it1: any, it2: any) => {
          return (
            new Date(it1.createdAt).getTime() -
            new Date(it2.createdAt).getTime()
          );
        });
        minFechas = this.setMinDateSelection(iteraciones);
      });

      const existe = iteraciones.findIndex(
        (x) =>
          x.tipoIteracion === iInvima.tipoIteracion &&
          x.fechaDeSometimientoCE === iInvima.fechaDeSometimientoCE
      );
      if (existe !== -1) {
        iInvima.action = 'Actualizar';
        iInvima.id = iteraciones[existe].id;
        iInvima.expectedVersion = iteraciones[existe].version;
      } else {
        iInvima.action = 'Crear';
      }

      if (isEnmienda) {
        if (!iInvima.addendumID) {
          iInvima.validatedError = false;
          iInvima.errorDecription.addendumID = ['Este campo es obligatorio'];
        } else {
          const existe = this.listAddendum.findIndex(
            (x) => x.descripcion === iInvima.addendumID
          );
          if (existe === -1) {
            if (iInvima.errorDecription.hasOwnProperty('addendumID')) {
              iInvima.errorDecription.addendumID.push(
                'Esta enmienda no existe por favor verificar ortografía, mayúsculas y minúsculas'
              );
            } else {
              iInvima.errorDecription.addendumID = [
                'Esta enmienda no existe por favor verificar ortografía, mayúsculas y minúsculas',
              ];
            }
          }
        }
      } else {
        if (!iInvima.studyID) {
          iInvima.validatedError = false;
          iInvima.errorDecription.studyID = ['Este campo es obligatorio'];
        } else {
          const existe = this.listStudy.findIndex(
            (x) => x.identificador === iInvima.studyID
          );
          if (existe === -1) {
            iInvima.validatedError = false;
            if (iInvima.errorDecription.hasOwnProperty('studyID')) {
              iInvima.errorDecription.studyID.push(
                'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas'
              );
            } else {
              iInvima.errorDecription.studyID = [
                'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
              ];
            }
          }
        }
      }

      if (!iInvima.tipoIteracion) {
        iInvima.validatedError = false;
        iInvima.errorDecription.tipoIteracion = ['Este campo es obligatorio'];
      }

      if (!iInvima.fechaRespuestaInvima) {
        iInvima.validatedError = false;
        iInvima.errorDecription.fechaRespuestaInvima = [
          'Este campo es obligatorio',
        ];
      }

      if (!iInvima.estadoIteracion) {
        iInvima.validatedError = false;
        iInvima.errorDecription.estadoIteracion = ['Este campo es obligatorio'];
      }

      if (iInvima.tipoRequerimiento === 'Otro') {
        if (!iInvima.otroTipoRequerimiento) {
          iInvima.validatedError = false;
          iInvima.errorDecription.otroTipoRequerimiento = [
            'Este campo es obligatorio',
          ];
        }
      }

      if (iInvima.causalRetrasoPatrocinador === 'Otro') {
        if (!iInvima.otroCausalRetrasoPatrocinador) {
          iInvima.validatedError = false;
          iInvima.errorDecription.otroCausalRetrasoPatrocinador = [
            'Este campo es obligatorio',
          ];
        }
      }

      const fechaIInvimas = [
        'fechaDeSometimiento',
        'fechaRespuestaInvima',
        'fechaDeNotificacion',
      ];
      for (const atributo of fechaIInvimas) {
        if (iInvima[atributo]) {
          if (!this.massUploadService.isValidDate(iInvima[atributo])) {
            const x = atributo + 'IsValid';
            if (iInvima.errorDecription.hasOwnProperty(iInvima[atributo])) {
              iInvima.errorDecription[x] = [false];
              iInvima.validatedError = false;
              iInvima.errorDecription[atributo].push(
                'El formato de la fecha es inválido'
              );
            } else {
              iInvima.errorDecription[x] = [false];
              iInvima.validatedError = false;
              iInvima.errorDecription[atributo] = [
                'El formato de la fecha es inválido',
              ];
            }
          } else {
            const x = atributo + 'IsValid';
            iInvima.errorDecription[x] = [true];
          }
        }
      }

      this.calculateTiempoTotalInvima(iInvima);
      this.calculateTiempoNotificacion(iInvima);
      this.calculateTiempoTotalPatrocinador(iInvima, iteraciones);
      interactionsInvimaWithError.push(iInvima);
    }
    return {
      dataPrivew: interactionsInvimaWithError,
      itemsTable: this.interactionsInvimaAtributos,
    };
  }
  saveAndUpdateIntectionsInvima(interruptions): void {
    const allInterruptionsPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for (const i of interruptions) {
      const newI = this.formatingDataNewInvima(i);

      if (newI.action === 'Crear') {
        delete newI.expectedVersion;
        delete newI.action;
        totalCreated++;
        allInterruptionsPromise.push(
          this.studiesService.createIteracionINVIMA(newI).then(() => {
            if (i.studyID) {
              this.calculateDatesService.setDatesToStudyWithINVIMAIteration(
                i.studyID
              );
            } else {
              this.calculateDatesService.setDatesToAddendumWithINVIMAIteration(
                i.addendumID
              );
            }
          })
        );
      } else {
        delete newI.action;
        totalUpdated++;
        allInterruptionsPromise.push(
          this.studiesService.updateIteracionINVIMA(newI).then((response) => {
            if (i.studyID) {
              this.calculateDatesService.setDatesToStudyWithINVIMAIteration(
                i.studyID
              );
            } else {
              this.calculateDatesService.setDatesToAddendumWithINVIMAIteration(
                i.addendumID
              );
            }
          })
        );
      }
    }
    Promise.all(allInterruptionsPromise)
      .then(() => {
        if (totalCreated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa',
            detail: 'Interaciones INVIMA creadas: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Interaciones INVIMA actualizadas: ' + totalUpdated,
          });
        }
        this.router.navigate(['studies']);
      })
      .catch((error) => {
        logger.error('Massive committee load error', error);
      })
      .finally(() => this.sisecService.hideSpinner());
  }
  setMinDateSelection(iteraciones): any {
    if (iteraciones.length > 0) {
      let mDate = null;
      mDate = iteraciones[iteraciones.length - 1].fechaRespuestaInvima;
      return {
        minFechaDeSometimiento: new Date(mDate),
        minFechaRespuestaInvima: new Date(mDate),
        minFechaDeNotificacion: new Date(mDate),
      };
    }
  }
  calculateTiempoTotalInvima(iInvima): void {
    const days = this.calculateDifferenceOfDays(
      iInvima.fechaRespuestaInvima,
      iInvima.fechaDeSometimiento
    );
    if (days !== null) {
      iInvima.tiempoInvima = days;
    } else {
      iInvima.tiempoInvima = null;
    }
    iInvima.tiempoInvima = days;
  }
  calculateDifferenceOfDays(date1: Date, date2: Date): number {
    if (date1 && date2) {
      const differenceInTime = date1.getTime() - date2.getTime();
      const differenceDays = differenceInTime / (1000 * 3600 * 24);
      return differenceDays;
    }
    return null;
  }
  calculateTiempoNotificacion(iInvima): void {
    const days = this.calculateDifferenceOfDays(
      iInvima.fechaDeNotificacion,
      iInvima.fechaRespuestaInvima
    );
    if (days !== null) {
      iInvima.tiempoNotificacion = days;
    } else {
      iInvima.tiempoNotificacion = null;
    }
    iInvima.tiempoNotificacion = days;
  }
  calculateTiempoTotalPatrocinador(iInvima, iteraciones): void {
    let diasTotales = 0;
    if (iteraciones.length >= 1 && iInvima.fechaDeSometimiento) {
      let iteracionAnterior = iteraciones[iteraciones.length - 1];
      diasTotales = this.calculateDifferenceOfDays(
        iInvima.fechaDeSometimiento,
        new Date(iteracionAnterior.fechaRespuestaInvima)
      );
      iInvima.tiempoPatrocinador = diasTotales;
    } else {
      iInvima.tiempoPatrocinador = null;
    }
    iInvima.tiempoPatrocinador = diasTotales;
  }
  formatingDataNewInvima(item): any {
    return {
      studyID: item.studyID || undefined,
      addendumID: item.addendumID || undefined,
      tipoIteracion: item.tipoIteracion || null,
      tipoRequerimiento: item.tipoRequerimiento || null,
      otroTipoRequerimiento: item.otroTipoRequerimiento || null,
      fechaDeSometimiento: item.fechaDeSometimiento || '',
      fechaRespuestaInvima: item.fechaRespuestaInvima || null,
      fechaDeNotificacion: item.fechaDeNotificacion || null,
      estadoIteracion: item.estadoIteracion || null,
      resolucion: item.resolucion || null,
      tiempoInvima: item.tiempoInvima || null,
      tiempoPatrocinador: item.tiempoPatrocinador || null,
      tiempoNotificacion: item.tiempoNotificacion || null,
      causalRetrasoPatrocinador: item.causalRetrasoPatrocinador || null,
      otroCausalRetrasoPatrocinador: item.otroCausalRetrasoPatrocinador || null,
      notasDeSeguimiento: item.notasDeSeguimiento || null,
      estado: EntityState.ACTIVE,
      user: item.user || null,

      action: item.action,
      expectedVersion: item.expectedVersion || 0,
    };
  }
}
