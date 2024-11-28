import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { MockRouter } from 'src/app/mock-services/mock.router';
import { MockAuthService } from 'src/app/mock-services/mockauth.service';
import { MockSponsorsService } from 'src/app/mock-services/mocksponsors.service';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent]
    });

    TestBed.overrideComponent(
      UsersListComponent,
      {
        set: {
          providers: [
            { provide: SponsorsService, useClass: MockSponsorsService },
            { provide: SisecService, useClass: SisecService },
            { provide: MessageService, useClass: MessageService },
            { provide: AuthService, useClass: MockAuthService },
            { provide: Router, useClass: MockRouter },
            { provide: DialogService, useClass: DialogService },
            { provide: ConfirmationService, useClass: ConfirmationService }
          ]
        }
      }
    );
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
