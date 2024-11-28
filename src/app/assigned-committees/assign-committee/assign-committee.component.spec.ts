import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AmplifyService } from 'aws-amplify-angular';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { AssignCommitteeComponent } from './assign-committee.component';


describe('AssignCommitteeComponent', () => {
  let component: AssignCommitteeComponent;
  let fixture: ComponentFixture<AssignCommitteeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AssignCommitteeComponent],
      providers: [AuthService, AmplifyService, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
