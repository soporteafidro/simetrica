import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { SisecService } from './services/sisec.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sisec';
  blockedUI = false;
  blockedUIText = '';
  private showSpinner: Subscription;
  counter = 60 * 30;
  isAuthenticated = false;
  constructor(
    public sisec: SisecService, public authService: AuthService, private bnIdle: BnNgIdleService,
    private messages: MessageService, private storageService: StorageService) {
    sisec.spinnerState.show = false;
    this.storageService.setUser();
  }
  ngOnInit(): void {
    this.sisec.spinnerState.show = false;
    this.bnIdle.startWatching(this.counter).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        if (this.authService.isAuthenticated()) {
          this.authService.logout();
          this.messages.add({
            closable: true,
            sticky: true,
            severity: 'warn',
            data: 'Su sesión ha expirado',
            detail: 'Han pasado más de 30 minutos sin actividad detectada, por seguridad su sesión se cerró.'
          });
        }
      }
    });

  }



}

