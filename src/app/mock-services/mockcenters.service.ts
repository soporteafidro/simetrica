import { Injectable } from '@angular/core';
import {
  CreateCenterMutation, CreateStudyCenterInput, CreateStudyCenterMutation,
  GetCenterQuery, GetStudyCenterQuery, StudyCenterByCenterQuery,
  UpdateCenterMutation, UpdateStudyCenterInput, UpdateStudyCenterMutation
} from '../services/API.service';


@Injectable({
  providedIn: 'root'
})
export class MockCentersService {

  listCenters(): Promise<CreateCenterMutation> {
    return new Promise<CreateCenterMutation>((resolve) => {
      const data: CreateCenterMutation = null;
      resolve(data);
    });
  }

  getCenter(id): Promise<GetCenterQuery> {
    return new Promise<GetCenterQuery>((resolve) => {
      const data: GetCenterQuery = null;
      resolve(data);
    });
  }

  createCenter(center): Promise<CreateCenterMutation> {
    return new Promise<CreateCenterMutation>((resolve) => {
      const data: CreateCenterMutation = null;
      resolve(data);
    });
  }

  updateCenter(center, id, expectedVersion): Promise<UpdateCenterMutation> {
    return new Promise<UpdateCenterMutation>((resolve) => {
      const data: UpdateCenterMutation = null;
      resolve(data);
    });
  }

  getStudyCenter(id): Promise<GetStudyCenterQuery> {
    return new Promise<GetStudyCenterQuery>((resolve) => {
      const data: GetStudyCenterQuery = null;
      resolve(data);
    });
  }

  createStudyCenter(studyCenter: CreateStudyCenterInput): Promise<CreateStudyCenterMutation> {
    return new Promise<CreateStudyCenterMutation>((resolve) => {
      const data: CreateStudyCenterMutation = null;
      resolve(data);
    });
  }

  updateStudyCenter(studyCenter: UpdateStudyCenterInput): Promise<UpdateStudyCenterMutation> {
    return new Promise<UpdateStudyCenterMutation>((resolve) => {
      const data: UpdateStudyCenterMutation = null;
      resolve(data);
    });
  }

  listStudyCentersByStudy(studyId: string): Promise<StudyCenterByCenterQuery> {
    return new Promise<StudyCenterByCenterQuery>((resolve) => {
      const data: StudyCenterByCenterQuery = null;
      resolve(data);
    });
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
}
