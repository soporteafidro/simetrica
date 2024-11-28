import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logger } from 'aws-amplify';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CentersService } from 'src/app/centers/centers.service';
import {
  AddendumStudyCenterByAddendumQuery,
  AddendumStudyCenterByAddendumWithAllDataQuery,
  EntityState,
  StudyCenterByStudyQuery,
} from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { AddendumsService } from '../../addendums.service';
import { AddendumCenterAddEditComponent } from '../addendum-center-add-edit/addendum-center-add-edit.component';
const logger = new Logger('addendum-centers-list');

@Component({
  selector: 'app-addendum-centers-list',
  templateUrl: './addendum-centers-list.component.html',
  styleUrls: ['./addendum-centers-list.component.scss'],
})
export class AddendumsStudyCenterListComponent implements OnInit {
  constructor(
    private addendumsService: AddendumsService,
    private centersService: CentersService,
    private sisec: SisecService,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogService: DialogService,
    public dateIITPipe: DateIITPipe
  ) {}

  @Input() addendumId: string;
  @Input() studyId: string;
  @Output() onUpdate = new EventEmitter<string>();

  addendumStudyCenters: any[] = [];
  items: MenuItem[];
  selectedAddendumStudyCenter = null;
  editMode = false;
  isReader = false;
  isMedico = false;
  studyCenters = [];
  studyCentersFiltered = [];

  ngOnInit() {
    this.loadStudyCentersDataByStudy();
    this.loadAddendumsStudyCenters();
    this.loadMenuItems();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  loadMenuItems() {
    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.editMode = true;
          this.openAddAddendumStudyCenter();
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteAddAddendumStudyCenter();
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory(this.selectedAddendumStudyCenter.id);
        },
      },
    ];
  }

  loadAddendumsStudyCenters(): void {
    this.addendumsService
      .listAddendumStudyCenterByAddendumWithAllData(this.addendumId)
      .then((response: AddendumStudyCenterByAddendumWithAllDataQuery) => {
        logger.debug('listAddendumStudyCenterByAddendum response', response);
        this.addendumStudyCenters = this.sisec.ordenarPorFechaCreacion(
          response.items
        );
      })
      .catch((error) => {
        logger.error('listAddendumStudyCenterByAddendum error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  selectCenter(center): void {
    this.selectedAddendumStudyCenter = center;
    this.loadStudyCentersDataByStudy();
  }

  loadStudyCentersDataByStudy(): void {
    this.centersService
      .listStudyCentersByStudy(this.studyId)
      .then((response: StudyCenterByStudyQuery) => {
        this.studyCenters = response.items.map((stc: any) => {
          return {
            label: stc.center.nombre,
            value: stc.id,
            studyCenterID: stc.id,
          };
        });
        this.loadStudyCentersDataForThisAddendum();
      })
      .catch((error) => {
        logger.error('listStudyCentersByStudy error', error);
      });
  }

  loadStudyCentersDataForThisAddendum(): void {
    this.studyCentersFiltered = this.studyCenters;

    this.centersService
      .listStudyCentersByAddendum(this.addendumId)
      .then((addendumsStudyCenter: AddendumStudyCenterByAddendumQuery) => {
        logger.debug('listStudyCentersByStudy response', addendumsStudyCenter);
        this.studyCentersFiltered.forEach((studyCenter) => {
          if (
            addendumsStudyCenter.items.filter(
              (s) => s.studyCenterID === studyCenter.studyCenterID
            ).length > 0
          ) {
            this.studyCentersFiltered = this.studyCentersFiltered.filter(
              (sc) => sc.studyCenterID !== studyCenter.studyCenterID
            );
          }
        });
      })
      .catch((error) => {
        logger.error('listStudyCentersByStudy error', error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  openAddAddendumStudyCenter(): void {
    const selctedheader = this.editMode ? 'Editar centro' : 'Asociar centro';
    const selectedData = this.editMode
      ? {
          editMode: true,
          selectedAddendumStudyCenter: this.selectedAddendumStudyCenter,
          studyId: this.studyId,
          addendumId: this.addendumId,
        }
      : {
          studyId: this.studyId,
          addendumId: this.addendumId,
          studyCenters: this.studyCentersFiltered,
        };

    if (this.studyCentersFiltered.length <= 0 && !this.editMode) {
      return this.messageService.add({
        severity: 'error',
        summary: `Error al asociar centro`,
        detail: `No hay centros que se puedan asociar. Debe asociar más centros en la pestaña
          -centros- del estudio para posteriormente asociar en esta enmienda.`,
      });
    } else {
      const ref = this.dialogService.open(AddendumCenterAddEditComponent, {
        header: selctedheader,
        width: '90%',
        data: selectedData,
        closeOnEscape: false,
        dismissableMask: false,
      });

      ref.onClose.subscribe((result: string) => {
        if (result && result !== 'cancelado') {
          this.onUpdate.emit('update');
          this.loadAddendumsStudyCenters();
          this.loadStudyCentersDataForThisAddendum();
          return this.messageService.add({
            severity: 'success',
            summary: `Centro ${result} exitosamente`,
            detail: `El centro fue ${result} con éxito.`,
          });
        }
      });
      this.editMode = false;
    }
  }

  deleteAddAddendumStudyCenter(): void {
    this.confirmationService.confirm({
      message:
        'Se eliminará el centro seleccionado </br></br>' +
        '<strong> Centro: </strong> ' +
        this.selectedAddendumStudyCenter.studyCenter.center.nombre +
        '</br>',
      accept: () => {
        this.sisec.showSpinner('Eliminando ...');
        this.addendumsService
          .getAddendumStudyCenter(this.selectedAddendumStudyCenter.id)
          .then((getAddendumStudyCenter) => {
            logger.debug(
              'getAddendumStudyCenter response',
              getAddendumStudyCenter
            );
            const updateAddendumStudyCenterInput: any = getAddendumStudyCenter;
            updateAddendumStudyCenterInput.estado = EntityState.DELETED;
            updateAddendumStudyCenterInput.expectedVersion =
              updateAddendumStudyCenterInput.version;
            delete updateAddendumStudyCenterInput.addendum;
            delete updateAddendumStudyCenterInput.ecIterations;
            delete updateAddendumStudyCenterInput.studyCenter;
            this.sisec.cleanQueryResponse(updateAddendumStudyCenterInput);
            this.addendumsService
              .updateAddendumStudyCenter(updateAddendumStudyCenterInput)
              .then((response) => {
                logger.debug('updateAddendumStudyCenter response', response);
                return this.messageService.add({
                  severity: 'success',
                  summary: 'Eliminado exitosamente',
                  detail: `El centro fue eliminado con éxito.`,
                });
              })
              .catch((error) => {
                logger.error('updateAddendumStudyCenter error', error);
              })
              .finally(() => {
                this.sisec.hideSpinner();
                this.loadAddendumsStudyCenters();
              });
          });
      },
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios del centro:  ${this.selectedAddendumStudyCenter.studyCenter.center.nombre}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'AddendumStudyCenter',
      },
    });
  }
}
