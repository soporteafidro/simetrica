import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as XLSX from 'xlsx';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
import { Logger } from 'aws-amplify';
import { ActivatedRoute } from '@angular/router';
import { MassUploadStudiesService } from '../mass-upload-studies.service';
import { MassUploadCenterService } from '../mass-upload-center.service';
import { MassUploadService } from '../mass-upload.service';
import { MassUploadCommitteeService } from '../mass-upload-committee.service';
import { MassUploadInterruptionService } from '../mass-upload-interruption.service';
import { MassUploadIntectionsInvimaService } from '../mass-upload-intections-invima.service';
import { MassUploadIntectionsCommitteesService } from '../mass-upload-intections-committees.service';
import { MassUploadEnmiendasService } from '../mass-upload-enmiendas.service';
import { MassUploadCenterEnmiendaService } from '../mass-upload-center-enmienda.service';
const logger = new Logger('mass-upload');
@Component({
  selector: 'app-mass-upload',
  templateUrl: './mass-upload.component.html',
  styleUrls: ['./mass-upload.component.scss'],
})
export class MassUploadComponent implements OnInit {
  moduleName = '';
  source = null;
  resources = null;
  itemsTable = [];
  cols = [];
  wscols = [];
  sponsors = [];
  studies = [];
  croS = [];
  dataPrivew = [];
  erroresCargaMasiva = false;
  cols2 = null;
  wscols2 = null;
  nameDocument: string = null;
  file;
  titulo = '';

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messages: MessageService,
    private sisecService: SisecService,
    private massUploadStudiesService: MassUploadStudiesService,
    private massUploadCenterService: MassUploadCenterService,
    private massUploadCommitteeService: MassUploadCommitteeService,
    private massUploadInterruptionService: MassUploadInterruptionService,
    private massUploadIntectionsInvimaService: MassUploadIntectionsInvimaService,
    private massUploadIntectionsCommitteesService: MassUploadIntectionsCommitteesService,
    private massUploadEnmiendasService: MassUploadEnmiendasService,
    private massUploadCenterEnmiendaService: MassUploadCenterEnmiendaService,
    private massUploadService: MassUploadService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cleanTable();
      this.source = params.source;
      this.loadData();
    });
  }
  loadData(): void {
    this.sisecService.showSpinner('Cargando datos para la plantilla...');
    if (this.source === 'studies') {
      this.titulo = 'Carga Masiva para estudios - Excel';
      this.massUploadStudiesService
        .loadDataForStudies()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'centers') {
      this.titulo = 'Carga Masiva para asignación de centros - Excel';
      this.massUploadCenterService
        .loadDataForCenter()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'committee') {
      this.titulo = 'Carga Masiva para asignación de comites - Excel';
      this.massUploadCommitteeService
        .loadDataForCommittee()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'interruption') {
      this.titulo = 'Carga Masiva para interrupciones - Excel';
      this.massUploadInterruptionService
        .loadDataForInterruption()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'interactions-invima-study') {
      this.titulo = 'Carga Masiva para interacciones del INVIMA - Excel';
      this.massUploadIntectionsInvimaService
        .loadDataForIntectionsInvima(false)
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'interactions-invima-addendum') {
      this.titulo = 'Carga Masiva para interacciones del INVIMA - Excel';
      this.massUploadIntectionsInvimaService
        .loadDataForIntectionsInvima(true)
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'interactions-committee') {
      this.titulo = 'Carga Masiva para interacciones del comité - Excel';
      this.massUploadIntectionsCommitteesService
        .loadDataForIntectionsCommittee()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'amendments') {
      this.titulo = 'Carga Masiva para enmiendas - Excel';
      this.massUploadEnmiendasService
        .loadDataForEnmiendas()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    } else if (this.source === 'centers-addendum') {
      this.titulo = 'Carga Masiva para centros en enmiendas - Excel';
      this.massUploadCenterEnmiendaService
        .loadDataForCentersEnmienda()
        .then((data) => {
          this.cols = data.cols;
          this.wscols = data.wscols;
          this.cols2 = data.cols2;
          this.wscols2 = data.wscols2;
          this.moduleName = data.moduleName;
        })
        .catch((error) => {
          logger.error('loadDataForStudies error', error);
        })
        .finally(() => this.sisecService.hideSpinner());
    }
  }
  loadFile(files: FileList): void {
    this.cleanTable();
    const reader = new FileReader();
    const file = files.item(0);
    this.nameDocument = file.name;
    this.sisecService.showSpinner('Cargando Archivo...');
    reader.onload = (event) => {
      this.sisecService.hideSpinner();
      this.file = reader.result;
      this.erroresCargaMasiva = true;
      this.parseFile();
    };
    reader.readAsBinaryString(file);
  }
  parseFile(): void {
    let workBook = null;
    let jsonData = null;
    workBook = XLSX.read(this.file, { type: 'binary' });
    jsonData = XLSX.utils.sheet_to_json(
      workBook.Sheets[workBook.SheetNames[0]],
      { raw: true }
    );
    if (jsonData && jsonData.length) {
      this.fileInput.nativeElement.value = '';
      this.sisecService.showSpinner('Validando datos...');
      if (this.source === 'studies') {
        const dates = [
          'fechaAprobacionCasaMatriz',
          'fechaFactibilidadColombia',
          'fechaSeleccionColombia',
          'fechaRecepcionFilialColombia',
          'fechaVersionEspaniol',
          'fechaPropuestaCierreReclutamiento',
          'fechaLiberacionProtocolo',
          'fechaPrimerPacienteGlobal',
          'fechaCierreReclutamientoGlobal',
          'fechaRecepcionPaqueteInicialColombia',
          'fechaPrimerPacienteReclutadoColombia',
          'fechaCierreReclutamientoColombia',
          'fechaDeLicenciaMedicamentos',
          'fechaPrimeraImportacionMedicamentos',
          'fechaDeImportacionEnBodegaMedicamentos',
          'fechaDeLicenciaKit',
          'fechaPrimeraImportacionKit',
          'fechaDeImportacionEnBodegaKit',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadStudiesService.validateMassUpload(x).then((data) => {
            this.dataPrivew = data.dataPrivew;
            this.itemsTable = data.itemsTable;
            for (const d of this.dataPrivew) {
              if (d.validatedError === false) {
                this.erroresCargaMasiva = false;
                break;
              }
            }
            this.sisecService.hideSpinner();
          });
        });
      } else if (this.source === 'centers') {
        const dates = [
          'fechaRecepcionPaquete',
          'fechaRecepcionContrato',
          'fechaFirmaContrato',
          'fechaFirmaContratoPatrocinador',
          'fechaAprobacionInvima',
          'fechaActivacionCentro',
          'fechaPrimerPacienteSeleccionado',
          'fechaPrimerPacienteAleatorizado',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadCenterService.validateMassUpload(x).then((data) => {
            this.dataPrivew = data.dataPrivew;
            this.itemsTable = data.itemsTable;
            for (const d of this.dataPrivew) {
              if (d.validatedError === false) {
                this.erroresCargaMasiva = false;
                break;
              }
            }
            this.sisecService.hideSpinner();
          });
        });
      } else if (this.source === 'committee') {
        this.massUploadCommitteeService
          .validateMassUpload(jsonData)
          .then((data) => {
            this.dataPrivew = data.dataPrivew;
            this.itemsTable = data.itemsTable;
            for (const d of this.dataPrivew) {
              if (d.validatedError === false) {
                this.erroresCargaMasiva = false;
                break;
              }
            }
            this.sisecService.hideSpinner();
          });
      } else if (this.source === 'interruption') {
        const dates = [
          'fechaInicialInterrupcion',
          'fechaFinalizacionTnterrupcion',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadInterruptionService
            .validateMassUpload(jsonData)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      } else if (this.source === 'interactions-invima-study') {
        const dates = [
          'fechaDeSometimiento',
          'fechaRespuestaInvima',
          'fechaDeNotificacion',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadIntectionsInvimaService
            .validateMassUpload(jsonData, false)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      } else if (this.source === 'interactions-invima-addendum') {
        const dates = [
          'fechaDeSometimiento',
          'fechaRespuestaInvima',
          'fechaDeNotificacion',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadIntectionsInvimaService
            .validateMassUpload(jsonData, true)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      } else if (this.source === 'interactions-committee') {
        const dates = [
          'fechaDeSometimientoCE',
          'fechaRespuestaCE'
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadIntectionsCommitteesService
            .validateMassUpload(jsonData)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      } else if (this.source === 'amendments') {
        const dates = [
          'fechaCasaMatriz',
          'fechaRecepcionPaquete',
          'fechaVersionEspanol',
          'fechaImplementacionPais',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadEnmiendasService
            .validateMassUpload(jsonData)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      } else if (this.source === 'centers-addendum') {
        const dates = [
          'fechaEnvioCentro',
          'fechaReciboCentro',
          'fechaImplementacionCentro',
        ];
        this.massUploadService.TransforDate(jsonData, dates).then((x) => {
          this.massUploadCenterEnmiendaService
            .validateMassUpload(jsonData)
            .then((data) => {
              this.dataPrivew = data.dataPrivew;
              this.itemsTable = data.itemsTable;
              for (const d of this.dataPrivew) {
                if (d.validatedError === false) {
                  this.erroresCargaMasiva = false;
                  break;
                }
              }
              this.sisecService.hideSpinner();
            });
        });
      }
    } else {
      this.notifyEmptySet();
      this.dataPrivew = [];
      this.erroresCargaMasiva = false;
    }
  }
  private notifyEmptySet(): void {
    this.file = null;
    const path = this.fileInput.nativeElement.value;
    const parts = path.split('\\');
    const file = parts[parts.length - 1];
    this.messages.add({
      summary: 'Error',
      detail:
        'No se han detectado registros nuevos para cargar en el archivo ' +
        file +
        '. Favor revisarlo',
      severity: 'error',
    });
    this.fileInput.nativeElement.value = '';
  }
  downloadTemplate(): void {
    this.sisecService.showSpinner('Descargando archivo...');
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cols, {
      skipHeader: true,
    });
    ws['!cols'] = this.wscols;
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Plantilla');

    if (this.cols2 && this.wscols2) {
      const ws2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cols2, {
        skipHeader: true,
      });
      ws2['!cols'] = this.wscols2;
      XLSX.utils.book_append_sheet(wb, ws2, 'Colecciones');
    }

    XLSX.writeFile(wb, 'SIMETRICA_' + this.moduleName + '.xlsx');
    this.sisecService.hideSpinner();
  }
  save(): void {
    if (this.source === 'studies') {
      this.massUploadStudiesService.saveAndUpdateStudies(this.dataPrivew);
    } else if (this.source === 'centers') {
      this.massUploadCenterService.saveAndUpdateCenters(this.dataPrivew);
    } else if (this.source === 'committee') {
      this.massUploadCommitteeService.saveAndUpdateCommittee(this.dataPrivew);
    } else if (this.source === 'interruption') {
      this.massUploadInterruptionService.saveAndUpdateInterruption(
        this.dataPrivew
      );
    } else if (
      this.source === 'interactions-invima-study' ||
      this.source === 'interactions-invima-addendum'
    ) {
      this.massUploadIntectionsInvimaService.saveAndUpdateIntectionsInvima(
        this.dataPrivew
      );
    } else if (this.source === 'interactions-committee') {
      this.massUploadIntectionsCommitteesService.saveAndUpdateIntectionsCommittee(
        this.dataPrivew
      );
    } else if (this.source === 'amendments') {
      this.massUploadEnmiendasService.saveAndUpdateEnmiendas(this.dataPrivew);
    } else if (this.source === 'centers-addendum') {
      this.massUploadCenterEnmiendaService.saveAndUpdateCentersEnmienda(
        this.dataPrivew
      );
    }
  }
  cleanTable(): void {
    this.dataPrivew = [];
    this.itemsTable = [];
    this.nameDocument = '';
    this.file = null;
  }
}
