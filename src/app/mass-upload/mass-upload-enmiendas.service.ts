import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { AddendumsService } from '../addendums/addendums.service';
import { InterruptionService } from '../interruption/interruption.service';
import {
  AddendaByStudyQuery,
  CreateAddendumInput,
  EntityState,
  TimeRecordInput,
} from '../services/API.service';
import { SisecService } from '../services/sisec.service';
import { StudiesService } from '../studies/studies.service';
import { MassUploadService } from './mass-upload.service';
const logger = new Logger('mass-upload-intections-invima');

@Injectable({
  providedIn: 'root',
})
export class MassUploadEnmiendasService {
  studies: any = [];
  listaPaises = this.sisecService.listaPaises.map((p) => {
    return {
      value: p.name,
    };
  });
  enmiendasAtributos = [
    'studyID',
    'descripcion',
    'primerPaisImplementacion',
    'fechaCasaMatriz',
    'fechaRecepcionPaquete',
    'fechaVersionEspanol',
    'fechaImplementacionPais',
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private sisecService: SisecService,
    private messages: MessageService,
    private router: Router,
    private massUploadService: MassUploadService,
    private studiesService: StudiesService,
    private addendumsService: AddendumsService
  ) {}
  async loadDataForEnmiendas(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Enmiendas',
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
    });

    return data;
  }
  async constructorTemplate(): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    const sizePlantilla = [
      { wch: 40 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
    ];
    for (let i = 0; i < this.enmiendasAtributos.length; i++) {
      estructura[`col${i}`] = this.enmiendasAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [['Catalogos', 'Opciones']];
    for (const s of this.studies) {
      colecciones.push(['Estudios', s.identificador]);
    }
    for (const c of this.listaPaises) {
      colecciones.push(['Pais', c.value]);
    }
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
  async validateMassUpload(enmiendas: any[]): Promise<any> {
    const enmiendasWithError: any = [];
    const currentDate = new Date();
    for (const enmienda of enmiendas) {
      enmienda.validatedError = true;
      enmienda.errorDecription = {};
      let study;
      let enmiendasForStudy = [];
      await this.addendumsService
        .listAddendumsByStudy(enmienda.studyID)
        .then((response: AddendaByStudyQuery) => {
          logger.debug('listAddendumsByStudy response', response);
          enmiendasForStudy = this.sisecService.ordenarPorFechaCreacion(
            response.items
          );
        })
        .catch((error) => {
          logger.error('listAddendumsByStudy error', error);
        });
      const exist = enmiendasForStudy.findIndex(
        (x) =>
          x.descripcion.toUpperCase().trim() ===
          enmienda.descripcion.toUpperCase().trim()
      );
      if (exist !== -1) {
        enmienda.action = 'Actualizar';
        enmienda.id = enmiendasForStudy[exist].id;
        enmienda.expectedVersion = enmiendasForStudy[exist].version;
      } else {
        enmienda.action = 'Crear';
      }
      if (!enmienda.descripcion) {
        enmienda.validatedError = false;
        enmienda.errorDecription.descripcion = ['Este campo es obligatorio'];
      }
      if (!enmienda.studyID) {
        enmienda.validatedError = false;
        enmienda.errorDecription.studyID = ['Este campo es obligatorio'];
      } else {
        study = this.studies.find((s) => s.identificador === enmienda.studyID);
        if (!study) {
          enmienda.validatedError = false;
          enmienda.errorDecription.studyID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }
      }
      if (enmienda.primerPaisImplementacion) {
        const paisExiste = this.listaPaises.findIndex(
          (x) => x.value === enmienda.primerPaisImplementacion
        );
        if (paisExiste === -1) {
          enmienda.validatedError = false;
          enmienda.errorDecription.primerPaisImplementacion = [
            'El país escrito no se encuentra en la lista de paises seleccionables por favor verificar ortografia',
          ];
        }
      }
      const fechaEnmiendas = [
        'fechaCasaMatriz',
        'fechaRecepcionPaquete',
        'fechaVersionEspanol',
        'fechaImplementacionPais',
      ];
      for (const atributo of fechaEnmiendas) {
        if (enmienda[atributo]) {
          if (!this.massUploadService.isValidDate(enmienda[atributo])) {
            const x = atributo + 'IsValid';
            enmienda.errorDecription[x] = [false];
            enmienda.validatedError = false;
            enmienda.errorDecription[atributo] = [
              'El formato de la fecha es inválido',
            ];
          } else {
            const x = atributo + 'IsValid';
            enmienda.errorDecription[x] = [true];

            if (enmienda[atributo].getTime() > currentDate.getTime()) {
              enmienda.validatedError = false;
              if (enmienda.errorDecription.hasOwnProperty(atributo)) {
                enmienda.errorDecription[atributo].push(
                  'No puede ser mayor a la fecha actual'
                );
              } else {
                enmienda.errorDecription[atributo] = [
                  'No puede ser mayor a la fecha actual',
                ];
              }
            }
          }
        }
      }

      enmiendasWithError.push(enmienda);
    }
    console.log(enmiendasWithError);
    return {
      dataPrivew: enmiendasWithError,
      itemsTable: this.enmiendasAtributos,
    };
  }
  saveAndUpdateEnmiendas(enmiendas): void {
    const allEnmiedasPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for (const i of enmiendas) {
      const estudio = this.studies.find((x) => x.identificador === i.studyID);
      let newEnmienda = {
        action: i.action,

        studyID: estudio.id,
        tiemposInvima: null,
        descripcion: i.descripcion.trim(),
        primerPaisImplementacion: i.primerPaisImplementacion || null,
        fechaCasaMatriz: i.fechaCasaMatriz || null,
        fechaRecepcionPaquete: i.fechaRecepcionPaquete || null,
        fechaVersionEspanol: i.fechaVersionEspanol || null,
        fechaImplementacionPais: i.fechaImplementacionPais || null,
        estado: EntityState.ACTIVE,
        user: null,
        expectedVersion: i.expectedVersion || null,
        id: i.id || null,
      };
      newEnmienda = this.createTiemposInvima(newEnmienda);
      newEnmienda.descripcion = this.sisecService.toUpperCaseFirstLetter(
        newEnmienda.descripcion
      );
      if (newEnmienda.action === 'Crear') {
        delete newEnmienda.action;
        delete newEnmienda.expectedVersion;
        totalCreated++;
        allEnmiedasPromise.push(
          this.addendumsService
            .createAddendum(newEnmienda)
            .then((response) => {
              logger.debug('createAddendum response', response);
            })
            .catch((error) => {
              logger.error('createAddendum error', error);
            })
        );
      } else {
        delete newEnmienda.action;
        const updateAddendumInput =
          this.addendumsService.generateAddendumUpdateCreateInput(
            newEnmienda,
            newEnmienda.expectedVersion
          );
        allEnmiedasPromise.push(
          this.addendumsService
            .updateAddendum(updateAddendumInput)
            .then((response) => {
              logger.debug('UpdateAddendum response', response);
            })
            .catch((error) => {
              logger.error('UpdateAddendum error', error);
            })
        );
      }
    }
    Promise.all(allEnmiedasPromise)
      .then(() => {
        if (totalCreated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa',
            detail: 'Enmiendas creadas: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Enmiendas actualizadas: ' + totalUpdated,
          });
        }
        this.router.navigate(['studies']);
      })
      .catch((error) => {
        logger.error('Massive committee load error', error);
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
