import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDataUploadComponent } from './preview-data-upload.component';

describe('PreviewDataUploadComponent', () => {
  let component: PreviewDataUploadComponent;
  let fixture: ComponentFixture<PreviewDataUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDataUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
