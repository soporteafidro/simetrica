import { Injectable } from '@angular/core';
import {
  EntityState, ListSponsorsQuery
} from '../services/API.service';


@Injectable({
  providedIn: 'root'
})
export class MockSponsorsService {

  listSponsors(): Promise<ListSponsorsQuery> {
    return new Promise<ListSponsorsQuery>((resolve) => {
      const data: ListSponsorsQuery = {
        __typename: 'ModelSponsorConnection',
        items: [
          {
            __typename: 'Sponsor',
            id: '1',
            estado: EntityState.ACTIVE,
            nombre: 'Test company',
            nit: '010101',
            version: 1,
            createdAt: 'hoy',
            updatedAt: 'hoy',
            logoURL: '',
            user: null,
            informacionContacto: 'info contacto',
            correo: 'pspe@asd.com',
            studies: null
          }
        ],
        nextToken: null
      };

      resolve(data);
    });

  }

}
