import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
import {
  EntityState,
  ListCentersQuery,
  ListStudyCentersQuery,
} from 'src/app/services/API.service';
import { Logger } from 'aws-amplify';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CentersService } from '../centers/centers.service';
import { MassUploadService } from './mass-upload.service';
import { CalculateDatesService } from '../services/calculate-dates.service';
import { StudiesService } from '../studies/studies.service';
const logger = new Logger('mass-upload-center');

@Injectable({
  providedIn: 'root',
})
export class MassUploadCenterService {
  centers: any = [];
  studies: any = [];
  studiesCenters: any = [];
  croS = [];
  centrosAtributos = [
    'studyID',
    'centerID',
    'costoPorPaciente',
    'cantidadPacientesIncluidos',
    'fechaRecepcionPaquete',
    'fechaRecepcionContrato',
    'fechaFirmaContrato',
    'fechaFirmaContratoPatrocinador',
    'fechaAprobacionInvima',
    'fechaActivacionCentro',
    'fechaPrimerPacienteSeleccionado',
    'fechaPrimerPacienteAleatorizado',
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messages: MessageService,
    private sisecService: SisecService,
    private authService: AuthService,
    private router: Router,
    private massUploadService: MassUploadService,
    private centersService: CentersService,
    private calculateDatesService: CalculateDatesService,
    private studiesService: StudiesService
  ) {}
  async loadDataForCenter(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Centros',
      currentElements: [],
    };
    await this.centersService
      .listCenters()
      .then((response: ListCentersQuery) => {
        logger.debug('listCenters response', response);
        this.centers = response.items;
      })
      .catch((error3) => {
        logger.error('listStudies error', error3);
        this.sisecService.hideSpinner();
      });

    await this.massUploadService.listStudy().then((response) => {
      logger.debug('listStudies response', response.items);
      this.studies = response.items;
    });

    await this.studiesService.listStudyCenters().then((response) => {
      this.studiesCenters = response.items;
    });

    this.constructorTemplate().then((response4) => {
      this.sisecService.hideSpinner();
      data.cols = response4.plantilla.cols;
      data.wscols = response4.plantilla.sizeCols;
      data.cols2 = response4.colecciones.cols;
      data.wscols2 = response4.colecciones.sizeCols;
      data.currentElements = this.centers;
    });

    return data;
  }
  async constructorTemplate(): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    const sizePlantilla = [
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
    ];
    for (let i = 0; i < this.centrosAtributos.length; i++) {
      estructura[`col${i + 1}`] = this.centrosAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [];
    colecciones.push(['Catalogos', 'Opciones']);

    for (const c of this.centers) {
      colecciones.push(['Centro', c.nombre]);
    }

    for (const s of this.studies) {
      colecciones.push(['Estudios', s.identificador]);
    }
    const sizeColecciones = [{ wch: 20 }, { wch: 40 }, { wch: 25 }];
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
  async validateMassUpload(centers: any[]): Promise<any> {
    const centersWithError: any = [];
    for (const center of centers) {
      center.validatedError = true;
      center.errorDecription = {};
      if (!center.studyID) {
        center.validatedError = false;
        center.errorDecription.studyID = ['Este campo es obligatorio'];
      } else {
        const study = this.studies.find(
          (x) => x.identificador === center.studyID
        );
        if (study?.id) {
          await this.studiesService
            .listCentersByStudyID(study.id)
            .then((response) => {
              const exist = response.items.findIndex(
                (x) => x.center.nombre === center.centerID
              );
              if (exist !== -1) {
                center.action = 'Actualizar';
                center.id = response.items[exist].id;
                center.expectedVersion = response.items[exist].version;
              } else {
                center.action = 'Crear';
              }
            });
        } else {
          center.validatedError = false;
          center.errorDecription.studyID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }
      const fechaCentros = [
        'fechaRecepcionPaquete',
        'fechaRecepcionContrato',
        'fechaFirmaContrato',
        'fechaFirmaContratoPatrocinador',
        'fechaAprobacionInvima',
        'fechaActivacionCentro',
        'fechaPrimerPacienteSeleccionado',
        'fechaPrimerPacienteAleatorizado',
      ];
      for (const atributo of fechaCentros) {
        if (center[atributo]) {
          if (!this.massUploadService.isValidDate(center[atributo])) {
            const x = atributo + 'IsValid';
            center.errorDecription[x] = [false];
            center.validatedError = false;
            center.errorDecription[atributo] = [
              'El formato de la fecha es inválido',
            ];
          } else {
            const x = atributo + 'IsValid';
            center.errorDecription[x] = [true];
          }
        }
      }
      if (center.fechaRecepcionPaquete && center.fechaRecepcionContrato) {
        if (
          center.fechaRecepcionPaquete.getTime() >
          center.fechaRecepcionContrato.getTime()
        ) {
          center.validatedError = false;
          if (center.errorDecription.hasOwnProperty('fechaRecepcionContrato')) {
            center.errorDecription.fechaRecepcionContrato.push(
              'La fecha de recepción del contrato debe ser mayor a la fecha fecha recepción paquete'
            );
          } else {
            center.errorDecription.fechaRecepcionContrato = [
              'La fecha de recepción del contrato debe ser mayor a la fecha fecha recepción paquete',
            ];
          }
        }
      }
      if (center.fechaRecepcionPaquete && center.fechaFirmaContrato) {
        if (
          center.fechaRecepcionPaquete.getTime() >
          center.fechaFirmaContrato.getTime()
        ) {
          center.validatedError = false;
          if (center.errorDecription.hasOwnProperty('fechaFirmaContrato')) {
            center.fechaFirmaContrato.push(
              'La fecha de firma del contrato debe ser mayor a la fecha fecha recepción paquete'
            );
          } else {
            center.errorDecription.fechaFirmaContrato = [
              'La fecha de firma del contrato debe ser mayor a la fecha fecha recepción paquete',
            ];
          }
        }
      }
      if (center.fechaRecepcionPaquete && center.fechaAprobacionInvima) {
        if (
          center.fechaRecepcionPaquete.getTime() >
          center.fechaAprobacionInvima.getTime()
        ) {
          center.validatedError = false;
          if (center.errorDecription.hasOwnProperty('fechaAprobacionInvima')) {
            center.errorDecription.fechaAprobacionInvima.push(
              'La fecha de aprobación de invima debe ser mayor a la fecha fecha recepción paquete'
            );
          } else {
            center.errorDecription.fechaAprobacionInvima = [
              'La fecha de aprobación de invima debe ser mayor a la fecha fecha recepción paquete',
            ];
          }
        }
      }
      if (center.fechaRecepcionPaquete && center.fechaActivacionCentro) {
        if (
          center.fechaRecepcionPaquete.getTime() >
          center.fechaActivacionCentro.getTime()
        ) {
          center.validatedError = false;
          if (center.errorDecription.hasOwnProperty('fechaActivacionCentro')) {
            center.errorDecription.fechaActivacionCentro.push(
              'La fecha activación centro debe ser mayor a la fecha fecha recepción paquete'
            );
          } else {
            center.errorDecription.fechaActivacionCentro = [
              'La fecha activación centro debe ser mayor a la fecha fecha recepción paquete',
            ];
          }
        }
      }
      if (
        center.fechaRecepcionPaquete > center.fechaPrimerPacienteSeleccionado
      ) {
        if (
          center.fechaRecepcionPaquete.getTime() >
          center.fechaPrimerPacienteSeleccionado.getTime()
        ) {
          center.validatedError = false;
          if (
            center.errorDecription.hasOwnProperty(
              'fechaPrimerPacienteSeleccionado'
            )
          ) {
            center.errorDecription.fechaPrimerPacienteSeleccionado.push(
              'La fecha primer paciente seleccionado debe ser mayor a la fecha fecha recepción paquete'
            );
          } else {
            center.errorDecription.fechaPrimerPacienteSeleccionado = [
              'La fecha primer paciente seleccionado debe ser mayor a la fecha fecha recepción paquete',
            ];
          }
        }
      }
      if (!center.centerID) {
        center.validatedError = false;
        center.errorDecription.centerID = ['Este campo es obligatorio'];
      } else {
        const exist = this.centers.findIndex(
          (x) => x.nombre === center.centerID
        );
        if (exist === -1) {
          center.validatedError = false;
          center.errorDecription.centerID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }
      centersWithError.push(center);
    }
    return {
      dataPrivew: centersWithError,
      itemsTable: this.centrosAtributos,
    };
  }
  saveAndUpdateCenters(centers): void {
    const allCentersPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando centros...');
    for (const c of centers) {
      const centerID = this.centers.find((x) => x.nombre === c.centerID);
      c.centerID = centerID.id;
      const study = this.studies.find((x) => x.identificador === c.studyID);
      c.studyId = study.id;
      const newCenter = this.formatInput(c);
      if (newCenter.action === 'Crear') {
        delete newCenter.expectedVersion;
        delete newCenter.action;
        totalCreated++;
        allCentersPromise.push(
          this.centersService.createStudyCenter(newCenter).then((response) => {
            logger.debug('createStudyCenter response', response);
            allCentersPromise.push(
              this.calculateDatesService
                .setDatesToStudy(study.id)
                .then((response2) => {
                  logger.debug('createStudyCenter response', response2);
                })
            );
          })
        );
      } else {
        delete newCenter.action;
        totalUpdated++;
        allCentersPromise.push(
          this.centersService.updateStudyCenter(newCenter).then((response) => {
            logger.debug('updateStudyCenter response', response);
            allCentersPromise.push(
              this.calculateDatesService
                .setDatesToStudy(study.id)
                .then((response2) => {
                  logger.debug('updateStudyCenter response', response2);
                })
            );
          })
        );
      }
    }
    Promise.all(allCentersPromise)
      .then(() => {
        if (totalCreated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa',
            detail: 'Centros creados: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Centros actualizados: ' + totalUpdated,
          });
        }
        this.router.navigate(['studies']);
      })
      .catch((error) => {
        logger.error('Massive contract load error', error);
      })
      .finally(() => this.sisecService.hideSpinner());
  }
  formatInput(object): any {
    return {
      cantidadPacientesIncluidos: object.cantidadPacientesIncluidos || null,
      cantidadPacientesPrevistos: object.cantidadPacientesPrevistos || null,
      centerID: object.centerID,
      costoPorPaciente: object.costoPorPaciente || null,
      estado: EntityState.ACTIVE,
      fechaActivacionCentro: object.fechaActivacionCentro || '',
      fechaAprobacionInvima: object.fechaAprobacionInvima || '',
      fechaFirmaContrato: object.fechaFirmaContrato || '',
      fechaFirmaContratoPatrocinador:
        object.fechaFirmaContratoPatrocinador || '',
      fechaPrimerPacienteAleatorizado:
        object.fechaPrimerPacienteAleatorizado || '',
      fechaPrimerPacienteSeleccionado:
        object.fechaPrimerPacienteSeleccionado || '',
      fechaRecepcionContrato: object.fechaRecepcionContrato || '',
      fechaRecepcionPaquete: object.fechaRecepcionPaquete || '',
      id: object.id || null,
      studyID: object.studyId,
      user: this.authService.getUsername() || null,

      action: object.action,
      expectedVersion: object.expectedVersion || 0,
    };
  }
}
