import { Component, OnInit } from '@angular/core';
import { SisecService } from 'src/app/services/sisec.service';
import { Router } from '@angular/router';
import { EntityState, ListCommitteesQuery } from 'src/app/services/API.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Logger } from 'aws-amplify';
import { CommitteeService } from '../committee.service';
import { LocationService } from 'src/app/services/location.service';
import { TypeCommitteePipe } from '../type-committee.pipe';
import { DialogService } from 'primeng/dynamicdialog';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
const logger = new Logger('committee-list');

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent implements OnInit {

  committees = [];
  committeesOriginal = [];
  committeeSelected = null;
  columns = [];
  first = 0;
  rows = 10;
  items: MenuItem[];
  msgs = [{severity: 'warn', summary: '', detail: 'No se encontraron comités registrados.'}];

  constructor(
    private committeeService: CommitteeService,
    private sisec: SisecService,
    private router: Router,
    private locationService: LocationService,
    private typeCommitteePipe: TypeCommitteePipe,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.sisec.showSpinner('Consultando comités...');
    this.committeeService.listCommittees()
      .then((response: ListCommitteesQuery) => {
        logger.debug('listCommittee response', response);
        this.committees = response.items;
        this.committeesOriginal = [...response.items];
        this.buildCommitteeList(this.committees);
      })
      .catch(error => {
        logger.error('listsponsors error', error);
      })
      .finally(() => this.sisec.hideSpinner());

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      {value: 'Nombre', key: 'nombre', type: 'text'},
      {value: 'Municipio', key: 'municipio', type: 'text'},
      {value: 'Resolución Invima', key: 'resolucionInvima', type: 'text'},
      {value: 'Tipo de comité', key: 'tipoComite', type: 'text'},
      {value: 'Periodicidad de reuniones', key: 'periodicidadReunionesCEI', type: 'text'},
      {value: 'Información contacto', key: 'informacionContacto', type: 'text'},
    ];

    this.items = [
      {
        label: 'Editar', icon: 'pi pi-pencil', command: () => {
          this.edit(this.committeeSelected.id);
        }
      },
      {
        label: 'Eliminar', icon: 'pi pi-trash', command: () => {
          this.delete(this.committeeSelected);
        }
      },
      {
        label: 'Ver historial de cambios', icon: 'pi pi-question-circle', command: () => {
          this.viewHistory(this.committeeSelected.id);
        }
      },
    ];
  }

  buildCommitteeList(committees: any[]): void {
    this.committees = committees.map(committee => {
      if (committee.tipoComite === 'Externo' || committee.tipoComite === 'Institucional') {
        return {
          id: committee.id,
          nombre: committee.nombre,
          estado: committee.estado,
          user: committee.user,
          tipoComite: committee.tipoComite,
          periodicidadReunionesCEI: committee.periodicidadReunionesCEI,
          municipio: committee.municipio,
          direccion: committee.direccion,
          resolucionInvima: committee.resolucionInvima,
          informacionContacto: committee.informacionContacto,
        };
      } else {
        const municipio = this.locationService.getMunicipioName(committee.municipio);
        return {
          id: committee.id,
          nombre: committee.nombre,
          estado: committee.estado,
          user: committee.user,
          tipoComite: this.typeCommitteePipe.transform(committee.tipoComite),
          periodicidadReunionesCEI: committee.periodicidadReunionesCEI,
          municipio,
          direccion: committee.direccion,
          resolucionInvima: committee.resolucionInvima,
          informacionContacto: committee.informacionContacto,
        };
      }
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
      return this.committees ? this.first === (this.committees.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.committees ? this.first === 0 : true;
  }

  selectSponsor(committee): void {
    this.committeeSelected = committee;
  }

  edit(committeeId): void {
    this.router.navigate([`committee/${committeeId}/edit`]);
  }

  delete(committee): void {
    committee = this.committeesOriginal.find(x => x.id === committee.id);
    this.confirmationService.confirm({
      message: 'Se eliminará el comité: ' + committee.nombre,
      accept: () => {
        this.sisec.showSpinner('Eliminando el comité ' + committee.nombre + '...');
        committee.estado = EntityState.DELETED;
        const expectedVersion = committee.version;
        delete committee.version;
        delete committee.__typename;
        delete committee.studyCenters;
        delete committee.createdAt;
        delete committee.updatedAt;
        this.committeeService.updateCommittee(committee, committee.id, expectedVersion)
          .then(response => {
            logger.debug('updateCommittee response', response);
            const index = this.committeesOriginal.findIndex(x => x.id === committee.id);
            this.committeesOriginal.splice(index, 1);
            this.buildCommitteeList(this.committeesOriginal);
            this.committeeSelected = null;
            this.messageService.add({
              severity: 'success',
              summary: 'Comité eliminado',
              detail: 'El comité fue eliminado con exitó',
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
      header: `Historial de cambios: ${this.committeeSelected.nombre}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Committee'
      }
    });
  }

}
