import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { ErrorTranslationService } from '../error-translation.service';
const logger = new Logger('reset-password-logger');

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  step = true;
  userId = null;
  newPassword;
  activationCode;
  isPasswordShown = false;
  passwordConfirmation;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private sisec: SisecService,
    private awserros: ErrorTranslationService
  ) {}

  ngOnInit(): void {
    this.step = true;
    this.userId = this.route.snapshot.params.username;
    if (this.userId) {
      this.step = false;
    }
  }

  onSubmit(form: NgForm): void {
    if (this.userId === undefined || this.userId.trim() === '') {
      return this.messageService.add({
        severity: 'warn',
        summary: 'Error de usuario',
        detail: 'El campo usuario no puede estar vacío',
      });
    }
    if (form.valid) {
      if (this.step) {
        this.sisec.showSpinner('Enviando código...');
        this.authService.sendCodeResetPassword(this.userId).then(
          (response: any) => {
            logger.debug('sendCodeResetPassword response', response);
            this.step = false;
            this.messageService.add({
              summary: 'Éxito',
              detail:
                'Se envió el código de verificación a ' +
                response.CodeDeliveryDetails.DeliveryMedium +
                ': ' +
                response.CodeDeliveryDetails.Destination,
              severity: 'success',
            });
            this.sisec.hideSpinner();
          },
          (error) => {
            logger.error('sendCodeResetPassword error', error);
            this.sisec.hideSpinner();
            this.messageService.add({
              severity: 'warn',
              summary: 'Error en el envió email',
              detail:
                'Usuario inválido o inactivo, contactar con el administrador',
            });
          }
        );
      } else {
        if (this.newPassword === this.passwordConfirmation) {
          const passwordValidate = this.sisec.validatePassword(
            this.newPassword
          );
          if (!passwordValidate) {
            return this.messageService.add({
              severity: 'warn',
              summary: 'La contraseña es invalida',
              detail: 'La contraseña no cumple con el patron',
            });
          }
          this.sisec.showSpinner('Cambiando contraseña...');
          this.authService
            .completeResetPassword(
              this.userId,
              this.newPassword,
              this.activationCode
            )
            .then(
              (response: any) => {
                logger.debug('completeResetPassword response', response);
                this.messageService.add({
                  summary: 'Contraseña nueva',
                  detail: 'Se ha cambiado exitosamente su contraseña',
                  severity: 'success',
                });
                this.sisec.hideSpinner();
                this.router.navigate(['/login']);
              },
              (error) => {
                logger.error('completeResetPassword error', error);
                this.step = false;
                this.awserros.notifyAWSError(error);
                this.sisec.hideSpinner();
              }
            );
        } else {
          return this.messageService.add({
            severity: 'warn',
            summary: 'Las contraseñas no coinciden',
            detail: 'Las contraseñas deben ser iguales',
          });
        }
      }
    } else {
      this.sisec.showInvalidFormError('Cambio de contraseña');
    }
  }
  showPasswords(): void {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
