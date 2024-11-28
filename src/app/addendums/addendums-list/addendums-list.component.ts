import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from 'aws-amplify';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { MassUploadEnmiendasService } from 'src/app/mass-upload/mass-upload-enmiendas.service';
import { AddendaByStudyQuery } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { AddendumAddEditComponent } from '../addendum-add-edit/addendum-add-edit.component';
import { AddendumsService } from '../addendums.service';
const logger = new Logger('addendums-list');

@Component({
  selector: 'app-addendums-list',
  templateUrl: './addendums-list.component.html',
  styleUrls: ['./addendums-list.component.scss'],
})
export class AddendumsListComponent implements OnInit {
  constructor(
    private addendumsService: AddendumsService,
    private sisec: SisecService,
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private massUploadEnmiendasService: MassUploadEnmiendasService
  ) {}

  @Input() studyId: string;
  @Output() onUpdate = new EventEmitter<string>();

  addendums: any[] = [];
  isReader = false;
  isMedico = false;

  ngOnInit() {
    this.loadAddendumsForThisStudy();
    this.isMedico = this.auth.isMedico();
    this.isReader = this.auth.isReader();
  }

  public loadAddendumsForThisStudy(): void {
    this.addendumsService
      .listAddendumsByStudy(this.studyId)
      .then((response: AddendaByStudyQuery) => {
        this.onUpdate.emit('enmiendas actualizadas');
        logger.debug('listAddendumsByStudy response', response);
        this.addendums = this.sisec.ordenarPorFechaCreacion(response.items);
      })
      .catch((error) => {
        logger.error('listAddendumsByStudy error', error);
      });
  }

  openAddAddendum(): void {
    const selctedheader = 'Crear enmienda';

    const ref = this.dialogService.open(AddendumAddEditComponent, {
      header: selctedheader,
      width: '90%',
      data: { studyId: this.studyId },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: string) => {
      if (result && result !== 'cancelado') {
        this.onUpdate.emit('update');
        this.addendums.unshift(result);

        return this.messageService.add({
          severity: 'success',
          summary: 'Enmienda creada exitosamente',
          detail: 'La enmienda fue guardada con éxito.',
        });
      }
    });
  }
}
