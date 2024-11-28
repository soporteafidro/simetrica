import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { ErrorPageComponent } from './utils/error-page/error-page.component';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './utils/shared.module';
import { HomeComponent } from './home/home.component';
import { SponsorsModule } from './sponsors/sponsors.module';
import { StudiesModule } from './studies/studies.module';
import { PrimengModule } from './utils/primeng.module';
import { BnNgIdleService } from 'bn-ng-idle';
import { CentersModule } from './centers/centers.module';
import { CommitteeModule } from './committee/committee.module';
import { CroModule } from './cro/cro.module';
import { MassUploadModule } from './mass-upload/mass-upload.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { ViewHistoryModule } from './view-history/view-history.module';
import { ReportsModule } from './reports/reports.module';
import { AddendumsComponent } from './addendums/addendums.component';
import { HelpModule } from './help/help.module';
import { ConsultModule } from './consult/consult.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    AddendumsComponent
  ],
  imports: [
    AdminModule,
    SponsorsModule,
    StudiesModule,
    UsersModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    PrimengModule,
    CentersModule,
    CommitteeModule,
    CroModule,
    MassUploadModule,
    GoogleChartsModule,
    ViewHistoryModule,
    ReportsModule,
    HelpModule,
    HttpClientModule,
    ConsultModule
  ],
  providers: [AmplifyService, AuthService, BnNgIdleService],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
