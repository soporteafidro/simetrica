import { Injectable } from '@angular/core';
import { APIService, EntityState, ModelCROFilterInput, UpdateCROInput } from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CroService {

  constructor(
    private auth: AuthService,
    private api: APIService
  ) { }

  listCrO(): Promise<any> {
    const filter: ModelCROFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.ListCROs(filter, 1000);
  }

  getCrO(id): Promise<any> {
    return this.api.GetCRO(id);
  }

  createCrO(cro): Promise<any> {
    cro.user = this.auth.getUsername();
    return this.api.CreateCRO(cro);
  }

  updateCro(cro, id, expectedVersion): Promise<any> {
    cro.user = this.auth.getUsername();
    let updateInput: UpdateCROInput = {
      id,
      expectedVersion
    };
    updateInput = Object.assign(updateInput, cro);
    return this.api.UpdateCRO(updateInput);
  }
}
