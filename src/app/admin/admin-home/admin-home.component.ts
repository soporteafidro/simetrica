import { Component } from '@angular/core';
import { SisecService } from 'src/app/services/sisec.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  display: boolean;

  constructor(public sisecService: SisecService) {
    this.display = this.sisecService.MessageHelpHome.view;
  }

  closeModal(): void {
    this.sisecService.MessageHelpHome.view = false;
  }
}
