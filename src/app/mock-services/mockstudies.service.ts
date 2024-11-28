import { Injectable } from '@angular/core';
import {
  CreateInvimaIterationInput,
  CreateInvimaIterationMutation,
  CreateStudyCenterCommitteeInput,
  CreateStudyCenterCommitteeMutation,
  CreateStudyCommitteeIterationInput,
  CreateStudyCommitteeIterationMutation,
  CreateStudyInput,
  CreateStudyMutation,
  GetInvimaIterationQuery, GetStudyCenterCommitteeQuery, GetStudyCommitteeIterationQuery, GetStudyQuery,
  IteracionesByStudyQuery, ListStudyCenterCommitteesQuery, ListStudyCommitteeIterationsQuery,
  ListStudysQuery, StudiesBySponsorQuery, StudyState, UpdateInvimaIterationInput, UpdateInvimaIterationMutation,
  UpdateStudyCenterCommitteeInput, UpdateStudyCenterCommitteeMutation, UpdateStudyCommitteeIterationInput,
  UpdateStudyCommitteeIterationMutation, UpdateStudyInput, UpdateStudyMutation
} from '../services/API.service';


@Injectable({
  providedIn: 'root'
})
export class MockStudiesService {

  listStudies(): Promise<ListStudysQuery> {
    return new Promise<ListStudysQuery>((resolve) => {
      const data: ListStudysQuery = {
        __typename: 'ModelStudyConnection',
        items: [
        ],
        nextToken: null
      };

      resolve(data);
    });
  }

  createStudy(study: CreateStudyInput): Promise<CreateStudyMutation> {
    return new Promise<CreateStudyMutation>((resolve) => {
      const data: CreateStudyMutation = null;
      resolve(data);
    });
  }

  getStudy(studyId: string): Promise<GetStudyQuery> {
    return new Promise<GetStudyQuery>((resolve) => {
      const data: GetStudyQuery = null;
      resolve(data);
    });
  }

  updateStudy(study: UpdateStudyInput): Promise<UpdateStudyMutation> {
    return new Promise<UpdateStudyMutation>((resolve) => {
      const data: UpdateStudyMutation = null;
      resolve(data);
    });
  }

  studiesBySponsor(sponsorId: string): Promise<StudiesBySponsorQuery> {
    return new Promise<StudiesBySponsorQuery>((resolve) => {
      const data: StudiesBySponsorQuery = null;
      resolve(data);
    });
  }

  iteracionesInvimaByStudy(strudyId: string): Promise<IteracionesByStudyQuery> {
    return new Promise<IteracionesByStudyQuery>((resolve) => {
      const data: IteracionesByStudyQuery = null;
      resolve(data);
    });
  }

  getIteracionINVIMA(iteracionId: string): Promise<GetInvimaIterationQuery> {
    return new Promise<GetInvimaIterationQuery>((resolve) => {
      const data: GetInvimaIterationQuery = null;
      resolve(data);
    });
  }

  createIteracionINVIMA(iteracion: CreateInvimaIterationInput): Promise<CreateInvimaIterationMutation> {
    return new Promise<CreateInvimaIterationMutation>((resolve) => {
      const data: CreateInvimaIterationMutation = null;
      resolve(data);
    });
  }

  // Study Committee iterations

  createStudyCommitteeIteration(iteracion: CreateStudyCommitteeIterationInput): Promise<CreateStudyCommitteeIterationMutation> {
    return new Promise<CreateStudyCommitteeIterationMutation>((resolve) => {
      const data: CreateStudyCommitteeIterationMutation = null;
      resolve(data);
    });
  }

  updateStudyCommitteeIteration(iteracion: UpdateStudyCommitteeIterationInput): Promise<UpdateStudyCommitteeIterationMutation> {
    return new Promise<UpdateStudyCommitteeIterationMutation>((resolve) => {
      const data: UpdateStudyCommitteeIterationMutation = null;
      resolve(data);
    });
  }

  getStudyCommitteeIteration(studyCommitteeIterationId: string): Promise<GetStudyCommitteeIterationQuery> {
    return new Promise<GetStudyCommitteeIterationQuery>((resolve) => {
      const data: GetStudyCommitteeIterationQuery = null;
      resolve(data);
    });
  }

  listStudyCommitteeIterationsByStudy(studyId: string): Promise<ListStudyCommitteeIterationsQuery> {
    return new Promise<ListStudyCommitteeIterationsQuery>((resolve) => {
      const data: ListStudyCommitteeIterationsQuery = null;
      resolve(data);
    });
  }

  // ------------------------

  updateIteracionINVIMA(iteracion: UpdateInvimaIterationInput): Promise<UpdateInvimaIterationMutation> {
    return new Promise<UpdateInvimaIterationMutation>((resolve) => {
      const data: UpdateInvimaIterationMutation = null;
      resolve(data);
    });
  }

  getStudyCenterCommittee(studyCenterCommitteeId: string): Promise<GetStudyCenterCommitteeQuery> {
    return new Promise<GetStudyCenterCommitteeQuery>((resolve) => {
      const data: GetStudyCenterCommitteeQuery = null;
      resolve(data);
    });
  }

  ListStudyCenterCommittees(): Promise<ListStudyCenterCommitteesQuery> {
    return new Promise<ListStudyCenterCommitteesQuery>((resolve) => {
      const data: ListStudyCenterCommitteesQuery = null;
      resolve(data);
    });
  }

  createStudyCenterCommittee(studyCentercommittee: CreateStudyCenterCommitteeInput): Promise<CreateStudyCenterCommitteeMutation> {
    return new Promise<CreateStudyCenterCommitteeMutation>((resolve) => {
      const data: CreateStudyCenterCommitteeMutation = null;
      resolve(data);
    });
  }

  updateStudyCenterCommittee(studyCenterCommittee: UpdateStudyCenterCommitteeInput): Promise<UpdateStudyCenterCommitteeMutation> {
    return new Promise<UpdateStudyCenterCommitteeMutation>((resolve) => {
      const data: UpdateStudyCenterCommitteeMutation = null;
      resolve(data);
    });
  }

  getEstadoToString(estado: StudyState): string {
    switch (estado) {
      case 'FINALIZADO':
        return 'FINALIZADO';
      case 'ENCURSO':
        return 'EN CURSO';
      case 'PROPUESTO':
        return 'PROPUESTO';
      case 'SUSPENDIDO':
        return 'SUSPENDIDO';
      case 'ELIMINADO':
        return 'ELIMINADO';
    }
  }


  generateUpdateInput(study: CreateStudyInput, expectedV: number): UpdateStudyInput {
    return {
      id: study.id,
      sponsorID: study.sponsorID,
      CIE10: study.CIE10,
      identificador: study.identificador,
      identificadorNCT: study.identificadorNCT,
      linkClinical: study.linkClinical,
      titulo: study.titulo,
      areasTerapeuticas: study.areasTerapeuticas,
      tipoPoblacion: study.tipoPoblacion,
      saludPublica: study.saludPublica,
      enfermedadHuerfana: study.enfermedadHuerfana,
      tipoEstudio: study.tipoEstudio,
      fase: study.fase,
      fechaAprobacionCasaMatriz: study.fechaAprobacionCasaMatriz,
      fechaFactibilidadColombia: study.fechaFactibilidadColombia,
      enColombia: study.enColombia,
      motivoNoSeleccion: study.motivoNoSeleccion,
      fechaSeleccionColombia: study.fechaSeleccionColombia,
      fechaRecepcionFilialColombia: study.fechaRecepcionFilialColombia,
      fechaVersionEspaniol: study.fechaVersionEspaniol,
      fechaPropuestaCierreReclutamiento: study.fechaPropuestaCierreReclutamiento,
      alcanceEstudio: study.alcanceEstudio,
      codigosATC: study.codigosATC,
      tieneCRO: study.tieneCRO,
      numeroPaisesParticipantes: study.numeroPaisesParticipantes,
      totalSujetosNivelGlobal: study.totalSujetosNivelGlobal,
      fechaLiberacionProtocolo: study.fechaLiberacionProtocolo,
      fechaPrimerPacienteGlobal: study.fechaPrimerPacienteGlobal,
      fechaCierreReclutamientoGlobal: study.fechaCierreReclutamientoGlobal,
      numeroSujetosPlaneadosColombia: study.numeroSujetosPlaneadosColombia,
      porcentajeSujetosColombia: study.porcentajeSujetosColombia,
      fechaRecepcionPaqueteInicialColombia: study.fechaRecepcionPaqueteInicialColombia,
      fechaPrimerPacienteReclutadoColombia: study.fechaCierreReclutamientoGlobal,
      fechaCierreReclutamientoColombia: study.fechaCierreReclutamientoColombia,
      expectedVersion: expectedV,
      studyCroId: study.studyCroId,
      motivoDeSuspension: study.motivoDeSuspension,
      otroMotivoDeSuspension: study.otroMotivoDeSuspension,
      linkDePublicacion: study.linkDePublicacion,
      terminadoSatisfactoriamente: study.terminadoSatisfactoriamente,
      motivoDeTerminacion: study.motivoDeTerminacion,
      otroMotivoDeTerminacion: study.otroMotivoDeTerminacion,
      fechaDeLicenciaKit: study.fechaDeLicenciaMedicamentosKit,
      fechaDeImportacionEnBodegaKit: study.fechaDeImportacionEnBodegaMedicamentosKit,
      fechaPrimeraImportacionKit: study.fechaPrimeraImportacionMedicamentosKit,
      fechaDeLicenciaMedicamentos: study.fechaDeLicenciaMedicamentosMedicamentos,
      fechaDeImportacionEnBodegaMedicamentos: study.fechaDeImportacionEnBodegaMedicamentosMedicamentos,
      fechaPrimeraImportacionMedicamentos: study.fechaPrimeraImportacionMedicamentosMedicamentos,
      estado: study.estado
    };
  }

  generateUpdateINVIMAIterationInput(iteration: CreateInvimaIterationInput, expectedV: number): UpdateInvimaIterationInput {

    return {

      id: iteration.id,
      studyID: iteration.studyID,
      tipoIteracion: iteration.tipoIteracion,
      tipoRequerimiento: iteration.tipoRequerimiento,
      otroTipoRequerimiento: iteration.otroTipoRequerimiento,
      fechaDeSometimiento: iteration.fechaDeSometimiento,
      fechaRespuestaInvima: iteration.fechaRespuestaInvima,
      fechaDeNotificacion: iteration.fechaDeNotificacion,
      estadoIteracion: iteration.estadoIteracion,
      resolucion: iteration.resolucion,
      tiempoInvima: iteration.tiempoInvima,
      tiempoPatrocinador: iteration.tiempoPatrocinador,
      tiempoNotificacion: iteration.tiempoNotificacion,
      causalRetrasoPatrocinador: iteration.causalRetrasoPatrocinador,
      otroCausalRetrasoPatrocinador: iteration.otroCausalRetrasoPatrocinador,
      notasDeSeguimiento: iteration.notasDeSeguimiento,
      user: iteration.user,
      expectedVersion: expectedV,
    };
  }


  generateStudyCommitteeIterationUpdateInput(iteration: CreateStudyCommitteeIterationInput, expectedV: number):
    UpdateStudyCommitteeIterationInput {

    return {

      id: iteration.id,
      studyID: iteration.studyID,
      tipoIteracion: iteration.tipoIteracion,
      tipoAclaracion: iteration.tipoAclaracion,
      otroTipoAclaracion: iteration.otroTipoAclaracion,
      fechaDeSometimientoCE: iteration.fechaDeSometimientoCE,
      fechaRespuestaCE: iteration.fechaRespuestaCE,
      estadoIteracion: iteration.estadoIteracion,
      tiempoComite: iteration.tiempoComite,
      tiempoPatrocinador: iteration.tiempoPatrocinador,
      causalRetrasoPatrocinador: iteration.causalRetrasoPatrocinador,
      otroCausalRetrasoPatrocinador: iteration.otroCausalRetrasoPatrocinador,
      notasDeSeguimiento: iteration.notasDeSeguimiento,
      informacionCarta: iteration.informacionCarta,
      user: iteration.user,
      expectedVersion: expectedV,
      estado: iteration.estado
    };
  }

  generateStudyCenterCommitteeUpdateInput(studyCenterCommittee: GetStudyCenterCommitteeQuery): UpdateStudyCenterCommitteeInput {
    return {
      id: studyCenterCommittee.id,
      studyCenterID: studyCenterCommittee.studyCenterID,
      committeeID: studyCenterCommittee.committeeID,
      user: studyCenterCommittee.user,
      estado: studyCenterCommittee.estado,
      expectedVersion: studyCenterCommittee.version
    };
  }

  generateStudyComitteeIterationUpdateInput(studyCommitteeIteration: CreateStudyCommitteeIterationInput, expectedV: number):
    UpdateStudyCommitteeIterationInput {

    return {
      id: studyCommitteeIteration.id,
      studyID: studyCommitteeIteration.studyID,
      studyCenterCommitteeID: studyCommitteeIteration.studyCenterCommitteeID,
      tipoIteracion: studyCommitteeIteration.tipoIteracion,
      tipoAclaracion: studyCommitteeIteration.tipoAclaracion,
      otroTipoAclaracion: studyCommitteeIteration.otroTipoAclaracion,
      fechaDeSometimientoCE: studyCommitteeIteration.fechaDeSometimientoCE,
      fechaRespuestaCE: studyCommitteeIteration.fechaRespuestaCE,
      estadoIteracion: studyCommitteeIteration.estadoIteracion,
      informacionCarta: studyCommitteeIteration.informacionCarta,
      tiempoComite: studyCommitteeIteration.tiempoComite,
      tiempoPatrocinador: studyCommitteeIteration.tiempoPatrocinador,
      causalRetrasoPatrocinador: studyCommitteeIteration.causalRetrasoPatrocinador,
      otroCausalRetrasoPatrocinador: studyCommitteeIteration.otroCausalRetrasoPatrocinador,
      notasDeSeguimiento: studyCommitteeIteration.notasDeSeguimiento,
      user: studyCommitteeIteration.user,
      estado: studyCommitteeIteration.estado,
      expectedVersion: expectedV
    };
  }


}
