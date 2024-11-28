import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MockCentersService } from 'src/app/mock-services/mockcenters.service';
import { LocationService } from 'src/app/services/location.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CentersService } from '../centers.service';

import { CenterAddEditComponent } from './center-add-edit.component';

describe('CenterAddEditComponent', () => {
  let component: CenterAddEditComponent;
  let fixture: ComponentFixture<CenterAddEditComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CenterAddEditComponent]
    });
    TestBed.overrideComponent(
      CenterAddEditComponent,
      {
        set: {
          providers: [
            { provide: Router, useValue: routerSpy },
            {
              provide: ActivatedRoute, useValue: {
                snapshot: {
                  params: {
                    id: 1
                  },
                },
              },
            },
            { provide: MessageService },
            { provide: SisecService },
            { provide: CentersService, useClass: MockCentersService },
            { provide: LocationService },
            { provide: DynamicDialogConfig },
            { provide: DynamicDialogRef }
          ]
        }
      }
    );
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
