import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AmplifyService } from 'aws-amplify-angular';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

import { SponsorAddEditComponent } from './sponsor-add-edit.component';

describe('CompanyAddEditComponent', () => {
  let component: SponsorAddEditComponent;
  let fixture: ComponentFixture<SponsorAddEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [SponsorAddEditComponent],
      providers: [AuthService, AmplifyService, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
