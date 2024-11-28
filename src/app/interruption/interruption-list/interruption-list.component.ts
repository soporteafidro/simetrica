import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {
  EntityState,
  ListInterruptionsQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { InterruptionAddEditComponent } from '../interruption-add-edit/interruption-add-edit.component';
import { InterruptionService } from '../interruption.service';
import { Logger } from 'aws-amplify';
import { InterruptionMotivoPipePipe } from '../interruption-motivo-pipe.pipe';
import { InterruptionReclutamientoPipePipe } from '../interruption-reclutamiento-pipe.pipe';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { AuthService } from 'src/app/services/auth.service';
import { MassUploadInterruptionService } from 'src/app/mass-upload/mass-upload-interruption.service';
import { ActivatedRoute, Router } from '@angular/router';
const logger = new Logger('interrupcion-list');

@Component({
  selector: 'app-interruption-list',
  templateUrl: './interruption-list.component.html',
  styleUrls: ['./interruption-list.component.scss'],
})
export class InterruptionListComponent implements OnInit {
  constructor(
    private interruptionService: InterruptionService,
    private sisec: SisecService,
    private dialogService: DialogService,
    private interruptionMotivoPipePipe: InterruptionMotivoPipePipe,
    private interruptionReclutamientoPipePipe: InterruptionReclutamientoPipePipe,
    private dateIITPipe: DateIITPipe,
    private confirmationService: ConfirmationService,
    private auth: AuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private massUploadInterruptionService: MassUploadInterruptionService
  ) {}

  @Input() idStudy: string;
  @Output() onUpdate = new EventEmitter<string>();

  interruptions = [];
  interruptionsOriginal = [];
  interruptionsFormated = [];
  interruptionSelected = null;
  isReader = false;
  isMedico = false;
  columns = [];
  items: MenuItem[];

  ngOnInit(): void {
    this.loadInterruptions();
    this.loadInfo();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  loadInterruptions(): void {
    this.sisec.showSpinner('Consultando Interrupciones...');
    this.interruptionService
      .listInterruptions(this.idStudy)
      .then((response: ListInterruptionsQuery) => {
        logger.debug('listInterruptions response', response);
        this.interruptions = response.items;
        this.interruptionsOriginal = response.items;
        this.buildInterruptionsList(this.interruptions);
      })
      .catch((error) => {
        logger.error('listInterruptions error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  loadInfo(): void {
    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      {
        value: 'Interrupción reclutamiento',
        key: 'interrupcionReclutamiento',
        type: 'text',
      },
      { value: 'Motivo interrupción', key: 'motivoInterrupcion', type: 'text' },
      {
        value: 'Fecha inicial interrupción',
        key: 'fechaInicialInterrupcion',
        type: 'text',
      },
      {
        value: 'Fecha finalización interrupción',
        key: 'fechaFinalizacionTnterrupcion',
        type: 'text',
      },
    ];

    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.openAddEditInterruption(
            'Editar interrupción',
            this.interruptionSelected
          );
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.delete(this.interruptionSelected);
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory(this.interruptionSelected.id);
        },
      },
    ];
  }

  buildInterruptionsList(interruptions: any[]): void {
    const interruptionList = this.sisec.ordenarPorFechaCreacion(interruptions);
    this.interruptionsFormated = interruptionList.map((interruption) => {
      return {
        id: interruption.id,
        interrupcionReclutamiento:
          this.interruptionReclutamientoPipePipe.transform(
            interruption.interrupcionReclutamiento
          ),
        motivoInterrupcion: this.interruptionMotivoPipePipe.transform(
          interruption.motivoInterrupcion
        ),
        otroMotivoInterrupcion: interruption.otroMotivoInterrupcion,
        fechaInicialInterrupcion: this.dateIITPipe.transform(
          interruption.fechaInicialInterrupcion
        ),
        fechaFinalizacionTnterrupcion: this.dateIITPipe.transform(
          interruption.fechaFinalizacionTnterrupcion
        ),
      };
    });
  }

  openAddEditInterruption(titulo, iterrupcion?): void {
    const ref = this.dialogService.open(InterruptionAddEditComponent, {
      header: titulo,
      width: '80%',
      data: [this.idStudy, iterrupcion],
      closeOnEscape: false,
      dismissableMask: false,
    });

    ref.onClose.subscribe((data: any[]) => {
      if (data[0]) {
        if (data[1] === 'crear') {
          this.interruptions.push(data[0]);
          logger.debug(data[0]);
          this.buildInterruptionsList(this.interruptions);
        } else if (data[1] === 'actualizar') {
          const index = this.interruptions.findIndex(
            (x) => x.id === data[0].id
          );
          this.interruptions.splice(index, 1, data[0]);
          this.buildInterruptionsList(this.interruptions);
        }

        this.onUpdate.emit('recargar datos estudio');
      }
    });
  }

  selectInterrupcion(interruption): void {
    this.interruptionSelected = this.interruptions.find(
      (x) => x.id === interruption.id
    );
  }

  delete(interruption): void {
    interruption = this.interruptionsOriginal.find(
      (x) => x.id === interruption.id
    );
    this.confirmationService.confirm({
      message:
        'Se eliminará la interrupción: ' +
        interruption.motivoInterrupcion +
        ' con fecha inicial de ' +
        this.dateIITPipe.transform(interruption.fechaInicialInterrupcion),
      accept: () => {
        this.sisec.showSpinner(
          'Eliminando la interrupción ' +
            interruption.motivoInterrupcion +
            ' con fecha inicial de ' +
            this.dateIITPipe.transform(interruption.fechaInicialInterrupcion) +
            '...'
        );
        interruption.estado = EntityState.DELETED;
        const expectedVersion = interruption.version;
        delete interruption.version;
        delete interruption.__typename;
        delete interruption.studyCenters;
        delete interruption.createdAt;
        delete interruption.updatedAt;
        delete interruption.study;
        this.interruptionService
          .updateInterruption(interruption, interruption.id, expectedVersion)
          .then((response) => {
            logger.debug('updateInterruption response', response);
            const index = this.interruptionsOriginal.findIndex(
              (x) => x.id === interruption.id
            );
            this.interruptionsOriginal.splice(index, 1);
            this.buildInterruptionsList(this.interruptionsOriginal);
            this.interruptionSelected = null;
            this.messageService.add({
              severity: 'success',
              summary: 'Interrupción eliminada',
              detail: `La interrupción se elimino exitosamente`,
            });
          })
          .catch((error) => {
            logger.error('updateInterruption error', error);
          })
          .finally(() => this.sisec.hideSpinner());
      },
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.interruptionSelected.motivoInterrupcion}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Interruption',
      },
    });
  }
}
