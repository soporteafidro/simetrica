import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { MedicalConsultationsComponent } from './medical-consultations/medical-consultations.component';
import { PrimengModule } from '../utils/primeng.module';
import { StudyListComponent } from './study-list/study-list.component';



@NgModule({
  declarations: [MedicalConsultationsComponent, StudyListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ]
})
export class ConsultModule { }
