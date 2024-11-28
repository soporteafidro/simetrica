import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteeAddEditComponent } from './committee-add-edit/committee-add-edit.component';
import { CommitteeListComponent } from './committee-list/committee-list.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../utils/primeng.module';
import { TypeCommitteePipe } from './type-committee.pipe';



@NgModule({
  declarations: [CommitteeAddEditComponent, CommitteeListComponent, TypeCommitteePipe],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ],
  providers: [TypeCommitteePipe]
})
export class CommitteeModule { }
