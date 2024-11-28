import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  CreateCenterInput,
  EntityState,
  GetCenterQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { Logger } from 'aws-amplify';
import { CentersService } from '../centers.service';
import { CenterTypeEnum } from 'src/app/services/API.service';
import { LocationService } from 'src/app/services/location.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
const logger = new Logger('center-add-edit');

@Component({
  selector: 'app-center-add-edit',
  templateUrl: './center-add-edit.component.html',
  styleUrls: ['./center-add-edit.component.scss'],
})
export class CenterAddEditComponent implements OnInit {
  levelAtentionView = null;

  center: CreateCenterInput = {
    nombre: null,
    estado: EntityState.ACTIVE,
    nit: null,
    user: null,
    tipoCentro: null,
    nivelAtencion: null,
    numeroEmpleados: null,
    municipio: null,
    resolucionCertificacion: null,
    resolucionVigente: null,
    informacionContacto: null,
  };
  editMode = false;
  expectedVersion = null;
  id = null;
  locationOpction = [];
  levelAttentionOption = [];
  typeCenter = [];
  centers: any = [];
  isModal = false;

  @ViewChild('f', { static: true }) centerForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private sisec: SisecService,
    private certersService: CentersService,
    private locations: LocationService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.isModal = this.config?.data?.isModal;
    this.locationOpction = this.locations.getMunicipiosSI();
    this.levelAttentionOption = [
      { label: 1, value: '1' },
      { label: 2, value: '2' },
      { label: 3, value: '3' },
      { label: 4, value: '4' },
    ];
    this.typeCenter = [
      {
        label: 'Exclusivo para Investigación Clínica',
        value: CenterTypeEnum.EXCLUSIVO_INVESTIGACION,
      },
      { label: 'Privado', value: CenterTypeEnum.PRIVADO },
      { label: 'Público', value: CenterTypeEnum.PUBLICO },
    ];

    this.certersService
      .listCenters()
      .then((response) => {
        logger.debug('listCenters response', response);
        this.centers = response.items;
      })
      .catch((error) => logger.error('listCenters error', error));

    if (id) {
      this.sisec.showSpinner('Consultando centro para su edición');
      this.editMode = true;
      this.certersService
        .getCenter(id)
        .then((response: GetCenterQuery) => {
          logger.debug('getCenter response', response);
          this.expectedVersion = response.version;
          this.id = response.id;
          this.sisec.cleanQueryResponse(response);
          delete response.studyCenters;
          this.center = Object.assign(this.center, response);
          if (this.center.tipoCentro === CenterTypeEnum.PRIVADO) {
            this.levelAtentionView = true;
          }
        })
        .catch((error) => logger.error('getCenter error', error))
        .finally(() => this.sisec.hideSpinner());
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.center.nombre = this.sisec.toUpperCaseFirstLetter(
        this.center.nombre
      );
      this.center.nombre = this.center.nombre.trim();
      this.center.nit = this.center.nit.trim();
      if (!this.isDuplicate()) {
        if (this.editMode) {
          this.sisec.showSpinner(
            'Editando el centro ' + this.center.nombre + '...'
          );
          this.certersService
            .updateCenter(this.center, this.id, this.expectedVersion)
            .then((response) => {
              logger.debug('updateCenter response', response);
              this.router.navigate(['centers']);
            })
            .catch((error) => {
              logger.error('updateCenter error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        } else {
          this.sisec.showSpinner('Creando nuevo centro...');
          logger.debug('createCenter input', this.center);
          this.certersService
            .createCenter(this.center)
            .then((response) => {
              logger.debug('createCenter response', response);
              this.center.id = response.id;
              this.messageService.add({
                severity: 'success',
                summary: 'Centro creado',
                detail: `El centro se creó exitosamente`,
              });
              if (this.isModal) {
                this.ref.close(this.center);
              } else {
                this.router.navigate(['centers']);
              }
            })
            .catch((error) => {
              logger.error('createCenter error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar centro',
          detail: `Ya existe un centro con el nit o el nombre ingresado`,
        });
      }
    } else {
      return this.sisec.showInvalidFormError('Centro');
    }
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const cent = this.centers.filter(
        (x) => x.nit === this.center.nit || x.nombre === this.center.nombre
      );
      if (cent.length > 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return (
        this.centers.findIndex(
          (x) => x.nit === this.center.nit || x.nombre === this.center.nombre
        ) !== -1
      );
    }
  }

  onCancelar(): void {
    this.centerForm.reset();
    this.router.navigate(['/centers']);
  }

  viewLevelatention(): void {
    if (this.center.tipoCentro === CenterTypeEnum.PUBLICO) {
      this.levelAtentionView = false;
      this.center.nivelAtencion = null;
    } else if (this.center.tipoCentro === CenterTypeEnum.PRIVADO) {
      this.levelAtentionView = true;
      this.center.nivelAtencion = null;
    } else if (
      this.center.tipoCentro === CenterTypeEnum.EXCLUSIVO_INVESTIGACION
    ) {
      this.levelAtentionView = true;
      this.center.nivelAtencion = null;
    }
  }
}
