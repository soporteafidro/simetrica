import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  AddendaByStudyQuery,
  CreateAddendumInput,
  EntityState,
  GetAddendumQuery,
  GetStudyQuery,
  TimeRecordInput,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from 'src/app/studies/studies.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { es } from 'src/locale/es';
import { AddendumsService } from '../addendums.service';
const logger = new Logger('addendum-add-edit');

@Component({
  selector: 'app-addendum-add-edit',
  templateUrl: './addendum-add-edit.component.html',
  styleUrls: ['./addendum-add-edit.component.scss'],
})
export class AddendumAddEditComponent implements OnInit {
  constructor(
    private sisec: SisecService,
    private config: DynamicDialogConfig,
    private addendumsService: AddendumsService,
    private studiesService: StudiesService,
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  @ViewChild('f', { static: true }) addendumForm: NgForm;

  addendum: CreateAddendumInput = {
    id: null,
    studyID: null,
    descripcion: null,
    fechaCasaMatriz: null,
    fechaRecepcionPaquete: null,
    fechaVersionEspanol: null,
    primerPaisImplementacion: null,
    fechaImplementacionPais: null,
    estado: EntityState.ACTIVE,
    user: null,
    tiemposInvima: null,
  };

  fechaCasaMatriz: Date = null;
  fechaRecepcionPaquete: Date = null;
  fechaVersionEspanol: Date = null;
  fechaImplementacionPais: Date = null;
  currentDate: Date;
  es = null;

  listaPaises = [];
  addendums = null;
  editMode = false;
  expectedVersion: number;
  isEdit: false;
  study: GetStudyQuery;

  ngOnInit(): void {
    this.loadVariables();
    this.loadStudy();
    this.editMode = this.config.data?.editMode;
    if (this.editMode) {
      this.loadAddendum();
    } else {
      this.loadAddendumsForThisStudy();
    }
  }

  loadVariables(): void {
    this.es = es;
    this.addendum.studyID = this.config.data?.studyId;
    this.addendum.id = this.config.data?.addendumId;
    this.currentDate = new Date();
    this.listaPaises = this.sisec.listaPaises.map((p) => {
      return {
        label: p.name,
        value: p.name,
      };
    });
  }

  loadStudy(): void {
    this.studiesService
      .getStudy(this.addendum.studyID)
      .then((response: GetStudyQuery) => {
        logger.debug('getStudy response', response);
        this.study = response;
      })
      .catch((error) => logger.error('getStudy error', error));
  }

  loadAddendum(): void {
    this.sisec.showSpinner('Consultando enmienda...');
    this.addendumsService
      .getAddendum(this.addendum.id)
      .then((response: GetAddendumQuery) => {
        logger.debug('getAddendum response', response);
        this.expectedVersion = response.version;
        delete response.centers;
        delete response.study;
        delete response.invimaIterations;
        delete response.tiemposInvima.__typename;
        this.sisec.cleanQueryResponse(response);
        this.addendum = response;
        this.setDatesVariables();
        this.loadAddendumsForThisStudy();
      })
      .catch((error) => logger.error('getAddendum error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  setDatesVariables(): void {
    if (this.addendum.fechaCasaMatriz) {
      this.fechaCasaMatriz = new Date(this.addendum.fechaCasaMatriz);
    }
    if (this.addendum.fechaRecepcionPaquete) {
      this.fechaRecepcionPaquete = new Date(
        this.addendum.fechaRecepcionPaquete
      );
    }
    if (this.addendum.fechaVersionEspanol) {
      this.fechaVersionEspanol = new Date(this.addendum.fechaVersionEspanol);
    }
    if (this.addendum.fechaImplementacionPais) {
      this.fechaImplementacionPais = new Date(
        this.addendum.fechaImplementacionPais
      );
    }
  }

  setDatesBackToModel(): void {
    this.addendum.fechaCasaMatriz = this.fechaCasaMatriz?.toString()
      ? this.fechaCasaMatriz?.toString()
      : '';
    this.addendum.fechaRecepcionPaquete = this.fechaRecepcionPaquete?.toString()
      ? this.fechaRecepcionPaquete?.toString()
      : '';
    this.addendum.fechaVersionEspanol = this.fechaVersionEspanol?.toString()
      ? this.fechaVersionEspanol?.toString()
      : '';
    this.addendum.fechaImplementacionPais =
      this.fechaImplementacionPais?.toString()
        ? this.fechaImplementacionPais?.toString()
        : '';
  }

  onSubmit(form: NgForm): void {
    this.validateAllDates(form);

    if (form.valid) {
      if (!this.isDuplicate()) {
        this.setDatesBackToModel();
        this.createTiemposInvima();

        this.addendum.descripcion = this.sisec.toUpperCaseFirstLetter(this.addendum.descripcion);
        if (this.editMode) {
          this.updateAddendum();
        } else {
          this.createAddendum();
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar enmienda',
          detail: `Ya existe una enmienda con la descripción ingresada`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('Enmiendas');
    }
  }

  updateAddendum(): void {
    const updateAddendumInput =
      this.addendumsService.generateAddendumUpdateCreateInput(
        this.addendum,
        this.expectedVersion
      );
    this.sisec.showSpinner('Guardando...');
    logger.debug('UpdateAddendum input', updateAddendumInput);
    this.addendumsService
      .updateAddendum(updateAddendumInput)
      .then((response) => {
        logger.debug('UpdateAddendum response', response);
        this.ref.close('actualizada');
      })
      .catch((error) => {
        logger.error('UpdateAddendum error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  createTiemposInvima(): void {
    if (this.fechaRecepcionPaquete || this.fechaImplementacionPais) {
      let tiemposInvima: TimeRecordInput = {
        nombre: null,
        dias: null,
        diasPatrocinador: null,
        mes: null,
        anho: null,
        fechaInicial: this.addendum.fechaRecepcionPaquete
          ? this.addendum.fechaRecepcionPaquete
          : null,
        fechaFinal: this.addendum.fechaImplementacionPais
          ? this.addendum.fechaImplementacionPais
          : null,
      };
      this.addendum.tiemposInvima = tiemposInvima;
    }
  }

  createAddendum(): void {
    this.sisec.showSpinner('Creando enmienda...');
    logger.debug('createAddendum input', this.addendum);
    this.addendumsService
      .createAddendum(this.addendum)
      .then((response) => {
        logger.debug('createAddendum response', response);
        this.addendum.id = response.id;
        this.ref.close(this.addendum);
      })
      .catch((error) => {
        logger.error('createAddendum error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  loadAddendumsForThisStudy(): void {
    this.sisec.showSpinner('Consultando enmiendas asociadas...');
    this.addendumsService
      .listAddendumsByStudy(this.addendum.studyID)
      .then((response: AddendaByStudyQuery) => {
        logger.debug('listAddendumsByStudy response', response);
        this.addendums = this.sisec.ordenarPorFechaCreacion(response.items);
      })
      .catch((error) => {
        logger.error('listAddendumsByStudy error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const addendums = this.addendums.filter(
        (x) => x.descripcion === this.addendum.descripcion
      );
      if (addendums.length > 1) {
        return true;
      } else if (addendums.length == 1) {
        return addendums[0].id != this.addendum.id;
      } else {
        return false;
      }
    } else {
      console.log(this.addendums);
      return (
        this.addendums.findIndex(
          (x) =>
            x.descripcion.toUpperCase().trim() ===
              this.addendum.descripcion.toUpperCase().trim() ||
            x.fechaCasaMatriz === this.addendum.fechaCasaMatriz
        ) !== -1
      );
    }
  }

  validateAllDates(studyForm: NgForm): void {
    let fechas = [
      {
        key: 'fecha de sometimiento a INVIMA',
        value: this.study.fechaDeSometimientoEstudioInvima,
      },
      { key: 'fecha de enmienda casa matriz', value: this.fechaCasaMatriz },
      {
        key: 'fecha de recepción del paquete',
        value: this.fechaRecepcionPaquete,
      },
      { key: 'fecha de versión en español', value: this.fechaVersionEspanol },
    ];

    CommonFunctionsService.validateDates(
      studyForm,
      'fechaCasaMatriz',
      0,
      1,
      fechas
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaRecepcionPaquete',
      0,
      2,
      fechas
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaVersionEspanol',
      0,
      3,
      fechas
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaImplementacionPais',
      0,
      4,
      fechas
    );
  }
}
