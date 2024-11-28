import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Logger } from 'aws-amplify';
import { GetSponsorQuery } from '../services/API.service';
import { SisecService } from '../services/sisec.service';
import { SponsorsService } from '../sponsors/sponsors.service';
import { MessageService } from 'primeng/api';

const logger = new Logger('home');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  logo: string = null;
  sponsor: GetSponsorQuery = null;

  display = false;
  constructor(
    private authService: AuthService,
    private sponsorsService: SponsorsService,
    private sisec: SisecService,
    private messageService: MessageService,
    public sisecService: SisecService
  ) {}

  closeModal(): void {
    this.sisecService.MessageHelpHome.view = false;
  }

  ngOnInit(): void {
    if (this.authService.isSponsorUser()) {
      this.sisec.showSpinner('Consultando patrocinador asociado al usuario...');
      this.sponsorsService
        .getSponsor(this.authService.getUserSponsorId())
        .then((response) => {
          if (response.estado === 'DELETED') {
            this.authService.logout();
            return this.messageService.add({
              severity: 'error',
              summary: 'Error al ingresar',
              detail:
                'El usuario con el que ha intentado conectarse tiene asociado un patrocinador que fue eliminado. Por favor, contáctese con el administrador.',
            });
          } else {
            logger.debug('getSponsor response', response);
            this.sponsor = response;
            this.sponsorsService.currentSponsor = response;
            this.loadSponsorLogo();
          }
        })
        .catch((error) => {
          logger.error('getSponsor error', error);
          this.sisec.showServiceError('consultar patrocinador');
          this.authService.logout();
        })
        .finally(() => {
          this.sisec.hideSpinner();
          this.display = this.sisecService.MessageHelpHome.view;
        });
    }
  }

  loadSponsorLogo(): void {
    this.sponsorsService
      .getImage(this.sponsor.logoURL)
      .then((rimage) => {
        logger.debug('getImage response ', rimage);
        this.logo = rimage;
      })
      .catch((error) => logger.error('getLogo error', error));
  }
}
