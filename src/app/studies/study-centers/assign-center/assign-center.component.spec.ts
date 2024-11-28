import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AmplifyService } from 'aws-amplify-angular';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { AssignCenterComponent } from './assign-center.component';


describe('AssignCenterComponent', () => {
  let component: AssignCenterComponent;
  let fixture: ComponentFixture<AssignCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AssignCenterComponent],
      providers: [AuthService, AmplifyService, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
