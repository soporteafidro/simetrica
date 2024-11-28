import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { CenterAddEditComponent } from './centers/center-add-edit/center-add-edit.component';
import { CentersListComponent } from './centers/centers-list/centers-list.component';
import { CommitteeAddEditComponent } from './committee/committee-add-edit/committee-add-edit.component';
import { CommitteeListComponent } from './committee/committee-list/committee-list.component';
import { MedicalConsultationsComponent } from './consult/medical-consultations/medical-consultations.component';
import { CroAddEditComponent } from './cro/cro-add-edit/cro-add-edit.component';
import { CroListComponent } from './cro/cro-list/cro-list.component';
import { ListFileComponent } from './help/list-file/list-file.component';
import { HomeComponent } from './home/home.component';
import { MassUploadComponent } from './mass-upload/mass-upload/mass-upload.component';

import { ReportComponent } from './reports/report/report.component';
import { AuthGuard } from './services/auth-guard.service';
import { UnauthGuard } from './services/unauth-guard.service';
import { SponsorAddEditComponent } from './sponsors/sponsor-add-edit/sponsor-add-edit.component';
import { SponsorListComponent } from './sponsors/sponsors-list/sponsors-list.component';
import { StudiesComponent } from './studies/studies.component';
import { StudyNewStepperComponent } from './studies/study-new-stepper/study-new-stepper.component';
import { StudySummaryComponent } from './studies/study-summary/study-summary.component';
import { LoginComponent } from './users/login/login.component';
import { NewPasswordComponent } from './users/new-password/new-password.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { UserActivationComponent } from './users/user-activation/user-activation.component';
import { ErrorPageComponent } from './utils/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'consult',
    component: MedicalConsultationsComponent,
  },
  {
    path: 'activation/:userId',
    component: UserActivationComponent,
  },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'resetPassword/:username', component: ResetPasswordComponent },
  { path: 'newPassword', component: NewPasswordComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Supervisor', 'Medico', 'Digitador', 'Lector'] },
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'reader/home',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Lector'] },
  },
  {
    path: 'admin/users/list',
    component: UsersListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'admin/sponsors/list',
    component: SponsorListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'admin/sponsors/:sponsor_id/:source/edit',
    component: SponsorAddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Viewer'] },
  },
  {
    path: 'admin/sponsors/add',
    component: SponsorAddEditComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Supervisor', 'Medico', 'Admin'] },
  },
  {
    path: 'studies',
    component: StudiesComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador', 'Lector'],
    },
  },
  {
    path: 'studies/:id/view',
    component: StudySummaryComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador', 'Lector'],
    },
  },
  {
    path: 'studies/:id/edit',
    component: StudyNewStepperComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador'],
    },
  },
  {
    path: 'studies/new',
    component: StudyNewStepperComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador'],
    },
  },
  {
    path: 'centers',
    component: CentersListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'center/add',
    component: CenterAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'center/:id/edit',
    component: CenterAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'committees',
    component: CommitteeListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'committee/add',
    component: CommitteeAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'committee/:id/edit',
    component: CommitteeAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'cro',
    component: CroListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'cro/add',
    component: CroAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'cro/:id/edit',
    component: CroAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'reports',
    component: ReportComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },
  {
    path: 'upload/:source',
    component: MassUploadComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador'],
    },
  },
  {
    path: 'help',
    component: ListFileComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['Admin', 'Supervisor', 'Medico', 'Digitador', 'Lector'],
    },
  },
  {
    path: 'not-authorized',
    component: ErrorPageComponent,
    data: {
      message:
        'No cuenta con los permisos suficientes para acceder a esta página, contacte al administrador del sistema',
    },
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Página no encontrada!' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
