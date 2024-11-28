import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import {
  APIService,
  EntityState,
  ListCommitteesQuery,
  ModelCommitteeFilterInput,
  UpdateCommitteeInput,
} from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommitteeService {
  constructor(private auth: AuthService, private api: APIService) {}

  listCommittees(): Promise<any> {
    const filter: ModelCommitteeFilterInput = {
      estado: {
        ne: EntityState.DELETED,
      },
    };
    return this.api.ListCommittees(filter, 1000);
  }

  getCommittee(id): Promise<any> {
    return this.api.GetCommittee(id);
  }

  createCommittee(committee): Promise<any> {
    committee.user = this.auth.getUsername();
    return this.api.CreateCommittee(committee);
  }

  updateCommittee(committee, id, expectedVersion): Promise<any> {
    committee.user = this.auth.getUsername();
    let updateInput: UpdateCommitteeInput = {
      id,
      expectedVersion,
    };
    updateInput = Object.assign(updateInput, committee);
    return this.api.UpdateCommittee(updateInput);
  }
}
