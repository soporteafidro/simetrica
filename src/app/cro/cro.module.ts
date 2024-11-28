import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAddEditComponent } from './cro-add-edit/cro-add-edit.component';
import { CroListComponent } from './cro-list/cro-list.component';
import { PrimengModule } from '../utils/primeng.module';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [CroAddEditComponent, CroListComponent],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ]
})
export class CroModule { }
