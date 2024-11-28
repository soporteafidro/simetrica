import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SponsorsService } from '../sponsors.service';
import { MockSponsorsService } from '../../mock-services/mocksponsors.service';
import { SponsorListComponent } from './sponsors-list.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/utils/shared.module';
import { Router } from '@angular/router';
import { SisecService } from 'src/app/services/sisec.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MockAuthService } from 'src/app/mock-services/mockauth.service';
import { MockRouter } from 'src/app/mock-services/mock.router';
import { DialogService } from 'primeng/dynamicdialog';

describe('SponsorListComponent', () => {
  let component: SponsorListComponent;
  let fixture: ComponentFixture<SponsorListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorListComponent]
    });
    TestBed.overrideComponent(
      SponsorListComponent,
      {
        set: {
          providers: [
            { provide: SponsorsService, useClass: MockSponsorsService },
            { provide: SisecService, useClass: SisecService },
            { provide: MessageService, useClass: MessageService },
            { provide: AuthService, useClass: MockAuthService },
            { provide: Router, useClass: MockRouter },
            { provide: ConfirmationService},
            { provide: DialogService }
          ]
        }
      }
    );
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
