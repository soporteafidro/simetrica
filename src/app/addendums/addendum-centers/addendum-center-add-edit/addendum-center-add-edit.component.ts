import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CentersService } from 'src/app/centers/centers.service';
import {
  AddendumStudyCenterByAddendumQuery,
  CreateAddendumStudyCenterInput,
  EntityState,
  GetAddendumQuery,
  GetAddendumStudyCenterQuery,
  GetStudyQuery,
  StudyCenterByStudyQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from 'src/app/studies/studies.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { es } from 'src/locale/es';
import { AddendumsService } from '../../addendums.service';
const logger = new Logger('addendum-add-edit');

@Component({
  selector: 'app-addendum-center-add-edit',
  templateUrl: './addendum-center-add-edit.component.html',
  styleUrls: ['./addendum-center-add-edit.component.scss'],
})
export class AddendumCenterAddEditComponent implements OnInit {
  constructor(
    private sisec: SisecService,
    private config: DynamicDialogConfig,
    private addendumsService: AddendumsService,
    private studiesService: StudiesService,
    private ref: DynamicDialogRef,
    private dateIITPipe: DateIITPipe
  ) {}

  @ViewChild('f', { static: true }) addendumForm: NgForm;

  addendumStudyCenter: CreateAddendumStudyCenterInput = {
    id: null,
    addendumID: null,
    studyCenterID: null,
    fechaEnvioCentro: null,
    fechaReciboCentro: null,
    fechaImplementacionCentro: null,
    user: null,
    estado: EntityState.ACTIVE,
  };

  studyId = null;
  study: GetStudyQuery;
  addendum: GetAddendumQuery;

  fechaEnvioCentro: Date = null;
  fechaReciboCentro: Date = null;
  fechaImplementacionCentro: Date = null;
  currentDate: Date;
  es = null;

  editMode = false;
  expectedVersion: number;
  studyCenters = [];

  centroTooltip = null;
  selectedAddendumStudyCenter = null;

  ngOnInit(): void {
    this.loadVariables();
    this.loadStudy();
    this.loadAddendum();
    if (this.editMode) {
      this.selectedAddendumStudyCenter =
        this.config.data?.selectedAddendumStudyCenter;
      this.studyCenters.push({
        label: this.selectedAddendumStudyCenter.studyCenter.center.nombre,
        value: this.selectedAddendumStudyCenter.studyCenter.id,
        studyCenterID: this.selectedAddendumStudyCenter.studyCenter.id,
      });
      this.addendumStudyCenter.studyCenterID =
        this.selectedAddendumStudyCenter.studyCenter.id;
      this.loadEditAddendumStudyCenter();
    } else {
      this.studyCenters = this.config.data?.studyCenters;
    }
  }

  loadVariables(): void {
    this.es = es;
    this.addendumStudyCenter.addendumID = this.config.data?.addendumId;
    this.studyId = this.config.data?.studyId;
    this.editMode = this.config.data?.editMode;
    this.currentDate = new Date();
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

  loadAddendum(): void {
    this.addendumsService
      .getAddendum(this.addendumStudyCenter.addendumID)
      .then((response: GetAddendumQuery) => {
        logger.debug('geAddendum response', response);
        this.addendum = response;
      })
      .catch((error) => logger.error('getAddendum error', error));
  }

  loadEditAddendumStudyCenter(): void {
    this.sisec.showSpinner('Consultando datos...');
    this.addendumsService
      .getAddendumStudyCenter(this.selectedAddendumStudyCenter.id)
      .then((getAddendumStudyCenter: GetAddendumStudyCenterQuery) => {
        logger.debug('getAddendumStudyCenter response', getAddendumStudyCenter);
        CommonFunctionsService.copyMatchingKeyValues(
          this.addendumStudyCenter,
          getAddendumStudyCenter
        );
        this.expectedVersion = getAddendumStudyCenter.version;
        this.setDatesVariables();
      })
      .catch((error) => {
        logger.error('getAddendumStudyCenter error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  setDatesVariables(): void {
    if (this.addendumStudyCenter.fechaEnvioCentro) {
      this.fechaEnvioCentro = new Date(
        this.addendumStudyCenter.fechaEnvioCentro
      );
    }
    if (this.addendumStudyCenter.fechaReciboCentro) {
      this.fechaReciboCentro = new Date(
        this.addendumStudyCenter.fechaReciboCentro
      );
    }
    if (this.addendumStudyCenter.fechaImplementacionCentro) {
      this.fechaImplementacionCentro = new Date(
        this.addendumStudyCenter.fechaImplementacionCentro
      );
    }
  }

  setDatesBackToModel(): void {
    this.addendumStudyCenter.fechaEnvioCentro =
      this.fechaEnvioCentro?.toString()
        ? this.fechaEnvioCentro?.toString()
        : '';
    this.addendumStudyCenter.fechaReciboCentro =
      this.fechaReciboCentro?.toString()
        ? this.fechaReciboCentro?.toString()
        : '';
    this.addendumStudyCenter.fechaImplementacionCentro =
      this.fechaImplementacionCentro?.toString()
        ? this.fechaImplementacionCentro?.toString()
        : '';
  }

  onSubmit(form: NgForm): void {
    this.validateAllDates(form);

    if (form.valid) {
      this.setDatesBackToModel();
      if (this.editMode) {
        this.updateAddendumStudyCenter();
      } else {
        this.createAddendumStudyCenter();
      }
    } else {
      this.sisec.showInvalidFormError('Enmiendas');
    }
  }

  updateAddendumStudyCenter(): void {
    this.sisec.showSpinner('Guardando...');
    const updateAddendumStudyCenterInput: any = this.addendumStudyCenter;
    updateAddendumStudyCenterInput.expectedVersion = this.expectedVersion;
    this.addendumsService
      .updateAddendumStudyCenter(updateAddendumStudyCenterInput)
      .then((response) => {
        logger.debug('updateAddendumStudyCenter response', response);
        this.ref.close('actualizado');
      })
      .catch((error) => {
        logger.error('updateAddendumStudyCenter error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  createAddendumStudyCenter(): void {
    this.sisec.showSpinner('Creando...');
    logger.debug('createAddendumStudyCenter input', this.addendumStudyCenter);
    this.addendumsService
      .createAddendumStudyCenter(this.addendumStudyCenter)
      .then((response) => {
        logger.debug('createAddendumStudyCenter response', response);
        this.addendumStudyCenter.id = response.id;
        this.ref.close('creado');
      })
      .catch((error) => {
        logger.error('createAddendumStudyCenter error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  validateAllDates(studyForm: NgForm): void {
    const fechas = [
      {
        key: 'fecha de sometimiento a INVIMA',
        value: this.study.fechaDeSometimientoEstudioInvima,
      },
      {
        key: 'fecha de enmienda casa matriz',
        value: this.addendum.fechaCasaMatriz,
      },
      {
        key:
          'fecha de recepción del paquete (' +
          this.dateIITPipe.transform(this.addendum.fechaRecepcionPaquete) +
          ')',
        value: this.addendum.fechaRecepcionPaquete,
      },
      { key: 'fecha de envío al centro', value: this.fechaEnvioCentro },
      { key: 'fecha de recepción', value: this.fechaReciboCentro },
    ];

    CommonFunctionsService.validateDates(
      studyForm,
      'fechaEnvioCentro',
      0,
      3,
      fechas
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaReciboCentro',
      0,
      4,
      fechas
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaImplementacionCentro',
      0,
      5,
      fechas
    );
  }
}
