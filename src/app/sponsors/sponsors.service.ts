import { Injectable } from '@angular/core';
import {
  APIService, GetSponsorQuery, ListSponsorsQuery, CreateSponsorInput, CreateSponsorMutation, UpdateSponsorMutation, UpdateSponsorInput, ModelEntityStateInput, ModelSponsorFilterInput, EntityState
} from '../services/API.service';
import { Logger, Storage } from 'aws-amplify';
import { AuthService } from '../services/auth.service';
const logger = new Logger('sponsor-service');
@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private api: APIService, private auth: AuthService) { }
  currentSponsor: any = {
    id: null,
    estado: null,
    nombre: null,
    correo: null,
    logoURL: null,
    nit: null
  };

  getSponsor(id): Promise<GetSponsorQuery> {
    return this.api.GetSponsor(id);
  }

  listSponsors(): Promise<ListSponsorsQuery> {
    const filter: ModelSponsorFilterInput = {
      estado: {
        ne: EntityState.DELETED
      }
    };
    return this.api.ListSponsors(filter, 1000);
  }
  createSponsor(sponsor: CreateSponsorInput): Promise<CreateSponsorMutation> {
    sponsor.user = this.auth.getUsername();
    return this.api.CreateSponsor(sponsor);
  }

  updateSponsor(sponsor: CreateSponsorInput, id, expectedVersion: number): Promise<UpdateSponsorMutation> {
    sponsor.user = this.auth.getUsername();
    let updateInput: UpdateSponsorInput = {
      id,
      expectedVersion
    };
    updateInput = Object.assign(updateInput, sponsor);
    return this.api.UpdateSponsor(updateInput);
  }

  saveImage(file: File, path: string): Promise<any> {
    return Storage.put(path, file, {
      contentType: 'image/*'
    });
  }

  getImage(key: string): Promise<any> {
    return Storage.get(key);
  }

  deleteImage(key: string): Promise<any> {
    return Storage.remove(key);
  }

}
