import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
import { DialogService } from 'primeng/dynamicdialog';
import { CentersService } from 'src/app/centers/centers.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { StudiesService } from '../../studies/studies.service';
import { MockStudiesService } from 'src/app/mock-services/mockstudies.service';
import { MockCentersService } from 'src/app/mock-services/mockcenters.service';
import { CommitteesListComponent } from './committee-list.component';

describe('StudyCommitteesListComponent', () => {
  let component: CommitteesListComponent;
  let fixture: ComponentFixture<CommitteesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommitteesListComponent]
    });
    TestBed.overrideComponent(
      CommitteesListComponent,
      {
        set: {
          providers: [
            { provide: StudiesService, useClass: MockStudiesService },
            { provide: SisecService, useClass: SisecService },
            { provide: DialogService },
            { provide: CentersService, useClass: MockCentersService },
            { provide: ConfirmationService },
            { provide: MessageService },
            { provide: DateIITPipe }

          ]
        }
      }
    );
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
