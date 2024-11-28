import { Component, OnInit } from '@angular/core';
import { SisecService } from 'src/app/services/sisec.service';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Logger } from 'aws-amplify';
import { CroService } from '../cro.service';
import { EntityState, ListCROsQuery } from 'src/app/services/API.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
const logger = new Logger('cro-list');

@Component({
  selector: 'app-cro-list',
  templateUrl: './cro-list.component.html',
  styleUrls: ['./cro-list.component.scss']
})
export class CroListComponent implements OnInit {

  cros = [];
  crosOriginal = [];
  croSelected = null;
  columns = [];
  first = 0;
  rows = 10;
  items: MenuItem[];
  msgs = [{severity: 'warn', summary: '', detail: 'No se encontraron CRO registrados.'}];

  constructor(
    private croService: CroService,
    private sisec: SisecService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.sisec.showSpinner('Consultando CROs...');
    this.croService.listCrO()
      .then((response: ListCROsQuery) => {
        logger.debug('listCrO response', response);
        this.cros = response.items;
        this.crosOriginal = response.items;
        this.buildCrOList(this.cros);
      })
      .catch(error => {
        logger.error('listCrO error', error);
      })
      .finally(() => this.sisec.hideSpinner());

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      {value: 'CRO', key: 'nombre', type: 'text'},
      {value: 'Nit', key: 'nit', type: 'text'},
      {value: 'Información contacto', key: 'informacionContacto', type: 'text'}
    ];

    this.items = [
      {
        label: 'Editar', icon: 'pi pi-pencil', command: () => {
          this.edit(this.croSelected.id);
        }
      },
      {
        label: 'Eliminar', icon: 'pi pi-trash', command: () => {
          this.delete(this.croSelected);
        }
      },
      {
        label: 'Ver historial de cambios', icon: 'pi pi-question-circle', command: () => {
          this.viewHistory(this.croSelected.id);
        }
      },
    ];
  }

  buildCrOList(CrOs: any[]): void {
    this.cros = CrOs.map(CrO => {
      return {
        id: CrO.id,
        nombre: CrO.nombre,
        nit: CrO.nit,
        descripcion: CrO.descripcion,
        informacionContacto: CrO.informacionContacto,
        user: CrO.user,
      };
    });
  }

  next(): void {
    this.first = this.first + this.rows;
  }
  prev(): void {
      this.first = this.first - this.rows;
  }
  reset(): void {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.cros ? this.first === (this.cros.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.cros ? this.first === 0 : true;
  }

  selectCro(cro): void {
    this.croSelected = cro;
  }

  edit(croId): void {
    this.router.navigate([`cro/${croId}/edit`]);
  }

  delete(cro): void {
    cro = this.crosOriginal.find(x => x.id === cro.id);
    this.confirmationService.confirm({
      message: 'Se eliminará la CRO: ' + cro.nombre,
      accept: () => {
        this.sisec.showSpinner('Eliminando la CRO ' + cro.nombre + '...');
        cro.estado = EntityState.DELETED;
        const expectedVersion = cro.version;
        delete cro.version;
        delete cro.__typename;
        delete cro.studyCenters;
        delete cro.createdAt;
        delete cro.updatedAt;
        this.croService.updateCro(cro, cro.id, expectedVersion)
          .then(response => {
            logger.debug('updateCommittee response', response);
            const index = this.crosOriginal.findIndex(x => x.id === cro.id);
            this.crosOriginal.splice(index, 1);
            this.buildCrOList(this.crosOriginal);
            this.croSelected = null;
            this.messageService.add({
              severity: 'success',
              summary: 'CRO eliminada',
              detail: 'La CRO fue eliminada con exitó',
            });
          })
          .catch(error => {
            logger.error('updateCommittee error', error);
          })
          .finally(() => this.sisec.hideSpinner());
      }
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.croSelected.nombre}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'CRO'
      }
    });
  }

}
