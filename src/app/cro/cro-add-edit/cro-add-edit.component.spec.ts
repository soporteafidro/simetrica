import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAddEditComponent } from './cro-add-edit.component';

describe('CroAddEditComponent', () => {
  let component: CroAddEditComponent;
  let fixture: ComponentFixture<CroAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
