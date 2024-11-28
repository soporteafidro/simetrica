import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from 'aws-amplify';
import { ErrorTranslationService } from '../error-translation.service';
import { SisecService } from 'src/app/services/sisec.service';
const logger = new Logger('user-activation-logger');

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.scss']
})
export class UserActivationComponent implements OnInit {
  userId;
  codigo;

  constructor(
    private messageService: MessageService, private awserrors: ErrorTranslationService,
    private router: Router, private sisec: SisecService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.confirmCode();
    } else {
      this.sisec.showInvalidFormError('Validación de usuario');
    }
  }
  sendAgain(): void {
    this.sisec.showSpinner('Reenviando código..');
    Auth.resendSignUp(this.userId)
      .then((data) => {
        logger.debug('resendSignUp response: ', data);
        this.messageService.add(
          {
            severity: 'success',
            summary: 'Codigo reenviado',
            detail: 'Se ha vuelto a enviar el código al correo registrado'
          });
      })
      .catch((error) => {
        logger.error('error al resendSignUp', error);
        this.awserrors.notifyAWSError(error);
      })
      .finally(() => this.sisec.hideSpinner());
  }

  confirmCode(): void {
    this.sisec.showSpinner('Enviando código de activación..');
    Auth.confirmSignUp(this.userId, this.codigo)
      .then((data: any) => {
        logger.debug('confirmSignUp response', data);
        if (data === 'SUCCESS') {
          Auth.signOut(); // Con esto aseguramos limpiar el localstorage de las sesiones anteriores.
          this.router.navigate(['']);
          this.messageService.add(
            {
              severity: 'success',
              summary: 'Éxito',
              detail: 'Tu usuario se activó exitosamente. ¡Ya puedes empezar a reportar!'
            });
        }
      })
      .catch((error: any) => {
        logger.error('confirmSignUp error', error);
        this.awserrors.notifyAWSError(error);
      }).finally(() => this.sisec.hideSpinner());
  }
}
