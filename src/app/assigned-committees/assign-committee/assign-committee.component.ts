import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logger } from 'aws-amplify';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CentersService } from 'src/app/centers/centers.service';
import { CommitteeAddEditComponent } from 'src/app/committee/committee-add-edit/committee-add-edit.component';
import { CommitteeService } from 'src/app/committee/committee.service';
import { EntityState, ListCommitteesQuery, ListStudyCenterCommitteesQuery, ListStudyCentersQuery } from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from '../../studies/studies.service';
const logger = new Logger('assign-committee');

@Component({
  selector: 'app-assign-committee',
  templateUrl: './assign-committee.component.html',
  styleUrls: ['./assign-committee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssignCommitteeComponent implements OnInit {


  @ViewChild('f', { static: true }) assignCommiteeForm: NgForm;

  studyCenters: any[] = [];
  committees: any[] = [];
  studyCentersCommittees: any[] = [];
  centerOptions: any[] = [];

  selectedStudyCentersIds: any[] = [];
  selectedStudyCentersIdsOriginal: any[] = [];
  displayDialog: boolean;

  @Input() studyId;
  @Input() studyCenterId; // cuando la asociacion de comite viene a partir de la accion de un studycenter

  studyCenterCommittee = {
    studyCenterID: null,
    committeeID: null,
    studyID: null
  };

  constructor(
    private centersService: CentersService,
    private studiesService: StudiesService,
    private sisec: SisecService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private committeesService: CommitteeService,
    private dialogService: DialogService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.studyId = this.config.data?.studyId;
    this.sisec.showSpinner('Cargando datos ...');

    const load1 = this.loadStudyCenters();
    const load2 = this.loadCommittees();
    const load3 = this.loadStudyCenterCommittees();

    Promise.all([load1, load2, load3]).catch(error => {
      logger.error('PromiseAll error', error);
    })
      .finally(() => this.sisec.hideSpinner());

  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.sisec.showSpinner('Asociando ...');

      const studyCenterCommitteeInput = {
        studyCenterID: this.studyCenterCommittee.studyCenterID,
        committeeID: this.studyCenterCommittee.committeeID,
        estado: EntityState.ACTIVE,
        studyID: this.studyId,
        user: null
      };

      logger.debug('submitted studyCenterCommitteeInput', studyCenterCommitteeInput);
      this.studiesService.createStudyCenterCommittee(studyCenterCommitteeInput)
      .then(response => {
        logger.debug('screateStudyCenterCommittee response', response);
        this.ref.close('asociado');
      }).catch(error => {
        logger.error('createStudyCenterCommittee error', error);
      });
    }
  }

  // los cargo todos por ahora, luego reveo una mejor forma.
  loadStudyCenterCommittees(): Promise<any> {
    return this.studiesService.ListStudyCenterCommitteesByStudy(this.studyId)
      .then((response: ListStudyCenterCommitteesQuery) => {
        logger.debug('loadStudyCenterComitees response', response);
        this.studyCentersCommittees = response.items;
      }).catch(error => {
        logger.error('loadStudyCenterComitees error', error);
      });
  }

  loadCommittees(): Promise<any> {

    return this.committeesService.listCommittees()
      .then((response: ListCommitteesQuery) => {
        logger.debug('listCommittees response', response);
        this.committees = response.items.map((cm: any) => {
          return {
            label: cm.nombre,
            value: cm.id,
            committeeID: cm.id
          };
        });

      }).catch(error => {
        logger.error('listCommittees error', error);
      });
  }

  onCommitteeSelectionChanged(): void {
    this.selectedStudyCentersIds = [];
    this.selectedStudyCentersIds = this.studyCentersCommittees
      .filter(s => s.committeeID === this.studyCenterCommittee.committeeID &&
        s.studyCenter.studyID === this.studyId)
      .map((s => s.studyCenterID));

    this.centerOptions = this.studyCenters.filter( s => this.selectedStudyCentersIds.filter( e => s.studyCenterID === e).length === 0);
  }

  // cargo los centros asociados a este estudio
  loadStudyCenters(): Promise<any> {

    return this.centersService.listStudyCentersByStudy(this.studyId)
      .then((thisStudyCenters: ListStudyCentersQuery) => {
        logger.debug('listStudyCenters response', thisStudyCenters);
        this.studyCenters = thisStudyCenters.items.map((stc: any) => {
          return {
            label: stc.center.nombre,
            value: stc.id,
            studyCenterID: stc.id
          };
        });

        if (this.studyCenters.length === 0) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error en la asociacion',
            detail: `No se puede asociar comités ya que se requiere previamente asociar al menos un centro al estudio.`,
          });
          this.ref.close();
        }

      }).catch(error => {
        logger.error('listStudyCenters error', error);
      });
  }

  openCreateCommitteeModal(): void {
    const ref = this.dialogService.open(CommitteeAddEditComponent, {
      header: 'Crear Comité de Ética',
      width: '90%',
      data: {
        isModal: true
      },
      closeOnEscape: false,
      dismissableMask: false
    });
    ref.onClose.subscribe((comite: any) => {
      if (comite) {
        this.committees.push({
          label: comite.nombre,
          value: comite.id,
        });
        this.studyCenterCommittee.committeeID = comite.id;
        this.onCommitteeSelectionChanged();
      }
    });
  }

  onCancelar(): void {
    this.ref.close('cancelado');
  }

  showDialog(): void {
    this.displayDialog = true;
  }
}
