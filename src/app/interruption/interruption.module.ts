import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterruptionAddEditComponent } from './interruption-add-edit/interruption-add-edit.component';
import { InterruptionListComponent } from './interruption-list/interruption-list.component';
import { PrimengModule } from '../utils/primeng.module';
import { InterruptionReclutamientoPipePipe } from './interruption-reclutamiento-pipe.pipe';
import { InterruptionMotivoPipePipe } from './interruption-motivo-pipe.pipe';
import { SharedModule } from '../utils/shared.module';

@NgModule({
  declarations: [InterruptionAddEditComponent, InterruptionListComponent, InterruptionReclutamientoPipePipe, InterruptionMotivoPipePipe],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ],
  exports: [InterruptionAddEditComponent, InterruptionListComponent],
  providers: [InterruptionReclutamientoPipePipe, InterruptionMotivoPipePipe]
})
export class InterruptionModule { }
