import { Component, OnInit } from '@angular/core';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { Router } from '@angular/router';
import { SponsorsService } from '../sponsors.service';
import { EntityState, ListSponsorsQuery } from 'src/app/services/API.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';
import { DialogService } from 'primeng/dynamicdialog';
const logger = new Logger('sponsors-list');

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss'],
})
export class SponsorListComponent implements OnInit {
  columns = [];
  first = 0;
  rows = 10;
  items: MenuItem[];
  sponsorSelected = null;
  msgs = [
    {
      severity: 'warn',
      summary: '',
      detail: 'No se encontraron patrocinadores registrados.',
    },
  ];

  constructor(
    private sponsorsService: SponsorsService,
    private sisec: SisecService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  sponsors = [];
  ngOnInit(): void {
    this.sisec.showSpinner('Consultando patrocinadores...');
    this.sponsorsService
      .listSponsors()
      .then((response: ListSponsorsQuery) => {
        logger.debug('listsponsors response', response);
        this.sponsors = response.items;
        this.buildSponsorsList(this.sponsors);
        this.loadSponsorsLogos();
      })
      .catch((error) => {
        logger.error('listsponsors error', error);
      })
      .finally(() => this.sisec.hideSpinner());

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      { value: 'Nit', key: 'nit', type: 'text' },
      { value: 'Patrocinador', key: 'nombre', type: 'text' },
      { value: 'Correo', key: 'correo', type: 'text' },
      { value: 'Datos de contacto', key: 'informacionContacto', type: 'text' },
    ];

    this.items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.edit(this.sponsorSelected.id);
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.delete(this.sponsorSelected);
        },
      },
      {
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory(this.sponsorSelected.id);
        },
      },
    ];
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
    return this.sponsors
      ? this.first === this.sponsors.length - this.rows
      : true;
  }
  isFirstPage(): boolean {
    return this.sponsors ? this.first === 0 : true;
  }

  buildSponsorsList(sponsors: any[]): void {
    this.sponsors = sponsors.map((sponsor) => {
      return {
        id: sponsor.id,
        nit: sponsor.nit,
        nombre: sponsor.nombre,
        correo: sponsor.correo,
        informacionContacto: sponsor.informacionContacto,
        version: sponsor.version,
      };
    });
  }

  selectSponsor(sponsor): void {
    this.sponsorSelected = sponsor;
  }

  /**
   * Carga las imagenes de logos de S3
   */
  loadSponsorsLogos(): void {
    this.sponsors.forEach((company) => {
      if (company.logoURL) {
        this.sponsorsService
          .getImage(company.logoURL)
          .then((rimage) => {
            logger.debug('getImage response ', rimage);
            company.s3LogoURL = rimage;
          })
          .catch((error) => logger.error(error));
      }
    });
  }

  edit(sponsorsID): void {
    this.router.navigate(['admin/sponsors/' + sponsorsID + '/list/edit']);
  }

  delete(sponsor): void {
    this.confirmationService.confirm({
      message: 'Se eliminará el patrocinador: ' + sponsor.nombre,
      accept: () => {
        this.sisec.showSpinner(
          'Eliminando el patrocinador ' + sponsor.nombre + '...'
        );
        logger.debug(sponsor);
        sponsor.estado = EntityState.DELETED;
        const expectedVersion = sponsor.version;
        delete sponsor.version;
        this.sponsorsService
          .updateSponsor(sponsor, sponsor.id, expectedVersion)
          .then((response) => {
            logger.debug('updatesponsor response', response);
            const index = this.sponsors.findIndex((x) => x.id === sponsor.id);
            this.sponsors.splice(index, 1);
            this.selectSponsor = null;
            this.messageService.add({
              severity: 'success',
              summary: 'Patrocinador eliminado',
              detail: 'La patrocinador fue eliminado con exitó',
            });
          })
          .catch((error) => {
            logger.error('updatesponsor error', error);
          })
          .finally(() => this.sisec.hideSpinner());
      },
    });
  }

  viewHistory(id): void {
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios: ${this.sponsorSelected.nombre}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Sponsor',
      },
    });
  }
}
