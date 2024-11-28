import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersListComponent } from './centers-list/centers-list.component';
import { CenterAddEditComponent } from './center-add-edit/center-add-edit.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../utils/primeng.module';
import { TypeCenterPipe } from './type-center.pipe';



@NgModule({
  declarations: [CentersListComponent, CenterAddEditComponent, TypeCenterPipe],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ],
  providers: [TypeCenterPipe]
})
export class CentersModule { }
