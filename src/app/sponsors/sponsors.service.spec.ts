import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthService } from '../services/auth.service';

import { SponsorsService } from './sponsors.service';

describe('SponsorsService', () => {
  let service: SponsorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService, AmplifyService]
    });
    service = TestBed.inject(SponsorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
