import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassUploadComponent } from './mass-upload.component';

describe('MassUploadComponent', () => {
  let component: MassUploadComponent;
  let fixture: ComponentFixture<MassUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
