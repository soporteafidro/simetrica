import { Injectable } from '@angular/core';
import {
  APIService,
  EntityState,
  ModelInterruptionFilterInput,
  UpdateInterruptionInput,
} from '../services/API.service';
import { AuthService } from '../services/auth.service';
import { Logger } from 'aws-amplify';
const logger = new Logger('interruption-service');

@Injectable({
  providedIn: 'root',
})
export class InterruptionService {
  constructor(private auth: AuthService, private api: APIService) {}

  listInterruptions(studyId): Promise<any> {
    const filter: ModelInterruptionFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
      studyID: {
        eq: studyId,
      },
    };
    return this.api.ListInterruptions(filter, 1000);
  }

  getInterruption(id): Promise<any> {
    return this.api.GetInterruption(id);
  }

  createInterruption(Interruption): Promise<any> {
    Interruption.user = this.auth.getUsername();
    return this.api.CreateInterruption(Interruption);
  }

  updateInterruption(Interruption, id, expectedVersion): Promise<any> {
    Interruption.user = this.auth.getUsername();
    let updateInput: UpdateInterruptionInput = {
      id,
      expectedVersion,
    };
    updateInput = Object.assign(updateInput, Interruption);
    logger.debug(updateInput);
    return this.api.UpdateInterruption(updateInput);
  }
}
