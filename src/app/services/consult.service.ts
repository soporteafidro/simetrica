import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor() { }

  findStudies(cie10: string, name: string, center: string, city: string) {
    return API.post('getStudies', '/getStudies', { body: { cie10, name, center, city } });
  }

  getCenters() {
    return API.get('getStudies', '/getCenters', {});
  }

}
