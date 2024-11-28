import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SisecService } from '../services/sisec.service';
import { MassUploadService } from './mass-upload.service';

import { Logger } from 'aws-amplify';
import { StudiesService } from '../studies/studies.service';
import { CentersService } from '../centers/centers.service';
import { AddendumsService } from '../addendums/addendums.service';
import {
  CreateAddendumStudyCenterInput,
  EntityState,
  TimeRecordInput,
} from '../services/API.service';
const logger = new Logger('mass-upload-center-enmienda');

@Injectable({
  providedIn: 'root',
})
export class MassUploadCenterEnmiendaService {
  listStudyCenters: any[] = [];
  listAddendum: any[] = [];
  studies: any = [];
  centerEnmiendaAtributos = [
    'addendumID',
    'studyCenterID',
    'fechaEnvioCentro',
    'fechaReciboCentro',
    'fechaImplementacionCentro',
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private sisecService: SisecService,
    private messages: MessageService,
    private router: Router,
    private massUploadService: MassUploadService,
    private studiesService: StudiesService,
    private addendumsService: AddendumsService,
    private centersService: CentersService
  ) {}
  async loadDataForCentersEnmienda(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'centros-enmienda',
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

    this.constructorTemplate().then((response) => {
      data.cols = response.plantilla.cols;
      data.wscols = response.plantilla.sizeCols;
      data.cols2 = response.colecciones.cols;
      data.wscols2 = response.colecciones.sizeCols;
      data.currentElements = this.listStudyCenters;
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
    for (let i = 0; i < this.centerEnmiendaAtributos.length; i++) {
      estructura[`col${i}`] = this.centerEnmiendaAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [['Catalogos', 'Opciones']];

    for (const s of this.listStudyCenters) {
      colecciones.push(['studyCenterID', s.center.nombre]);
    }
    for (const s of this.listAddendum) {
      colecciones.push(['addendumID', s.descripcion]);
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
  async validateMassUpload(centersEnmiendas: any[]): Promise<any> {
    const centersEnmiendasWithError: any = [];
    for (const centerEnmienda of centersEnmiendas) {
      centerEnmienda.validatedError = true;
      centerEnmienda.errorDecription = {};
      centerEnmienda.action = 'Crear';

      const fechaCenterEnmienda = [
        'fechaEnvioCentro',
        'fechaReciboCentro',
        'fechaImplementacionCentro',
      ];
      for (const atributo of fechaCenterEnmienda) {
        if (centerEnmienda[atributo]) {
          if (!this.massUploadService.isValidDate(centerEnmienda[atributo])) {
            const x = atributo + 'IsValid';
            centerEnmienda.errorDecription[x] = [false];
            centerEnmienda.validatedError = false;
            centerEnmienda.errorDecription[atributo] = [
              'El formato de la fecha es inválido',
            ];
          } else {
            const x = atributo + 'IsValid';
            centerEnmienda.errorDecription[x] = [true];
          }
        }
      }

      if (!centerEnmienda.addendumID) {
        centerEnmienda.validatedError = false;
        centerEnmienda.errorDecription.addendumID = [
          'Este campo es obligatorio',
        ];
      } else {
        const addendum = this.listAddendum.find(
          (a) => a.descripcion === centerEnmienda.addendumID
        );
        if (!addendum) {
          centerEnmienda.validatedError = false;
          centerEnmienda.errorDecription.addendumID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }

      if (!centerEnmienda.studyCenterID) {
        centerEnmienda.validatedError = false;
        centerEnmienda.errorDecription.studyCenterID = [
          'Este campo es obligatorio',
        ];
      } else {
        const studyCenters = this.listStudyCenters.find(
          (s) => s.center.nombre === centerEnmienda.studyCenterID
        );
        if (!studyCenters) {
          centerEnmienda.validatedError = false;
          centerEnmienda.errorDecription.studyCenterID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }

      if (centerEnmienda.fechaEnvioCentro) {
        if (centerEnmienda.fechaReciboCentro) {
          if (
            centerEnmienda.fechaEnvioCentro.getTime() >
            centerEnmienda.fechaReciboCentro.getTime()
          ) {
            centerEnmienda.validatedError = true;
            if (
              centerEnmienda.errorDecription.hasOwnProperty('fechaReciboCentro')
            ) {
              centerEnmienda.errorDecription.fechaReciboCentro.push(
                'La fecha envío al centro no puede ser mayor a la fecha de recepción'
              );
            } else {
              centerEnmienda.errorDecription.fechaReciboCentro = [
                'La fecha envío al centro no puede ser mayor a la fecha de recepción',
              ];
            }
          }
        }
      }

      if (centerEnmienda.fechaReciboCentro) {
        if (centerEnmienda.fechaImplementacionCentro) {
          if (
            centerEnmienda.fechaReciboCentro.getTime() >
            centerEnmienda.fechaImplementacionCentro.getTime()
          ) {
            centerEnmienda.validatedError = true;
            if (
              centerEnmienda.errorDecription.hasOwnProperty(
                'fechaImplementacionCentro'
              )
            ) {
              centerEnmienda.errorDecription.fechaImplementacionCentro.push(
                'La fecha de recepción no puede ser mayor a la fecha de implementación'
              );
            } else {
              centerEnmienda.errorDecription.fechaImplementacionCentro = [
                'La fecha de recepción no puede ser mayor a la fecha de implementación',
              ];
            }
          }
        }
      }

      centersEnmiendasWithError.push(centerEnmienda);
    }
    return {
      dataPrivew: centersEnmiendasWithError,
      itemsTable: this.centerEnmiendaAtributos,
    };
  }
  saveAndUpdateCentersEnmienda(centersEnmiendas): void {
    const allCentersEnmiendasPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for (const ce of centersEnmiendas) {
      const addendum = this.listAddendum.find(
        (x) => ce.addendumID === x.descripcion
      );
      const studyCenter = this.listStudyCenters.find(
        (x) => x.center.nombre === ce.studyCenterID
      );
      let newCenterEnmienda: CreateAddendumStudyCenterInput = {
        addendumID: addendum.id,
        studyCenterID: studyCenter.id,
        fechaEnvioCentro: ce.fechaEnvioCentro,
        fechaReciboCentro: ce.fechaReciboCentro,
        fechaImplementacionCentro: ce.fechaImplementacionCentro,
        user: null,
        estado: EntityState.ACTIVE,
      };
      newCenterEnmienda = this.createTiemposInvima(newCenterEnmienda);

      if (ce.action === 'Crear') {
        totalCreated++;
        allCentersEnmiendasPromise.push(
          this.addendumsService
            .createAddendumStudyCenter(newCenterEnmienda)
            .then((response) => {
              logger.debug('createAddendumStudyCenter response', response);
            })
            .catch((error) => {
              logger.error('createAddendumStudyCenter error', error);
            })
        );
      }
    }
    Promise.all(allCentersEnmiendasPromise)
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
  createTiemposInvima(enmienda): any {
    if (enmienda.fechaRecepcionPaquete || enmienda.fechaImplementacionPais) {
      let tiemposInvima: TimeRecordInput = {
        nombre: null,
        dias: null,
        diasPatrocinador: null,
        mes: null,
        anho: null,
        fechaInicial: enmienda.fechaRecepcionPaquete
          ? enmienda.fechaRecepcionPaquete
          : null,
        fechaFinal: enmienda.fechaImplementacionPais
          ? enmienda.fechaImplementacionPais
          : null,
      };
      enmienda.tiemposInvima = tiemposInvima;
    }
    return enmienda;
  }
}
