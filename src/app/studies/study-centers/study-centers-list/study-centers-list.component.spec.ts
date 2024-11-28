import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/utils/shared.module';
import { Router } from '@angular/router';
import { SisecService } from 'src/app/services/sisec.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MockAuthService } from 'src/app/mock-services/mockauth.service';
import { MockRouter } from 'src/app/mock-services/mock.router';
import { StudyCentersListComponent } from './study-centers-list.component';

describe('StudyCentersListComponent', () => {
  let component: StudyCentersListComponent;
  let fixture: ComponentFixture<StudyCentersListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudyCentersListComponent]
    });
    TestBed.overrideComponent(
      StudyCentersListComponent,
      {
        set: {
          providers: [
         //   { provide: SponsorsService, useClass: MockCe },
            { provide: SisecService, useClass: SisecService },
            { provide: MessageService, useClass: MessageService },
            { provide: AuthService, useClass: MockAuthService },
            { provide: Router, useClass: MockRouter }
          ]
        }
      }
    );
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCentersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
