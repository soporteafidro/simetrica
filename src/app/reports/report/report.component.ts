import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SisecService } from 'src/app/services/sisec.service';
import { ReportServiceService } from '../report-service.service';
import { Logger } from 'aws-amplify';
const logger = new Logger('report');

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  dataChartAverageInvimaAllSponsor = null;
  dataChartAverageInvimaSpecificSponsor = null;
  dataChartAverageCenterAllSponsor = null;
  dataChartAverageCenterSpecificSponsor = null;
  dataChartInitTimeAllSponsor = null;
  dataChartInitTimeSpecificSponsor = null;

  spinnerShow: boolean = false;
  constructor(
    private reportServiceService: ReportServiceService,
    private sisecService: SisecService
  ) {}

  ngOnInit(): void {
    const fecha = new Date();
    const year = fecha.getFullYear();
    this.filterAllSponsor(year);
    this.getTimeinitAllSponsor(year);
    this.getTimeinitAllCommettee(year);
  }

  Filter(e, filtro): void {
    const filter = e;

    if(this.spinnerShow) {
      this.sisecService.showSpinner('Consultando tiempos...');
    }
    //this.sisecService.showSpinner('Consultando tiempos...');
    if (filtro === 'filtro1') {
      this.reportServiceService
        .getInvimaTimeSponsor(filter.filtroYear, filter.sponsor.id)
        .then((response) => {
          const data = {
            serie1: {
              label: filter.sponsor.nombre,
              data: response.dataPatrocinador,
            },
            serie2: {
              label: `${filter.sponsor.nombre} - INVIMA`,
              data: response.dataInvima,
            },
          };
          this.dataChartAverageInvimaSpecificSponsor = data;
        })
        .catch((error) => logger.error('getInvimaTimeSponsor error', error))
        .finally(() => this.sisecService.hideSpinner());
    } else if (filtro === 'filtro2') {
      this.reportServiceService
        .getTimeinitSpecificSponsor(filter.filtroYear, filter.sponsor.id)
        .then((response) => {
          const data = {
            data: {
              patrocinador: filter.sponsor.nombre,
              fechas: response.fechas,
              cantidades: response.cantidades,
            },
          };
          this.dataChartInitTimeSpecificSponsor = data;
        })
        .catch((error) =>
          logger.error('getTimeinitSpecificSponsor error', error)
        )
        .finally(() => this.sisecService.hideSpinner());
    } else if (filtro === 'filtro3') {
      this.reportServiceService
        .getCenterSponsorTime(filter.filtroYear, filter.committee.id)
        .then((response) => {
          const data = {
            serie1: {
              label: filter.committee.nombre,
              data: response.dataCentro,
            },
            serie2: {
              label: `${filter.committee.nombre}`,
              data: response.dataPatrocinador,
            },
          };
          this.dataChartAverageCenterSpecificSponsor = data;
        })
        .catch((error) =>
          logger.error('getTimeinitSpecificSponsor error', error)
        )
        .finally(() => this.sisecService.hideSpinner());
    }
  }

  filterAllSponsor(currentYear): void {
    this.sisecService.showSpinner('Consultando tiempos...');
    this.reportServiceService
      .getInvimaTimeAll(currentYear)
      .then((response) => {
        const dataInvimaTime = {
          serie1: {
            label: 'Promedio patrocinadores',
            data: response.dataPatrocinador,
          },
          serie2: {
            label: 'INVIMA',
            data: response.dataInvima,
          },
        };
        this.dataChartAverageInvimaAllSponsor = dataInvimaTime;
      })
      .catch((error) => logger.error('getInvimaTimeAll error', error))
      .finally(() => {});
  }

  getTimeinitAllSponsor(currentYear): void {
    this.reportServiceService
      .getTimeinitAllSponsor(currentYear)
      .then((response) => {
        const data = {
          data: {
            fechas: response.fechas,
            cantidades: response.cantidades,
          },
        };
        this.dataChartInitTimeAllSponsor = data;
      })
      .catch((error) => logger.error('getTimeinitAllSponsor error', error))
      .finally(() => {});
  }

  getTimeinitAllCommettee(currentYear): void {
    this.reportServiceService
      .getCenterTimeAll(currentYear)
      .then((response) => {
        const data = {
          serie1: {
            label: 'Promedio patrocinadores',
            data: response.dataCentro,
          },
          serie2: {
            label: 'Todos los comités',
            data: response.dataPatrocinador,
          },
        };
        this.dataChartAverageCenterAllSponsor = data;
        setTimeout(() => this.spinnerShow = true, 1000);
      })
      .catch((error) => logger.error('getTimeinitAllSponsor error', error))
      .finally(() => this.sisecService.hideSpinner());
  }
}
