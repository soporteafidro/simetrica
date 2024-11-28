import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../utils/primeng.module';
import { StudyNewStepperComponent } from './study-new-stepper/study-new-stepper.component';
import { StudiesComponent } from './studies.component';
import { StudiesListComponent } from './studies-list/studies-list.component';
import { StudyNewInfoComponent } from './study-new-info/study-new-info.component';
import { StudySummaryComponent } from './study-summary/study-summary.component';
import { StudyIdentificationDataComponent } from './study-form/study-identification-data/study-identification-data.component';
import { StudyPropertiesComponent } from './study-form/study-properties/study-properties.component';
import { FormsModule } from '@angular/forms';
import { StudyGeneralInformationComponent } from './study-summary/study-panel/study-general-information/study-general-information.component';
import { StudyInternationalNationalDataComponent } from './study-form/study-international-national-data/study-international-national-data.component';
import { AssignCenterComponent } from './study-centers/assign-center/assign-center.component';
import { CentersModule } from '../centers/centers.module';
import { StudyCentersListComponent } from './study-centers/study-centers-list/study-centers-list.component';
import { InterruptionModule } from '../interruption/interruption.module';
import { StudyTimesComponent } from './study-times/study-times.component';
import { StudyStatusComponent } from './study-form/study-status/study-status.component';
import { SharedModule } from '../utils/shared.module';
import { AddendumsModule } from '../addendums/addendums.module';
import { InvimaModule } from '../invima/invima.module';
import { AssignedCommitteesModule } from '../assigned-committees/assigned-committees.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    SharedModule,
    CentersModule,
    InterruptionModule,
    AddendumsModule,
    InvimaModule,
    AssignedCommitteesModule,
    Ng2GoogleChartsModule
  ],
  declarations: [
    StudyIdentificationDataComponent,
    StudyPropertiesComponent,
    StudyInternationalNationalDataComponent,
    StudyNewStepperComponent,
    StudiesComponent,
    StudiesListComponent,
    StudyNewInfoComponent,
    StudySummaryComponent,
    StudyGeneralInformationComponent,
    AssignCenterComponent,
    StudyCentersListComponent,
    StudyTimesComponent,
    StudyStatusComponent
  ],
  exports: [StudiesListComponent]
})
export class StudiesModule { }
