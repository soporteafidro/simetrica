import { Component, OnInit } from '@angular/core';
import { SisecService } from 'src/app/services/sisec.service';
import { EntityState, ListCentersQuery } from 'src/app/services/API.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Logger } from 'aws-amplify';
import { CentersService } from '../centers.service';
import { TypeCenterPipe } from '../type-center.pipe';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { DialogService } from 'primeng/dynamicdialog';
const logger = new Logger('centers-list');

@Component({
  selector: 'app-centers-list',
  templateUrl: './centers-list.component.html',
  styleUrls: ['./centers-list.component.scss'],
})
export class CentersListComponent implements OnInit {
  columns = [];
  first = 0;
  rows = 10;
  items: MenuItem[];
  centerSelected = null;
  centers = [];
  centersOriginal = [];
  msgs = [
    {
      severity: 'warn',
      summary: '',
      detail: 'No se encontraron centros registrados.',
    },
  ];

  constructor(
    private centersService: CentersService,
    private sisec: SisecService,
    private typeCenterPipe: TypeCenterPipe,
    private locationService: LocationService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.sisec.showSpinner('Consultando centros...');
    this.centersService
      .listCenters()
      .then((response: ListCentersQuery) => {
        logger.debug('listCenters response', response);
        this.centers = response.items;
        this.centersOriginal = [...response.items];
        this.buildCentersList(this.centers);
      })
      .catch((error) => {
        logger.error('listCenters error', error);
      })
      .finally(() => this.sisec.hideSpinner());

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      { value: 'Centro', key: 'nombre', type: 'text' },
      { value: 'Nit', key: 'nit', type: 'text' },
      { value: 'Municipio', key: 'municipio', type: 'text' },
      {
        value: 'Certificación Invima',
        key: 'resolucionCertificacion',
        type: 'text',
      },
      { value: 'Vigencia Invima', key: 'resolucionVigente', type: 'text' },
      { value: 'Tipo centro', key: 'tipoCentro', type: 'text' },
      { value: 'Nivel atención', key: 'nivelAtencion', type: 'text' },
      { value: 'Número de empleados', key: 'numeroEmpleados', type: 'text' },
      {
        value: 'Información contacto',
        key: 'informacionContacto',
        type: 'text',
      },
    ];

    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.edit(this.centerSelected.id);
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.delete(this.centerSelected);
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory(this.centerSelected.id);
        },
      },
    ];
  }

  buildCentersList(centers: any[]): void {
    this.centers = centers.map((center) => {
      if (
        center.tipoCentro === 'Convencional' ||
        center.tipoCentro === 'No convencional'
      ) {
        return {
          id: center.id,
          nombre: center.nombre,
          estado: center.estado,
          nit: center.nit,
          tipoCentro: center.tipoCentro,
          nivelAtencion: center.nivelAtencion,
          numeroEmpleados: center.numeroEmpleados,
          municipio: center.municipio,
          user: center.user,
          resolucionCertificacion: center.resolucionCertificacion,
          resolucionVigente: center.resolucionVigente,
          informacionContacto: center.informacionContacto,
          version: center.version,
        };
      } else {
        const municipio = this.locationService.getMunicipioName(
          center.municipio
        );
        return {
          id: center.id,
          nombre: center.nombre,
          estado: center.estado,
          nit: center.nit,
          tipoCentro: this.typeCenterPipe.transform(center.tipoCentro),
          nivelAtencion: center.nivelAtencion,
          numeroEmpleados: center.numeroEmpleados,
          municipio,
          user: center.user,
          resolucionCertificacion: center.resolucionCertificacion,
          resolucionVigente: center.resolucionVigente,
          informacionContacto: center.informacionContacto,
          version: center.version,
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
    return this.centers ? this.first === this.centers.length - this.rows : true;
  }
  isFirstPage(): boolean {
    return this.centers ? this.first === 0 : true;
  }

  selectCenter(center): void {
    this.centerSelected = center;
  }

  edit(centersID): void {
    this.router.navigate([`center/${centersID}/edit`]);
  }

  delete(center): void {
    center = this.centersOriginal.find((x) => x.id === center.id);
    this.confirmationService.confirm({
      message: 'Se eliminará el centro: ' + center.nombre,
      accept: () => {
        this.sisec.showSpinner('Eliminando el centro ' + center.nombre + '...');
        center.estado = EntityState.DELETED;
        const expectedVersion = center.version;
        delete center.version;
        delete center.__typename;
        delete center.studyCenters;
        delete center.createdAt;
        delete center.updatedAt;
        this.centersService
          .updateCenter(center, center.id, expectedVersion)
          .then((response) => {
            logger.debug('updateCenter response', response);
            const index = this.centersOriginal.findIndex(
              (x) => x.id === center.id
            );
            this.centersOriginal.splice(index, 1);
            this.buildCentersList(this.centersOriginal);
            this.centerSelected = null;
            this.messageService.add({
              severity: 'success',
              summary: 'Centro eliminado',
              detail: 'El centro fue eliminado con exitó',
            });
          })
          .catch((error) => {
            logger.error('updateCenter error', error);
          })
          .finally(() => this.sisec.hideSpinner());
      },
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.centerSelected.nombre}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Center',
      },
    });
  }
}
