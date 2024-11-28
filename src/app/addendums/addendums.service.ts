import { Injectable } from '@angular/core';
import {
  AddendaByStudyQuery,
  AddendaByStudyWithAllDataQuery,
  AddendumStudyCenterByAddendumQuery,
  AddendumStudyCenterByAddendumWithAllDataQuery,
  APIService,
  CreateAddendumInput,
  CreateAddendumMutation,
  CreateAddendumStudyCenterInput,
  CreateAddendumStudyCenterMutation,
  EntityState,
  GetAddendumQuery,
  GetAddendumStudyCenterQuery,
  IteracionesCEByAddendumQuery,
  IteracionesInvimaByAddendumQuery,
  ModelAddendumFilterInput,
  ModelInvimaIterationFilterInput,
  ModelStudyCommitteeIterationFilterInput,
  UpdateAddendumInput,
  UpdateAddendumMutation,
  UpdateAddendumStudyCenterInput,
  UpdateAddendumStudyCenterMutation,
} from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AddendumsService {
  constructor(private api: APIService, private auth: AuthService) {}

  listAddendums(): Promise<AddendaByStudyQuery> {
    const filter: ModelAddendumFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.ListAddendums(filter);
  }

  listAddendumsByStudy(studyID: string): Promise<AddendaByStudyQuery> {
    const filter: ModelAddendumFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.AddendaByStudy(studyID, null, filter);
  }

  listAddendumsByStudyWithAllData(
    studyID: string
  ): Promise<AddendaByStudyWithAllDataQuery> {
    const filter: ModelAddendumFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.AddendaByStudyWithAllData(studyID, null, filter);
  }

  listAddendumStudyCenterByAddendumWithAllData(
    addendumId: string
  ): Promise<AddendumStudyCenterByAddendumWithAllDataQuery> {
    const filter: ModelAddendumFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.AddendumStudyCenterByAddendumWithAllData(
      addendumId,
      null,
      filter
    );
  }

  ListAddendumStudyCenterByAddendum(
    addendumId: string
  ): Promise<AddendumStudyCenterByAddendumQuery> {
    const filter: ModelAddendumFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.AddendumStudyCenterByAddendum(addendumId, null, filter);
  }

  iteracionesInvimaByAddendum(
    addendumId: string
  ): Promise<IteracionesInvimaByAddendumQuery> {
    const filter: ModelInvimaIterationFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.IteracionesInvimaByAddendum(addendumId, null, filter);
  }

  listStudyCommitteeIterationsByAddendum(
    addendumId: string
  ): Promise<IteracionesCEByAddendumQuery> {
    const filter: ModelStudyCommitteeIterationFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.IteracionesCEByAddendum(addendumId, null, filter);
  }

  getAddendum(addendumId: string): Promise<GetAddendumQuery> {
    return this.api.GetAddendum(addendumId);
  }

  updateAddendum(
    addendum: UpdateAddendumInput
  ): Promise<UpdateAddendumMutation> {
    addendum.user = this.auth.getUsername();
    return this.api.UpdateAddendum(addendum);
  }

  generateAddendumUpdateInput(addendum: GetAddendumQuery): UpdateAddendumInput {
    return {
      studyID: addendum.studyID,
      id: addendum.id,
      descripcion: addendum.descripcion,
      fechaCasaMatriz: addendum.fechaCasaMatriz,
      fechaRecepcionPaquete: addendum.fechaRecepcionPaquete,
      fechaVersionEspanol: addendum.fechaVersionEspanol,
      primerPaisImplementacion: addendum.primerPaisImplementacion,
      fechaImplementacionPais: addendum.fechaImplementacionPais,
      estado: addendum.estado,
      tiemposInvima: addendum.tiemposInvima,
      expectedVersion: addendum.version,
      user: addendum.user,
    };
  }

  generateAddendumUpdateCreateInput(
    addendum: CreateAddendumInput,
    verison: number
  ): UpdateAddendumInput {
    let updateInput: UpdateAddendumInput = {
      id: addendum.id,
      expectedVersion: verison,
    };
    updateInput = Object.assign(updateInput, addendum);
    return updateInput;
  }

  createAddendum(
    addendum: CreateAddendumInput
  ): Promise<CreateAddendumMutation> {
    addendum.user = this.auth.getUsername();
    return this.api.CreateAddendum(addendum);
  }

  createAddendumStudyCenter(
    addendumStudyCenter: CreateAddendumStudyCenterInput
  ): Promise<CreateAddendumStudyCenterMutation> {
    addendumStudyCenter.user = this.auth.getUsername();
    return this.api.CreateAddendumStudyCenter(addendumStudyCenter);
  }

  getAddendumStudyCenter(
    addendumStudyCenterId: string
  ): Promise<GetAddendumStudyCenterQuery> {
    return this.api.GetAddendumStudyCenter(addendumStudyCenterId);
  }

  updateAddendumStudyCenter(
    addendumStudyCenter
  ): Promise<UpdateAddendumStudyCenterMutation> {
    addendumStudyCenter.user = this.auth.getUsername();
    return this.api.UpdateAddendumStudyCenter(addendumStudyCenter);
  }
}
