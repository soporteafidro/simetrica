import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../utils/primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../utils/shared.module';
import { CommitteeIterationAddEditComponent } from './committee-iteration-add-edit/committee-iteration-add-edit.component';
import { CommitteesListComponent } from './comittees-list/committee-list.component';
import { AssignCommitteeComponent } from './assign-committee/assign-committee.component';


@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CommitteeIterationAddEditComponent,
    CommitteesListComponent,
    AssignCommitteeComponent
  ],
  exports: [CommitteesListComponent]
})
export class AssignedCommitteesModule { }
