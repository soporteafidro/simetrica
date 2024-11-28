import { NgModule } from '@angular/core';
import { SharedModule } from '../utils/shared.module';
import { SponsorListComponent } from './sponsors-list/sponsors-list.component';
import { SponsorAddEditComponent } from './sponsor-add-edit/sponsor-add-edit.component';
import { PrimengModule } from '../utils/primeng.module';

@NgModule({
  declarations: [
    SponsorListComponent,
    SponsorAddEditComponent
  ],
  imports: [
    SharedModule,
    PrimengModule
  ]
})
export class SponsorsModule {
}
