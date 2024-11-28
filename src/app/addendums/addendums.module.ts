import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../utils/primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../utils/shared.module';
import { AddendumsListComponent } from './addendums-list/addendums-list.component';
import { AddendumAddEditComponent } from './addendum-add-edit/addendum-add-edit.component';
import { AddendumDetailComponent } from './addendum-detail/addendum-detail.component';
import { InvimaModule } from '../invima/invima.module';
import { AddendumsStudyCenterListComponent } from './addendum-centers/addendum-centers-list/addendum-centers-listcomponent';
import { AddendumCenterAddEditComponent } from './addendum-centers/addendum-center-add-edit/addendum-center-add-edit.component';
import { AssignedCommitteesModule } from '../assigned-committees/assigned-committees.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    SharedModule,
    InvimaModule,
    AssignedCommitteesModule

  ],
  declarations: [
    AddendumsListComponent,
    AddendumAddEditComponent,
    AddendumDetailComponent,
    AddendumsStudyCenterListComponent,
    AddendumCenterAddEditComponent

  ],
  exports: [AddendumsListComponent]
})
export class AddendumsModule { }
