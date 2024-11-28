import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorTranslationService } from '../error-translation.service';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { MessageService } from 'primeng/api';
const logger = new Logger('new-password');
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  isPasswordShown = false;
  passwordConfirmation;
  password;

  constructor(
    private authService: AuthService,
    private router: Router,
    private awstranslate: ErrorTranslationService,
    private sisec: SisecService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sisec.showSpinner('Cambiando clave...');
      if (this.password === this.passwordConfirmation) {
        const passwordValidate = this.sisec.validatePassword(this.password);
        if (passwordValidate) {
          this.authService.completeNewPassword(this.password).then(
            (response: any) => {
              logger.debug('completeNewPassword response', response);
              this.sisec.hideSpinner();
              this.router.navigate(['/login']);
            },
            (err) => {
              logger.error('register error', err);
              this.sisec.hideSpinner();
              this.awstranslate.notifyAWSError(err);
            }
          );
        } else {
          this.sisec.hideSpinner();
          return this.messageService.add({
            severity: 'error',
            summary: 'Error de clave',
            detail: `La contraseña no tiene el patrón correcto, debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caractér especial`,
          });
        }
      } else {
        this.sisec.hideSpinner();
        return this.messageService.add({
          severity: 'error',
          summary: 'Error de clave',
          detail: `Las claves no coinciden`,
        });
      }
    } else {
      this.sisec.hideSpinner();
      this.sisec.showInvalidFormError('Nueva contraseña');
    }
  }
  showPasswords(): void {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
