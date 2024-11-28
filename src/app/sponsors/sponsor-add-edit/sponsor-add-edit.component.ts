import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateSponsorInput, EntityState, GetSponsorQuery, ListSponsorsQuery } from 'src/app/services/API.service';
import { NgForm } from '@angular/forms';
import { SponsorsService } from '../sponsors.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
const logger = new Logger('sponsors-add-edit');

@Component({
  selector: 'app-sponsor-add-edit',
  templateUrl: './sponsor-add-edit.component.html',
  styleUrls: ['./sponsor-add-edit.component.scss']
})
export class SponsorAddEditComponent implements OnInit {

  editMode = false;
  sponsors: any[] = [];
  fileToUpload: File = null;
  sponsor: CreateSponsorInput = {
    nombre: null,
    nit: null,
    correo: null,
    informacionContacto: null,
    logoURL: null,
    estado: EntityState.ACTIVE,
    user: null
  };
  id = null;
  expectedVersion = null;
  logoURL = null;
  source;

  @ViewChild('f', { static: true }) sponsorForm: NgForm;

  constructor(
    private sponsorsService: SponsorsService, private sisec: SisecService,
    private router: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.sponsorsService.listSponsors()
      .then((response: ListSponsorsQuery) => {
        logger.debug('listsponsors response', response);
        this.sponsors = response.items;
      })
      .catch(error => {
        logger.error('listsponsors error', error);
      });

    const id = this.route.snapshot.params.sponsor_id;
    this.source = this.route.snapshot.params.source;
    this.editMode = false;
    if (id) {
      this.sisec.showSpinner('Consultando patrocinador para su edición');
      this.editMode = true;
      this.sponsorsService.getSponsor(id).then((response: GetSponsorQuery) => {
        logger.debug('getsponsor response', response);
        this.expectedVersion = response.version;
        this.id = response.id;
        this.sisec.cleanQueryResponse(response);
        delete response.studies;
        this.sponsor = Object.assign(this.sponsor, response);
        this.sponsorsService.getImage(this.sponsor.logoURL)
          .then(rimage => {
            logger.debug('getImage response:', rimage);
            this.logoURL = rimage;
          })
          .catch(error => logger.error('getImage error:', error));
      }).catch(error => logger.error('getSponsor error', error))
        .finally(() => this.sisec.hideSpinner());
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sponsor.nombre = this.sisec.toUpperCaseFirstLetter(this.sponsor.nombre);
      this.sponsor.nombre = this.sponsor.nombre.trim();
      this.sponsor.nit = this.sponsor.nit.trim();
      if (this.fileToUpload) {
        this.sponsor.logoURL = 'LOGOS' + this.fileToUpload.name;
      }
      if (!this.isDuplicate()) {
        if (this.editMode) {
          this.sisec.showSpinner('Editando el patrocinador ' + this.sponsor.nombre + '...');
          this.sponsorsService.updateSponsor(this.sponsor, this.id, this.expectedVersion)
            .then(response => {
              logger.debug('updatesponsor response', response);
              this.uploadLogoAndRedirect();
              return this.messageService.add({
                severity: 'success',
                summary: 'Patrocinador editado exitosamente',
                detail: `El patrocinador fue editado con éxito.`,
              });
            })
            .catch(error => {
              logger.error('updatesponsor error', error);
              this.sisec.hideSpinner();
            });
        } else {
          this.sisec.showSpinner('Creando nuevo patrocinador...');
          logger.debug('createsponsor input', this.sponsor);
          this.sponsorsService.createSponsor(this.sponsor)
            .then(response => {
              logger.debug('createsponsor response', response);
              this.sponsor.id = response.id;
              this.uploadLogoAndRedirect();
              return this.messageService.add({
                severity: 'success',
                summary: 'Patrocinador creado exitosamente',
                detail: `El patrocinador fue creado con éxito.`,
              });
            })
            .catch(error => {
              logger.error('createsponsor error', error);
              this.sisec.hideSpinner();
            });
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar patrocinador',
          detail: `Ya existe un patrocinador con el nit o el nombre ingresado`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('Patrocinador');
    }
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const patrocinadores = this.sponsors.filter(x => x.nit === this.sponsor.nit || x.nombre === this.sponsor.nombre);
      if (patrocinadores.length > 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return this.sponsors.findIndex(x => x.nit === this.sponsor.nit || x.nombre === this.sponsor.nombre) !== -1;
    }
  }

  private uploadLogoAndRedirect(): void {
    if (this.fileToUpload) {
      this.sisec.showSpinner('Cargando imagen al servidor...');
      this.sponsorsService.saveImage(this.fileToUpload, this.sponsor.logoURL)
        .then(response => {
          logger.debug('saveImage response', response);
        })
        .catch(error => logger.error('saveImage error', error))
        .finally(() => {
          this.sisec.hideSpinner();
          this.router.navigate(['/admin/sponsors/list']);
        });
    } else {
      this.router.navigate(['/admin/sponsors/list']);
    }
  }

  onCancelar(): void {
    this.sponsorForm.reset();
    if (this.source === 'viewer') {
      this.router.navigate(['/viewer/home']);
    } else {
      this.router.navigate(['/admin/sponsors/list']);
    }
  }

  fileSelected(event: any): void {
    const file = event.target.files[0];
    this.fileToUpload = event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.logoURL = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
}
