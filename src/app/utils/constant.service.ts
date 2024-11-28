import { Injectable } from '@angular/core';
import { CommonFunctionsService } from './common-functions.service';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  constructor(private commonFunctionsService: CommonFunctionsService) {}

  readonly SINO_RESPUESTA: any[] = [
    { name: 'Si', key: 'Si' },
    { name: 'No', key: 'No' },
  ];
  readonly FASE_ESTUDIO: any[] = [
    { label: 'FASE 1', value: 'Fase 1' },
    { label: 'FASE 2', value: 'Fase 2' },
    { label: 'FASE 3', value: 'Fase 3' },
    { label: 'FASE 4', value: 'Fase 4' },
    { label: 'FASE 1/2', value: 'Fase 1/2' },
    { label: 'FASE 3/4', value: 'Fase 3/4' },
  ];
  readonly TIPO_ESTUDIO: any[] = [
    {
      label: 'No Intervencional - Observacional',
      value: 'No Intervencional - Observacional',
    },
    {
      label: 'No Intervencional -  RWD-RWE',
      value: 'No Intervencional -  RWD-RWE',
    },
    { label: 'Intervencional', value: 'Intervencional' },
  ].sort((a, b) => this.commonFunctionsService.compareLabels(a, b));
  readonly TIPO_POBLACION: any[] = [
    { label: 'Adulto', value: 'Adulto' },
    { label: 'Pediatra', value: 'Pediatra' },
    { label: 'Mixta', value: 'Mixta' },
  ].sort((a, b) => this.commonFunctionsService.compareLabels(a, b));
  readonly AREAS_TERAPEUTICAS: any[] = [
    {
      label: 'Anestesiología y Reanimación',
      value: 'Anestesiología y Reanimación',
    },
    { label: 'Cardiología', value: 'Cardiología' },
    { label: 'Cuidado paliativo / Dolor', value: 'Cuidado paliativo / Dolor' },
    { label: 'Dermatología', value: 'Dermatología' },
    {
      label: 'Endocrinología y Metabolismo',
      value: 'Endocrinología y Metabolismo',
    },
    { label: 'Enfermedades raras', value: 'Enfermedades raras' },
    { label: 'Gastroenterología', value: 'Gastroenterología' },
    { label: 'Genética médica', value: 'Genética médica' },
    { label: 'Ginecología', value: 'Ginecología' },
    { label: 'Hematología', value: 'Hematología' },
    { label: 'Infectología', value: 'Infectología' },
    { label: 'Inmunología', value: 'Inmunología' },
    { label: 'Mastología', value: 'Mastología' },
    { label: 'Nefrología', value: 'Nefrología' },
    { label: 'Neurología', value: 'Neurología' },
    { label: 'Oftalmología', value: 'Oftalmología' },
    { label: 'Oncología', value: 'Oncología' },
    { label: 'Otorrinolaringología', value: 'Otorrinolaringología' },
    { label: 'Psiquiatría', value: 'Psiquiatría' },
    { label: 'Respiratorio', value: 'Respiratorio' },
    { label: 'Reumatología', value: 'Reumatología' },
    { label: 'Urología', value: 'Urología' },
    { label: 'Alergología', value: 'Alergología' },
    { label: 'Adolescente', value: 'Adolescente' },
    { label: 'Ortopedia', value: 'Ortopedia' },
    { label: 'Pediatría', value: 'Pediatría' },
    { label: 'Neumología', value: 'Neumología' },
    { label: 'Geriatría', value: 'Geriatría' },
    { label: 'Hepatología', value: 'Hepatología' },
    { label: 'Vacunas', value: 'Vacunas' },
  ].sort((a, b) => this.commonFunctionsService.compareLabels(a, b));
  readonly ALCANCE_ESTUDIO: any[] = [
    {
      label: 'Internacional / Multicéntrico',
      value: 'Internacional / Multicéntrico',
    },
    { label: 'Regional', value: 'Regional' },
    { label: 'Local', value: 'Local' },
    { label: 'Independiente', value: 'Independiente' },
  ].sort((a, b) => this.commonFunctionsService.compareLabels(a, b));
}
