import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreateCROInput, EntityState, GetCROQuery } from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { Logger } from 'aws-amplify';
import { CroService } from '../cro.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EROFS } from 'constants';
const logger = new Logger('committee-add-edit');

@Component({
  selector: 'app-cro-add-edit',
  templateUrl: './cro-add-edit.component.html',
  styleUrls: ['./cro-add-edit.component.scss']
})
export class CroAddEditComponent implements OnInit {

  cro: CreateCROInput = {
    nombre: null,
    estado: EntityState.ACTIVE,
    user: null,
    informacionContacto: null
  };
  editMode = false;
  isModal = false;
  expectedVersion = null;
  id = null;
  cros = [];

  @ViewChild('f', { static: true }) centerForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private sisec: SisecService,
    private croService: CroService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.isModal = this.config?.data?.isModal;
    this.croService.listCrO().then(response => {
      logger.debug('listCrO response', response);
      this.cros = response.items;
    }).catch(error => logger.debug('listCrO error', error));
    if (id) {
      this.sisec.showSpinner('Consultando CRO para su edición');
      this.editMode = true;
      this.croService.getCrO(id).then((response: GetCROQuery) => {
        logger.debug('getCro response', response);
        this.expectedVersion = response.version;
        this.id = response.id;
        this.sisec.cleanQueryResponse(response);
        this.cro = Object.assign(this.cro, response);
      }).catch(error => logger.error('getCro error', error))
        .finally(() => this.sisec.hideSpinner());
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.cro.nombre = this.cro?.nombre?.trim();
      this.cro.nit = this.cro?.nit?.trim();
      if (!this.isDuplicate()) {
        if (this.editMode) {
          this.sisec.showSpinner('Editando la CRO ' + this.cro.nombre + '...');
          this.croService.updateCro(this.cro, this.id, this.expectedVersion)
            .then(response => {
              logger.debug('updateCrO response', response);
              this.messageService.add({
                severity: 'success',
                summary: 'CRO actualizada',
                detail: `La CRO fue actualizada exitosamente.`,
              });
              this.router.navigate(['cro']);
            })
            .catch(error => {
              logger.error('updateCrO error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        } else {
          this.sisec.showSpinner('Creando nueva CRO...');
          logger.debug('createCrO input', this.cro);
          this.croService.createCrO(this.cro)
            .then(response => {
              logger.debug('createCrO response', response);
              this.cro.id = response.id;
              this.messageService.add({
                severity: 'success',
                summary: 'CRO creada',
                detail: `La CRO fue creada exitosamente.`,
              });
              if (this.isModal){
                this.ref.close(this.cro);
              }
              else {
                this.router.navigate(['cro']);
              }

            })
            .catch(error => {
              logger.error('createCrO error', error);
              this.sisec.hideSpinner();
            })
            .finally(() => this.sisec.hideSpinner());
        }
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar CRO',
          detail: `Ya existe una CRO con el nit o el nombre ingresado`,
        });
      }
    } else {
      this.sisec.showInvalidFormError('CRO');
    }
  }

  isDuplicate(): boolean {
    if (this.editMode) {
      const cro = this.cros.filter(x => x.nit === this.cro.nit || x.nombre === this.cro.nombre);
      if (cro.length > 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return this.cros.findIndex(x => x.nit === this.cro.nit || x.nombre === this.cro.nombre) !== -1;
    }
  }

  onCancelar(): void {
    if (this.isModal){
      this.ref.close(null);
    }else{
      this.centerForm.reset();
      this.router.navigate(['/cro']);
    }
  }

}
