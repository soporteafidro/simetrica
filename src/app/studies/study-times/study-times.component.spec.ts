import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTimesComponent } from './study-times.component';

describe('StudyTimesComponent', () => {
  let component: StudyTimesComponent;
  let fixture: ComponentFixture<StudyTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
