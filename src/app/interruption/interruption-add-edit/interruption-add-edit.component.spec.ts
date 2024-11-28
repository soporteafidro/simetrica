import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionAddEditComponent } from './interruption-add-edit.component';

describe('InterruptionAddEditComponent', () => {
  let component: InterruptionAddEditComponent;
  let fixture: ComponentFixture<InterruptionAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptionAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
