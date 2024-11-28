import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorTranslationService {
  constructor(private messageService: MessageService, private router: Router) {}

  notifyAWSError(error): void {
    let errorMessage = JSON.stringify(error);
    if (error.code) {
      errorMessage =
        'Se presentó el siguiente error: ' +
        error.code +
        ' contacte al administrador del sistema.';
      if (error.code === 'UsernameExistsException') {
        errorMessage = 'El usuario ya existe en el sistema';
      } else if (error.code === 'InvalidParameterException') {
        if (error.message === 'Invalid phone number format.') {
          errorMessage =
            'El télefono es inválido. Verifique que cumpla con el formato esperado';
        } else {
          errorMessage =
            'Un campo del formulario no cumple con el formato esperado.';
        }
      } else if (error.code === 'CodeMismatchException') {
        errorMessage =
          'El código enviado no coincide, verifique o vuelva a enviarlo.';
      } else if (error.code === 'UserNotFoundException') {
        errorMessage =
          'El usuario no existe en el sistema. Por favor verifique';
      } else if (error.code === 'NotAuthorizedException') {
        if (error.message === 'Incorrect username or password.') {
          errorMessage = 'Usuario/Contraseña incorrectos, por favor verifique';
        } else if (
          error.message ===
          'User cannot be confirmed. Current status is CONFIRMED'
        ) {
          errorMessage =
            'El usuario ya está activo en el sistema. Intente recuperar su contraseña o ingresar al sistema.';
        } else if (
          error.message === 'Invalid session for the user, session is expired.'
        ) {
          errorMessage =
            'La sesion ha expirado, porfavor vuevle a iniciar sesión';
          this.router.navigate(['login']);
        } else {
          errorMessage =
            'Usuario no autorizado, por favor contacte al administrador.';
        }
      }
    }
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
    });
  }
}
