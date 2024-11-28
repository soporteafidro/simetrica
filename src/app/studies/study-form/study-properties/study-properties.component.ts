import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { CroAddEditComponent } from 'src/app/cro/cro-add-edit/cro-add-edit.component';
import { CroService } from 'src/app/cro/cro.service';
import {
  CreateStudyInput,
  GetStudyQuery,
  ListCROsQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { ConstantService } from 'src/app/utils/constant.service';
import { es } from 'src/locale/es';
import { StudiesService } from '../../studies.service';
const logger = new Logger('study-properties');

@Component({
  selector: 'app-study-properties',
  templateUrl: './study-properties.component.html',
  styleUrls: ['./study-properties.component.scss'],
})
export class StudyPropertiesComponent implements OnInit {
  @Input() study: CreateStudyInput;
  @Output() onBtnAction = new EventEmitter<string>();

  fechaDeLicenciaMedicamentos: Date = null;
  fechaDeImportacionEnBodegaMedicamentos: Date = null;
  fechaPrimeraImportacionMedicamentos: Date = null;
  fechaDeLicenciaKit: Date = null;
  fechaDeImportacionEnBodegaKit: Date = null;
  fechaPrimeraImportacionKit: Date = null;
  currentDate: Date;
  es = null;

  siNoRespuesta: any[];
  alcanceEstudio: any[];
  cros: any[] = [];
  CROSeleccionado = false;
  expectedVersion: number;
  studyId: string;
  editMode = false;

  constructor(
    private constantService: ConstantService,
    private dialogService: DialogService,
    private croService: CroService,
    private commonFunctionsService: CommonFunctionsService,
    private messageService: MessageService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private sisec: SisecService,
    private studiesService: StudiesService
  ) {}

  ngOnInit(): void {
    this.loadConstants();
    this.loadCROS();
    this.currentDate = new Date();

    this.editMode = this.config?.data?.editMode;
    this.studyId = this.config?.data?.studyId;
    if (this.editMode && this.studyId) {
      this.loadEditStudy();
    } else {
      this.study.tieneCRO = this.siNoRespuesta[1].key;
    }
  }

  loadConstants(): void {
    this.siNoRespuesta = this.constantService.SINO_RESPUESTA;
    this.alcanceEstudio = this.constantService.ALCANCE_ESTUDIO;
    this.es = es;
  }

  loadCROS(): void {
    this.croService.listCrO().then((response: ListCROsQuery) => {
      this.cros = response.items.map((cro: any) => {
        return {
          label: cro.nombre,
          value: cro.id,
        };
      });
      this.cros = this.cros.sort((a, b) =>
        this.commonFunctionsService.compareLabels(a, b)
      );
    });
  }

  onSubmit(form: NgForm): void {
    this.validateAllDates(form);

    if (this.areValidCodigosATC()) {
      if (form.valid) {
        this.setDatesBackToModel();
        logger.log(this.study);
        if (this.editMode) {
          this.updateStudy();
        } else {
          this.onBtnAction.emit('next');
        }
      }
    } else {
      return this.messageService.add({
        severity: 'error',
        summary: 'Error al verificar los códigos ATC',
        detail: `Por favor, ingrese cada código ATC con el siguiente formato como ejemplo: "A01AD05".`,
      });
    }
  }

  prevStep(): void {
    this.onBtnAction.emit('prev');
  }

  areValidCodigosATC(): boolean {
    let isValid = true;
    if (this.study.codigosATC) {
      const codigosATC = this.study.codigosATC
        .toString()
        .split(',')
        .map((codATC) => codATC.trim().replace(/\s\s+/g, ' '));
      this.study.codigosATC = codigosATC;
      for (const codigoATC of codigosATC) {
        const firstLetter = codigoATC.substr(0, 1);
        const fristTwoNumbers = codigoATC.substr(1, 2);
        const secondTwoLetters = codigoATC.substr(3, 2);
        const secondTwoNumbers = codigoATC.substr(5, 2);

        if (
          !(
            this.commonFunctionsService.onlyLetters(firstLetter) &&
            this.commonFunctionsService.onlyLetters(secondTwoLetters) &&
            this.commonFunctionsService.onlyNumbers(fristTwoNumbers) &&
            this.commonFunctionsService.onlyNumbers(secondTwoNumbers)
          )
        ) {
          isValid = false;
          break;
        }
      }
    }
    return isValid;
  }

  setDatesBackToModel(): void {
    this.study.fechaDeLicenciaMedicamentos =
      this.fechaDeLicenciaMedicamentos?.toString()
        ? this.fechaDeLicenciaMedicamentos?.toString()
        : '';
    this.study.fechaDeImportacionEnBodegaMedicamentos =
      this.fechaDeImportacionEnBodegaMedicamentos?.toString()
        ? this.fechaDeImportacionEnBodegaMedicamentos?.toString()
        : '';
    this.study.fechaPrimeraImportacionMedicamentos =
      this.fechaPrimeraImportacionMedicamentos?.toString()
        ? this.fechaPrimeraImportacionMedicamentos?.toString()
        : '';

    this.study.fechaDeLicenciaKit = this.fechaDeLicenciaKit?.toString()
      ? this.fechaDeLicenciaKit?.toString()
      : '';
    this.study.fechaDeImportacionEnBodegaKit =
      this.fechaDeImportacionEnBodegaKit?.toString()
        ? this.fechaDeImportacionEnBodegaKit?.toString()
        : '';
    this.study.fechaPrimeraImportacionKit =
      this.fechaPrimeraImportacionKit?.toString()
        ? this.fechaPrimeraImportacionKit?.toString()
        : '';
  }

  setDatesVariables(): void {
    if (this.study.fechaDeLicenciaMedicamentos) {
      this.fechaDeLicenciaMedicamentos = new Date(
        this.study.fechaDeLicenciaMedicamentos
      );
    }
    if (this.study.fechaDeImportacionEnBodegaMedicamentos) {
      this.fechaDeImportacionEnBodegaMedicamentos = new Date(
        this.study.fechaDeImportacionEnBodegaMedicamentos
      );
    }
    if (this.study.fechaPrimeraImportacionMedicamentos) {
      this.fechaPrimeraImportacionMedicamentos = new Date(
        this.study.fechaPrimeraImportacionMedicamentos
      );
    }

    if (this.study.fechaDeLicenciaKit) {
      this.fechaDeLicenciaKit = new Date(this.study.fechaDeLicenciaKit);
    }
    if (this.study.fechaDeImportacionEnBodegaKit) {
      this.fechaDeImportacionEnBodegaKit = new Date(
        this.study.fechaDeImportacionEnBodegaKit
      );
    }
    if (this.study.fechaPrimeraImportacionKit) {
      this.fechaPrimeraImportacionKit = new Date(
        this.study.fechaPrimeraImportacionKit
      );
    }
  }

  openCreateCROModal(): void {
    const ref = this.dialogService.open(CroAddEditComponent, {
      header: 'Crear CRO',
      width: '90%',
      data: {
        isModal: true,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((cro: any) => {
      if (cro) {
        this.cros.push({
          label: cro.nombre,
          value: cro.id,
        });
        this.study.studyCroId = cro.id;
      }
    });
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
          summary: 'Propiedades actualizadas exitosamente',
          detail: 'Las propiedades del estudio fueron actualizadas con éxito.',
        });
      })
      .catch((error) => {
        logger.error('updateStudy error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
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
        this.study.studyCroId = response.cro?.id;
        this.setDatesVariables();
      })
      .catch((error) => logger.error('getStudy error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  validateAllDates(studyForm: NgForm): void {
    const fechasMedicamentos = [
      {
        key: 'fecha de la licencia de los medicamentos',
        value: this.fechaDeLicenciaMedicamentos,
      },
      {
        key: 'fecha de la primera importación de los medicamentos',
        value: this.fechaPrimeraImportacionMedicamentos,
      },
    ];
    const fechasKit = [
      {
        key: 'fecha de la licencia de los kit',
        value: this.fechaDeLicenciaKit,
      },
      {
        key: 'fecha de la primera importación los kit',
        value: this.fechaPrimeraImportacionKit,
      },
    ];
    const fechasAnteriores = [
      {
        key: 'fecha de aprobación INVIMA',
        value: this.study.fechaAprobacionEstudioInvima,
      },
    ];
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeLicenciaMedicamentos',
      0,
      1,
      fechasAnteriores,
      true
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimeraImportacionMedicamentos',
      0,
      1,
      fechasMedicamentos
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimeraImportacionMedicamentos',
      0,
      1,
      fechasAnteriores,
      true
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeImportacionEnBodegaMedicamentos',
      0,
      2,
      fechasMedicamentos
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeImportacionEnBodegaMedicamentos',
      0,
      1,
      fechasAnteriores,
      true
    );

    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeLicenciaKit',
      0,
      1,
      fechasAnteriores,
      true
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimeraImportacionKit',
      0,
      1,
      fechasKit
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaPrimeraImportacionKit',
      0,
      1,
      fechasAnteriores,
      true
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeImportacionEnBodegaKit',
      0,
      2,
      fechasKit
    );
    CommonFunctionsService.validateDates(
      studyForm,
      'fechaDeImportacionEnBodegaKit',
      0,
      1,
      fechasAnteriores,
      true
    );
  }
}
