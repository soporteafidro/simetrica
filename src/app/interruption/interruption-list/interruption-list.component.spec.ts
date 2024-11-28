import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptionListComponent } from './interruption-list.component';

describe('InterruptionListComponent', () => {
  let component: InterruptionListComponent;
  let fixture: ComponentFixture<InterruptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
