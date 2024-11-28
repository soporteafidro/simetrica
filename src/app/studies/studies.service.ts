import { Injectable } from '@angular/core';
import {
  APIService,
  CreateStudyInput,
  CreateStudyMutation,
  GetStudyQuery,
  StudiesBySponsorQuery,
  ListStudysQuery,
  IteracionesByStudyQuery,
  CreateInvimaIterationInput,
  CreateInvimaIterationMutation,
  ListStudyCenterCommitteesQuery,
  CreateStudyCenterCommitteeInput,
  CreateStudyCenterCommitteeMutation,
  UpdateStudyMutation,
  UpdateStudyInput,
  StudyState,
  UpdateInvimaIterationInput,
  UpdateInvimaIterationMutation,
  GetInvimaIterationQuery,
  CreateStudyCommitteeIterationInput,
  CreateStudyCommitteeIterationMutation,
  GetStudyCommitteeIterationQuery,
  ListStudyCommitteeIterationsQuery,
  UpdateStudyCommitteeIterationMutation,
  UpdateStudyCommitteeIterationInput,
  ModelStudyCenterCommitteeFilterInput,
  ModelStudyCommitteeIterationFilterInput,
  EntityState,
  GetStudyCenterCommitteeQuery,
  UpdateStudyCenterCommitteeInput,
  UpdateStudyCenterCommitteeMutation,
  ModelInvimaIterationFilterInput,
  GetStudyWithAllDataQuery,
  ListStudysWithAllDataQuery,
  StudiesBySponsorWithAllDataQuery,
  ModelStudyFilterInput,
  ListStudyCentersQuery,
  ModelStudyCenterFilterInput,
  ListCentersByStudyIDQuery,
} from '../services/API.service';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class StudiesService {
  constructor(private api: APIService, private auth: AuthService) {}

  listStudies(): Promise<ListStudysQuery> {
    const filter: ModelStudyFilterInput = {
      estado: {
        ne: StudyState.ELIMINADO,
      },
    };
    return this.api.ListStudys(filter, 10000);
  }

  listCentersByStudyID(studyID: string): Promise<ListCentersByStudyIDQuery> {
    const filter: ModelStudyCenterFilterInput = {
      studyID: { eq: studyID },
    };
    return this.api.ListCentersByStudyID(filter, 10000);
  }

  listStudyCenters(): Promise<ListStudyCentersQuery> {
    const filter: ModelStudyCenterFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.ListStudyCenters(filter, 10000);
  }

  listStudiesWithAllData(): Promise<ListStudysWithAllDataQuery> {
    const filter: ModelStudyFilterInput = {
      estado: {
        ne: StudyState.ELIMINADO,
      },
    };
    return this.api.ListStudysWithAllData(filter, 10000);
  }

  createStudy(study: CreateStudyInput): Promise<CreateStudyMutation> {
    study.estado = StudyState.PROPUESTO;
    study.user = this.auth.getUsername();
    return this.api.CreateStudy(study);
  }

  getStudy(studyId: string): Promise<GetStudyQuery> {
    return this.api.GetStudy(studyId);
  }

  getStudyWithAllData(studyId: string): Promise<GetStudyWithAllDataQuery> {
    return this.api.GetStudyWithAllData(studyId);
  }

  updateStudy(study: UpdateStudyInput): Promise<UpdateStudyMutation> {
    study.user = this.auth.getUsername();
    return this.api.UpdateStudy(study);
  }

  studiesBySponsor(sponsorId: string): Promise<StudiesBySponsorQuery> {
    const filter: ModelStudyFilterInput = {
      estado: {
        ne: StudyState.ELIMINADO,
      },
    };
    return this.api.StudiesBySponsor(sponsorId, null, filter, 10000);
  }

  studiesBySponsorWithAllData(
    sponsorId: string
  ): Promise<StudiesBySponsorWithAllDataQuery> {
    const filter: ModelStudyFilterInput = {
      estado: {
        ne: StudyState.ELIMINADO,
      },
    };
    return this.api.StudiesBySponsorWithAllData(sponsorId, null, filter, 10000);
  }

  iteracionesInvimaByStudy(strudyId: string): Promise<IteracionesByStudyQuery> {
    const filter: ModelInvimaIterationFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.IteracionesByStudy(strudyId, null, filter, 10000);
  }

  getIteracionINVIMA(iteracionId: string): Promise<GetInvimaIterationQuery> {
    return this.api.GetInvimaIteration(iteracionId);
  }

  createIteracionINVIMA(
    iteracion: CreateInvimaIterationInput
  ): Promise<CreateInvimaIterationMutation> {
    iteracion.user = this.auth.getUsername();
    return this.api.CreateInvimaIteration(iteracion);
  }

  // Study Committee iterations

  createStudyCommitteeIteration(
    iteracion: CreateStudyCommitteeIterationInput
  ): Promise<CreateStudyCommitteeIterationMutation> {
    iteracion.user = this.auth.getUsername();
    return this.api.CreateStudyCommitteeIteration(iteracion);
  }

  updateStudyCommitteeIteration(
    iteracion: UpdateStudyCommitteeIterationInput
  ): Promise<UpdateStudyCommitteeIterationMutation> {
    iteracion.user = this.auth.getUsername();
    return this.api.UpdateStudyCommitteeIteration(iteracion);
  }

  getStudyCommitteeIteration(
    studyCommitteeIterationId: string
  ): Promise<GetStudyCommitteeIterationQuery> {
    return this.api.GetStudyCommitteeIteration(studyCommitteeIterationId);
  }

  listStudyCommitteeIterationsByStudy(
    studyId: string
  ): Promise<ListStudyCommitteeIterationsQuery> {
    const filter: ModelStudyCommitteeIterationFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.CommitteeIterationsByStudy(studyId, null, filter, 10000);
  }

  // ------------------------

  updateIteracionINVIMA(
    iteracion: UpdateInvimaIterationInput
  ): Promise<UpdateInvimaIterationMutation> {
    iteracion.user = this.auth.getUsername();
    return this.api.UpdateInvimaIteration(iteracion);
  }

  getStudyCenterCommittee(
    studyCenterCommitteeId: string
  ): Promise<GetStudyCenterCommitteeQuery> {
    return this.api.GetStudyCenterCommittee(studyCenterCommitteeId);
  }

  ListStudyCenterCommittees(): Promise<ListStudyCenterCommitteesQuery> {
    const filter: ModelStudyCenterCommitteeFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.ListStudyCenterCommittees(filter, 10000);
  }

  ListStudyCenterCommitteesByStudy(
    studyId: string
  ): Promise<ListStudyCenterCommitteesQuery> {
    const filter: ModelStudyCenterCommitteeFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.StudyCenterComiteesByStudy(studyId, null, filter, 10000);
  }

  createStudyCenterCommittee(
    studyCentercommittee: CreateStudyCenterCommitteeInput
  ): Promise<CreateStudyCenterCommitteeMutation> {
    studyCentercommittee.user = this.auth.getUsername();
    return this.api.CreateStudyCenterCommittee(studyCentercommittee);
  }

  updateStudyCenterCommittee(
    studyCenterCommittee: UpdateStudyCenterCommitteeInput
  ): Promise<UpdateStudyCenterCommitteeMutation> {
    studyCenterCommittee.user = this.auth.getUsername();
    return this.api.UpdateStudyCenterCommittee(studyCenterCommittee);
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

  generateUpdateInput(
    study: CreateStudyInput,
    expectedV: number
  ): UpdateStudyInput {
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
      fechaPropuestaCierreReclutamiento:
        study.fechaPropuestaCierreReclutamiento,
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
      fechaRecepcionPaqueteInicialColombia:
        study.fechaRecepcionPaqueteInicialColombia,
      fechaPrimerPacienteReclutadoColombia:
        study.fechaPrimerPacienteReclutadoColombia,
      fechaCierreReclutamientoColombia: study.fechaCierreReclutamientoColombia,
      expectedVersion: expectedV,
      studyCroId: study.studyCroId,
      motivoDeSuspension: study.motivoDeSuspension,
      otroMotivoDeSuspension: study.otroMotivoDeSuspension,
      linkDePublicacion: study.linkDePublicacion,
      terminadoSatisfactoriamente: study.terminadoSatisfactoriamente,
      motivoDeTerminacion: study.motivoDeTerminacion,
      otroMotivoDeTerminacion: study.otroMotivoDeTerminacion,
      fechaDeLicenciaMedicamentos: study.fechaDeLicenciaMedicamentos,
      fechaDeImportacionEnBodegaMedicamentos:
        study.fechaDeImportacionEnBodegaMedicamentos,
      fechaPrimeraImportacionMedicamentos:
        study.fechaPrimeraImportacionMedicamentos,
      fechaDeLicenciaKit: study.fechaDeLicenciaKit,
      fechaDeImportacionEnBodegaKit: study.fechaDeImportacionEnBodegaKit,
      fechaPrimeraImportacionKit: study.fechaPrimeraImportacionKit,
      estado: study.estado,
      user: study.user,
    };
  }

  generateGetUpdateInput(study: GetStudyQuery): UpdateStudyInput {
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
      fechaPropuestaCierreReclutamiento:
        study.fechaPropuestaCierreReclutamiento,
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
      fechaRecepcionPaqueteInicialColombia:
        study.fechaRecepcionPaqueteInicialColombia,
      fechaPrimerPacienteReclutadoColombia:
        study.fechaPrimerPacienteReclutadoColombia,
      fechaCierreReclutamientoColombia: study.fechaCierreReclutamientoColombia,
      expectedVersion: study.version,
      studyCroId: study.cro ? study.cro.id : null,
      motivoDeSuspension: study.motivoDeSuspension,
      otroMotivoDeSuspension: study.otroMotivoDeSuspension,
      linkDePublicacion: study.linkDePublicacion,
      terminadoSatisfactoriamente: study.terminadoSatisfactoriamente,
      motivoDeTerminacion: study.motivoDeTerminacion,
      otroMotivoDeTerminacion: study.otroMotivoDeTerminacion,
      fechaDeLicenciaMedicamentos: study.fechaDeLicenciaMedicamentos,
      fechaDeImportacionEnBodegaMedicamentos:
        study.fechaDeImportacionEnBodegaMedicamentos,
      fechaPrimeraImportacionMedicamentos:
        study.fechaPrimeraImportacionMedicamentos,
      estado: study.estado,
      user: study.user,
    };
  }

  generateUpdateINVIMAIterationInput(
    iteration: CreateInvimaIterationInput,
    expectedV: number
  ): UpdateInvimaIterationInput {
    return {
      id: iteration.id,
      studyID: iteration.studyID,
      addendumID: iteration.addendumID,
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

  generateStudyCommitteeIterationUpdateInput(
    iteration: CreateStudyCommitteeIterationInput,
    expectedV: number
  ): UpdateStudyCommitteeIterationInput {
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
      estado: iteration.estado,
    };
  }

  generateStudyCenterCommitteeUpdateInput(
    studyCenterCommittee: GetStudyCenterCommitteeQuery
  ): UpdateStudyCenterCommitteeInput {
    return {
      id: studyCenterCommittee.id,
      studyCenterID: studyCenterCommittee.studyCenterID,
      committeeID: studyCenterCommittee.committeeID,
      user: studyCenterCommittee.user,
      estado: studyCenterCommittee.estado,
      expectedVersion: studyCenterCommittee.version,
    };
  }

  generateStudyComitteeIterationUpdateInput(
    studyCommitteeIteration: CreateStudyCommitteeIterationInput,
    expectedV: number
  ): UpdateStudyCommitteeIterationInput {
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
      causalRetrasoPatrocinador:
        studyCommitteeIteration.causalRetrasoPatrocinador,
      otroCausalRetrasoPatrocinador:
        studyCommitteeIteration.otroCausalRetrasoPatrocinador,
      notasDeSeguimiento: studyCommitteeIteration.notasDeSeguimiento,
      user: studyCommitteeIteration.user,
      estado: studyCommitteeIteration.estado,
      expectedVersion: expectedV,
    };
  }

  getFechaAprobacionInvima(study: GetStudyWithAllDataQuery): string {
    const aprInvima = study.invimaIterations.items
      .filter((s) => s.estado !== EntityState.DELETED)
      .find((s) => s.estadoIteracion === 'Aprobado');

    if (aprInvima) {
      return aprInvima.fechaRespuestaInvima;
    } else {
      return null;
    }
  }
}
