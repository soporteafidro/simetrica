import { NgModule } from '@angular/core';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '../utils/shared.module';
import { PasswordModule } from 'primeng/password';
import { NewPasswordComponent } from './new-password/new-password.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../utils/primeng.module';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    UserActivationComponent,
    NewPasswordComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    PasswordModule,
    PrimengModule
  ]
})
export class UsersModule { }
