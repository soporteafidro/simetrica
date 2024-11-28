import { Injectable } from '@angular/core';
import { AddendumStudyCenterByAddendumQuery, APIService, CreateStudyCenterInput, CreateStudyCenterMutation, EntityState, GetStudyCenterQuery, ModelAddendumStudyCenterFilterInput, ModelCenterFilterInput, ModelStudyCenterCommitteeFilterInput, ModelStudyCenterFilterInput, StudyCenterByStudyQuery, UpdateCenterInput, UpdateStudyCenterInput, UpdateStudyCenterMutation } from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(
    private auth: AuthService,
    private api: APIService
  ) { }

  listCenters(): Promise<any> {
    const filter: ModelCenterFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.ListCenters(filter, 1000);
  }

  getCenter(id): Promise<any> {
    return this.api.GetCenter(id);
  }

  createCenter(center): Promise<any> {
    center.user = this.auth.getUsername();
    return this.api.CreateCenter(center);
  }

  updateCenter(center, id, expectedVersion): Promise<any> {
    center.user = this.auth.getUsername();
    let updateInput: UpdateCenterInput = {
      id,
      expectedVersion
    };
    updateInput = Object.assign(updateInput, center);
    return this.api.UpdateCenter(updateInput);
  }

  getStudyCenter(id): Promise<GetStudyCenterQuery> {
    return this.api.GetStudyCenter(id);
  }

  createStudyCenter(studyCenter: CreateStudyCenterInput): Promise<CreateStudyCenterMutation> {
    studyCenter.user = this.auth.getUsername();
    return this.api.CreateStudyCenter(studyCenter);
  }

  updateStudyCenter(studyCenter: UpdateStudyCenterInput): Promise<UpdateStudyCenterMutation> {
    return this.api.UpdateStudyCenter(studyCenter);
  }

  listStudyCentersByStudy(studyId: string): Promise<StudyCenterByStudyQuery> {
    const filter: ModelStudyCenterFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.StudyCenterByStudy(studyId, null, null, filter, 1000);
  }

  listStudyCentersByAddendum(addendumId: string): Promise<AddendumStudyCenterByAddendumQuery> {

    const filter: ModelAddendumStudyCenterFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.AddendumStudyCenterByAddendum(addendumId, null, filter);
  }

  generateUpdateStudyCenterInput(studyCenter: any, expectedV: number): UpdateStudyCenterInput {
    return {
      id: studyCenter.id,
      studyID: studyCenter.studyID,
      centerID: studyCenter.centerID,
      user: studyCenter.user,
      costoPorPaciente: studyCenter.costoPorPaciente,
      fechaRecepcionPaquete: studyCenter.fechaRecepcionPaquete,
      fechaRecepcionContrato: studyCenter.fechaRecepcionContrato,
      fechaFirmaContrato: studyCenter.fechaFirmaContrato,
      fechaFirmaContratoPatrocinador: studyCenter.fechaFirmaContratoPatrocinador,
      fechaAprobacionInvima: studyCenter.fechaAprobacionInvima,
      fechaActivacionCentro: studyCenter.fechaActivacionCentro,
      cantidadPacientesPrevistos: studyCenter.cantidadPacientesPrevistos,
      cantidadPacientesIncluidos: studyCenter.cantidadPacientesIncluidos,
      fechaPrimerPacienteSeleccionado: studyCenter.fechaPrimerPacienteSeleccionado,
      fechaPrimerPacienteAleatorizado: studyCenter.fechaPrimerPacienteAleatorizado,
      expectedVersion: expectedV,
      estado: studyCenter.estado
    };
  }

  getCommittessByStudyCenter(studyCenterID) {
    const filter: ModelStudyCenterCommitteeFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.StudyCenterComiteesByStudyCenter(studyCenterID, null, null, filter, 1000);
  }
}
