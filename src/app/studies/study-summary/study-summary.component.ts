import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logger } from 'aws-amplify';
import { SelectItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddendumsListComponent } from 'src/app/addendums/addendums-list/addendums-list.component';
import { GetStudyWithAllDataQuery } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { StudiesService } from '../studies.service';
import { StudyStatusComponent } from '../study-form/study-status/study-status.component';
import { StudyTimesComponent } from '../study-times/study-times.component';
const logger = new Logger('study-summary');
@Component({
  selector: 'study-summary',
  templateUrl: './study-summary.component.html',
  styleUrls: ['./study-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StudySummaryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private studiesService: StudiesService,
    private sisec: SisecService,
    private dateIITPipe: DateIITPipe,
    private dialogService: DialogService,
    private auth: AuthService
  ) {}

  @ViewChild('addendumsTab') addendumsTab: AddendumsListComponent;

  loading = false;
  isReader = false;
  isMedico = false;
  isTimeElapsedError = false;
  displayDialog = false;
  isEmptyFechaFactibilidadColombia = false;
  dialogMessage = '';

  elementos: SelectItem[];
  saludPublicaSeleccionada: any;
  enfermedadHuerfanaSeleccionada: any;
  data: any;
  estadoAsString: string;
  options: any;

  studyId = null;
  study: GetStudyWithAllDataQuery;
  tiempoDeInicio = null;
  comitesAsociados: any[] = [];
  siNoRespuesta: any[] = [
    { name: 'Si', key: 'Si' },
    { name: 'No', key: 'No' },
  ];

  totalEnmiendas = null;
  totalCentros = null;
  totalComites = null;
  totalInterrupciones = null;

  ngOnInit(): void {
    this.sisec.showSpinner('Consultando estudio...');
    this.loadStudy();
    this.loadInfo();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  loadInfo(): void {
    this.data = {
      labels: [
        'Tiempo INVIMA (10 días)',
        'Tiempo Comité de ética (15 días)',
        'Tiempo Patrocinador (20 días)',
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    this.options = {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: 'true',
          padding: 20,
        },
      },
    };
  }

  loadStudy(): void {
    this.loading = true;
    this.studyId = this.route.snapshot.params.id;
    if (this.studyId) {
      this.studiesService
        .getStudyWithAllData(this.studyId)
        .then((response: GetStudyWithAllDataQuery) => {
          logger.debug('getStudy response', response);
          this.study = response;

          if (this.study.fechaFactibilidadColombia) {
            if (this.study.fechaPrimerPacienteReclutadoColombia) {
              if (
                new Date(this.study.fechaFactibilidadColombia).valueOf() <=
                new Date(
                  this.study.fechaPrimerPacienteReclutadoColombia
                ).valueOf()
              ) {
                this.isTimeElapsedError = false;
              } else {
                this.isTimeElapsedError = true;
                this.dialogMessage =
                  'La fecha de factibilidad en Colombia debe ser menor que la menor fecha del primer paciente aleatorizado para mostrar el tiempo transcurrido. Por favor, corregir.';
              }
            }
          } else {
            this.isTimeElapsedError = true;
            this.dialogMessage =
              'Debe añadir la fecha de factibilidad en Colombia para observar el tiempo transcurrido.';
          }
          this.calculateStudyData();
        })
        .catch((error) => {
          logger.error('getStudy error', error);
        })
        .finally(() => {
          this.sisec.hideSpinner();
          this.loading = false;
        });
    }
  }

  openTimesModal() {
    const ref = this.dialogService.open(StudyTimesComponent, {
      header: 'Tiempos',
      width: '90%',
      data: {
        studyId: this.study.id,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
  }

  openEditEstado(): void {
    const ref = this.dialogService.open(StudyStatusComponent, {
      header: 'Cambiar estado',
      width: '90%',
      data: {
        editMode: true,
        isModal: true,
        studyId: this.study.id,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'actualizado') {
        this.loadStudy();
      }
    });
  }

  calculateStudyData(): void {
    let desde = new Date();
    if (this.study.fechaPrimerPacienteReclutadoColombia) {
      desde = new Date(this.study.fechaPrimerPacienteReclutadoColombia);
    }

    this.tiempoDeInicio = this.sisec.calculateDifferenceOfDays(
      desde,
      new Date(this.study.fechaFactibilidadColombia)
    );
    this.tiempoDeInicio =
      this.tiempoDeInicio + (this.tiempoDeInicio == 1 ? ' día' : ' días');

    this.study.studyCenterCommittees.items.forEach((scc) => {
      // esto es para poder mostrar el conteo de comites UNICOS asociados al estudio
      if (
        this.comitesAsociados.filter((e) => e === scc.committeeID).length === 0
      ) {
        this.comitesAsociados.push(scc.committeeID);
      }
    });

    this.estadoAsString = this.studiesService.getEstadoToString(
      this.study.estado
    );
    this.totalEnmiendas = this.study.addenda
      ? this.study.addenda.items.filter((a) => a.estado == 'ACTIVE').length
      : 0;
    this.totalCentros = this.study.studyCenters
      ? this.study.studyCenters.items.filter((sc) => sc.estado == 'ACTIVE')
          .length
      : 0;
    this.totalComites = this.study.studyCenterCommittees
      ? this.study.studyCenterCommittees.items.filter(
          (scc) => scc.estado == 'ACTIVE'
        ).length
      : 0;
    this.totalInterrupciones = this.study.interruptions
      ? this.study.interruptions.items.filter((i) => i.estado == 'ACTIVE')
          .length
      : 0;
  }

  reloadAddendums(): void {
    this.addendumsTab.loadAddendumsForThisStudy();
  }

  timeElapsedError(): void {
    logger.debug('llega el error');
    this.isTimeElapsedError = true;
  }
}
