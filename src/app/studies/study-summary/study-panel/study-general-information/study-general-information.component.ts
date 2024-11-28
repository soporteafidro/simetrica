import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { GetStudyQuery } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { StudyIdentificationDataComponent } from 'src/app/studies/study-form/study-identification-data/study-identification-data.component';
import { StudyInternationalNationalDataComponent } from 'src/app/studies/study-form/study-international-national-data/study-international-national-data.component';
import { StudyPropertiesComponent } from 'src/app/studies/study-form/study-properties/study-properties.component';
import { Logger } from 'aws-amplify';
const logger = new Logger('study-general-information');
@Component({
  selector: 'app-study-general-information',
  templateUrl: './study-general-information.component.html',
  styleUrls: ['./study-general-information.component.scss'],
})
export class StudyGeneralInformationComponent implements OnInit, OnChanges {
  areasTerapeuticas: string[];

  constructor(
    private dialogService: DialogService,
    private auth: AuthService
  ) {}

  @Input() study: GetStudyQuery;
  @Output() onUpdate = new EventEmitter<string>();

  isReader = false;
  isMedico = false;

  ngOnInit(): void {
    this.isReader = this.auth.isReader();
    this.isMedico = this.auth.isMedico();
  }

  ngOnChanges(): void {
    this.isReader = this.auth.isReader();
    this.isMedico = this.auth.isMedico();
    this.areasTerapeuticas = this.study.areasTerapeuticas.split(',');
    logger.debug(this.study);
  }

  editarDatosDeIdentificacion(): void {
    this.openEditDialog(
      'Editar datos de identificación',
      StudyIdentificationDataComponent
    );
  }

  editarDatosInternacionalesYNacionales(): void {
    this.openEditDialog(
      'Editar datos internacionales y nacionales',
      StudyInternationalNationalDataComponent
    );
  }

  editarPropiedades(): void {
    this.openEditDialog('Editar propiedades', StudyPropertiesComponent);
  }

  openEditDialog(title: string, component: any): void {
    const ref = this.dialogService.open(component, {
      header: title,
      width: '90%',
      data: {
        editMode: true,
        isModal: true,
        studyId: this.study.id,
      },
      closeOnEscape: false,
      dismissableMask: false,
    });
    ref.onClose.subscribe((result: any) => {
      if (result === 'actualizado') {
        this.onUpdate.emit('update');
      }
    });
  }
}
