import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { Logger } from 'aws-amplify';
import { CentersService } from 'src/app/centers/centers.service';
import { ReportServiceService } from '../report-service.service';
import { CommitteeService } from 'src/app/committee/committee.service';
import { AuthService } from 'src/app/services/auth.service';
const logger = new Logger('filter-chart');

@Component({
  selector: 'app-filter-chart',
  templateUrl: './filter-chart.component.html',
  styleUrls: ['./filter-chart.component.scss'],
})
export class FilterChartComponent implements OnInit, OnChanges {
  @Input() committeeFilterView: boolean = null;
  @Input() sponsorFilterView: boolean = null;
  @Output() filter = new EventEmitter();
  selectPatrocinadorComite = true;
  sponsor = null;
  committee = null;
  filtroYear = null;
  sponsors = [];
  committees = [];
  years = [];

  constructor(
    private sponsorsService: SponsorsService,
    private centersService: CentersService,
    private committeeService: CommitteeService,
    private messageService: MessageService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      const y = date.getFullYear();
      this.years.push({
        label: y - i,
        value: y - i,
      });
    }
    const sponsorId = this.authService.getUserSponsorId();
    const rol = this.authService.getUserRole();
    if (rol === 'Supervisor' &&  sponsorId || rol === 'Digitador' &&  sponsorId) {
      this.selectPatrocinadorComite = false;
      this.loadSponsorOrCenterUserSupervisorOrReader(sponsorId);
    } else {
      this.selectPatrocinadorComite = true;
      this.loadSponsorOrCenterUserAdmin();
    }
  }

  ngOnChanges(): void {
    const sponsorId = this.authService.getUserSponsorId();
    const rol = this.authService.getUserRole();
    if (rol === 'Supervisor' &&  sponsorId) {
      this.selectPatrocinadorComite = false;
      this.loadSponsorOrCenterUserSupervisorOrReader(sponsorId);
    } else {
      this.selectPatrocinadorComite = true;
      this.loadSponsorOrCenterUserAdmin();
    }
  }

  loadSponsorOrCenterUserSupervisorOrReader(sponsorId): void {
    if (this.sponsorFilterView) {
      this.sponsorsService.getSponsor(sponsorId).then(response => {
        logger.debug('getSponsor response', response);
        const sponsorFormat = {
          label: response.nombre,
          value: response,
        };
        this.sponsor = sponsorFormat.value;
        this.filtroYear = this.years[0].value;
        this.sponsors = [sponsorFormat];
        this.filtrar();
      })
      .catch((error) => logger.error('getSponsor error', error));
    } else {
      this.committeeService
        .listCommittees()
        .then((response) => {
          logger.debug('listCommittees response', response);
          const committeeFormat = [];
          for (const committee of response.items) {
            committeeFormat.push({
              label: committee.nombre,
              value: committee,
            });
          }
          this.committee = committeeFormat[0].value;
          this.filtroYear = this.years[0].value;
          this.committees = committeeFormat;
          this.filtrar();
        })
        .catch((error) => logger.error('listCommittees error', error));
    }
  }

  loadSponsorOrCenterUserAdmin(): void {
    if (this.sponsorFilterView) {
      this.sponsorsService
        .listSponsors()
        .then((response) => {
          logger.debug('listSponsors response', response);
          const sponsorFormat = [];
          for (const patrocinador of response.items) {
            sponsorFormat.push({
              label: patrocinador.nombre,
              value: patrocinador,
            });
          }
          this.sponsor = sponsorFormat[0].value;
          this.filtroYear = this.years[0].value;
          this.sponsors = sponsorFormat;
          this.filtrar();
        })
        .catch((error) => logger.error('listSponsors error', error));
    } else {
      this.committeeService
        .listCommittees()
        .then((response) => {
          logger.debug('listCommittees response', response);
          const committeeFormat = [];
          for (const committee of response.items) {
            committeeFormat.push({
              label: committee.nombre,
              value: committee,
            });
          }
          this.committee = committeeFormat[0].value;
          this.filtroYear = this.years[0].value;
          this.committees = committeeFormat;
          this.filtrar();
        })
        .catch((error) => logger.error('listCommittees error', error));
    }
  }

  filtrar(): void {
    if (
      (!this.sponsor && !this.filtroYear) ||
      (!this.committee && !this.filtroYear)
    ) {
      this.messageService.add({
        severity: 'warn',
        detail: 'Debe completar los dos filtros.',
      });
    } else {
      if (this.sponsor) {
        const filtro = {
          sponsor: this.sponsor,
          filtroYear: this.filtroYear,
        };
        this.filter.emit(filtro);
      } else {
        const filtro = {
          committee: this.committee,
          filtroYear: this.filtroYear,
        };
        this.filter.emit(filtro);
      }
    }
  }
}
