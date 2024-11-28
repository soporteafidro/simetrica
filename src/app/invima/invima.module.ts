import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../utils/primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../utils/shared.module';
import { INVIMAListComponent } from './invima-list.component';
import { InvimaAddEditComponent } from './invima-add-edit/invima-add-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    INVIMAListComponent,
    InvimaAddEditComponent
  ],
  exports: [INVIMAListComponent]
})
export class InvimaModule { }
