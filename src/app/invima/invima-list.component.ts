import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  EntityState,
  IteracionesByStudyQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { AddendumsService } from '../addendums/addendums.service';
import { MassUploadIntectionsInvimaService } from '../mass-upload/mass-upload-intections-invima.service';
import { AuthService } from '../services/auth.service';
import { CalculateDatesService } from '../services/calculate-dates.service';
import { StudiesService } from '../studies/studies.service';
import { InvimaAddEditComponent } from './invima-add-edit/invima-add-edit.component';
const logger = new Logger('invima-list');

@Component({
  selector: 'app-invima-list',
  templateUrl: './invima-list.component.html',
  styleUrls: ['./invima-list.component.scss'],
})
export class INVIMAListComponent implements OnInit {
  @Output() onUpdate = new EventEmitter<string>();

  constructor(
    private calculateDatesService: CalculateDatesService,
    private studiesService: StudiesService,
    private addendumsService: AddendumsService,
    private sisec: SisecService,
    private dialogService: DialogService,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dateIITPipe: DateIITPipe,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private massUploadIntectionsInvimaService: MassUploadIntectionsInvimaService,
    private auth: AuthService
  ) {}
  @Input() parentId: string;
  @Input() studyId: string;
  @Input() isEnmienda = false;
  items: MenuItem[];
  itemsSinEdit: MenuItem[];

  msgs = [
    {
      severity: 'warn',
      summary: '',
      detail: 'No se encontraron interacciones INVIMA.',
    },
  ];
  iteraciones: any[] = [];
  data: any;
  options: any;
  selectedIteration: any;
  editMode = false;
  canAddMoreIterations = true;
  isReader = false;
  isMedico = false;

  ngOnInit(): void {
    this.loadIteracionesByStudy();
    this.loadInfo();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  setChartData(
    tiempoTotalInvima: number,
    tiempoTotalPatrocinador: number,
    tiempoTotalnotificacion: number
  ): void {
    this.data = {
      labels: [
        'Tiempo total resolución INVIMA (' + tiempoTotalInvima + ' días)',
        'Tiempo total Patrocinador (' + tiempoTotalPatrocinador + ' días)',
        'Tiempo total Notificación (' + tiempoTotalnotificacion + ' días)',
      ],
      datasets: [
        {
          data: [
            tiempoTotalInvima,
            tiempoTotalPatrocinador,
            tiempoTotalnotificacion,
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#dceee1'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#dceee1'],
        },
      ],
    };
  }

  openIterationForm(): void {
    const selctedheader = this.editMode
      ? 'Editar interacción'
      : 'Crear interacción';
    const selectedData = this.editMode
      ? {
          editMode: true,
          iterationId: this.selectedIteration.id,
          parentId: this.parentId,
          isEnmienda: this.isEnmienda,
          studyId: this.studyId,
        }
      : {
          parentId: this.parentId,
          isEnmienda: this.isEnmienda,
          studyId: this.studyId,
        };

    const ref = this.dialogService.open(InvimaAddEditComponent, {
      header: selctedheader,
      width: '90%',
      data: selectedData,
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'creado' || result === 'actualizado') {
        this.loadIteracionesByStudy();

        this.onUpdate.emit('refresh');
        return this.messageService.add({
          severity: 'success',
          summary:
            result.charAt(0).toUpperCase() + result.slice(1) + ' exitosamente',
          detail: 'La Interacción INVIMA fue guardada con éxito.',
        });
      }
    });
    this.editMode = false;
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
          this.openIterationForm();
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
          this.viewHistory(this.selectedIteration.id);
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
          this.viewHistory(this.selectedIteration.id);
        },
      },
    ];
  }

  loadIteracionesByStudy(): void {
    this.sisec.showSpinner('Consultando interacciones...');

    var loadIteraciones = !this.isEnmienda
      ? this.studiesService.iteracionesInvimaByStudy(this.parentId)
      : this.addendumsService.iteracionesInvimaByAddendum(this.parentId);

    loadIteraciones
      .then((response: IteracionesByStudyQuery) => {
        logger.debug('iteracionesInvimaList response', response);
        this.iteraciones = this.sisec.ordenarPorFechaCreacion(response.items);
        if (this.iteraciones.length > 0) {
          const tiempoTotalInvima = this.iteraciones.reduce(
            (sum, current) => sum + current.tiempoInvima,
            0
          );
          const tiempoTotalPatrocinador = this.iteraciones.reduce(
            (sum, current) => sum + current.tiempoPatrocinador,
            0
          );
          const tiempoTotalnotificacion = this.iteraciones.reduce(
            (sum, current) => sum + current.tiempoNotificacion,
            0
          );
          this.setChartData(
            tiempoTotalInvima,
            tiempoTotalPatrocinador,
            tiempoTotalnotificacion
          );
        }

        if (this.iteraciones.length > 0) {
          this.iteraciones[0].editable = true;
        }

        this.checkIfCanCreateNewIterations();
      })
      .catch((error) => {
        logger.error('iteracionesInvimaList error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  getTipoRequerimientos(
    requerimientos: string[],
    otroTipoReque: string
  ): string {
    let tipos = '';
    if (requerimientos) {
      tipos = requerimientos.join(', ');
    }
    if (otroTipoReque) {
      tipos = tipos.replace('Otros', otroTipoReque);
    }
    return tipos;
  }

  selectIteration(iteration): void {
    this.selectedIteration = iteration;
  }

  // se fija si aun se pueden crear iteraciones, si hay una en aprobado, entonces no
  checkIfCanCreateNewIterations(): void {
    this.canAddMoreIterations =
      this.iteraciones.filter((i) => i.estadoIteracion === 'Aprobado')
        .length === 0;
  }

  deleteIteration(): void {
    const updateIteration =
      this.studiesService.generateUpdateINVIMAIterationInput(
        this.selectedIteration,
        this.selectedIteration.version
      );

    this.confirmationService.confirm({
      message:
        'Se eliminará la Interacción seleccionada </br></br>' +
        '<strong> Tipo de interacción: </strong> ' +
        this.selectedIteration.tipoIteracion +
        '</br>' +
        '<strong> Fecha de sometimiento: </strong> ' +
        this.dateIITPipe.transform(this.selectedIteration.fechaDeSometimiento) +
        '</br>',
      accept: () => {
        this.sisec.showSpinner('Eliminando ...');
        updateIteration.estado = EntityState.DELETED;
        this.studiesService
          .updateIteracionINVIMA(updateIteration)
          .then((response) => {
            if (!this.isEnmienda) {
              this.calculateDatesService.setDatesToStudyWithINVIMAIteration(
                this.selectedIteration.studyID
              );
            } else {
              this.calculateDatesService.setDatesToAddendumWithINVIMAIteration(
                this.selectedIteration.addendumID
              );
            }

            logger.debug('updateIteracionINVIMA response', response);
            const index = this.iteraciones?.findIndex(
              (x) => x.id === this.selectedIteration.id
            );
            this.iteraciones?.splice(index, 1);
            return this.messageService.add({
              severity: 'success',
              summary: 'Eliminada exitosamente',
              detail: `La Interacción fue eliminada con éxito.`,
            });
          })
          .catch((error) => {
            logger.error('updateIteracionINVIMA error', error);
          })
          .finally(() => {
            this.sisec.hideSpinner();
            this.loadIteracionesByStudy();
          });
      },
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'InvimaIteration',
      },
    });
  }
}
