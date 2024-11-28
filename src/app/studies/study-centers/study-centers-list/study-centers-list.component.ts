import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import {
  EntityState,
  ListStudyCentersQuery,
} from 'src/app/services/API.service';
import { CentersService } from 'src/app/centers/centers.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AssignCenterComponent } from '../assign-center/assign-center.component';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { CalculateDatesService } from 'src/app/services/calculate-dates.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MassUploadCenterService } from 'src/app/mass-upload/mass-upload-center.service';
const logger = new Logger('study-centers-list');

@Component({
  selector: 'app-study-centers-list',
  templateUrl: './study-centers-list.component.html',
  styleUrls: ['./study-centers-list.component.scss'],
})
export class StudyCentersListComponent implements OnInit {
  constructor(
    private centersService: CentersService,
    private calculateDatesService: CalculateDatesService,
    private sisec: SisecService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private auth: AuthService,
    public dateIITPipe: DateIITPipe,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public massUploadCenterService: MassUploadCenterService
  ) {}

  @Output() onUpdate = new EventEmitter<string>();
  @Input() studyId: string;

  items: MenuItem[];
  studyCenters: any[] = [];
  selectedStudyCenter = null;
  isReader = false;
  isMedico = false;

  ngOnInit(): void {
    this.sisec.showSpinner('Consultando centros asociados...');
    this.loadStudyCentersDataForThisStudy();
    this.loadMenuItems();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }
  loadStudyCentersDataForThisStudy(): void {
    this.centersService
      .listStudyCentersByStudy(this.studyId)
      .then((response: ListStudyCentersQuery) => {
        logger.debug('listStudyCentersByStudy response', response);
        this.studyCenters = this.sisec.ordenarPorFechaCreacion(response.items);
      })
      .catch((error) => {
        logger.error('listStudyCentersByStudy error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }
  openAssignCenterModal(sc: any = null): void {
    const ref = this.dialogService.open(AssignCenterComponent, {
      header: sc ? 'Editar asociación' : 'Asociar centro',
      width: '90%',
      data: {
        studyId: this.studyId,
        isEdit: sc ? true : false,
        studyCenterId: sc ? sc.id : null,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (
        (result === 'asociado' || result === 'actualizado') &&
        result != 'cancelado'
      ) {
        this.loadStudyCentersDataForThisStudy();
        this.onUpdate.emit('refresh');
        return this.messageService.add({
          severity: 'success',
          summary:
            result.charAt(0).toUpperCase() + result.slice(1) + ' exitosamente',
          detail: `El centro fue ${result} con éxito.`,
        });
      }
    });
  }
  loadMenuItems(): void {
    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.openAssignCenterModal(this.selectedStudyCenter);
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteCenter();
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
  viewHistory(): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.selectedStudyCenter.center.nombre}`,
      width: '90%',
      data: {
        idRegistro: this.selectedStudyCenter.id,
        entidad: 'StudyCenter',
      },
    });
  }
  onStudyCenterSelected(studyCenter: any): void {
    this.selectedStudyCenter = studyCenter;
  }
  deleteCenter(): void {
    this.sisec.showSpinner('Consultando relaciones del Centro del estudio...');
    this.centersService
      .getCommittessByStudyCenter(this.selectedStudyCenter.id)
      .then((response) => {
        logger.debug('getCommittessByStudyCenter response', response);
        if (response.items && response.items.length > 0) {
          this.messageService.add({
            severity: 'error',
            summary: 'Problema con las dependencias',
            detail:
              'No se puede eliminar un centro que tiene asociados comités de ética',
          });
        } else {
          const updatedStudyCenter =
            this.centersService.generateUpdateStudyCenterInput(
              this.selectedStudyCenter,
              this.selectedStudyCenter.version
            );

          this.confirmationService.confirm({
            message:
              'Se eliminará el centro <strong>' +
              this.selectedStudyCenter.center.nombre +
              '</strong> de este estudio.',
            accept: () => {
              this.sisec.showSpinner('Eliminando ...');
              updatedStudyCenter.estado = EntityState.DELETED;
              this.centersService
                .updateStudyCenter(updatedStudyCenter)
                .then((response2) => {
                  this.calculateDatesService.setDatesToStudy(
                    updatedStudyCenter.studyID
                  );
                  logger.debug('updateStudyCenter response', response2);
                  const index = this.studyCenters?.findIndex(
                    (x) => x.id === this.selectedStudyCenter.id
                  );
                  this.studyCenters?.splice(index, 1);
                  this.onUpdate.emit('centro eliminado');
                  return this.messageService.add({
                    severity: 'success',
                    summary: 'Eliminado exitosamente',
                    detail: `El centro fue eliminado con éxito.`,
                  });
                })
                .catch((error2) => {
                  logger.error('updateStudyCenter error', error2);
                })
                .finally(() => this.sisec.hideSpinner());
            },
          });
        }
      })
      .catch((error) => logger.error(error))
      .finally(() => this.sisec.hideSpinner());
  }
}
