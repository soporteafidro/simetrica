import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { SisecService } from 'src/app/services/sisec.service';
import { Logger } from 'aws-amplify';
const logger = new Logger('time-bar-chart');

@Component({
  selector: 'app-time-bar-chart',
  templateUrl: './time-bar-chart.component.html',
  styleUrls: ['./time-bar-chart.component.scss'],
})
export class TimeBarChartComponent implements OnInit, OnChanges {
  @Input() dataAverageInvimaAllSponsor: any = null;
  @Input() dataAverageInvimaSpecificSponsor: any = null;
  @Input() dataInitTimeAllSponsor = null;
  @Input() dataInitTimeSpecificSponsor = null;
  @Input() dataAverageCenterAllSponsor: any = null;
  @Input() dataAverageCenterSpecificSponsor: any = null;
  @Input() idCanvas: any = null;
  canvas: any = null;
  ctx: any = null;
  myChart: any = null;
  constructor(private sisecService: SisecService) {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    if (
      this.dataAverageInvimaAllSponsor ||
      this.dataAverageInvimaSpecificSponsor
    ) {
      this.renderChartStackedBars(
        this.dataAverageInvimaAllSponsor,
        this.dataAverageInvimaSpecificSponsor
      );
    } else if (
      this.dataInitTimeAllSponsor ||
      this.dataInitTimeSpecificSponsor
    ) {
      this.renderChartSimpleBars(
        this.dataInitTimeAllSponsor,
        this.dataInitTimeSpecificSponsor
      );
    } else if (
      this.dataAverageCenterAllSponsor ||
      this.dataAverageCenterSpecificSponsor
    ) {
      this.renderChartStackedBars(
        this.dataAverageCenterAllSponsor,
        this.dataAverageCenterSpecificSponsor
      );
    }
  }

  renderChartStackedBars(dataAllSponsor, dataSpecificSponsor): void {
    if (this.idCanvas) {
      this.canvas = document.getElementById(this.idCanvas);
      this.ctx = this.canvas.getContext('2d');
      let dataSet;
      if (!dataSpecificSponsor) {
        dataSet = [
          {
            stack: '1',
            label: dataAllSponsor.serie1.label,
            data: dataAllSponsor.serie1.data,
            backgroundColor: '#F2643C',
          },
          {
            stack: '1',
            label: dataAllSponsor.serie2.label,
            data: dataAllSponsor.serie2.data,
            backgroundColor: '#211C54',
          },
        ];
      } else {
        dataSet = [
          {
            stack: '1',
            label: dataAllSponsor.serie1.label,
            data: dataAllSponsor.serie1.data,
            backgroundColor: '#F2643C',
          },
          {
            stack: '1',
            label: dataAllSponsor.serie2.label,
            data: dataAllSponsor.serie2.data,
            backgroundColor: '#211C54',
          },
          {
            stack: '2',
            label: dataSpecificSponsor.serie1.label,
            data: dataSpecificSponsor.serie1.data,
            backgroundColor: '#f2b2a0',
          },
          {
            stack: '2',
            label: dataSpecificSponsor.serie2.label,
            data: dataSpecificSponsor.serie2.data,
            backgroundColor: '#8a86b3',
          },
        ];
      }
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.sisecService.calendarEs.monthNamesShort,
          datasets: dataSet,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }

  renderChartSimpleBars(
    dataChartInitTimeAllSponsor,
    dataInitTimeSpecificSponsor
  ): void {
    if (this.idCanvas) {
      this.canvas = document.getElementById(this.idCanvas);
      this.ctx = this.canvas.getContext('2d');
      let dataSet;
      if (!dataInitTimeSpecificSponsor) {
        dataSet = [
          {
            label: 'Inicio de estudios',
            data: dataChartInitTimeAllSponsor.data.cantidades,
            backgroundColor: '#F2643C',
          },
        ];
      } else {
        dataSet = [
          {
            label: 'Inicio de estudios de todos los patrocinadores',
            data: dataChartInitTimeAllSponsor.data.cantidades,
            backgroundColor: '#F2643C',
          },
          {
            label: `Inicio de estudios del patrocinador ${dataInitTimeSpecificSponsor.data.patrocinador}`,
            data: dataInitTimeSpecificSponsor.data.cantidades,
            backgroundColor: '#211C54',
          },
        ];
      }
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: dataChartInitTimeAllSponsor.data.fechas,
          datasets: dataSet,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }
}
