import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logger } from 'aws-amplify';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService } from 'primeng/dynamicdialog';
import {
  AddendaByStudyQuery,
  EntityState,
  GetAddendumQuery,
  UpdateAddendumInput,
} from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { AddendumAddEditComponent } from '../addendum-add-edit/addendum-add-edit.component';
import { AddendumsService } from '../addendums.service';
const logger = new Logger('addendums-detail');

@Component({
  selector: 'app-addendum-detail',
  templateUrl: './addendum-detail.component.html',
  styleUrls: ['./addendum-detail.component.scss'],
})
export class AddendumDetailComponent implements OnInit {
  constructor(
    private addendumsService: AddendumsService,
    public sisec: SisecService,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    public dateIITPipe: DateIITPipe,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  @Input() addendum: GetAddendumQuery;
  @Input() studyId: string = null;
  @Output() onUpdate = new EventEmitter<string>();

  items: MenuItem[];
  isDeleted = false;
  isReader = false;
  isMedico = false;

  ngOnInit() {
    this.loadMenuItems();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  loadMenuItems(): void {
    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.openEditAddendum();
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-eye',
        command: () => {
          this.viewHistory(this.addendum.id);
        },
      },
    ];
    if (this.auth.isAdmin() || this.auth.isSupervisor()) {
      this.items.push({
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteAddendum();
        },
      });
    }
  }

  openEditAddendum(): void {
    const ref = this.dialogService.open(AddendumAddEditComponent, {
      header: 'Editar enmienda',
      width: '90%',
      data: {
        editMode: true,
        addendumId: this.addendum.id,
        studyId: this.studyId,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: string) => {
      if (result && result !== 'cancelado') {
        this.onUpdate.emit('update');

        return this.messageService.add({
          severity: 'success',
          summary:
            result.charAt(0).toUpperCase() + result.slice(1) + ' exitosamente',
          detail: 'La enmienda fue guardada con éxito.',
        });
      }
    });
  }

  deleteAddendum(): void {
    let updateAddendum: UpdateAddendumInput;
    this.addendumsService
      .getAddendum(this.addendum.id)
      .then((addendum: GetAddendumQuery) => {
        updateAddendum =
          this.addendumsService.generateAddendumUpdateInput(addendum);
        updateAddendum.estado = EntityState.DELETED;
        this.confirmationService.confirm({
          message:
            'Se eliminará la enmienda seleccionada </br></br>' +
            '<strong> Descripción: </strong> ' +
            this.addendum.descripcion +
            '</br>',
          accept: () => {
            this.sisec.showSpinner('Eliminando...');
            this.addendumsService
              .updateAddendum(updateAddendum)
              .then((response) => {
                this.onUpdate.emit('enmienda removida');
                this.isDeleted = true;
                this.messageService.add({
                  severity: 'success',
                  summary: 'Enmienda eliminada exitosamente',
                  detail: `Se eliminó exitosamente la enmienda asociada al estudio.`,
                });
                logger.debug('updateAddendum response', response);
              })
              .catch((error) => {
                logger.error('updateAddendum error', error);
              })
              .finally(() => this.sisec.hideSpinner());
          },
        });
      });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios de: ${this.addendum.descripcion}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Addendum',
      },
    });
  }
}
