import { Component, Input, OnInit } from '@angular/core';
import { Logger } from 'aws-amplify';
import {
  EntityState,
  GetSponsorQuery,
  StudyState,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { StudiesService } from '../studies.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { AuthService } from 'src/app/services/auth.service';
import { StudyIdentificationDataComponent } from '../study-form/study-identification-data/study-identification-data.component';
import { StudyInternationalNationalDataComponent } from '../study-form/study-international-national-data/study-international-national-data.component';
import { StudyPropertiesComponent } from '../study-form/study-properties/study-properties.component';
import { StudyStatusComponent } from '../study-form/study-status/study-status.component';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { UrlResolver } from '@angular/compiler';
import { ViewHistoryComponent } from 'src/app/view-history/view-history/view-history.component';

const logger = new Logger('studies-list');

@Component({
  selector: 'studies-list',
  templateUrl: './studies-list.component.html',
  styleUrls: ['./studies-list.component.scss'],
})
export class StudiesListComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private studiesService: StudiesService,
    private sisec: SisecService,
    private router: Router,
    private dialogService: DialogService,
    private sponsorsService: SponsorsService,
    private auth: AuthService,
    private messageService: MessageService,
    private dateIITPipe: DateIITPipe,
    private confirmationService: ConfirmationService
  ) {}

  @Input() isHomeView = false;

  studies = [];
  studiesRaw = [];
  loading = false;
  items: MenuItem[];
  sponsorUser: GetSponsorQuery = {
    __typename: 'Sponsor',
    id: '',
    estado: EntityState.ACTIVE,
    nombre: '',
    user: '',
    createdAt: '',
    updatedAt: '',
    version: 0,
  };
  isSponsorUser = false;
  sponsors = [];
  croS = [];
  isReader = false;
  isMedico = false;
  selectedStudy = null;

  msgs = [
    { severity: 'warn', summary: '', detail: 'No se encontraron resultados.' },
  ];

  ngOnInit(): void {
    this.loadStudies();
    this.loadMenuItems();
    this.checkSponsorUser();

    this.isReader = this.auth.isReader();
    this.isMedico = this.auth.isMedico();
  }

  checkSponsorUser(): void {
    if (this.authService.isSponsorUser()) {
      this.isSponsorUser = true;
      const sponsorId = this.authService.getUserSponsorId();
      this.sponsorsService
        .getSponsor(sponsorId)
        .then((sponsor: GetSponsorQuery) => {
          this.sponsorUser = sponsor;
        });
    }
  }

  loadMenuItems(): void {
    this.items = [];

    if (!this.authService.isReader()) {
      this.items.push({
        label: 'Editar datos de identificación',
        icon: 'pi pi-pencil',
        command: () => {
          this.openEditDialog(
            'Editar datos de identificación',
            StudyIdentificationDataComponent
          );
        },
      });

      this.items.push({
        label: 'Editar datos internacionales y nacionales',
        icon: 'pi pi-pencil',
        command: () => {
          this.openEditDialog(
            'Editar datos internacionales y nacionales',
            StudyInternationalNationalDataComponent
          );
        },
      });

      this.items.push({
        label: 'Editar propiedades',
        icon: 'pi pi-pencil',
        command: () => {
          this.openEditDialog('Editar propiedades', StudyPropertiesComponent);
        },
      });

      this.items.push({
        label: 'Cambiar estado',
        icon: 'pi pi-pencil',
        command: () => {
          this.openEditDialog('Cambiar estado', StudyStatusComponent);
        },
      });

      this.items.push({
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteStudy();
        },
      });

      this.items.push({
        label: 'Ver historial de cambios',
        icon: 'pi pi-question-circle',
        command: () => {
          this.viewHistory(this.selectedStudy.id);
        },
      });
    }

    this.items.push({
      label: 'Ver Detalles',
      icon: 'pi pi-eye',
      command: () => {
        this.router.navigate(['studies/' + this.selectedStudy.id + '/view']);
      },
    });
  }

  filterGlobal(val: string) {
    let value = val.toLowerCase();
    this.studies = this.studiesRaw.filter(
      (s) =>
        s.sponsor.nombre.toLowerCase().includes(value) ||
        s.identificadorNCT.toLowerCase().includes(value) ||
        s.titulo.toLowerCase().includes(value) ||
        s.enColombia.toLowerCase().includes(value) ||
        s.estado.toLowerCase().includes(value) ||
        s.cro?.nombre.toLowerCase().includes(value) ||
        this.hasCommittee(s, value) ||
        this.hasCentro(s, value)
    );
  }

  hasCommittee(study: any, val: string): boolean {
    var res = study.studyCenterCommittees.items.filter((s) =>
      s.committee.nombre.toLowerCase().includes(val)
    );
    if (res.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  hasCentro(study: any, val: string): boolean {
    var res = study.studyCenters.items.filter((s) =>
      s.center.nombre.toLowerCase().includes(val)
    );
    if (res.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  openEditDialog(title: string, component: any): void {
    const ref = this.dialogService.open(component, {
      header: title,
      width: '90%',
      data: {
        editMode: true,
        isModal: true,
        studyId: this.selectedStudy.id,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'actualizado') {
        this.loadStudies();
      }
    });
  }

  selectStudy(study): void {
    this.selectedStudy = study;
  }

  loadStudies(): void {
    this.sisec.showSpinner('Consultando estudios...');
    this.loading = true;

    if (this.auth.isSponsorUser()) {
      const sponsorId = this.auth.getUserSponsorId();
      this.studiesService
        .studiesBySponsorWithAllData(sponsorId)
        .then((studies) => {
          logger.debug('studiesList', studies.items);
          this.studies = this.sisec.ordenarPorFechaCreacion(studies.items);
          this.studies.forEach((s) => {
            s.aprobadoINVIMA = this.studiesService.getFechaAprobacionInvima(s);
          });

          this.studiesRaw = studies.items;

          this.studiesRaw.forEach((s) => {
            s.aprobadoINVIMA = this.studiesService.getFechaAprobacionInvima(s);
          });
        })
        .catch((error) => {
          logger.error('studiesBySponsor error', error);
        })
        .finally(() => {
          this.sisec.hideSpinner();
          this.loading = false;
        });
    } else {
      this.studiesService
        .listStudiesWithAllData()
        .then((studies) => {
          logger.debug('studiesList', studies.items);
          this.studies = this.sisec.ordenarPorFechaCreacion(studies.items);
          this.studies.forEach((s) => {
            s.aprobadoINVIMA = this.studiesService.getFechaAprobacionInvima(s);
          });
          this.studiesRaw = studies.items;

          this.studiesRaw.forEach((s) => {
            s.aprobadoINVIMA = this.studiesService.getFechaAprobacionInvima(s);
          });
        })
        .catch((error) => {
          logger.error('liststudies error', error);
        })
        .finally(() => {
          this.sisec.hideSpinner();
          this.loading = false;
        });
    }
  }

  openDetails(studyId: string): void {
    this.router.navigate(['studies/' + studyId + '/view']);
  }

  deleteStudy(): void {
    this.studiesService.getStudy(this.selectedStudy.id).then((study) => {
      const updateStudy = this.studiesService.generateGetUpdateInput(study);

      this.confirmationService.confirm({
        message:
          'Se eliminará el estudio seleccionado </br></br>' +
          '<strong> Identificador: </strong> ' +
          updateStudy.identificador +
          '</br>' +
          '<strong> Identificador de base internacional: </strong> ' +
          updateStudy.identificadorNCT +
          '</br>',
        accept: () => {
          this.sisec.showSpinner('Eliminando ...');
          updateStudy.estado = StudyState.ELIMINADO;
          this.studiesService
            .updateStudy(updateStudy)
            .then((response) => {
              logger.debug('updateStudy response', response);
              return this.messageService.add({
                severity: 'success',
                summary: 'Eliminado exitosamente',
                detail: `El estudio fue eliminado con éxito.`,
              });
            })
            .catch((error) => {
              logger.error('updateIteracionINVIMA error', error);
            })
            .finally(() => {
              this.sisec.hideSpinner();
              this.loadStudies();
            });
        },
      });
    });
  }

  viewHistory(id): void {
    logger.debug(this.selectedStudy);
    this.dialogService.open(ViewHistoryComponent, {
      header: `Historial de cambios del estudio:  ${this.selectedStudy.identificador}`,
      width: '90%',
      data: {
        idRegistro: id,
        entidad: 'Study',
      },
    });
  }
}
