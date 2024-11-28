import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InterruptionService } from '../interruption/interruption.service';
import { SisecService } from '../services/sisec.service';
import { Logger } from 'aws-amplify';
import {
  CreateStudyInput,
  EntityState,
  InterrupcionReclutamientoTypeEnum,
  motivoInterrupcionTypeEnum,
  StudyState,
  UpdateStudyInput,
} from '../services/API.service';
import { MassUploadService } from './mass-upload.service';
import { StudiesService } from '../studies/studies.service';
const logger = new Logger('mass-upload-interruption');

@Injectable({
  providedIn: 'root',
})
export class MassUploadInterruptionService {
  interruptions: any[] = [];
  studies: any[] = [];
  study;
  interruptionAtributos = [
    'studyID',
    'interrupcionReclutamiento',
    'motivoInterrupcion',
    'otroMotivoInterrupcion',
    'fechaInicialInterrupcion',
    'fechaFinalizacionTnterrupcion',
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private interruptionService: InterruptionService,
    private sisecService: SisecService,
    private messages: MessageService,
    private router: Router,
    private massUploadService: MassUploadService,
    private studiesService: StudiesService
  ) {}
  async loadDataForInterruption(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Interrupciones',
      currentElements: [],
    };
    await this.massUploadService.listStudy().then((response) => {
      logger.debug('listStudies response', response.items);
      this.studies = response.items;
    });
    this.constructorTemplate().then((response) => {
      data.cols = response.plantilla.cols;
      data.wscols = response.plantilla.sizeCols;
      data.cols2 = response.colecciones.cols;
      data.wscols2 = response.colecciones.sizeCols;
      data.currentElements = this.interruptions;
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
    for (let i = 0; i < this.interruptionAtributos.length; i++) {
      estructura[`col${i}`] = this.interruptionAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [];
    colecciones.push(['Catalogos', 'Opciones']);
    for (const s of this.studies) {
      colecciones.push(['Estudios', s.identificador]);
    }
    colecciones.push([
      'Interrupción reclutamiento',
      InterrupcionReclutamientoTypeEnum.CENTRO,
    ]);
    colecciones.push([
      'Interrupción reclutamiento',
      InterrupcionReclutamientoTypeEnum.PAIS,
    ]);
    colecciones.push([
      'Motivo de interrupción',
      motivoInterrupcionTypeEnum.APROBACION_ENMIENDA,
    ]);
    colecciones.push([
      'Motivo de interrupción',
      motivoInterrupcionTypeEnum.CALIDAD,
    ]);
    colecciones.push([
      'Motivo de interrupción',
      motivoInterrupcionTypeEnum.MEDIDA_SANITARIA,
    ]);
    colecciones.push([
      'Motivo de interrupción',
      motivoInterrupcionTypeEnum.TEMAS_LOGISTICOS,
    ]);
    colecciones.push([
      'Motivo de interrupción',
      motivoInterrupcionTypeEnum.OTRA,
    ]);
    colecciones.push([
      'Otro motivo de interrupción',
      'Si el motivo de la interrupción es la opción "OTRA" debe especificarla en el campo de "Otro motivo de interrupción"',
    ]);
    const sizeColecciones = [{ wch: 25 }, { wch: 40 }, { wch: 25 }];
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
  async validateMassUpload(interruptions: any[]): Promise<any> {
    const interruptionsWithError: any = [];
    for (const interruption of interruptions) {
      interruption.validatedError = true;
      interruption.errorDecription = {};
      let study;
      interruption.action = 'Crear';
      if (!interruption.studyID) {
        interruption.validatedError = false;
        interruption.errorDecription.studyID = ['Este campo es obligatorio'];
      } else {
        study = this.studies.find(
          (s) => s.identificador === interruption.studyID
        );
        if (!study) {
          interruption.validatedError = false;
          interruption.errorDecription.studyID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }
      if (!interruption.interrupcionReclutamiento) {
        interruption.validatedError = false;
        interruption.errorDecription.interrupcionReclutamiento = [
          'Este campo es obligatorio',
        ];
      }
      if (!interruption.motivoInterrupcion) {
        interruption.validatedError = false;
        interruption.errorDecription.motivoInterrupcion = [
          'Este campo es obligatorio',
        ];
      }
      if (!interruption.fechaInicialInterrupcion) {
        interruption.validatedError = false;
        interruption.errorDecription.fechaInicialInterrupcion = [
          'Este campo es obligatorio',
        ];
      }
      if (interruption.motivoInterrupcion) {
        if (interruption.motivoInterrupcion === 'OTRA') {
          if (!interruption.otroMotivoInterrupcion) {
            interruption.validatedError = false;
            interruption.errorDecription.otroMotivoInterrupcion = [
              'Este campo es obligatorio',
            ];
          }
        }
      }
      const fechaInterrupciones = [
        'fechaInicialInterrupcion',
        'fechaFinalizacionTnterrupcion',
      ];
      for (const atributo of fechaInterrupciones) {
        if (interruption[atributo]) {
          if (!this.massUploadService.isValidDate(interruption[atributo])) {
            const x = atributo + 'IsValid';
            interruption.errorDecription[x] = [false];
            interruption.validatedError = false;
            interruption.errorDecription[atributo] = [
              'El formato de la fecha es inválido',
            ];
          } else {
            const x = atributo + 'IsValid';
            interruption.errorDecription[x] = [true];
          }
        }
      }
      if (interruption.fechaFinalizacionTnterrupcion) {
        if (interruption.fechaInicialInterrupcion) {
          if (
            interruption.fechaInicialInterrupcionIsValid &&
            interruption.fechaFinalizacionTnterrupcionIsValid
          ) {
            if (
              interruption.fechaInicialInterrupcion.getTime() >
              interruption.fechaFinalizacionTnterrupcion.getTime()
            ) {
              interruption.validatedError = false;
              if (
                interruption.errorDecription.hasOwnProperty(
                  'fechaFinalizacionTnterrupcion'
                )
              ) {
                interruption.errorDecription.fechaFinalizacionTnterrupcion.push(
                  'La fecha inicial de la interrupción no puede ser mayor a la fecha final de la interrupción'
                );
              } else {
                interruption.errorDecription.fechaFinalizacionTnterrupcion = [
                  'La fecha inicial de la interrupción no puede ser mayor a la fecha final de la interrupción',
                ];
              }
            }
          }
        }
      }
      const exist = this.interruptions.findIndex(
        (x) =>
          x.studyID === interruption.studyID &&
          x.interrupcionReclutamiento ===
            interruption.interrupcionReclutamiento &&
          x.motivoInterrupcion === interruption.motivoInterrupcion &&
          x.otroMotivoInterrupcion === interruption.otroMotivoInterrupcion &&
          x.fechaInicialInterrupcion ===
            interruption.fechaInicialInterrupcion &&
          x.fechaFinalizacionTnterrupcion ===
            interruption.fechaFinalizacionTnterrupcion
      );
      if (exist !== -1) {
        if (interruption.errorDecription.hasOwnProperty('studyID')) {
          interruption.errorDecription.studyID.push(
            'Los datos suministrados para la interrupción ya existen en el sistema'
          );
        } else {
          interruption.errorDecription.studyID = [
            'Los datos suministrados para la interrupción ya existen en el sistema',
          ];
        }
      }
      interruptionsWithError.push(interruption);
    }
    return {
      dataPrivew: interruptionsWithError,
      itemsTable: this.interruptionAtributos,
    };
  }
  async saveAndUpdateInterruption(interruptions): Promise<any> {
    const allInterruptionsPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for (const i of interruptions) {
      const estudio = this.studies.find((x) => x.identificador === i.studyID);
      await this.studiesService.getStudy(estudio.id).then((response) => {
        logger.debug('getStudy response', response);
        this.study = response;
      });
      const newIterruption = {
        studyID: estudio.id,
        estado: EntityState.ACTIVE,
        interrupcionReclutamiento: i.interrupcionReclutamiento,
        motivoInterrupcion: i.motivoInterrupcion,
        otroMotivoInterrupcion: i.otroMotivoInterrupcion,
        fechaInicialInterrupcion: i.fechaInicialInterrupcion,
        fechaFinalizacionTnterrupcion: i.fechaFinalizacionTnterrupcion,
        user: null,

        action: i.action,
      };
      if (newIterruption.action === 'Crear') {
        delete newIterruption.action;
        totalCreated++;
        allInterruptionsPromise.push(
          this.interruptionService
            .createInterruption(newIterruption)
            .then((response) => {
              logger.debug('createInterruption response', response);
              allInterruptionsPromise.push(
                this.studiesService
                  .updateStudy({
                    id: this.study.id,
                    estado: StudyState.SUSPENDIDO,
                    expectedVersion: this.study.version,
                  })
                  .then((response2) => {
                    logger.debug('updateStudy response', response2);
                  })
                  .catch((error) => {
                    logger.error('updateStudy error', error);
                  })
              );
            })
            .catch((error) => {
              logger.error('createInterruption error', error);
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
            detail: 'Interrupciones creados: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Interrupciones actualizados: ' + totalUpdated,
          });
        }
        this.router.navigate(['studies']);
      })
      .catch((error) => {
        logger.error('Massive interruption load error', error);
      })
      .finally(() => this.sisecService.hideSpinner());
  }
}
