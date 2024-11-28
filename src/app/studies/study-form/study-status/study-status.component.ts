import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  CreateStudyInput,
  GetStudyQuery,
  StudyState,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from '../../studies.service';
const logger = new Logger('study-status');

@Component({
  selector: 'app-study-status',
  templateUrl: './study-status.component.html',
  styleUrls: ['./study-status.component.scss'],
})
export class StudyStatusComponent implements OnInit {
  @Input() study: CreateStudyInput;

  expectedVersion: number;
  studyId: string;

  estados = [
    { label: 'Propuesto', value: StudyState.PROPUESTO },
    { label: 'En Curso', value: StudyState.ENCURSO },
    { label: 'Finalizado', value: StudyState.FINALIZADO },
    { label: 'Suspendido', value: StudyState.SUSPENDIDO },
    { label: 'Eliminado', value: StudyState.ELIMINADO },
  ];

  motivosSuspension = [
    {
      label: 'Interrupción de enrolamiento',
      value: 'Interrupcion de enrolamiento',
    },
    { label: 'Suspencion por comite', value: 'Suspencion por comite' },
    {
      label: 'Suspencion por casa matriz',
      value: 'Suspencion por casa matriz',
    },
    { label: 'Otro', value: 'Otro' },
  ];

  motivosTerminacion = [
    { label: 'Cancelación casa matriz', value: 'Cancelación casa matriz' },
    { label: 'Cancelación INVIMA', value: 'Cancelación INVIMA' },
    { label: 'Cancelación comité', value: 'Cancelación Comité' },
    { label: 'Otro', value: 'Otro' },
  ];

  siNoRespuesta: any[] = [
    { name: 'Si', key: 'Si' },
    { name: 'No', key: 'No' },
  ];

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private sisec: SisecService,
    private sutdiesService: StudiesService
  ) {}

  ngOnInit(): void {
    this.studyId = this.config?.data?.studyId;
    this.loadEditStudy();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.updateStudy();
    }
  }

  updateStudy(): void {
    const updateStudyInput = this.sutdiesService.generateUpdateInput(
      this.study,
      this.expectedVersion
    );
    this.sisec.showSpinner('Guardando...');
    logger.debug('UpdateStudy input', updateStudyInput);
    this.sutdiesService
      .updateStudy(updateStudyInput)
      .then((response) => {
        logger.debug('updateStudy response', response);
        this.ref.close('actualizado');
      })
      .catch((error) => {
        logger.error('updateStudy error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => this.sisec.hideSpinner());
  }

  loadEditStudy(): void {
    this.sisec.showSpinner('Consultando estudio para su edición');

    this.sutdiesService
      .getStudy(this.studyId)
      .then((response: GetStudyQuery) => {
        logger.debug('getStudy response', response);
        this.expectedVersion = response.version;
        this.sisec.cleanQueryResponse(response);
        this.study = response;
        logger.debug(this.study);
      })
      .catch((error) => logger.error('getStudy error', error))
      .finally(() => this.sisec.hideSpinner());
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  onEstadoChange(): void {
    this.study.otroMotivoDeSuspension = null;
    this.study.motivoDeSuspension = null;
    this.study.motivoDeTerminacion = null;
    this.study.otroMotivoDeTerminacion = null;
    this.study.terminadoSatisfactoriamente = null;
  }
}
