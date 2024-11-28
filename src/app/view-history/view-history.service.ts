import { Injectable } from '@angular/core';
import { APIService, ModelAuditTraceFilterInput } from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ViewHistoryService {

  constructor(
    private auth: AuthService,
    private api: APIService
  ) { }

  getAuditInfo(entidad, idRegistro): Promise<any>{
    const filter: ModelAuditTraceFilterInput = {
      eventType: {
        eq: 'MODIFY'
      }
    };
    return this.api.GetAuditInfo(entidad, {eq: idRegistro}, null, filter);
  }
}
