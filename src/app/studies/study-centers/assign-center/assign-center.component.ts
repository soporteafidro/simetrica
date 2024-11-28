import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CenterAddEditComponent } from 'src/app/centers/center-add-edit/center-add-edit.component';
import { CentersService } from 'src/app/centers/centers.service';
import { CreateStudyCenterInput, EntityState, GetStudyCenterQuery, GetStudyQuery, ListCentersQuery, ListStudyCentersQuery } from 'src/app/services/API.service';
import { CalculateDatesService } from 'src/app/services/calculate-dates.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies.service';
const logger = new Logger('assign-center');

@Component({
  selector: 'app-assign-center',
  templateUrl: './assign-center.component.html',
  styleUrls: ['./assign-center.component.scss']
})
export class AssignCenterComponent implements OnInit {

  constructor(
    private centersService: CentersService,
    private studiesService: StudiesService,
    private calculateDatesService: CalculateDatesService,
    private sisec: SisecService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private dialogService: DialogService,
    private messageService: MessageService) { }

  @ViewChild('f', { static: true }) sponsorForm: NgForm;

  centers: any[] = [];
  study: GetStudyQuery = null;
  isEdit = false;
  assignedCenters: any[] = [];


  fechaRecepcionPaquete: Date = null;
  fechaRecepcionContrato: Date = null;
  fechaFirmaContrato: Date = null;
  fechaFirmaContratoPatrocinador: Date = null;
  fechaAprobacionInvima: Date = null;
  fechaActivacionCentro: Date = null;
  fechaPrimerPacienteSeleccionado: Date = null;
  fechaPrimerPacienteAleatorizado: Date = null;
  minFechaPrimerPacienteAleatorizado: Date = null;
  currentDate: Date;
  es = null;
  expectedVersion: number;

  studyCenter: CreateStudyCenterInput = {
    id: null,
    studyID: null,
    centerID: null,
    costoPorPaciente: null,
    fechaRecepcionPaquete: null,
    fechaRecepcionContrato: null,
    fechaFirmaContrato: null,
    fechaFirmaContratoPatrocinador: null,
    fechaAprobacionInvima: null,
    fechaActivacionCentro: null,
    cantidadPacientesPrevistos: null,
    cantidadPacientesIncluidos: null,
    fechaPrimerPacienteSeleccionado: null,
    fechaPrimerPacienteAleatorizado: null,
    estado: EntityState.ACTIVE,
    user: null
  };

  ngOnInit(): void {
    this.es = es;
    this.studyCenter.studyID = this.config.data.studyId;
    this.isEdit = this.config.data.isEdit;
    this.currentDate = new Date();

    if (this.isEdit) {
      const studyCenterId = this.config.data.studyCenterId;
      this.loadStudyCenter(studyCenterId);
    } else {
      this.loadCenters();
    }
  }

  loadStudyCenter(id): void {
    this.sisec.showSpinner('Cargando datos...');
    this.centersService.getStudyCenter(id).then((response: GetStudyCenterQuery) => {
      logger.debug('getStudyCenter response', response);
      this.expectedVersion = response.version;
      this.sisec.cleanQueryResponse(response);
      this.studyCenter = response;
      this.setDatesVariables();
      this.loadCenters();
      this.loadStudy(this.studyCenter.studyID);
    })
      .catch(error => logger.error('getStudyCenter error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  onSubmit(form: NgForm): void {
    this.validateAllDates(form);

    if (form.valid) {
      this.setDatesBackToModel();
      if (this.isEdit) {
        this.updateStudyCenter();
      } else {
        this.createStudyCenter();
      }

    } else {
      this.sisec.showInvalidFormError('asociar centro');
    }
  }

  loadStudy(studyID: string): void {
    this.studiesService.getStudy(studyID).then((study: GetStudyQuery) => {
      this.study = study;
      this.minFechaPrimerPacienteAleatorizado = study.fechaFactibilidadColombia ? new Date(study.fechaFactibilidadColombia) : null;
    }).catch(error => {
      logger.error('getStudy error', error);
    });
  }

  updateStudyCenter(): void {
    const updateCenter = this.centersService.generateUpdateStudyCenterInput(this.studyCenter, this.expectedVersion);
    this.sisec.showSpinner('Actualizando centro...');
    this.centersService.updateStudyCenter(updateCenter)
      .then(response => {
        this.calculateDatesService.setDatesToStudy(this.studyCenter.studyID).then((res) => {
          this.ref.close('actualizado');
        }).finally(() => this.sisec.hideSpinner());
      })
      .catch(error => {
        logger.error('AssignCenter error', error);
      });

  }

  createStudyCenter(): void {
    this.sisec.showSpinner('Asociando centro...');
    this.centersService.createStudyCenter(this.studyCenter)
      .then(response => {
        this.calculateDatesService.setDatesToStudy(this.studyCenter.studyID).then(result => {
          this.ref.close('asociado');
        }).finally(() => this.sisec.hideSpinner());
      })
      .catch(error => {
        logger.error('AssignCenter error', error);
      });
  }

  loadCenters(): void {
    this.sisec.showSpinner('cargando datos...');
    this.centersService.listCenters()
      .then((response: ListCentersQuery) => {
        this.centers = response.items.map((center: any) => {
          return {
            label: center.nombre,
            value: center.id,
            centerID: center.id
          };
        });
        this.loadStudyCenters();
        this.loadStudy(this.studyCenter.studyID);
      })
      .catch(error => {
        logger.error('listCenters error', error);
      });
  }

  loadStudyCenters(): void {
    this.centersService.listStudyCentersByStudy(this.studyCenter.studyID)
      .then((thisStudyCenters: ListStudyCentersQuery) => {
        logger.debug('listStudyCenters response', thisStudyCenters);
        this.centers.forEach(center => {
          if (thisStudyCenters.items.filter(s => s.centerID === center.centerID).length > 0) {
            this.centers = this.centers.filter(f => f.centerID !== center.centerID || f.centerID === this.studyCenter.centerID);
          }
        });
      }).catch(error => {
        logger.error('listStudyCenters error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }


  onCancelar(): void {
    this.ref.close('cancelado');
  }

  openCreateCenterModal(): void {
    const ref = this.dialogService.open(CenterAddEditComponent, {
      header: 'Crear centro',
      width: '90%',
      data: {
        isModal: true
      },
      closeOnEscape: false,
      dismissableMask: false
    });
    ref.onClose.subscribe((center: any) => {
      if (center) {
        this.centers.push({
          label: center.nombre,
          value: center.id,
          centerID: center.id
        });

        this.studyCenter.centerID = center.id;
      }
    });
  }


  setDatesVariables(): void {
    if (this.studyCenter.fechaRecepcionPaquete) {
      this.fechaRecepcionPaquete = new Date(this.studyCenter.fechaRecepcionPaquete);
    }
    if (this.studyCenter.fechaRecepcionContrato) {
      this.fechaRecepcionContrato = new Date(this.studyCenter.fechaRecepcionContrato);
    }
    if (this.studyCenter.fechaFirmaContrato) {
      this.fechaFirmaContrato = new Date(this.studyCenter.fechaFirmaContrato);
    }
    if (this.studyCenter.fechaFirmaContratoPatrocinador) {
      this.fechaFirmaContratoPatrocinador = new Date(this.studyCenter.fechaFirmaContratoPatrocinador);
    }
    if (this.studyCenter.fechaAprobacionInvima) {
      this.fechaAprobacionInvima = new Date(this.studyCenter.fechaAprobacionInvima);
    }
    if (this.studyCenter.fechaActivacionCentro) {
      this.fechaActivacionCentro = new Date(this.studyCenter.fechaActivacionCentro);
    }
    if (this.studyCenter.fechaPrimerPacienteSeleccionado) {
      this.fechaPrimerPacienteSeleccionado = new Date(this.studyCenter.fechaPrimerPacienteSeleccionado);
    }
    if (this.studyCenter.fechaPrimerPacienteAleatorizado) {
      this.fechaPrimerPacienteAleatorizado = new Date(this.studyCenter.fechaPrimerPacienteAleatorizado);
    }

  }

  setDatesBackToModel(): void {
    this.studyCenter.fechaRecepcionPaquete = this.fechaRecepcionPaquete?.toString() ? this.fechaRecepcionPaquete?.toString() : '';
    this.studyCenter.fechaRecepcionContrato = this.fechaRecepcionContrato?.toString() ? this.fechaRecepcionContrato?.toString() : '';
    this.studyCenter.fechaFirmaContrato = this.fechaFirmaContrato?.toString() ? this.fechaFirmaContrato?.toString() : '';
    this.studyCenter.fechaFirmaContratoPatrocinador =
      this.fechaFirmaContratoPatrocinador?.toString() ? this.fechaFirmaContratoPatrocinador?.toString() : '';
    this.studyCenter.fechaAprobacionInvima = this.fechaAprobacionInvima?.toString() ? this.fechaAprobacionInvima?.toString() : '';
    this.studyCenter.fechaActivacionCentro = this.fechaActivacionCentro?.toString() ? this.fechaActivacionCentro?.toString() : '';
    this.studyCenter.fechaPrimerPacienteSeleccionado =
      this.fechaPrimerPacienteSeleccionado?.toString() ? this.fechaPrimerPacienteSeleccionado?.toString() : '';
    this.studyCenter.fechaPrimerPacienteAleatorizado =
      this.fechaPrimerPacienteAleatorizado?.toString() ? this.fechaPrimerPacienteAleatorizado?.toString() : '';
  }

  validateAllDates(studyForm: NgForm): void {

    const fechas = [{ key: 'fecha envió paquete', value: this.fechaRecepcionPaquete },
    { key: 'fecha de recepción de contrato', value: this.fechaRecepcionContrato },
    { key: 'fecha firma de contrato', value: this.fechaFirmaContrato },
    { key: 'fecha firma de contrato del patrocinador', value: this.fechaFirmaContratoPatrocinador },
    { key: 'fecha de sometimiento a INVIMA', value: this.study.fechaDeSometimientoEstudioInvima },
    { key: 'fecha aprobación INVIMA', value: this.fechaAprobacionInvima },
    { key: 'fecha de activación del centro', value: this.fechaActivacionCentro },
    { key: 'fecha primer paciente seleccionado', value: this.fechaPrimerPacienteSeleccionado }];

    CommonFunctionsService.validateDates(studyForm, 'fechaRecepcionContrato', 0, 1, fechas);
    CommonFunctionsService.validateDates(studyForm, 'fechaFirmaContrato', 0, 2, fechas);
    CommonFunctionsService.validateDates(studyForm, 'fechaFirmaContratoPatrocinador', 0, 3, fechas);
    CommonFunctionsService.validateDates(studyForm, 'fechaActivacionCentro', 0, 6, fechas);
    CommonFunctionsService.validateDates(studyForm, 'fechaPrimerPacienteSeleccionado', 0, 7, fechas);
    CommonFunctionsService.validateDates(studyForm, 'fechaPrimerPacienteAleatorizado', 0, 8, fechas);
  }

}
