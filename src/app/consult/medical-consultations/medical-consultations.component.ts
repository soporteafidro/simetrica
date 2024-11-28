import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { CIE10Service } from 'src/app/services/CIE10.service';
import { ConsultService } from 'src/app/services/consult.service';
import { LocationService } from 'src/app/services/location.service';
import { SisecService } from 'src/app/services/sisec.service';
const logger = new Logger('medical-consultations');
@Component({
  selector: 'app-medical-consultations',
  templateUrl: './medical-consultations.component.html',
  styleUrls: ['./medical-consultations.component.scss'],
})
export class MedicalConsultationsComponent {
  @ViewChild('form') form: NgForm;
  studies: any[] = [];
  locationOpction = [];
  selectedCie10: string = '';
  selectedCenter: any = '';
  cie10s: any[] = [];
  cie10: any[] = [];
  centers: any[] = [];
  ciudad: string = '';

  constructor(
    private sisec: SisecService,
    private messageService: MessageService,
    private consultService: ConsultService,
    private cie10Service: CIE10Service,
    private locations: LocationService
  ) {
  }

  async ngOnInit() {
    try {
      this.sisec.showSpinner('Cargando modulo...');
      let centers = await this.consultService.getCenters();
      this.centers = centers.map((center: any) => {
        return { label: center.nombre, value: center.nombre }
      })
      this.centers.sort((a, b) => a.label.toLowerCase() > b.label.toLowerCase() ? 0 : -1);
      this.locationOpction = this.locations.getMunicipiosSI();
    } catch (error) {
      this.errorMessage();
    } finally {
      this.sisec.hideSpinner();
    }
  }

  searchCIE10(event): void {
    const word = event.query.toString().trim();
    this.cie10s = this.cie10Service.listCIE10(word);
  }

  async onSubmit(form: NgForm) {
    try {
      let { cie10, name } = form.value;
      let center = this.selectedCenter?.value || '';
      let city = this.ciudad || '';

      //Si el usuario no ingresa datos o se limpio se colocan en vacio
      cie10 = cie10?.split('-')[0] || '';
      name = name || '';

      if (cie10?.length === 0 && name?.length === 0 && center?.length === 0 && city?.length === 0) {
        this.messageService.clear();
        this.messageService.add({
          severity: 'warn',
          summary: 'Formulario inválido',
          detail: 'Debe llenar al menos un campo para consultar un estudio',
          life: 3000
        })
      } else {
        this.sisec.showSpinner('Buscando estudios...');
        //Llama a la funcion del servicio que busca los estudios segun los parametros enviados
        this.studies = await this.consultService.findStudies(cie10?.trim() || '', name?.trim() || '', center || '', city);
        this.sisec.hideSpinner();
      }
    } catch (error) {
      logger.error('Consult error -->', error);
      this.sisec.hideSpinner();
      this.errorMessage();
    }
  }

  clear() {
    this.clearCenter();
    this.form.reset();
  }

  clearCenter() {
    this.selectedCenter = '';
  }

  errorMessage() {
    this.messageService.clear();
    this.messageService.add(
      {
        severity: 'error',
        summary: 'Error al consultar la información',
        detail: 'Hubo un error, contacte al administrador.'
      });
  }
}
