import { Injectable } from '@angular/core';
import { StudiesService } from '../studies/studies.service';
import { CentersService } from '../centers/centers.service';
import {
  GetAddendumQuery,
  GetAddendumStudyCenterQuery,
  GetStudyCenterCommitteeQuery,
  GetStudyQuery,
  IteracionesByStudyQuery,
  IteracionesCEByAddendumQuery,
  IteracionesInvimaByAddendumQuery,
  ListStudyCentersQuery,
  TimeRecordInput,
  UpdateAddendumInput,
  UpdateAddendumStudyCenterInput,
  UpdateStudyCenterCommitteeInput,
  UpdateStudyInput,
} from './API.service';
import { Logger } from 'aws-amplify';
import { AddendumsService } from '../addendums/addendums.service';
import { CommonFunctionsService } from '../utils/common-functions.service';
const logger = new Logger('calculate-dates-service');

@Injectable({
  providedIn: 'root',
})
export class CalculateDatesService {
  constructor(
    private studiesService: StudiesService,
    private centersService: CentersService,
    private addendumsService: AddendumsService
  ) {}

  setDatesToStudyWithINVIMAIteration(studyId: string): Promise<boolean> {
    let tiempoTotalPatrocinador: any;
    let tiempoTotalInvima: any;
    let iteracionAprobada: any;
    let iteracionSometimientoInicial: any;

    return this.studiesService
      .iteracionesInvimaByStudy(studyId)
      .then((response: IteracionesByStudyQuery) => {
        if (response.items) {
          iteracionSometimientoInicial = response.items[0];
          let iteracionesAprobadas = response.items.filter(
            (i) => i.estadoIteracion == 'Aprobado'
          );
          if (iteracionesAprobadas) {
            iteracionAprobada =
              iteracionesAprobadas[iteracionesAprobadas.length - 1];
          } else {
            iteracionAprobada = null;
          }
          tiempoTotalInvima = response.items.reduce(
            (sum, current) => sum + current.tiempoInvima,
            0
          );
          tiempoTotalPatrocinador = response.items.reduce(
            (sum, current) => sum + current.tiempoPatrocinador,
            0
          );
        }

        return this.studiesService
          .getStudy(studyId)
          .then((response: GetStudyQuery) => {
            let study: any = response;
            study.fechaDeSometimientoEstudioInvima =
              iteracionSometimientoInicial
                ? new Date(iteracionSometimientoInicial.fechaDeSometimiento)
                : null;

            if (iteracionAprobada) {
              const fechaRespuesta = new Date(
                iteracionAprobada.fechaRespuestaInvima
              );
              study.diasAprobacionInvimaInvima = tiempoTotalInvima;
              study.diasAprobacionInvimaPatrocinador = tiempoTotalPatrocinador;
              study.mesAprobacionInvima = fechaRespuesta.getMonth();
              study.anhoAprobacionInvima = fechaRespuesta.getFullYear();
              study.fechaAprobacionEstudioInvima = fechaRespuesta;
            } else {
              study.diasAprobacionInvimaInvima = null;
              study.diasAprobacionInvimaPatrocinador = null;
              study.mesAprobacionInvima = null;
              study.anhoAprobacionInvima = null;
              study.fechaAprobacionEstudioInvima = null;
            }
            logger.debug(study);

            let updateStudyInput = this.initializeUpdateStudyInput();
            CommonFunctionsService.copyMatchingKeyValues(
              updateStudyInput,
              study
            );
            updateStudyInput.expectedVersion = study.version;
            return this.studiesService
              .updateStudy(updateStudyInput)
              .then((res) => {
                return Promise.resolve(true);
              });
          });
      });
  }

  setDatesToStudy(studyId: string): Promise<boolean> {
    return this.centersService
      .listStudyCentersByStudy(studyId)
      .then((response: ListStudyCentersQuery) => {
        let studyCenters = response.items;
        let minFechaPrimerPacienteAleatorizado;
        let diasInicioEstudio = null;
        let mesInicioEstudio = null;
        let anhoInicioEstudio = null;

        if (studyCenters) {
          logger.debug(studyCenters);
          minFechaPrimerPacienteAleatorizado = studyCenters[0]
            .fechaPrimerPacienteAleatorizado
            ? new Date(studyCenters[0].fechaPrimerPacienteAleatorizado)
            : null;
          studyCenters.forEach((sc) => {
            if (!minFechaPrimerPacienteAleatorizado) {
              minFechaPrimerPacienteAleatorizado =
                sc.fechaPrimerPacienteAleatorizado
                  ? new Date(sc.fechaPrimerPacienteAleatorizado)
                  : null;
            } else {
              if (
                sc.fechaPrimerPacienteAleatorizado &&
                new Date(sc.fechaPrimerPacienteAleatorizado) <=
                  minFechaPrimerPacienteAleatorizado
              )
                minFechaPrimerPacienteAleatorizado = new Date(
                  sc.fechaPrimerPacienteAleatorizado
                );
            }
          });
        }

        return this.studiesService
          .getStudy(studyId)
          .then((response: GetStudyQuery) => {
            let study: any = response;
            study.fechaPrimerPacienteReclutadoColombia =
              minFechaPrimerPacienteAleatorizado
                ? minFechaPrimerPacienteAleatorizado.toString()
                : null;

            if (
              study.fechaFactibilidadColombia &&
              minFechaPrimerPacienteAleatorizado
            ) {
              diasInicioEstudio =
                (minFechaPrimerPacienteAleatorizado.getTime() -
                  new Date(study.fechaFactibilidadColombia).getTime()) /
                (1000 * 60 * 60 * 24);
              mesInicioEstudio = minFechaPrimerPacienteAleatorizado.getMonth();
              anhoInicioEstudio =
                minFechaPrimerPacienteAleatorizado.getFullYear();
            }

            study.diasInicioEstudio = diasInicioEstudio;
            study.anhoInicioEstudio = anhoInicioEstudio;
            study.mesInicioEstudio = mesInicioEstudio;

            let updateStudyInput = this.initializeUpdateStudyInput();
            CommonFunctionsService.copyMatchingKeyValues(
              updateStudyInput,
              study
            );

            updateStudyInput.expectedVersion = study.version;
            return this.studiesService
              .updateStudy(updateStudyInput)
              .then((res) => {
                return Promise.resolve(true);
              });
          });
      });
  }

  setDatesToStudyCenterCommitteeIterations(
    studyId: string,
    studyCenterCommitteeId: string
  ): Promise<boolean> {
    return this.studiesService
      .listStudyCommitteeIterationsByStudy(studyId)
      .then((response) => {
        let iteracionAprobada: any;
        let tiempoTotalComite: any;
        let tiempoTotalPatrocinador: any;
        let iteracionesComite = response.items.filter(
          (s) =>
            s.studyCenterCommitteeID === studyCenterCommitteeId && !s.addendumID
        );

        if (iteracionesComite) {
          iteracionAprobada = iteracionesComite.find(
            (i) => i.estadoIteracion == 'Aprobado'
          );
          tiempoTotalComite = iteracionesComite.reduce(
            (sum, current) => sum + current.tiempoComite,
            0
          );
          tiempoTotalPatrocinador = iteracionesComite.reduce(
            (sum, current) => sum + current.tiempoPatrocinador,
            0
          );
        }

        return this.studiesService
          .getStudyCenterCommittee(studyCenterCommitteeId)
          .then((response: GetStudyCenterCommitteeQuery) => {
            let studyCenterCommittee: any = response;

            if (iteracionAprobada) {
              const fechaRespuesta = new Date(
                iteracionAprobada.fechaRespuestaCE
              );

              studyCenterCommittee.diasAprobacionCentroCentro =
                tiempoTotalComite;
              studyCenterCommittee.diasAprobacionCentroPatrocinador =
                tiempoTotalPatrocinador;
              studyCenterCommittee.mesAprobacionCentro =
                fechaRespuesta.getMonth();
              studyCenterCommittee.anhoAprobacionCentro =
                fechaRespuesta.getFullYear();
            } else {
              studyCenterCommittee.diasAprobacionCentroCentro = null;
              studyCenterCommittee.diasAprobacionCentroPatrocinador = null;
              studyCenterCommittee.mesAprobacionCentro = null;
              studyCenterCommittee.anhoAprobacionCentro = null;
            }

            let updateStudyCenterCommitteeInput =
              this.initializeUpdateStudyCenterCommitteeInput();
            CommonFunctionsService.copyMatchingKeyValues(
              updateStudyCenterCommitteeInput,
              studyCenterCommittee
            );
            updateStudyCenterCommitteeInput.expectedVersion =
              studyCenterCommittee.version;
            return this.studiesService
              .updateStudyCenterCommittee(updateStudyCenterCommitteeInput)
              .then((res) => {
                return Promise.resolve(true);
              });
          });
      });
  }

  setDatesToAddendumWithINVIMAIteration(addendumId: string): Promise<boolean> {
    let tiempoTotalPatrocinador: any;
    let tiempoTotalInvima: any;
    let iteracionAprobada: any;

    let timeRecord: TimeRecordInput = {
      nombre: null,
      dias: null,
      diasPatrocinador: null,
      mes: null,
      anho: null,
      fechaInicial: null,
      fechaFinal: null,
    };

    return this.addendumsService
      .iteracionesInvimaByAddendum(addendumId)
      .then((response: IteracionesInvimaByAddendumQuery) => {
        if (response.items) {
          let iteracionesAprobadas = response.items.filter(
            (i) => i.estadoIteracion == 'Aprobado'
          );
          if (iteracionesAprobadas) {
            iteracionAprobada =
              iteracionesAprobadas[iteracionesAprobadas.length - 1];
          } else {
            iteracionAprobada = null;
          }
          tiempoTotalInvima = response.items.reduce(
            (sum, current) => sum + current.tiempoInvima,
            0
          );
          tiempoTotalPatrocinador = response.items.reduce(
            (sum, current) => sum + current.tiempoPatrocinador,
            0
          );
        }

        return this.addendumsService
          .getAddendum(addendumId)
          .then((response: GetAddendumQuery) => {
            let addendum: any = response;
            logger.debug(addendum);
            if (iteracionAprobada) {
              const fechaRespuesta = new Date(
                iteracionAprobada.fechaRespuestaInvima
              );

              if (addendum.tiemposInvima) {
                addendum.tiemposInvima.dias = tiempoTotalInvima;
                addendum.tiemposInvima.diasPatrocinador =
                  tiempoTotalPatrocinador;
                addendum.tiemposInvima.mes = fechaRespuesta.getMonth();
                addendum.tiemposInvima.anho = fechaRespuesta.getFullYear();
              } else {
                timeRecord.dias = tiempoTotalInvima;
                timeRecord.diasPatrocinador = tiempoTotalPatrocinador;
                timeRecord.mes = fechaRespuesta.getMonth();
                timeRecord.anho = fechaRespuesta.getFullYear();
                addendum.tiemposInvima = timeRecord;
              }
            } else {
              addendum.tiemposInvima.dias = null;
              addendum.tiemposInvima.diasPatrocinador = null;
              addendum.tiemposInvima.mes = null;
              addendum.tiemposInvima.anho = null;
            }

            let updateAddendumInput = this.initializeUpdateAddendumInput();
            CommonFunctionsService.copyMatchingKeyValues(
              updateAddendumInput,
              addendum
            );
            updateAddendumInput.expectedVersion = addendum.version;
            return this.addendumsService
              .updateAddendum(updateAddendumInput)
              .then((res) => {
                return Promise.resolve(true);
              });
          });
      });
  }

  setDatesToAddendumStudyCenterCommitteeIterations(
    addendumId: string,
    studyCenterCommitteeId: string
  ): Promise<boolean> {
    logger.debug(studyCenterCommitteeId);
    return this.addendumsService
      .listStudyCommitteeIterationsByAddendum(addendumId)
      .then((response: IteracionesCEByAddendumQuery) => {
        let iteracionAprobada: any;
        let tiempoTotalComite: any;
        let tiempoTotalPatrocinador: any;
        let timeRecord: TimeRecordInput = {
          nombre: null,
          dias: null,
          diasPatrocinador: null,
          mes: null,
          anho: null,
          fechaInicial: null,
          fechaFinal: null,
        };

        let iteracionesComiteAprobadas = response.items.filter(
          (s) =>
            s.studyCenterCommitteeID === studyCenterCommitteeId &&
            !s.studyID &&
            s.estadoIteracion == 'Aprobado'
        );

        if (iteracionesComiteAprobadas) {
          iteracionAprobada =
            iteracionesComiteAprobadas[iteracionesComiteAprobadas.length - 1];

          tiempoTotalComite = iteracionesComiteAprobadas.reduce(
            (sum, current) => sum + current.tiempoComite,
            0
          );
          tiempoTotalPatrocinador = iteracionesComiteAprobadas.reduce(
            (sum, current) => sum + current.tiempoPatrocinador,
            0
          );
        } else {
          iteracionAprobada = null;
        }

        return this.addendumsService
          .getAddendumStudyCenter(studyCenterCommitteeId)
          .then((response: GetAddendumStudyCenterQuery) => {
            let addendumStudyCenterCommittee: any = response;
            logger.debug(addendumStudyCenterCommittee);
            if (iteracionAprobada) {
              const fechaRespuesta = new Date(
                iteracionAprobada.fechaRespuestaCE
              );

              if (addendumStudyCenterCommittee.tiemposCentro) {
                addendumStudyCenterCommittee.tiemposCentro.dias =
                  tiempoTotalComite;
                addendumStudyCenterCommittee.tiemposCentro.diasPatrocinador =
                  tiempoTotalPatrocinador;
                addendumStudyCenterCommittee.tiemposCentro.mes =
                  fechaRespuesta.getMonth();
                addendumStudyCenterCommittee.tiemposCentro.anho =
                  fechaRespuesta.getFullYear();
              } else {
                timeRecord.dias = tiempoTotalComite;
                timeRecord.diasPatrocinador = tiempoTotalPatrocinador;
                timeRecord.mes = fechaRespuesta.getMonth();
                timeRecord.anho = fechaRespuesta.getFullYear();
              }
            } else {
              addendumStudyCenterCommittee.tiemposCentro = null;
            }
            logger.debug(addendumStudyCenterCommittee);
            let updateAddendumStudyCenterCommitteeInput =
              this.initializeUpdateAddendumStudyCenterCommitteeInput();
            CommonFunctionsService.copyMatchingKeyValues(
              updateAddendumStudyCenterCommitteeInput,
              addendumStudyCenterCommittee
            );
            updateAddendumStudyCenterCommitteeInput.expectedVersion =
              addendumStudyCenterCommittee.version;
            return this.addendumsService
              .updateAddendumStudyCenter(
                updateAddendumStudyCenterCommitteeInput
              )
              .then((res) => {
                logger.debug(res);
                return Promise.resolve(true);
              });
          });
      });
  }

  initializeUpdateStudyInput(): UpdateStudyInput {
    const center: UpdateStudyInput = {
      sponsorID: null,
      CIE10: null,
      id: null,
      identificador: null,
      identificadorNCT: null,
      linkClinical: null,
      titulo: null,
      areasTerapeuticas: null,
      tipoPoblacion: null,
      saludPublica: null,
      enfermedadHuerfana: null,
      tipoEstudio: null,
      fase: null,
      fechaAprobacionCasaMatriz: null,
      fechaFactibilidadColombia: null,
      enColombia: null,
      motivoNoSeleccion: null,
      fechaSeleccionColombia: null,
      fechaRecepcionFilialColombia: null,
      fechaVersionEspaniol: null,
      fechaPropuestaCierreReclutamiento: null,
      alcanceEstudio: null,
      codigosATC: null,
      tieneCRO: null,
      numeroPaisesParticipantes: null,
      totalSujetosNivelGlobal: null,
      fechaLiberacionProtocolo: null,
      fechaPrimerPacienteGlobal: null,
      fechaCierreReclutamientoGlobal: null,
      numeroSujetosPlaneadosColombia: null,
      porcentajeSujetosColombia: null,
      fechaRecepcionPaqueteInicialColombia: null,
      fechaPrimerPacienteReclutadoColombia: null,
      fechaCierreReclutamientoColombia: null,
      motivoDeSuspension: null,
      otroMotivoDeSuspension: null,
      linkDePublicacion: null,
      terminadoSatisfactoriamente: null,
      motivoDeTerminacion: null,
      otroMotivoDeTerminacion: null,
      fechaDeLicenciaKit: null,
      fechaDeImportacionEnBodegaKit: null,
      fechaPrimeraImportacionKit: null,
      fechaDeLicenciaMedicamentos: null,
      fechaDeImportacionEnBodegaMedicamentos: null,
      fechaPrimeraImportacionMedicamentos: null,
      estado: null,
      diasAprobacionInvimaInvima: null,
      diasAprobacionInvimaPatrocinador: null,
      anhoAprobacionInvima: null,
      mesAprobacionInvima: null,
      diasInicioEstudio: null,
      anhoInicioEstudio: null,
      mesInicioEstudio: null,
      user: null,
      expectedVersion: null,
      studyCroId: null,
      fechaAprobacionEstudioInvima: null,
      fechaDeSometimientoEstudioInvima: null,
    };
    return center;
  }

  initializeUpdateStudyCenterCommitteeInput(): UpdateStudyCenterCommitteeInput {
    const studyCenterCommitte: UpdateStudyCenterCommitteeInput = {
      id: null,
      studyCenterID: null,
      committeeID: null,
      studyID: null,
      user: null,
      estado: null,
      diasAprobacionCentroCentro: null,
      diasAprobacionCentroPatrocinador: null,
      anhoAprobacionCentro: null,
      mesAprobacionCentro: null,
      expectedVersion: null,
    };
    return studyCenterCommitte;
  }

  initializeUpdateAddendumInput(): UpdateAddendumInput {
    const addendum: UpdateAddendumInput = {
      studyID: null,
      id: null,
      descripcion: null,
      fechaCasaMatriz: null,
      fechaRecepcionPaquete: null,
      fechaVersionEspanol: null,
      primerPaisImplementacion: null,
      fechaImplementacionPais: null,
      estado: null,
      user: null,
      tiemposInvima: null,
      expectedVersion: null,
    };
    return addendum;
  }

  initializeUpdateAddendumStudyCenterCommitteeInput(): UpdateAddendumStudyCenterInput {
    const addendumStudyCenterCommitte: UpdateAddendumStudyCenterInput = {
      addendumID: null,
      studyCenterID: null,
      id: null,
      fechaEnvioCentro: null,
      fechaReciboCentro: null,
      fechaImplementacionCentro: null,
      user: null,
      estado: null,
      tiemposCentro: null,
      expectedVersion: null,
    };
    return addendumStudyCenterCommitte;
  }
}
