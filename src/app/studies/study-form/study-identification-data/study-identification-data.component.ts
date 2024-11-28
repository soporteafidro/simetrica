import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  CreateStudyInput,
  GetSponsorQuery,
  GetStudyQuery,
  ListSponsorsQuery,
  UpdateStudyInput,
} from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { CIE10Service } from 'src/app/services/CIE10.service';
import { SisecService } from 'src/app/services/sisec.service';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { ConstantService } from 'src/app/utils/constant.service';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies.service';
const logger = new Logger('study-identification-data');

@Component({
  selector: 'app-study-identification-data',
  templateUrl: './study-identification-data.component.html',
  styleUrls: ['./study-identification-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StudyIdentificationDataComponent implements OnInit {
  constructor(
    private sponsorsService: SponsorsService,
    private authService: AuthService,
    private constantService: ConstantService,
    private cie10Service: CIE10Service,
    private commonFunctionsService: CommonFunctionsService,
    private sisec: SisecService,
    private studiesService: StudiesService,
    private messageService: MessageService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) { }

  @Input() study: CreateStudyInput;
  @Output() onBtnAction = new EventEmitter<string>();
  @ViewChild('f', { static: true }) sponsorForm: NgForm;

  sponsors: any[] = [];
  cie10sRaw: any[] = [];
  cie10s: any[] = [];
  siNoRespuesta: any[];
  faseEstudio: any[];
  tipoEstudio: any[];
  tipoPoblacion: any[];
  areasTerapeuticas: any[];
  displayDialog: boolean;
  currentDate: Date;
  editMode = false;
  studyId = null;
  expectedVersion = null;
  isSponsorUser = false;
  duplicateMessage = null;

  fechaDeAprobacionCasaMatriz: Date = null;
  fechaDeFactibilidadEnColombia: Date = null;
  fechaSeleccionColombia: Date = null;
  fechaRecepcionFilialColombia: Date = null;
  fechaVersionEspaniol: Date = null;
  fechaPropuestaCierreReclutamiento: Date = null;
  es = null;
  display = false;
  displayDialoghelpPublicHealth = false;
  areasTerapeuticasSelected = null;

  ngOnInit(): void {
    this.loadConstants();
    this.currentDate = new Date();
    this.editMode = this.config?.data?.editMode;
    this.studyId = this.config?.data?.studyId;
    if (this.editMode && this.studyId) {
      this.loadEditStudy();
    } else {
      this.loadSponsors();
    }
    this.cie10s = this.cie10Service.listCIE10('A0');
  }

  loadEditStudy(): void {
    this.sisec.showSpinner('Consultando estudio para su edición');
    this.editMode = true;
    this.studiesService
      .getStudy(this.studyId)
      .then((response: GetStudyQuery) => {
        logger.debug('getStudy response', response);
        this.expectedVersion = response.version;
        this.sisec.cleanQueryResponse(response);
        this.study = response;
        this.areasTerapeuticasSelected =
          this.study.areasTerapeuticas.split(',');
        this.loadSponsors();
        this.setDatesVariables();
      })
      .catch((error) => logger.error('getStudy error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  setDatesVariables(): void {
    this.fechaDeAprobacionCasaMatriz = new Date(
      this.study.fechaAprobacionCasaMatriz
    );
    if (this.study.fechaFactibilidadColombia) {
      this.fechaDeFactibilidadEnColombia = new Date(
        this.study.fechaFactibilidadColombia
      );
    }
    if (this.study.fechaSeleccionColombia) {
      this.fechaSeleccionColombia = new Date(this.study.fechaSeleccionColombia);
    }
    if (this.study.fechaRecepcionFilialColombia) {
      this.fechaRecepcionFilialColombia = new Date(
        this.study.fechaRecepcionFilialColombia
      );
    }
    if (this.study.fechaVersionEspaniol) {
      this.fechaVersionEspaniol = new Date(this.study.fechaVersionEspaniol);
    }
    if (this.study.fechaPropuestaCierreReclutamiento) {
      this.fechaPropuestaCierreReclutamiento = new Date(
        this.study.fechaPropuestaCierreReclutamiento
      );
    }
  }

  loadSponsors(): void {
    if (this.authService.isSponsorUser()) {
      this.isSponsorUser = true;
      const sponsorId = this.authService.getUserSponsorId();
      this.study.sponsorID = sponsorId;
      this.sponsorsService
        .getSponsor(sponsorId)
        .then((sponsor: GetSponsorQuery) => {
          this.sponsors = [{ label: sponsor.nombre, value: sponsor.id }];
        });
    } else {
      this.sponsorsService
        .listSponsors()
        .then((response: ListSponsorsQuery) => {
          this.sponsors = response.items.map((sponsor: any) => {
            return {
              label: sponsor.nombre,
              value: sponsor.id,
            };
          });
          this.sponsors = this.sponsors.sort((a, b) =>
            this.commonFunctionsService.compareLabels(a, b)
          );
        });
    }
  }

  loadConstants(): void {
    this.siNoRespuesta = this.constantService.SINO_RESPUESTA;
    this.faseEstudio = this.constantService.FASE_ESTUDIO;
    this.tipoEstudio = this.constantService.TIPO_ESTUDIO;
    this.tipoPoblacion = this.constantService.TIPO_POBLACION;
    this.areasTerapeuticas = this.constantService.AREAS_TERAPEUTICAS;
    this.es = es;
  }

  searchCIE10(event): void {
    const word = event.query.toString();
    this.cie10s = this.cie10Service.listCIE10(word);
  }

  onSubmit(form: NgForm): void {
    logger.debug('study info', this.study);
    if (this.study.enColombia === 'Si') {
      this.validateAllDates(form);
    }

    if (form.valid) {
      this.isDuplicate()
        .then((response) => {
          if (response) {
            return this.messageService.add({
              severity: 'error',
              summary: 'Error en los datos de identificación',
              detail: this.duplicateMessage,
            });
          } else {
            this.setDatesBackToModel();
            this.study.areasTerapeuticas =
              this.areasTerapeuticasSelected.toString();
            if (this.editMode) {
              this.updateStudy();
            } else {
              this.onBtnAction.emit('next');
            }
          }
        })
        .finally(() => this.sisec.hideSpinner());
    } else {
      this.sisec.showInvalidFormError('datos de identificación');
    }
  }

  setDatesBackToModel(): void {
    this.study.fechaFactibilidadColombia =
      this.fechaDeFactibilidadEnColombia?.toString()
        ? this.fechaDeFactibilidadEnColombia?.toString()
        : '';
    this.study.fechaAprobacionCasaMatriz =
      this.fechaDeAprobacionCasaMatriz?.toString();
    this.study.fechaSeleccionColombia = this.fechaSeleccionColombia?.toString();
    this.study.fechaRecepcionFilialColombia =
      this.fechaRecepcionFilialColombia?.toString()
        ? this.fechaRecepcionFilialColombia?.toString()
        : '';
    this.study.fechaVersionEspaniol = this.fechaVersionEspaniol?.toString()
      ? this.fechaVersionEspaniol?.toString()
      : '';
    this.study.fechaPropuestaCierreReclutamiento =
      this.fechaPropuestaCierreReclutamiento?.toString()
        ? this.fechaPropuestaCierreReclutamiento?.toString()
        : '';
  }

  loadStudies(): Promise<any> {
    return this.studiesService
      .listStudies()
      .then((studies) => {
        logger.debug('studiesList', studies.items);
        return studies.items;
      })
      .catch((error) => {
        logger.error('liststudies error', error);
      });
  }

  isDuplicate(): Promise<boolean> {
    return this.loadStudies().then((studiesList) => {
      if (studiesList) {
        const verification1 = (x) =>
          x.identificadorNCT === this.study.identificadorNCT &&
          x.id !== this.study.id;
        const verification2 = (x) =>
          x.sponsorID === this.study.sponsorID &&
          x.identificador === this.study.identificador &&
          x.id !== this.study.id;
        const verification3 = (x) =>
          x.sponsorID === this.study.sponsorID &&
          x.titulo === this.study.titulo &&
          x.id !== this.study.id;
        const message1 = `Ya existe un estudio con el Identificador de base internacional: ${this.study.identificadorNCT}.`;
        const message2 = `Ya existe un estudio para el patrocinador con el mismo identificador: ${this.study.identificador}.`;
        const message3 = `Ya existe un estudio para el patrocinador con el mismo título: ${this.study.titulo}.`;

        if (this.editMode) {
          const validation1 = studiesList.filter(verification1);
          const validation2 = studiesList.filter(verification2);
          const validation3 = studiesList.filter(verification3);
          if (validation1.length >= 1) {
            this.duplicateMessage = message1;
            return true;
          } else if (validation2.length >= 1) {
            this.duplicateMessage = message2;
            return true;
          } else if (validation3.length >= 1) {
            this.duplicateMessage = message3;
            return true;
          } else {
            return false;
          }
        } else {
          const validation1 = studiesList.findIndex(verification1) !== -1;
          const validation2 = studiesList.findIndex(verification2) !== -1;
          const validation3 = studiesList.findIndex(verification3) !== -1;
          if (validation1) {
            this.duplicateMessage = message1;
            return true;
          } else if (validation2) {
            this.duplicateMessage = message2;
            return true;
          } else if (validation3) {
            this.duplicateMessage = message3;
            return true;
          } else {
            return false;
          }
        }
      }
    });
  }

  showDialog(): void {
    this.displayDialog = true;
  }

  updateStudy(): void {
    const updateStudyInput = this.studiesService.generateUpdateInput(
      this.study,
      this.expectedVersion
    );
    this.sisec.showSpinner('Guardando...');
    logger.debug('UpdateStudy input', updateStudyInput);
    this.studiesService
      .updateStudy(updateStudyInput)
      .then((response) => {
        logger.debug('updateStudy response', response);
        this.ref.close('actualizado');
        return this.messageService.add({
          severity: 'success',
          summary: 'Datos de identificación actualizados exitosamente',
          detail: 'Los datos de identificación fueron actualizados con éxito.',
        });
      })
      .catch((error) => {
        logger.error('updateStudy error', error);
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
        key: 'fecha de aprobación protocolo casa matriz',
        value: this.fechaDeAprobacionCasaMatriz,
      },
      {
        key: 'fecha de factibilidad en Colombia',
        value: this.fechaDeFactibilidadEnColombia,
      },
      {
        key: 'fecha de selección de Colombia',
        value: this.fechaSeleccionColombia,
      },
      {
        key: 'fecha de recepción protocolo filial Colombia',
        value: this.fechaRecepcionFilialColombia,
      },
      { key: 'fecha de versión en español', value: this.fechaVersionEspaniol },
    ];

    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPropuestaCierreReclutamiento',
      0,
      5,
      fechas
    );
  }

  showDialoghelpPublicealth(): void {
    this.displayDialoghelpPublicHealth = true;
  }
}
