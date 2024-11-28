import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { CentersService } from '../centers/centers.service';
import {
  EntityState,
  ListCommitteesQuery,
  ListStudyCenterCommitteesQuery,
  ListStudyCentersQuery,
  StudyCenterCommittee,
} from '../services/API.service';
import { Logger } from 'aws-amplify';
import { StudiesService } from '../studies/studies.service';
import { CommitteeService } from '../committee/committee.service';
import { SisecService } from '../services/sisec.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MassUploadService } from './mass-upload.service';
const logger = new Logger('mass-upload-committee');

@Injectable({
  providedIn: 'root',
})
export class MassUploadCommitteeService {
  centers: any = [];
  committees: any = [];
  studies: any = [];
  listStudyCenters: any = [];
  comitesAtributos = ['studyID', 'studyCenterID', 'committeeID'];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    private centersService: CentersService,
    private committeeService: CommitteeService,
    private studiesService: StudiesService,
    private sisecService: SisecService,
    private messages: MessageService,
    private massUploadService: MassUploadService,
    private router: Router
  ) {}
  async loadDataForCommittee(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Comite',
      currentElements: [],
    };

    await this.committeeService
      .listCommittees()
      .then((response: ListCommitteesQuery) => {
        logger.debug('listCommittees response', response);
        this.committees = response.items;
      })
      .catch((error) => {
        logger.error('listCommittees error', error);
      });

    await this.massUploadService.listStudy().then((response) => {
      logger.debug('listStudies response', response.items);
      this.studies = response.items;
    });

    await this.centersService.listCenters().then((response) => {
      this.centers = response.items;
    });

    await this.studiesService.listStudyCenters().then((response) => {
      this.listStudyCenters = response.items;
    });

    this.constructorTemplate().then((response) => {
      data.cols = response.plantilla.cols;
      data.wscols = response.plantilla.sizeCols;
      data.cols2 = response.colecciones.cols;
      data.wscols2 = response.colecciones.sizeCols;
      data.currentElements = this.committees;
    });

    return data;
  }
  async constructorTemplate(): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    const sizePlantilla = [{ wch: 20 }, { wch: 20 }, { wch: 20 }];
    for (let i = 0; i < this.comitesAtributos.length; i++) {
      estructura[`col${i}`] = this.comitesAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [];
    colecciones.push(['Catalogos', 'Opciones']);
    for (const s of this.studies) {
      colecciones.push(['Estudios', s.identificador]);
    }
    for (const c of this.committees) {
      colecciones.push(['Comité', c.nombre]);
    }
    for (const c of this.centers) {
      colecciones.push(['Centro', c.nombre]);
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
    let listCenters: any = [];
    for (const centerItem of centers) {
      centerItem.validatedError = true;
      centerItem.errorDecription = {};
      centerItem.action = 'Crear';
      let study;
      let center;
      let comite;
      if (!centerItem.studyID) {
        centerItem.validatedError = false;
        centerItem.errorDecription.studyID = ['Este campo es obligatorio'];
      } else {
        study = this.studies.find(
          (s) => s.identificador === centerItem.studyID
        );
        if (!study) {
          centerItem.validatedError = false;
          centerItem.errorDecription.studyID = [
            'Este estudio no existe por favor verificar ortografía, mayúsculas y minúsculas',
          ];
        }

        if (centerItem.studyCenterID && centerItem.committeeID && study) {
          await this.centersService
            .listStudyCentersByStudy(study.id)
            .then((response) => {
              const centroExiste = this.centers.find(
                (x) => centerItem.studyCenterID === x.nombre
              );
              if (centroExiste) {
                const i = response.items.findIndex(
                  (x) => centroExiste.id === x.centerID
                );
                if (i === -1) {
                  centerItem.validatedError = false;
                  if (
                    centerItem.errorDecription.hasOwnProperty('studyCenterID')
                  ) {
                    centerItem.errorDecription.studyCenterID.push(
                      'Este centro no esta asignado en el estudio seleccionado'
                    );
                  } else {
                    centerItem.errorDecription.studyCenterID = [
                      'Este centro no esta asignado en el estudio seleccionado',
                    ];
                  }
                }
              }
            });
        }
      }
      if (!centerItem.studyCenterID) {
        centerItem.validatedError = false;
        centerItem.errorDecription.studyCenterID = [
          'Este campo es obligatorio',
        ];
      } else {
        center = this.centers.find(
          (s) => s.nombre === centerItem.studyCenterID
        );
        if (!center) {
          centerItem.validatedError = false;
          if (centerItem.errorDecription.hasOwnProperty('studyCenterID')) {
            centerItem.errorDecription.studyCenterID.push(
              'Este centro no existe por favor verificar ortografía, mayúsculas y minúsculas'
            );
          } else {
            centerItem.errorDecription.studyCenterID = [
              'Este centro no existe por favor verificar ortografía, mayúsculas y minúsculas',
            ];
          }
        } else {
          const { items } = await this.studiesService
          .ListStudyCenterCommitteesByStudy(study.id);
          const studyCenterCommittees = items;
          const isStudyCenterCommitteesExist = studyCenterCommittees.find((StudyCenterCommittee: any) => {
            return StudyCenterCommittee.studyCenter.centerID === center.id
          });

          const centerExist = listCenters.find((c: any) => c.center === centerItem.studyCenterID && c.commite === centerItem.committeeID);

          if(isStudyCenterCommitteesExist || centerExist) {
            centerItem.validatedError = false;
            centerItem.errorDecription.studyCenterID = [
              'Este centro ya está asociado al comité',
            ];
          }
          listCenters.push({
            center: centerItem.studyCenterID,
            commite: centerItem.committeeID
          });
        }
      }
      if (!centerItem.committeeID) {
        centerItem.validatedError = false;
        centerItem.errorDecription.committeeID = ['Este campo es obligatorio'];
      } else {
        comite = this.committees.find(
          (s) => s.nombre === centerItem.committeeID
        );
        if (!comite) {
          centerItem.validatedError = false;
          if (centerItem.errorDecription.hasOwnProperty('committeeID')) {
            centerItem.errorDecription.committeeID.push(
              'Este comité no existe por favor verificar ortografía, mayúsculas y minúsculas'
            );
          } else {
            centerItem.errorDecription.committeeID = [
              'Este comité no existe por favor verificar ortografía, mayúsculas y minúsculas',
            ];
          }
        }
      }

      centersWithError.push(centerItem);
    }
    return { dataPrivew: centersWithError, itemsTable: this.comitesAtributos };
  }
  async saveAndUpdateCommittee(centers) {
    const allCentersPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando comites...');
    for await (const c of centers) {
      const estudio = this.studies.find((x) => x.identificador === c.studyID);
      const comite = this.committees.find((x) => x.nombre === c.committeeID);
      const center = this.listStudyCenters.find(
        (x: any) => {
          return x.center.nombre === c.studyCenterID &&
          x.study.identificador === c.studyID
        }
      );
      const newComite = {
        studyCenterID: center.id,
        committeeID: comite.id,
        estado: EntityState.ACTIVE,
        studyID: estudio.id,
        user: null,

        action: c.action,
      };
      if (newComite.action === 'Crear') {
        delete newComite.action;
        totalCreated++;
        allCentersPromise.push(
          this.studiesService
            .createStudyCenterCommittee(newComite)
            .then((response) => {
              logger.debug('createStudyCenterCommittee response', response);
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
            detail: 'Comites creados: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Comites actualizados: ' + totalUpdated,
          });
        }
        this.router.navigate(['studies']);
      })
      .catch((error) => {
        logger.error('Massive committee load error', error);
      })
      .finally(() => this.sisecService.hideSpinner());
  }
}
