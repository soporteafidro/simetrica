import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logger } from 'aws-amplify';
import { CreateStudyInput, GetStudyQuery, StudyState } from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from '../studies.service';
const logger = new Logger('study-stepper');

@Component({
  selector: 'app-study-new-stepper',
  templateUrl: './study-new-stepper.component.html',
  styleUrls: ['./study-new-stepper.component.scss']
})
export class StudyNewStepperComponent implements OnInit {

  showIntro = true;
  progress = 33;
  currStep = 1;
  isEdit = false;

  studyId: string;
  study: CreateStudyInput = {
    sponsorID: null,
    id: null,
    identificador: null,
    identificadorNCT: null,
    linkClinical: null,
    titulo: null,
    areasTerapeuticas: null,
    tipoPoblacion: null,
    saludPublica: null,
    enfermedadHuerfana: null,
    CIE10: null,
    studyCroId: null,
    tipoEstudio: null,
    fase: null,
    fechaAprobacionCasaMatriz: null,
    fechaFactibilidadColombia: null,
    enColombia: 'Si',
    motivoNoSeleccion: null,
    fechaSeleccionColombia: null,
    fechaRecepcionFilialColombia: null,
    fechaVersionEspaniol: null,
    fechaPropuestaCierreReclutamiento: null,
    alcanceEstudio: null,
    codigosATC: null,
    tieneCRO: null,
    numeroPaisesParticipantes: null,
    totalSujetosNivelGlobal: null,
    fechaLiberacionProtocolo: null,
    fechaPrimerPacienteGlobal: null,
    fechaCierreReclutamientoGlobal: null,
    numeroSujetosPlaneadosColombia: null,
    porcentajeSujetosColombia: null,
    fechaRecepcionPaqueteInicialColombia: null,
    fechaPrimerPacienteReclutadoColombia: null,
    fechaCierreReclutamientoColombia: null,
    fechaDeImportacionEnBodegaMedicamentos: null,
    fechaDeLicenciaMedicamentos: null,
    fechaPrimeraImportacionMedicamentos: null,
    estado: StudyState.PROPUESTO,
    linkDePublicacion: null,
    motivoDeSuspension: null,
    motivoDeTerminacion: null,
    otroMotivoDeSuspension: null,
    otroMotivoDeTerminacion: null,
    user: null,
    fechaAprobacionEstudioInvima: null,
    fechaDeSometimientoEstudioInvima: null
  };

  constructor(
    private route: ActivatedRoute,
    private studiesService: StudiesService,
    private sisec: SisecService) { }

  ngOnInit(): void {
    this.studyId = this.route.snapshot.params.id;
    if (this.studyId !== undefined){
      this.isEdit = true;
      this.showIntro = false;
      this.loadStudy();
    }
  }

  loadStudy(): void {
    this.sisec.showSpinner('Cargando estudio...');
    if (this.studyId){
      this.studiesService.getStudy(this.studyId).then((response: GetStudyQuery) => {
        this.study = Object.assign(this.study, response);
      })
      .catch(error => {
        logger.error('edit study error - during load', error);
      }).finally(() => this.sisec.hideSpinner());
    }
  }

  setStep(stepNumber: number): void{
    this.currStep = stepNumber;
    switch (stepNumber){
      case 1:
        this.progress = 33;
        break;
      case 2:
        this.progress = 66;
        break;
      case 3:
        this.progress = 100;
        break;
    }
  }

  onBtnAction(action: string): void{

    if (action === 'next'){
      this.nextStep();
    }
    if (action === 'prev'){
      this.prevStep();
    }
  }
  nextStep(): void{
    this.setStep(this.currStep + 1);
  }

  prevStep(): void{
    this.setStep(this.currStep - 1);
  }

}
