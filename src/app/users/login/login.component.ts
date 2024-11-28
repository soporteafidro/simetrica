import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SisecService } from '../../services/sisec.service';
import { Logger } from 'aws-amplify';
import { ErrorTranslationService } from '../error-translation.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { StorageService } from 'src/app/services/storage.service';
const logger = new Logger('login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  isPasswordShown = false;
  constructor(
    private authService: AuthService, private router: Router,
    private messageService: MessageService, private sisec: SisecService,
    private awserrors: ErrorTranslationService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.navigateHome();
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sisec.showSpinner('Ingresando al sistema...');
      this.authService.loginUser(this.username, this.password)
        .then(
          (response: any) => {
            this.storageService.loginUser(response);
          }).catch(error => {
            this.handleLoginException(error);
          }
          ).finally(() => this.sisec.hideSpinner());
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error al autenticar', detail: 'Se requiere un usuario y contraseña válidos' });
      this.sisec.hideSpinner();
    }
  }

  private handleLoginException(error: any): void {
    logger.error('loginUser error', error);
    if (error.code === 'UserNotConfirmedException') {
      this.router.navigate(['activation/' + this.username]);
    } else if (error.code === 'PasswordResetRequiredException') {
      this.router.navigate(['/resetPassword/' + this.username]);
    } else {
      this.awserrors.notifyAWSError(error);
    }
  }
  showPasswords(): void {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
