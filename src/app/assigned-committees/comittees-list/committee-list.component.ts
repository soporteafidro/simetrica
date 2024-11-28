import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AssignCommitteeComponent } from '../assign-committee/assign-committee.component';
import { StudiesService } from '../../studies/studies.service';
import {
  EntityState,
  GetStudyCenterCommitteeQuery,
  ListStudyCenterCommitteesQuery,
  ListStudyCentersQuery,
  UpdateStudyCenterCommitteeInput,
} from 'src/app/services/API.service';
import { CentersService } from 'src/app/centers/centers.service';
import { CommitteeIterationAddEditComponent } from '../committee-iteration-add-edit/committee-iteration-add-edit.component';
import { MenuItem } from 'primeng/api/menuitem';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { CalculateDatesService } from 'src/app/services/calculate-dates.service';
import { AuthService } from 'src/app/services/auth.service';
import { AddendumsService } from 'src/app/addendums/addendums.service';
import { MassUploadCenterService } from 'src/app/mass-upload/mass-upload-center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MassUploadCommitteeService } from 'src/app/mass-upload/mass-upload-committee.service';
import { MassUploadIntectionsCommitteesService } from 'src/app/mass-upload/mass-upload-intections-committees.service';

const logger = new Logger('committees-list');

@Component({
  selector: 'app-committees-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss'],
})
export class CommitteesListComponent implements OnInit {
  constructor(
    private studiesService: StudiesService,
    private addendumsService: AddendumsService,
    private sisec: SisecService,
    private dialogService: DialogService,
    private centersService: CentersService,
    private calculateDatesService: CalculateDatesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dateIITPipe: DateIITPipe,
    private auth: AuthService,
    private massUploadIntectionsCommitteesService: MassUploadIntectionsCommitteesService,
    private massUploadCommitteeService: MassUploadCommitteeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  @Input() studyId: string;
  @Input() parentId: string;
  @Input() isEnmienda = false;
  @Output() onUpdate = new EventEmitter<string>();

  committeeIterations: any[] = [];
  studyCenterCommittees: any[] = [];
  studyCenters: any[] = [];
  msgs = [
    {
      severity: 'warn',
      summary: '',
      detail: 'No se encontraron comités asociados.',
    },
  ];
  options: any;
  items: MenuItem[];
  itemsSinEdit: MenuItem[];
  selectedIteration = null;
  selectedStudyCenterCommittee = null;
  editMode = false;
  isReader = false;
  isMedico = false;

  ngOnInit(): void {
    this.loadCenters();
    this.loadInfo();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  loadInfo(): void {
    this.options = {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: 'true',
          padding: 20,
        },
      },
    };

    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.editMode = true;
          this.openCommitteeIterationModal();
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteIteration();
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory();
        },
      },
    ];

    this.itemsSinEdit = [
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteIteration();
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory();
        },
      },
    ];
  }

  refreshChartsData(): void {
    this.studyCenterCommittees.forEach((scc) => {
      this.updateChartData(scc);
    });
  }

  updateChartData(studyCenterCommittee: any): void {
    const tiempoTotalComite = studyCenterCommittee.iteraciones.reduce(
      (sum, current) => sum + current.tiempoComite,
      0
    );
    const tiempoTotalPatrocinador = studyCenterCommittee.iteraciones.reduce(
      (sum, current) => sum + current.tiempoPatrocinador,
      0
    );
    studyCenterCommittee.data = {
      labels: [
        'Tiempo total Comité (' + tiempoTotalComite + ' días)',
        'Tiempo total Investigador (' + tiempoTotalPatrocinador + ' días)',
      ],
      datasets: [
        {
          data: [tiempoTotalComite, tiempoTotalPatrocinador],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };
  }

  viewHistory(): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.selectedIteration.tipoIteracion}`,
      width: '90%',
      data: {
        idRegistro: this.selectedIteration.id,
        entidad: 'StudyCommitteeIteration',
      },
    });
  }

  selectIteration(iteration: any, selectedStudyCenterCommittee: any): void {
    this.selectedIteration = iteration;
    this.selectedStudyCenterCommittee = selectedStudyCenterCommittee;
  }

  deleteStudyCenterCommittee(selectedStudyCenterCommittee): void {
    let updateStudyCenterComittee: UpdateStudyCenterCommitteeInput;
    this.studiesService
      .getStudyCenterCommittee(selectedStudyCenterCommittee.id)
      .then((studyCenterCommittee: GetStudyCenterCommitteeQuery) => {
        updateStudyCenterComittee =
          this.studiesService.generateStudyCenterCommitteeUpdateInput(
            studyCenterCommittee
          );
        updateStudyCenterComittee.estado = EntityState.DELETED;
      });

    this.confirmationService.confirm({
      message:
        'Se eliminará el comité seleccionado </br></br>' +
        '<strong> Comité: </strong> ' +
        selectedStudyCenterCommittee.nombreComite +
        '</br>' +
        '<strong> Centro: </strong> ' +
        selectedStudyCenterCommittee.centro +
        '</br>',
      accept: () => {
        if (
          selectedStudyCenterCommittee.iteraciones.length === 0 &&
          updateStudyCenterComittee
        ) {
          this.sisec.showSpinner('Eliminando...');
          this.studiesService
            .updateStudyCenterCommittee(updateStudyCenterComittee)
            .then((response) => {
              this.loadStudyCenterCommittes();
              this.onUpdate.emit('relacion de comite removida');
              this.messageService.add({
                severity: 'success',
                summary: 'Comité eliminado',
                detail: `La relación entre el centro y el comité fue eliminada exitosamente.`,
              });
              logger.debug('updateStudyCenterCommittee response', response);
            })
            .catch((error) => {
              logger.error('updateStudyCenterCommittee error', error);
            })
            .finally(() => this.sisec.hideSpinner());
        } else {
          this.messageService.add({
            severity: 'error',
            summary:
              'Error al eliminar el comité ' +
              selectedStudyCenterCommittee.nombreComite.toUpperCase(),
            detail: `No se puede eliminar ya que existen interacciones asociadas a este comité.`,
          });
        }
      },
    });
  }

  deleteIteration(): void {
    const updateIteration =
      this.studiesService.generateStudyCommitteeIterationUpdateInput(
        this.selectedIteration,
        this.selectedIteration.version
      );

    this.confirmationService.confirm({
      message:
        'Se eliminará la Interacción seleccionada </br></br>' +
        '<strong> Comité: </strong> ' +
        this.selectedStudyCenterCommittee.nombreComite +
        '</br>' +
        '<strong> Centro: </strong> ' +
        this.selectedStudyCenterCommittee.centro +
        '</br>' +
        '<strong> Tipo de interacción: </strong> ' +
        this.selectedIteration.tipoIteracion +
        '</br>' +
        '<strong> Fecha de sometimiento: </strong> ' +
        this.dateIITPipe.transform(
          this.selectedIteration.fechaDeSometimientoCE
        ) +
        '</br>',
      accept: () => {
        this.sisec.showSpinner('Eliminando ...');
        updateIteration.estado = EntityState.DELETED;
        this.studiesService
          .updateStudyCommitteeIteration(updateIteration)
          .then((response) => {
            if (!this.isEnmienda) {
              this.calculateDatesService.setDatesToStudyCenterCommitteeIterations(
                updateIteration.studyID,
                updateIteration.studyCenterCommitteeID
              );
            } else {
              // TODO setDatesToAddendumStudyCenterCommitteeIterations
            }
            logger.debug('updateStudyCommitteeIteration response', response);
            const index =
              this.selectedStudyCenterCommittee.iteraciones?.findIndex(
                (x) => x.id === this.selectedIteration.id
              );
            this.selectedStudyCenterCommittee.iteraciones?.splice(index, 1);
            return this.messageService.add({
              severity: 'success',
              summary: `Interacción eliminada exitosamente`,
              detail: `La Interacción fue eliminada con éxito.`,
            });
          })
          .catch((error) => {
            logger.error('updateStudyCommitteeIteration error', error);
          })
          .finally(() => {
            this.sisec.hideSpinner();
            this.loadStudyCommitteeIterations();
          });
      },
    });
  }

  loadCenters(): void {
    this.centersService
      .listStudyCentersByStudy(this.studyId)
      .then((response: ListStudyCentersQuery) => {
        logger.debug('listStudyCentersByStudy response', response);
        this.studyCenters = response.items;
        this.loadStudyCommitteeIterations();
      })
      .catch((error) => {
        logger.error('listStudyCentersByStudy error', error);
      });
  }

  loadStudyCommitteeIterations(): void {
    this.sisec.showSpinner('Consultando iteraciones...');
    var loadIteraciones = !this.isEnmienda
      ? this.studiesService.listStudyCommitteeIterationsByStudy(this.studyId)
      : this.addendumsService.listStudyCommitteeIterationsByAddendum(
          this.parentId
        );

    loadIteraciones
      .then((response) => {
        logger.debug('listStudyCommitteeIterations response', response);
        this.committeeIterations = response.items;
        this.loadStudyCenterCommittes();
      })
      .catch((error) => {
        logger.error('listStudyCommitteeIterationsByStudy error', error);
      });
  }

  loadStudyCenterCommittes(): void {
    this.sisec.showSpinner('Consultando comités y centros del estudio...');
    this.studiesService
      .ListStudyCenterCommitteesByStudy(this.studyId)
      .then((response: ListStudyCenterCommitteesQuery) => {
        logger.debug('studyCenterCommittees', response);
        this.studyCenterCommittees = response.items
          .filter((x) => x.studyCenter.estado !== EntityState.DELETED)
          .map((cm: any) => {
            let iteraciones = !this.isEnmienda
              ? this.committeeIterations.filter(
                  (s) => s.studyCenterCommitteeID === cm.id && !s.addendumID
                )
              : this.committeeIterations.filter(
                  (s) => s.studyCenterCommitteeID === cm.id && s.addendumID
                );

            iteraciones =
              iteraciones.length > 0
                ? this.sisec.ordenarPorFechaCreacion(iteraciones)
                : [];

            if (iteraciones.length > 0) {
              iteraciones[0].editable = true;
            }

            return {
              nombreComite: cm.committee.nombre,
              centro: this.studyCenters.filter(
                (s) => s.id === cm.studyCenter.id
              )[0]?.center?.nombre,
              studyCenterCommitteeID: cm.id,
              id: cm.id,
              iteraciones: iteraciones,
              estado: cm.estado,
            };
          });
        this.refreshChartsData();
      })
      .catch((error) => {
        logger.error('ListStudyCenterCommittees error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  openAssignComiteeModal(): void {
    const ref = this.dialogService.open(AssignCommitteeComponent, {
      header: 'Asociar Comité de Ética',
      width: '90%',
      data: { studyId: this.parentId },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'asociado') {
        this.loadCenters();
        this.onUpdate.emit('comite asignado');
        return this.messageService.add({
          severity: 'success',
          summary: `Comité asociado exitosamente`,
          detail: `El comité fue asociado con éxito.`,
        });
      }
    });
  }

  getTipoAclaracion(
    tipoAclaracion: string[],
    otroTipoAclaracion: string
  ): string {
    let tipos = '';
    if (tipoAclaracion) {
      tipos = tipoAclaracion.join(', ');
    }
    if (otroTipoAclaracion) {
      tipos = tipos.replace('Otros', otroTipoAclaracion);
    }
    return tipos;
  }

  openCommitteeIterationModal(studyCenterCommitteeId?: string): void {
    let selctedheader = this.editMode
      ? 'Editar Interacción CE'
      : 'Crear Interacción CE';
    let selectedData = null;
    if (this.editMode) {
      selectedData = {
        selectedIterationId: this.selectedIteration.id,
        isEnmienda: this.isEnmienda,
        studyId: this.studyId,
        committeeIterations: this.committeeIterations.filter(
          (s) =>
            s.studyCenterCommitteeID ===
            this.selectedIteration.studyCenterCommitteeID
        ),
      };
    } else {
      {
        selectedData = {
          parentId: this.parentId,
          studyId: this.studyId,
          isEnmienda: this.isEnmienda,
          studyCenterCommitteeID: studyCenterCommitteeId,
          committeeIterations: this.isEnmienda
            ? this.committeeIterations.filter(
                (s) =>
                  s.studyCenterCommitteeID === studyCenterCommitteeId &&
                  s.addendumID != null
              )
            : this.committeeIterations.filter(
                (s) =>
                  s.studyCenterCommitteeID === studyCenterCommitteeId &&
                  s.addendumID == null
              ),
        };
      }
    }

    const ref = this.dialogService.open(CommitteeIterationAddEditComponent, {
      header: selctedheader,
      width: '90%',
      data: selectedData,
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'creada' || result === 'actualizada') {
        this.loadCenters();
        return this.messageService.add({
          severity: 'success',
          summary: `Interacción ${result} exitosamente`,
          detail: `La Interacción fue ${result} con éxito.`,
        });
      }
    });
    this.editMode = false;
  }
}
