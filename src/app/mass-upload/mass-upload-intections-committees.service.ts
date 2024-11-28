import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { AddendumsService } from '../addendums/addendums.service';
import { InterruptionService } from '../interruption/interruption.service';
import { EntityState } from '../services/API.service';
import { CalculateDatesService } from '../services/calculate-dates.service';
import { SisecService } from '../services/sisec.service';
import { StudiesService } from '../studies/studies.service';
import { MassUploadService } from './mass-upload.service';
const logger = new Logger('mass-upload-intections-invima');

@Injectable({
  providedIn: 'root',
})
export class MassUploadIntectionsCommitteesService {
  interactionsCommittees: any = [];
  listAddendum: any = [];
  listStudyCenters: any = [];
  listStudyCenterCommittee: any = [];
  interactionsCommitteeAtributos = [
    // 'id',
    'studyID',
    'addendumID',
    'studyCenterCommitteeID',
    'tipoIteracion',
    'tipoAclaracion',
    'otroTipoAclaracion',
    'fechaDeSometimientoCE',
    'fechaRespuestaCE', // debe ser mayor que fechaDeSometimientoCE
    'estadoIteracion',
    'informacionCarta',
    'tiempoComite',
    'tiempoPatrocinador',
    'causalRetrasoPatrocinador',
    'otroCausalRetrasoPatrocinador',
    'notasDeSeguimiento',
    // 'user',
    // 'estado',
  ];
  tiposDeAclaracion = [
    { value: 'Consentimiento' },
    { value: 'Póliza' },
    {
      value: 'Estabilidad del medicamento',
    },
    { value: 'Diseño del estudio' },
    {
      value: 'Documentación del investigador',
    },
    { value: 'Otros' },
  ];

  estados = [
    { value: 'Aprobado' },
    { value: 'Rechazado' },
    { value: 'Con requerimiento' },
  ];

  causalesDeRetraso = [
    {
      value: 'Patrocinador',
      items: [
        {
          value: 'Retraso en liberación de documentos por parte de Global ',
        },
        {
          value: 'Retraso en obtener respuesta de global ante un requerimiento',
        },
        {
          value: 'Retraso en traducción de documentos al español ',
        },
        {
          value: 'Documentos incompletos o con errores ',
        },
        {
          value:
            'Demoras en la personalización de documentos y envío a los centros',
        },
        {
          value: 'Negociación de presupuestos con centros',
        },
        {
          value: 'Retrasos en la selección de centros',
        },
        {
          value: 'Movimientos de personal al interior del equipo',
        },
        { value: 'Otro' },
      ],
    },
    {
      value: 'Centros de investigación ',
      items: [
        {
          value: 'Demora en el sometimiento de documentos a CEI ',
        },
        {
          value:
            'Investigadores ocupados que no pueden atender presentación al CEI ',
        },
        {
          value: 'Demora en firmas de contrato ',
        },
        {
          value: 'Demora en revisión de presupuesto ',
        },
        {
          value: 'Múltiples trámites administrativos antes de someter a CEI',
        },
        {
          value:
            'Rotación del personal del estudio que realiza actividades administrativas – Coordinadores de Estudio',
        },
        {
          value:
            'Demoras en las negociaciones de presupuestos y Firma de contratos',
        },
        {
          value:
            'Inconvenientes técnicos para recibir documentos a través de las plataformas virtuales donde se comparten documentos',
        },
        {
          value:
            'Demoras por parte de Coordinadoras en el sometimiento de documentos a los Ces',
        },
        {
          value:
            'Demoras en el envío de cartas de respuesta del comité de ética',
        },
        { value: 'Otro' },
      ],
    },
    {
      value: 'CEI – Comité de Ética en Investigación ',
      items: [
        {
          value: 'Reuniones solo mensuales que retrasan revisiones ',
        },
        {
          value: 'Múltiples requerimientos',
        },
        {
          value: 'Demora en emitir respuesta ',
        },
        {
          value: 'Documentos incompletos o con errores ',
        },
        {
          value: 'No aceptación de documentos vía electrónica',
        },
        {
          value: 'Solicitud de pagos previos al sometimiento',
        },
        {
          value: 'Realización de una sola reunión mensual',
        },
        {
          value: 'Demora en la emisión de cartas de respuesta a trámites',
        },
        { value: 'Otro' },
      ],
    },
    {
      value: 'Invima',
      items: [
        {
          value: 'Documentos incompletos o con errores ',
        },
        { value: 'Sobrecarga de trabajo ' },
        {
          value:
            'Documento enviado a otra área o no ubicado por parte del INVIMA ',
        },
        {
          value: 'Trámite no considerado relevante ',
        },
        {
          value:
            'Rotación de personal evaluador que implica procesos de entrenamiento y curvas de aprendizaje al interior del Grupo',
        },
        {
          value: 'Daños temporales en la plataforma',
        },
        {
          value:
            'Inconvenientes al interior del Grupo de Atención al usuario al momento de asignar números de radicado y Llave para los trámites sometidos',
        },
        {
          value: 'Demoras en las respuestas a tramites',
        },
        { value: 'Otro' },
      ],
    },
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private interruptionService: InterruptionService,
    private sisecService: SisecService,
    private messages: MessageService,
    private router: Router,
    private massUploadService: MassUploadService,
    private studiesService: StudiesService,
    private addendumsService: AddendumsService,
    private calculateDatesService: CalculateDatesService
  ) {}
  async loadDataForIntectionsCommittee(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Interacciones-comite',
      currentElements: [],
    };

    await this.massUploadService.listStudy().then((response) => {
      logger.debug('listStudy response', response);
      for (const s of response.items) {
        this.listAddendum = this.listAddendum.concat(s.addenda.items);
      }
    });

    await this.studiesService.listStudyCenters().then((response) => {
      logger.debug('listStudyCenters response', response);
      this.listStudyCenters = response.items;
    });

    await this.studiesService.ListStudyCenterCommittees().then((response) => {
      logger.debug('ListStudyCenterCommittees response', response);
      this.listStudyCenterCommittee = response.items;
    });

    this.constructorTemplate().then((response) => {
      data.cols = response.plantilla.cols;
      data.wscols = response.plantilla.sizeCols;
      data.cols2 = response.colecciones.cols;
      data.wscols2 = response.colecciones.sizeCols;
      data.currentElements = this.interactionsCommittees;
    });

    return data;
  }
  async constructorTemplate(): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    const sizePlantilla = [
      { wch: 25 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 25 },
    ];
    for (let i = 0; i < this.interactionsCommitteeAtributos.length; i++) {
      estructura[`col${i}`] = this.interactionsCommitteeAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [['Catalogos', 'Opciones']];
    for (const x of this.listStudyCenters) {
      colecciones.push(['studyID', x.study.identificador]);
    }
    for (const x of this.listAddendum) {
      colecciones.push(['addendumID', x.descripcion]);
    }
    for (const x of this.listStudyCenterCommittee) {
      colecciones.push(['studyCenterCommitteeID', x.committee.nombre]);
    }
    colecciones.push(['tipo de iteracion', 'Sometimiento inicial']);
    colecciones.push(['tipo de iteracion', 'Respuesta aclaración']);
    for (const ta of this.tiposDeAclaracion) {
      colecciones.push(['Tipo de aclaración', ta.value]);
    }
    for (const e of this.estados) {
      colecciones.push(['Estados', e.value]);
    }
    for (const cr of this.causalesDeRetraso) {
      for (const cri of cr.items) {
        colecciones.push(['Causal retraso - ' + cr.value, cri.value]);
      }
    }
    const sizeColecciones = [{ wch: 45 }, { wch: 40 }];
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
  async validateMassUpload(intectionsCommittee: any[]): Promise<any> {
    const intectionsCommitteesWithError: any = [];
    for (const interaccionComite of intectionsCommittee) {
      interaccionComite.validatedError = true;
      interaccionComite.errorDecription = {};
      let iteraciones = [];

      const loadIteraciones = interaccionComite.studyId
        ? this.studiesService.listStudyCommitteeIterationsByStudy(
            interaccionComite.studyId
          )
        : this.addendumsService.listStudyCommitteeIterationsByAddendum(
            interaccionComite.addendumID
          );

      loadIteraciones
        .then((response) => {
          logger.debug('listStudyCommitteeIterations response', response);
          iteraciones = response.items;
        })
        .catch((error) => {
          logger.error('listStudyCommitteeIterationsByStudy error', error);
        });

      if (!interaccionComite.fechaDeSometimientoCE) {
        interaccionComite.validatedError = false;
        interaccionComite.errorDecription.fechaDeSometimientoCE = [
          'Este campo es obligatorio',
        ];
      }

      if (!interaccionComite.addendumID) {
        interaccionComite.validatedError = false;
        interaccionComite.errorDecription.addendumID = [
          'Este campo es obligatorio',
        ];
      }

      const existe = iteraciones.findIndex(
        (x) =>
          x.tipoIteracion.toUpperCase().trim() ===
            interaccionComite.tipoIteracion.toUpperCase().trim() &&
          x.fechaDeSometimientoCE.toUpperCase().trim() ===
            interaccionComite.fechaDeSometimientoCE.toUpperCase().trim()
      );
      if (existe !== -1) {
        interaccionComite.action = 'Actualizar';
        interaccionComite.id = iteraciones[existe].id;
        interaccionComite.expectedVersion = iteraciones[existe].version;
      } else {
        interaccionComite.action = 'Crear';
      }

      if (interaccionComite.studyID) {
        const e = this.listStudyCenters.findIndex(
          (x) => x.study.identificador === interaccionComite.studyID
        );
        if (e === -1) {
          interaccionComite.validatedError = false;
          interaccionComite.errorDecription.studyID = [
            'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
          ];
        }
      }

      if (interaccionComite.addendumID) {
        const e = this.listAddendum.findIndex(
          (x) => x.descripcion === interaccionComite.addendumID
        );
        if (e === -1) {
          interaccionComite.validatedError = false;
          interaccionComite.errorDecription.addendumID = [
            'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
          ];
        }
      }

      if (interaccionComite.studyCenterCommitteeID) {
        const e = this.listStudyCenterCommittee.findIndex(
          (x) => x.committee.nombre === interaccionComite.studyCenterCommitteeID
        );
        if (e === -1) {
          interaccionComite.validatedError = false;
          interaccionComite.errorDecription.studyCenterCommitteeID = [
            'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
          ];
        }
      }

      if (!interaccionComite.fechaRespuestaCE) {
        interaccionComite.validatedError = false;
        interaccionComite.errorDecription.fechaRespuestaCE = [
          'Este campo es obligatorio',
        ];
      }

      if (!interaccionComite.studyCenterCommitteeID) {
        interaccionComite.validatedError = false;
        if (
          interaccionComite.errorDecription.hasOwnProperty(
            interaccionComite.studyCenterCommitteeID
          )
        ) {
          interaccionComite.errorDecription.studyCenterCommitteeID.push(
            'Este campo es obligatorio'
          );
        } else {
          interaccionComite.errorDecription.studyCenterCommitteeID = [
            'Este campo es obligatorio',
          ];
        }
      }

      if (!interaccionComite.estadoIteracion) {
        interaccionComite.validatedError = false;
        interaccionComite.errorDecription.estadoIteracion = [
          'Este campo es obligatorio',
        ];
      }

      if (interaccionComite.tipoAclaracion === 'Otro') {
        if (!interaccionComite.otroTipoAclaracion) {
          interaccionComite.validatedError = false;
          interaccionComite.errorDecription.otroTipoAclaracion = [
            'Si tipo de aclaración es "Otro" debe especificar este campo',
          ];
        }
      }

      if (interaccionComite.causalRetrasoPatrocinador === 'Otro') {
        if (!interaccionComite.otroCausalRetrasoPatrocinador) {
          interaccionComite.validatedError = false;
          interaccionComite.errorDecription.otroCausalRetrasoPatrocinador = [
            'Si causal retraso es "Otro" debe especificar este campo',
          ];
        }
      }

      const fechaIInvimas = ['fechaDeSometimientoCE', 'fechaRespuestaCE'];
      for (const atributo of fechaIInvimas) {
        if (interaccionComite[atributo]) {
          if (
            !this.massUploadService.isValidDate(interaccionComite[atributo])
          ) {
            const x = atributo + 'IsValid';
            if (
              interaccionComite.errorDecription.hasOwnProperty(
                interaccionComite[atributo]
              )
            ) {
              interaccionComite.errorDecription[x] = [false];
              interaccionComite.validatedError = false;
              interaccionComite.errorDecription[atributo].push(
                'El formato de la fecha es inválido'
              );
            } else {
              interaccionComite.errorDecription[x] = [false];
              interaccionComite.validatedError = false;
              interaccionComite.errorDecription[atributo] = [
                'El formato de la fecha es inválido',
              ];
            }
          } else {
            const x = atributo + 'IsValid';
            interaccionComite.errorDecription[x] = [true];
          }
        }
      }
      this.calculateTiempoPatrocinador(interaccionComite, iteraciones);
      this.calculateTiempoRespuestaCE(interaccionComite);
      intectionsCommitteesWithError.push(interaccionComite);
    }
    return {
      dataPrivew: intectionsCommitteesWithError,
      itemsTable: this.interactionsCommitteeAtributos,
    };
  }
  saveAndUpdateIntectionsCommittee(intectionsCommittee): void {
    const allIntectionsCommitteesPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for (const i of intectionsCommittee) {
      const e1 = this.listStudyCenters.find(
        (x) => x.study.identificador === i.studyID
      );
      if (e1) {
        i.studyID = e1.studyID;
      }
      const e2 = this.listAddendum.find(
        (x) => x.descripcion === i.addendumID
      );
      if (e2) {
        i.addendumID = e2.id;
      }
      const e3 = this.listStudyCenterCommittee.find(
        (x) => x.committee.nombre === i.studyCenterCommitteeID
      );
      if (e3) {
        i.studyCenterCommitteeID = e3.committeeID;
      }
      const newI = this.formatingDataNewComite(i);
      if (newI.action === 'Crear') {
        delete newI.expectedVersion;
        delete newI.action;
        totalCreated++;
        allIntectionsCommitteesPromise.push(
          this.studiesService
            .createStudyCommitteeIteration(newI)
            .then((response) => {
              if (newI.studyID) {
                this.calculateDatesService
                  .setDatesToStudyCenterCommitteeIterations(
                    newI.studyID,
                    newI.studyCenterCommitteeID
                  )
                  .then(() => {
                    logger.debug(
                      'setDatesToStudyCenterCommitteeIterations',
                      response
                    );
                  });
              } else {
                logger.debug(
                  'setDatesToAddendumStudyCenterCommitteeIterations',
                  response
                );
              }
            })
        );
      } else {
        delete newI.action;
        totalUpdated++;
        allIntectionsCommitteesPromise.push(
          this.studiesService
            .updateStudyCommitteeIteration(newI)
            .then((response) => {
              if (newI.studyID) {
                this.calculateDatesService
                  .setDatesToStudyCenterCommitteeIterations(
                    newI.studyID,
                    newI.studyCenterCommitteeID
                  )
                  .then(() => {
                    logger.debug(
                      'setDatesToStudyCenterCommitteeIterations',
                      response
                    );
                  });
              } else {
                logger.debug(
                  'setDatesToAddendumStudyCenterCommitteeIterations',
                  response
                );
              }
            })
        );
      }
    }
    Promise.all(allIntectionsCommitteesPromise)
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
  calculateTiempoPatrocinador(interaccionComite, iteraciones): void {
    let diasTotales = 0;
    if (iteraciones.length >= 1 && interaccionComite.fechaDeSometimiento) {
      let iteracionAnterior = iteraciones[iteraciones.length - 1];
      diasTotales = this.calculateDifferenceOfDays(
        interaccionComite.fechaDeSometimiento,
        new Date(iteracionAnterior.fechaRespuestaInvima)
      );
      interaccionComite.tiempoPatrocinador = diasTotales;
    } else {
      interaccionComite.tiempoPatrocinador = null;
    }
    interaccionComite.tiempoPatrocinador = diasTotales;
  }
  calculateDifferenceOfDays(date1: Date, date2: Date): number {
    if (date1 && date2) {
      const differenceInTime = date1.getTime() - date2.getTime();
      const differenceDays = differenceInTime / (1000 * 3600 * 24);
      return differenceDays;
    }
    return null;
  }
  calculateTiempoRespuestaCE(interaccionComite): void {
    const days = this.calculateDifferenceOfDays(
      interaccionComite.fechaRespuestaCE,
      interaccionComite.fechaDeSometimientoCE
    );
    if (days !== null) {
      interaccionComite.tiempoResolucionCE = days;
    } else {
      interaccionComite.tiempoResolucionCE = null;
    }
    interaccionComite.tiempoComite = days;
  }
  formatingDataNewComite(item): any {
    return {
      id: item.id || null,
      studyID: item.studyID || null,
      addendumID: item.addendumID || null,
      studyCenterCommitteeID: item.studyCenterCommitteeID || null,
      tipoIteracion: item.tipoIteracion || null,
      tipoAclaracion: item.tipoAclaracion || null,
      otroTipoAclaracion: item.otroTipoAclaracion || null,
      fechaDeSometimientoCE: item.fechaDeSometimientoCE || '',
      fechaRespuestaCE: item.fechaRespuestaCE || '',
      estadoIteracion: item.estadoIteracion || null,
      informacionCarta: item.informacionCarta || null,
      tiempoComite: item.tiempoComite || null,
      tiempoPatrocinador: item.tiempoPatrocinador || null,
      causalRetrasoPatrocinador: item.causalRetrasoPatrocinador || null,
      otroCausalRetrasoPatrocinador: item.otroCausalRetrasoPatrocinador || null,
      notasDeSeguimiento: item.notasDeSeguimiento || null,
      user: item.user || null,
      estado: EntityState.ACTIVE,

      action: item.action,
      expectedVersion: item.expectedVersion || 0,
    };
  }
}
