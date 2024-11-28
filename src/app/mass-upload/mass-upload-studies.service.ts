import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
import { ListSponsorsQuery } from 'src/app/services/API.service';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { CroService } from 'src/app/cro/cro.service';
import { ConstantService } from 'src/app/utils/constant.service';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { StudiesService } from 'src/app/studies/studies.service';
import { Logger } from 'aws-amplify';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CIE10Service } from 'src/app/services/CIE10.service';
import { MassUploadService } from './mass-upload.service';
const logger = new Logger('mass-upload-studies');

@Injectable({
  providedIn: 'root',
})
export class MassUploadStudiesService {
  sponsors = [];
  studies = [];
  croS = [];
  estudiosAtributos = [
    'identificador',
    'sponsorID',
    'identificadorDeBaseInternacional',
    'linkClinical',
    'titulo',
    'areasTerapeuticas',
    'tipoPoblacion',
    'CIE10',
    'saludPublica',
    'enfermedadHuerfana',
    'tipoEstudio',
    'fase',
    'fechaAprobacionCasaMatriz',
    'fechaFactibilidadColombia',
    'enColombia',
    'motivoNoSeleccion',
    'fechaSeleccionColombia',
    'fechaRecepcionFilialColombia',
    'fechaVersionEspaniol',
    'fechaPropuestaCierreReclutamiento',
    'alcanceEstudio',
    'fechaDeLicenciaMedicamentos',
    'fechaPrimeraImportacionMedicamentos',
    'fechaDeImportacionEnBodegaMedicamentos',
    'fechaDeLicenciaKit',
    'fechaPrimeraImportacionKit',
    'fechaDeImportacionEnBodegaKit',
    'codigosATC',
    'tieneCRO',
    'studyCroId',
    'numeroPaisesParticipantes',
    'totalSujetosNivelGlobal',
    'fechaLiberacionProtocolo',
    'fechaPrimerPacienteGlobal',
    'fechaCierreReclutamientoGlobal',
    'numeroSujetosPlaneadosColombia',
    'fechaRecepcionPaqueteInicialColombia',
    'fechaPrimerPacienteReclutadoColombia',
    'fechaCierreReclutamientoColombia',
  ];

  sizePlantilla = [
    { wch: 15 },
    { wch: 20 },
    { wch: 20 },
    { wch: 20 },
    { wch: 35 },
    { wch: 20 },
    { wch: 15 },
    { wch: 30 },
    { wch: 15 },
    { wch: 20 },
    { wch: 15 },
    { wch: 15 },
    { wch: 25 },
    { wch: 30 },
    { wch: 15 },
    { wch: 25 },
    { wch: 25 },
    { wch: 25 },
    { wch: 30 },
    { wch: 30 },
    { wch: 15 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 30 },
    { wch: 30 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
    { wch: 35 },
  ];

  @ViewChild('inputFile') fileInput: ElementRef;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messages: MessageService,
    private sponsorsService: SponsorsService,
    private croService: CroService,
    private constantService: ConstantService,
    private commonFunctionsService: CommonFunctionsService,
    private studiesService: StudiesService,
    private sisecService: SisecService,
    private authService: AuthService,
    private router: Router,
    private cIE10Service: CIE10Service,
    private massUploadService: MassUploadService
  ) { }
  async loadDataForStudies(): Promise<any> {
    const data = {
      cols: [],
      wscols: [],
      cols2: [],
      wscols2: [],
      moduleName: 'Estudios',
      currentElements: [],
    };
    if (this.authService.isSupervisor()) {
      const idSponsor = this.authService.getUserSponsorId();
      await this.sponsorsService
        .getSponsor(idSponsor)
        .then((response) => {
          logger.debug('getSponsor response', response);
          this.sponsors = [response];
        })
        .catch((error) => {
          logger.error('getSponsor error', error);
        });
      await this.croService
        .listCrO()
        .then((response2) => {
          logger.debug('listCrO response', response2);
          this.croS = response2.items;
        })
        .catch((error2) => {
          logger.error('listCrO error', error2);
        });

      await this.studiesService
        .listStudies()
        .then((response3) => {
          logger.debug('listStudies response', response3);
          this.studies = response3.items;
          this.constructorTemplate().then((response4) => {
            this.sisecService.hideSpinner();
            data.cols = response4.plantilla.cols;
            data.wscols = response4.plantilla.sizeCols;
            data.cols2 = response4.colecciones.cols;
            data.wscols2 = response4.colecciones.sizeCols;
            data.currentElements = this.studies;
          });
        })
        .catch((error3) => {
          logger.error('listStudies error', error3);
        });
    } else {
      await this.sponsorsService
        .listSponsors()
        .then((response: ListSponsorsQuery) => {
          logger.debug('listSponsors response', response);
          this.sponsors = response.items;
        })
        .catch((error) => {
          logger.error('listSponsors error', error);
        });

      await this.croService
        .listCrO()
        .then((response2) => {
          logger.debug('listCrO response', response2);
          this.croS = response2.items;
        })
        .catch((error2) => {
          logger.error('listCrO error', error2);
          this.sisecService.hideSpinner();
        });

      await this.studiesService
        .listStudies()
        .then((response3) => {
          logger.debug('listStudies response', response3);
          this.studies = response3.items;
          this.constructorTemplate().then((response4) => {
            this.sisecService.hideSpinner();
            data.cols = response4.plantilla.cols;
            data.wscols = response4.plantilla.sizeCols;
            data.cols2 = response4.colecciones.cols;
            data.wscols2 = response4.colecciones.sizeCols;
            data.currentElements = this.studies;
          });
        })
        .catch((error3) => {
          logger.error('listStudies error', error3);
        });
    }
    return data;
  }
  async constructorTemplate(): Promise<any> {
    const plantilla = [];
    const estructura: any = {};
    if (this.authService.isSupervisor() || this.authService.isDigitizer()) {
      this.estudiosAtributos.splice(1, 1);
      this.sizePlantilla.splice(1, 1);
    }
    for (let i = 0; i < this.estudiosAtributos.length; i++) {
      estructura[`col${i}`] = this.estudiosAtributos[i];
    }
    plantilla.push(estructura);
    const colecciones = [];
    colecciones.push(['Catalogos', 'Opciones']);
    colecciones.push([
      'Campos de fecha',
      'Las celdas con fechas deben tener el formato tipo fecha. Es decir deben ser fechas válidas en el excel.',
    ]);
    colecciones.push(['saludPublica', 'Si o No']);
    colecciones.push(['enfermedadHuerfana', 'Si o No']);
    colecciones.push(['enColombia', 'Si o No']);
    colecciones.push(['tieneCRO', 'Si o No']);
    colecciones.push(['Ejemplo codigo ATC', 'A01AD05']);
    if (this.sponsors.length === 1) {
    } else if (this.sponsors.length > 1) {
      for (const p of this.sponsors) {
        colecciones.push(['sponsorID', p.nombre]);
      }
    }
    const faseEstudio = this.constantService.FASE_ESTUDIO;
    for (const f of faseEstudio) {
      colecciones.push(['fase', f.value]);
    }
    const tipoEstudio = this.constantService.TIPO_ESTUDIO;
    for (const t of tipoEstudio) {
      colecciones.push(['tipoEstudio', t.label]);
    }
    const tipoPoblacion = this.constantService.TIPO_POBLACION;
    for (const t of tipoPoblacion) {
      colecciones.push(['tipoPoblacion', t.label]);
    }
    const areasTerapeuticas = this.constantService.AREAS_TERAPEUTICAS;
    for (const a of areasTerapeuticas) {
      colecciones.push(['areasTerapeuticas', a.label]);
    }
    const alcanceEstudio = this.constantService.ALCANCE_ESTUDIO;
    for (const a of alcanceEstudio) {
      colecciones.push(['alcanceEstudio', a.label]);
    }
    for (const c of this.croS) {
      colecciones.push(['studyCroId', c.nombre]);
    }
    const sizeColecciones = [{ wch: 20 }, { wch: 40 }, { wch: 25 }];

    return {
      plantilla: {
        cols: plantilla,
        sizeCols: this.sizePlantilla,
      },
      colecciones: {
        cols: colecciones,
        sizeCols: sizeColecciones,
      },
    };
  }
  areValidCodigosATC(codigos): boolean {
    let isValid = true;
    if (codigos) {
      const codigosATC = codigos
        .toString()
        .split(',')
        .map((codATC) => codATC.trim().replace(/\s\s+/g, ' '));
      codigos = codigosATC;
      for (const codigoATC of codigosATC) {
        const firstLetter = codigoATC.substr(0, 1);
        const fristTwoNumbers = codigoATC.substr(1, 2);
        const secondTwoLetters = codigoATC.substr(3, 2);
        const secondTwoNumbers = codigoATC.substr(5, 2);

        if (
          !(
            this.commonFunctionsService.onlyLetters(firstLetter) &&
            this.commonFunctionsService.onlyLetters(secondTwoLetters) &&
            this.commonFunctionsService.onlyNumbers(fristTwoNumbers) &&
            this.commonFunctionsService.onlyNumbers(secondTwoNumbers)
          )
        ) {
          isValid = false;
          break;
        }
      }
    }
    return isValid;
  }
  async validateMassUpload(studies: any[]): Promise<any> {
    const studiesWithError: any = [];
    const userSponsor = this.sponsors.find(
      (x) => x.id === this.authService.getUserSponsorId()
    );
    for (const study of studies) {
      study.validatedError = true;
      study.errorDecription = {};
      study.identificadorNCT = study.identificadorDeBaseInternacional;
      const exist = this.studies.findIndex(
        (x) =>
          x.titulo === study.titulo || x.identificador === study.identificador
      );
      if (exist !== -1) {
        study.action = 'Actualizar';
        study.id = this.studies[exist].id;
        study.expectedVersion = this.studies[exist].version;
      } else {
        study.action = 'Crear';
      }
      if (this.authService.isSupervisor() || this.authService.isDigitizer()) {
        study.sponsorID = userSponsor.nombre;
      } else {
        if (study.sponsorID) {
          const s = this.sponsors.findIndex(
            (x) => x.nombre === study.sponsorID
          );
          if (s === -1) {
            study.validatedError = false;
            study.errorDecription.sponsor = ['El patrocinador no existe'];
          }
        }
      }
      if (study.studyCroId) {
        const s = this.croS.findIndex((x) => x.nombre === study.studyCroId);
        if (s === -1) {
          study.validatedError = false;
          study.errorDecription.studyCroId = [
            'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
          ];
        }
      }
      if (!study.identificador) {
        study.validatedError = false;
        study.errorDecription.identificador = ['Este campo es obligatorio'];
      }
      if (!study.sponsorID) {
        study.validatedError = false;
        if (study.errorDecription.hasOwnProperty('sponsor')) {
          study.errorDecription.sponsor.push('Este campo es obligatorio');
        } else {
          study.errorDecription.sponsor = ['Este campo es obligatorio'];
        }
      }
      if (!study.identificadorNCT) {
        study.validatedError = false;
        study.errorDecription.identificadorNCT = ['Este campo es obligatorio'];
      }
      if (!study.titulo) {
        study.validatedError = false;
        study.errorDecription.titulo = ['Este campo es obligatorio'];
      }
      if (!study.areasTerapeuticas) {
        study.validatedError = false;
        study.errorDecription.areasTerapeuticas = ['Este campo es obligatorio'];
      }
      if (!study.tipoPoblacion) {
        study.validatedError = false;
        study.errorDecription.tipoPoblacion = ['Este campo es obligatorio'];
      } else {
        const tipoPoblacionValido =
          this.constantService.TIPO_POBLACION.findIndex(
            (x) => x.label === study.tipoPoblacion
          );
        if (tipoPoblacionValido === -1) {
          study.validatedError = false;
          if (study.errorDecription.hasOwnProperty('tipoPoblacion')) {
            study.errorDecription.tipoPoblacion.push(
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.'
            );
          } else {
            study.errorDecription.tipoPoblacion = [
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
            ];
          }
        }
      }
      if (!study.CIE10) {
        study.validatedError = false;
        study.errorDecription.CIE10 = ['Este campo es obligatorio'];
      }
      if (!study.tipoEstudio) {
        study.validatedError = false;
        study.errorDecription.tipoEstudio = ['Este campo es obligatorio'];
      } else {
        const tipoEstudioValido = this.constantService.TIPO_ESTUDIO.findIndex(
          (x) => x.label === study.tipoEstudio
        );
        if (tipoEstudioValido === -1) {
          study.validatedError = false;
          if (study.errorDecription.hasOwnProperty('tipoEstudio')) {
            study.errorDecription.tipoEstudio.push(
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.'
            );
          } else {
            study.errorDecription.tipoEstudio = [
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
            ];
          }
        }
      }
      if (!study.fase) {
        study.validatedError = false;
        study.errorDecription.fase = ['Este campo es obligatorio'];
      } else {
        const faseValida = this.constantService.FASE_ESTUDIO.findIndex(
          (x) => x.value === study.fase
        );
        if (faseValida === -1) {
          study.validatedError = false;
          if (study.errorDecription.hasOwnProperty('fase')) {
            study.errorDecription.fase.push(
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.'
            );
          } else {
            study.errorDecription.fase = [
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
            ];
          }
        }
      }
      if (!study.fechaAprobacionCasaMatriz) {
        study.validatedError = false;
        study.errorDecription.fechaAprobacionCasaMatriz = [
          'Este campo es obligatorio',
        ];
      }
      if (!study.alcanceEstudio) {
        study.validatedError = false;
        study.errorDecription.alcanceEstudio = ['Este campo es obligatorio'];
      } else {
        const alcanceEstudioValido =
          this.constantService.ALCANCE_ESTUDIO.findIndex(
            (x) => x.label === study.alcanceEstudio
          );
        if (alcanceEstudioValido === -1) {
          study.validatedError = false;
          if (study.errorDecription.hasOwnProperty('alcanceEstudio')) {
            study.errorDecription.alcanceEstudio.push(
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.'
            );
          } else {
            study.errorDecription.alcanceEstudio = [
              'Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.',
            ];
          }
        }
      }
      if (!study.tieneCRO) {
        study.validatedError = false;
        study.errorDecription.tieneCRO = ['Este campo es obligatorio'];
      }
      if (study.saludPublica !== 'Si' && study.saludPublica !== 'No') {
        study.validatedError = false;
        study.errorDecription.saludPublica = [
          'El formato de este campo debe ser Si o No',
        ];
      }
      if (
        study.enfermedadHuerfana !== 'Si' &&
        study.enfermedadHuerfana !== 'No'
      ) {
        study.validatedError = false;
        study.errorDecription.enfermedadHuerfana = [
          'El formato de este campo debe ser Si o No',
        ];
      }
      if (study.enColombia !== 'Si' && study.enColombia !== 'No') {
        study.validatedError = false;
        study.errorDecription.enColombia = [
          'El formato de este campo debe ser Si o No',
        ];
      }
      if (study.tieneCRO !== 'Si' && study.tieneCRO !== 'No') {
        study.validatedError = false;
        if (study.errorDecription.hasOwnProperty('tieneCRO')) {
          study.errorDecription.tieneCRO.push(
            'El formato de este campo debe ser Si o No'
          );
        } else {
          study.errorDecription.tieneCRO = [
            'El formato de este campo debe ser Si o No',
          ];
        }
      }
      if (!this.areValidCodigosATC(study.codigosATC)) {
        study.validatedError = false;
        study.errorDecription.codigosATC = [
          'Dato inválido, por favor verifique el formato admitido.',
        ];
      }
      if (
        study.totalSujetosNivelGlobal < study.numeroSujetosPlaneadosColombia
      ) {
        study.validatedError = false;
        study.errorDecription.totalSujetosNivelGlobal = [
          'El numero total de sujetos a nivel global no puede ser menor al numero total de sujetos planeados en Colombia',
        ];
        study.errorDecription.numeroSujetosPlaneadosColombia = [
          'El numero total de sujetos planeados en Colombia no puede ser mayor al numero total de sujetos a nivel global',
        ];
      }
      if (typeof study.areasTerapeuticas === 'number') {
        study.areasTerapeuticas = study.areasTerapeuticas.toString();
      }
      if (study.areasTerapeuticas) {
        study.areasTerapeuticas = study.areasTerapeuticas.split(',');
        let areaTerapeuticaIncorrecta = false;
        for (const areaTerapeutica of study.areasTerapeuticas) {
          const index = this.constantService.AREAS_TERAPEUTICAS.findIndex(
            (x) => x.label === areaTerapeutica
          );
          if (index === -1) {
            areaTerapeuticaIncorrecta = true;
            break;
          }
        }
        if (areaTerapeuticaIncorrecta) {
          study.validatedError = false;
          study.errorDecription.areasTerapeuticas = [
            `Dato inválido, por favor verifique los datos permitidos en la pestaña de colecciones, tenga en cuenta que debe ser exactamente igual para asegurar la consistencia de la información. Tenga en cuenta la ortografía, espacios y caracteres especiales.`,
          ];
        }
      }
      if (
        study.fechaLiberacionProtocolo &&
        study.fechaRecepcionPaqueteInicialColombia
      ) {
        if (
          study.fechaLiberacionProtocolo.getTime() >
          study.fechaRecepcionPaqueteInicialColombia.getTime()
        ) {
          study.validatedError = false;
          study.errorDecription.fechaLiberacionProtocolo = [
            'La fecha de liberación de protocolo debe ser menor o igual a la fecha de recepción en Colombia',
          ];
          study.errorDecription.fechaRecepcionPaqueteInicialColombia = [
            'La fecha de recepción en Colombia debe ser mayor o igual a la fecha de liberación de protocolo',
          ];
        }
      }
      if (
        study.fechaPrimerPacienteGlobal &&
        study.fechaPrimerPacienteReclutadoColombia
      ) {
        if (
          study.fechaPrimerPacienteReclutadoColombia.getTime() <
          study.fechaPrimerPacienteGlobal.getTime()
        ) {
          study.validatedError = false;
          study.errorDecription.fechaPrimerPacienteReclutadoColombia = [
            'La fecha primer paciente reclutado Colombia debe ser mayor o igual a la fecha primer paciente global',
          ];
          study.errorDecription.fechaPrimerPacienteGlobal = [
            'La fecha primer paciente global debe ser menor o igual a la fecha primer paciente reclutado Colombia',
          ];
        }
      }
      const fechaCenterEnmienda = [
        'fechaAprobacionCasaMatriz',
        'fechaFactibilidadColombia',
        'fechaSeleccionColombia',
        'fechaRecepcionFilialColombia',
        'fechaVersionEspaniol',
        'fechaPropuestaCierreReclutamiento',
        'fechaDeLicenciaMedicamentos',
        'fechaPrimeraImportacionMedicamentos',
        'fechaDeImportacionEnBodegaMedicamentos',
        'fechaDeLicenciaKit',
        'fechaPrimeraImportacionKit',
        'fechaDeImportacionEnBodegaKit',
        'fechaLiberacionProtocolo',
        'fechaPrimerPacienteGlobal',
        'fechaCierreReclutamientoGlobal',
        'fechaRecepcionPaqueteInicialColombia',
        'fechaPrimerPacienteReclutadoColombia',
        'fechaCierreReclutamientoColombia',
      ];
      for (const atributo of fechaCenterEnmienda) {
        if (study[atributo]) {
          if (!this.massUploadService.isValidDate(study[atributo])) {
            const x = atributo + 'IsValid';
            study.errorDecription[x] = [false];
            study.validatedError = false;
            study.errorDecription[atributo] = [
              'El formato de la fecha es inválido',
            ];
          } else {
            const x = atributo + 'IsValid';
            study.errorDecription[x] = [true];
          }
        }
      }
      const currentDate = new Date();
      if (study.fechaAprobacionCasaMatriz) {
        if (
          this.massUploadService.isValidDate(study.fechaAprobacionCasaMatriz)
        ) {
          study.errorDecription.fechaAprobacionCasaMatrizIsValid = [true];
          if (
            study.fechaAprobacionCasaMatriz.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            if (
              study.errorDecription.hasOwnProperty('fechaAprobacionCasaMatriz')
            ) {
              study.errorDecription.fechaAprobacionCasaMatriz.push(
                'La fecha de la aprobacion de la casa matriz es mayor a la fecha actual'
              );
            } else {
              study.errorDecription.fechaAprobacionCasaMatriz = [
                'La fecha de la aprobacion de la casa matriz es mayor a la fecha actual',
              ];
            }
          }
        }
      }
      if (study.fechaFactibilidadColombia) {
        if (
          this.massUploadService.isValidDate(study.fechaFactibilidadColombia)
        ) {
          study.errorDecription.fechaFactibilidadColombiaIsValid = [true];
          if (
            study.fechaFactibilidadColombia.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaFactibilidadColombia = [
              'La fecha de factibilidad en Colombia no puede estar en el futuro',
            ];
          }
        }
      }
      if (study.fechaSeleccionColombia) {
        if (this.massUploadService.isValidDate(study.fechaSeleccionColombia)) {
          study.errorDecription.fechaSeleccionColombiaIsValid = [true];
          if (study.fechaSeleccionColombia.getTime() > currentDate.getTime()) {
            study.validatedError = [false];
            study.errorDecription.fechaSeleccionColombia =
              'La fecha de seleccion en Colombia es mayor a la fecha actual';
          }
        }
      }
      if (study.fechaRecepcionFilialColombia) {
        if (
          this.massUploadService.isValidDate(study.fechaRecepcionFilialColombia)
        ) {
          study.errorDecription.fechaRecepcionFilialColombiaIsValid = [true];
          if (
            study.fechaRecepcionFilialColombia.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaRecepcionFilialColombia = [
              'La fecha de recepción filial Colombia es mayor a la fecha actual',
            ];
          }
        }
      }
      if (study.fechaVersionEspaniol) {
        if (this.massUploadService.isValidDate(study.fechaVersionEspaniol)) {
          study.errorDecription.fechaVersionEspaniolIsValid = [true];
          if (study.fechaVersionEspaniol.getTime() > currentDate.getTime()) {
            study.validatedError = [false];
            study.errorDecription.fechaVersionEspaniol = [
              'La fecha de versión español es mayor a la fecha actual',
            ];
          }
        }
      }
      if (study.fechaPropuestaCierreReclutamiento) {
        if (
          this.massUploadService.isValidDate(
            study.fechaPropuestaCierreReclutamiento
          )
        ) {
          study.errorDecription.fechaPropuestaCierreReclutamientoIsValid = [
            true,
          ];
          if (
            study.fechaAprobacionCasaMatriz >
            study.fechaPropuestaCierreReclutamiento
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPropuestaCierreReclutamiento = [
              'La fecha de propuesta de cierre de reclutamiento debe ser mayor a la fecha aprobación protocolo casa matriz',
            ];
          } else if (
            study.fechaFactibilidadColombia >
            study.fechaPropuestaCierreReclutamiento
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPropuestaCierreReclutamiento = [
              'La fecha de propuesta de cierre de reclutamiento debe ser mayor a la fecha de factibilidad en Colombia',
            ];
          } else if (
            study.fechaSeleccionColombia >
            study.fechaPropuestaCierreReclutamiento
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPropuestaCierreReclutamiento = [
              'La fecha de propuesta de cierre de reclutamiento debe ser mayor a la fecha de selección de Colombia',
            ];
          } else if (
            study.fechaRecepcionFilialColombia >
            study.fechaPropuestaCierreReclutamiento
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPropuestaCierreReclutamiento = [
              'La fecha de propuesta de cierre de reclutamiento debe ser mayor a la fecha de recepción protocolo filial Colombia',
            ];
          } else if (
            study.fechaVersionEspaniol > study.fechaPropuestaCierreReclutamiento
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPropuestaCierreReclutamiento = [
              'La fecha de propuesta de cierre de reclutamiento debe ser mayor a la fecha de versión en español',
            ];
          }
        }
      }
      if (study.fechaLiberacionProtocolo) {
        if (
          this.massUploadService.isValidDate(study.fechaLiberacionProtocolo)
        ) {
          study.errorDecription.fechaLiberacionProtocoloIsValid = [true];
          if (
            study.fechaLiberacionProtocolo.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            if (
              study.errorDecription.hasOwnProperty('fechaLiberacionProtocolo')
            ) {
              study.errorDecription.fechaLiberacionProtocolo.push(
                'La fecha de liberación de protocolo es mayor a la fecha actual'
              );
            } else {
              study.errorDecription.fechaLiberacionProtocolo = [
                'La fecha de liberación de protocolo es mayor a la fecha actual',
              ];
            }
          }
        }
      }
      if (study.fechaPrimerPacienteGlobal) {
        if (
          this.massUploadService.isValidDate(study.fechaPrimerPacienteGlobal)
        ) {
          study.errorDecription.fechaPrimerPacienteGlobalIsValid = [true];
          if (
            study.fechaPrimerPacienteGlobal.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            if (
              study.errorDecription.hasOwnProperty('fechaPrimerPacienteGlobal')
            ) {
              study.errorDecription.fechaPrimerPacienteGlobal.push(
                'La fecha de primer paciente Colombia es mayor a la fecha actual'
              );
            } else {
              study.errorDecription.fechaPrimerPacienteGlobal = [
                'La fecha de primer paciente Colombia es mayor a la fecha actual',
              ];
            }
          }
        }
      }
      if (study.fechaCierreReclutamientoGlobal) {
        if (
          this.massUploadService.isValidDate(
            study.fechaCierreReclutamientoGlobal
          )
        ) {
          study.errorDecription.fechaCierreReclutamientoGlobalIsValid = [true];
        }
      }
      if (study.fechaRecepcionPaqueteInicialColombia) {
        if (
          this.massUploadService.isValidDate(
            study.fechaRecepcionPaqueteInicialColombia
          )
        ) {
          study.errorDecription.fechaRecepcionPaqueteInicialColombiaIsValid = [
            true,
          ];
          if (
            study.fechaRecepcionPaqueteInicialColombia.getTime() >
            currentDate.getTime()
          ) {
            study.validatedError = [false];
            if (
              study.errorDecription.hasOwnProperty(
                'fechaRecepcionPaqueteInicialColombia'
              )
            ) {
              study.errorDecription.fechaRecepcionPaqueteInicialColombia.push(
                'La fecha de recepción del paquete inicial en Colombia es mayor a la fecha actual'
              );
            } else {
              study.errorDecription.fechaRecepcionPaqueteInicialColombia = [
                'La fecha de recepción del paquete inicial en Colombia es mayor a la fecha actual',
              ];
            }
          }
        }
      }
      if (study.fechaPrimerPacienteReclutadoColombia) {
        if (
          this.massUploadService.isValidDate(
            study.fechaPrimerPacienteReclutadoColombia
          )
        ) {
          study.errorDecription.fechaPrimerPacienteReclutadoColombiaIsValid = [
            true,
          ];
          if (
            study.fechaPrimerPacienteReclutadoColombia.getTime() >
            currentDate.getTime()
          ) {
            study.validatedError = [false];
            if (
              study.errorDecription.hasOwnProperty(
                'fechaPrimerPacienteReclutadoColombia'
              )
            ) {
              study.errorDecription.fechaPrimerPacienteReclutadoColombia.push(
                'La fecha de primer paciente reclutamiento Colombia es mayor a la fecha actual'
              );
            } else {
              study.errorDecription.fechaPrimerPacienteReclutadoColombia = [
                'La fecha de primer paciente reclutamiento Colombia es mayor a la fecha actual',
              ];
            }
          }
        }
      }
      if (study.fechaCierreReclutamientoColombia) {
        if (
          this.massUploadService.isValidDate(
            study.fechaCierreReclutamientoColombia
          )
        ) {
          study.errorDecription.fechaCierreReclutamientoColombiaIsValid = [
            true,
          ];
        }
      }
      //NUEVAS VALIDACIONES
      if (study.fechaDeLicenciaMedicamentos) {
        if (
          this.massUploadService.isValidDate(study.fechaDeLicenciaMedicamentos)
        ) {
          study.errorDecription.fechaDeLicenciaMedicamentosIsValid = [true];
          if (
            study.fechaDeLicenciaMedicamentos.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaDeLicenciaMedicamentos = [
              'La fecha de la licencia de los medicamentos no puede ser mayor a la fecha actual',
            ];
          }
        }
      }
      study.errorDecription.fechaPrimeraImportacionMedicamentosIsValid = [true];
      if (
        study.fechaPrimeraImportacionMedicamentos &&
        study.fechaDeLicenciaMedicamentos
      ) {
        if (
          this.massUploadService.isValidDate(
            study.fechaPrimeraImportacionMedicamentos
          )
        ) {
          if (
            study.fechaPrimeraImportacionMedicamentos.getTime() >
            currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPrimeraImportacionMedicamentos = [
              'La fecha de la primera importacion de los medicamentos no puede ser mayor a la fecha actual',
            ];
          }
          if (
            study.fechaPrimeraImportacionMedicamentos.getTime() <
            study.fechaDeLicenciaMedicamentos.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPrimeraImportacionMedicamentos = [
              'La fecha de la primera importacion de los medicamentos debe ser mayor a la fecha de licencia de medicamentos',
            ];
          }
        }
      }
      study.errorDecription.fechaDeImportacionEnBodegaMedicamentosIsValid = [
        true,
      ];
      if (
        study.fechaDeImportacionEnBodegaMedicamentos &&
        study.fechaPrimeraImportacionMedicamentos
      ) {
        if (
          this.massUploadService.isValidDate(
            study.fechaDeImportacionEnBodegaMedicamentos
          )
        ) {
          if (
            study.fechaDeImportacionEnBodegaMedicamentos.getTime() >
            currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaDeImportacionEnBodegaMedicamentos = [
              'La fecha de la primera importacion en bodega de los medicamentos no puede ser mayor a la fecha actual',
            ];
          }
          if (
            study.fechaDeImportacionEnBodegaMedicamentos.getTime() <
            study.fechaPrimeraImportacionMedicamentos.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaDeImportacionEnBodegaMedicamentos = [
              'La fecha de la primera importacion en bodega de los medicamentos debe ser mayor a la fecha de la primera importacion de medicamentos',
            ];
          }
        }
      }
      if (study.fechaDeLicenciaKit) {
        if (this.massUploadService.isValidDate(study.fechaDeLicenciaKit)) {
          study.errorDecription.fechaDeLicenciaKitIsValid = [true];
          if (study.fechaDeLicenciaKit.getTime() > currentDate.getTime()) {
            study.validatedError = [false];
            study.errorDecription.fechaDeLicenciaKit = [
              'La fecha de la licencia de los kits / insumos no puede ser mayor a la fecha actual',
            ];
          }
        }
      }
      study.errorDecription.fechaPrimeraImportacionKitIsValid = [true];
      if (study.fechaPrimeraImportacionKit && study.fechaDeLicenciaKit) {
        if (
          this.massUploadService.isValidDate(study.fechaPrimeraImportacionKit)
        ) {
          if (
            study.fechaPrimeraImportacionKit.getTime() > currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPrimeraImportacionKit = [
              'La fecha de la primera importacion de los kits / insumos no puede ser mayor a la fecha actual',
            ];
          }
          if (
            study.fechaPrimeraImportacionKit.getTime() <
            study.fechaDeLicenciaKit.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPrimeraImportacionKit = [
              'La fecha de la primera importacion de los kits / insumos debe ser mayor a la fecha de licencia de kits / insumos',
            ];
          }
        }
      }
      study.errorDecription.fechaDeImportacionEnBodegaKitIsValid = [true];
      if (
        study.fechaDeImportacionEnBodegaKit &&
        study.fechaPrimeraImportacionKit
      ) {
        if (
          this.massUploadService.isValidDate(
            study.fechaDeImportacionEnBodegaKit
          )
        ) {
          if (
            study.fechaDeImportacionEnBodegaKit.getTime() >
            currentDate.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaPrimeraImportacionKit = [
              'La fecha de la primera importacion en bodega de los kits / insumos no puede ser mayor a la fecha actual',
            ];
          }
          if (
            study.fechaDeImportacionEnBodegaKit.getTime() <
            study.fechaPrimeraImportacionKit.getTime()
          ) {
            study.validatedError = [false];
            study.errorDecription.fechaDeImportacionEnBodegaKit = [
              'La fecha de la primera importacion en bodega de los kits / insumos debe ser mayor a la fecha de la primera importacion de kits / insumos',
            ];
          }
        }
      }
      if (study.CIE10) {
        const cie10List = this.cIE10Service.listCIE10(study.CIE10);
        if (cie10List && cie10List.length > 0) {
          study.CIE10 = cie10List[0];
        } else {
          study.validatedError = false;
          study.errorDecription.CIE10 = ['El código CIE10 es inválido'];
        }
      }
      studiesWithError.push(study);
    }
    return { dataPrivew: studiesWithError, itemsTable: this.estudiosAtributos };
  }
  saveAndUpdateStudies(studies): void {
    const allStrudiesPromise = [];
    let totalCreated = 0;
    let totalUpdated = 0;
    this.sisecService.showSpinner('Guardando estudios...');
    for (const s of studies) {
      if (s.sponsorID) {
        if (this.authService.isSupervisor() || this.authService.isDigitizer()) {
          const userSponsor = this.sponsors.find(
            (x) => x.id === this.authService.getUserSponsorId()
          );
          s.sponsorID = userSponsor.id;
        } else {
          const patrocinador = this.sponsors.find(
            (x) => x.nombre === s.sponsorID
          );
          if (patrocinador) {
            s.sponsorID = patrocinador.id;
          } else {
            this.sisecService.hideSpinner();
            return this.messages.add({
              severity: 'warn',
              detail: `Error al procesar el estudio: ${s.titulo || 'no tiene nombre'
                }, verifique que el patrocinador sea correcto`,
            });
          }
        }
      }
      if (s.studyCroId) {
        const cro = this.croS.find((x) => x.nombre === s.studyCroId);
        if (cro) {
          s.studyCroId = cro.id;
        } else {
          this.sisecService.hideSpinner();
          return this.messages.add({
            severity: 'warn',
            detail: `Error al procesar el estudio: ${s.titulo || 'no tiene nombre'
              }, verifique que la CRO sea correcto`,
          });
        }
      }
      const newStudy = { ...s };
      delete newStudy.validatedError;
      delete newStudy.errorDecription;
      delete newStudy.identificadorDeBaseInternacional;
      if (newStudy.action === 'Crear') {
        delete newStudy.action;
        totalCreated++;
        allStrudiesPromise.push(
          this.studiesService.createStudy(newStudy).then(async (response2) => {
            logger.debug('createStudy response', response2);
          })
        );
      } else {
        delete newStudy.action;
        totalUpdated++;
        allStrudiesPromise.push(
          this.studiesService.updateStudy(newStudy).then(async (response2) => {
            logger.debug('updateStudy response', response2);
          })
        );
      }
    }
    Promise.all(allStrudiesPromise)
      .then(() => {
        if (totalCreated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa',
            detail: 'Estudios creados: ' + totalCreated,
          });
        }
        if (totalUpdated > 0) {
          this.messages.add({
            severity: 'success',
            summary: 'Carga exitosa ',
            detail: 'Estudios actualizados: ' + totalUpdated,
          });
        }
        this.router.navigate(['/studies']);
      })
      .catch((error) => {
        logger.error('Massive contract load error', error);
        if (this.authService.isSupervisor() || this.authService.isDigitizer()) {
          const s = this.sponsors.find(
            (x) => x.id === this.authService.getUserSponsorId()
          );
          for (const study of studies) {
            study.sponsorID = s.nombre;
          }
        } else {
          for (const study of studies) {
            const s = this.sponsors.find((x) => x.id === study.sponsorID);
            study.sponsorID = s.nombre;
          }
        }
      })
      .finally(() => this.sisecService.hideSpinner());
  }
}
