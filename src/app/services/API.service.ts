/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelAddendumStudyCenterFilterInput = {
  addendumID?: ModelIDInput | null;
  studyCenterID?: ModelIDInput | null;
  id?: ModelIDInput | null;
  fechaEnvioCentro?: ModelStringInput | null;
  fechaReciboCentro?: ModelStringInput | null;
  fechaImplementacionCentro?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelAddendumStudyCenterFilterInput | null> | null;
  or?: Array<ModelAddendumStudyCenterFilterInput | null> | null;
  not?: ModelAddendumStudyCenterFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEntityStateInput = {
  eq?: EntityState | null;
  ne?: EntityState | null;
};

export enum EntityState {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED"
}

export type ModelAddendumStudyCenterConnection = {
  __typename: "ModelAddendumStudyCenterConnection";
  items: Array<AddendumStudyCenter | null>;
  nextToken?: string | null;
};

export type AddendumStudyCenter = {
  __typename: "AddendumStudyCenter";
  addendum: Addendum;
  addendumID: string;
  studyCenter: StudyCenter;
  studyCenterID: string;
  ecIterations?: ModelStudyCommitteeIterationConnection | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: TimeRecord | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type Addendum = {
  __typename: "Addendum";
  studyID: string;
  study: Study;
  invimaIterations?: ModelInvimaIterationConnection | null;
  centers?: ModelAddendumStudyCenterConnection | null;
  id: string;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: TimeRecord | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type Study = {
  __typename: "Study";
  sponsorID: string;
  sponsor: Sponsor;
  cro?: CRO | null;
  CIE10?: string | null;
  studyCenters?: ModelStudyCenterConnection | null;
  interruptions?: ModelInterruptionConnection | null;
  invimaIterations?: ModelInvimaIterationConnection | null;
  studyCenterCommittees?: ModelStudyCenterCommitteeConnection | null;
  addenda?: ModelAddendumConnection | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type Sponsor = {
  __typename: "Sponsor";
  studies?: ModelStudyConnection | null;
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ModelStudyConnection = {
  __typename: "ModelStudyConnection";
  items: Array<Study | null>;
  nextToken?: string | null;
};

export type CRO = {
  __typename: "CRO";
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ModelStudyCenterConnection = {
  __typename: "ModelStudyCenterConnection";
  items: Array<StudyCenter | null>;
  nextToken?: string | null;
};

export type StudyCenter = {
  __typename: "StudyCenter";
  committees?: ModelStudyCenterCommitteeConnection | null;
  addenda?: ModelAddendumStudyCenterConnection | null;
  id: string;
  studyID: string;
  centerID: string;
  study: Study;
  center: Center;
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ModelStudyCenterCommitteeConnection = {
  __typename: "ModelStudyCenterCommitteeConnection";
  items: Array<StudyCenterCommittee | null>;
  nextToken?: string | null;
};

export type StudyCenterCommittee = {
  __typename: "StudyCenterCommittee";
  id: string;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  study: Study;
  studyCenter: StudyCenter;
  committee: Committee;
  ecIterations?: ModelStudyCommitteeIterationConnection | null;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type Committee = {
  __typename: "Committee";
  studyCenters?: ModelStudyCenterCommitteeConnection | null;
  id: string;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export enum CommitteeTypeEnum {
  INSTITUCIONAL = "INSTITUCIONAL",
  EXTERNO = "EXTERNO"
}

export type ModelStudyCommitteeIterationConnection = {
  __typename: "ModelStudyCommitteeIterationConnection";
  items: Array<StudyCommitteeIteration | null>;
  nextToken?: string | null;
};

export type StudyCommitteeIteration = {
  __typename: "StudyCommitteeIteration";
  id: string;
  studyID?: string | null;
  study?: Study | null;
  studyCenterCommitteeID: string;
  studyCenterCommittee?: StudyCenter | null;
  addendumID?: string | null;
  addendum?: Addendum | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type Center = {
  __typename: "Center";
  studyCenters?: ModelStudyCenterConnection | null;
  id: string;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export enum CenterTypeEnum {
  PUBLICO = "PUBLICO",
  PRIVADO = "PRIVADO",
  EXCLUSIVO_INVESTIGACION = "EXCLUSIVO_INVESTIGACION"
}

export type ModelInterruptionConnection = {
  __typename: "ModelInterruptionConnection";
  items: Array<Interruption | null>;
  nextToken?: string | null;
};

export type Interruption = {
  __typename: "Interruption";
  study: Study;
  studyID: string;
  id: string;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export enum InterrupcionReclutamientoTypeEnum {
  PAIS = "PAIS",
  CENTRO = "CENTRO"
}

export enum motivoInterrupcionTypeEnum {
  APROBACION_ENMIENDA = "APROBACION_ENMIENDA",
  TEMAS_LOGISTICOS = "TEMAS_LOGISTICOS",
  MEDIDA_SANITARIA = "MEDIDA_SANITARIA",
  CALIDAD = "CALIDAD",
  OTRA = "OTRA"
}

export type ModelInvimaIterationConnection = {
  __typename: "ModelInvimaIterationConnection";
  items: Array<InvimaIteration | null>;
  nextToken?: string | null;
};

export type InvimaIteration = {
  __typename: "InvimaIteration";
  id: string;
  studyID?: string | null;
  study?: Study | null;
  addendumID?: string | null;
  addendum?: Addendum | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ModelAddendumConnection = {
  __typename: "ModelAddendumConnection";
  items: Array<Addendum | null>;
  nextToken?: string | null;
};

export enum StudyState {
  PROPUESTO = "PROPUESTO",
  ENCURSO = "ENCURSO",
  FINALIZADO = "FINALIZADO",
  SUSPENDIDO = "SUSPENDIDO",
  ELIMINADO = "ELIMINADO"
}

export type TimeRecord = {
  __typename: "TimeRecord";
  nombre?: string | null;
  dias?: number | null;
  diasPatrocinador?: number | null;
  mes?: number | null;
  anho?: number | null;
  fechaInicial?: string | null;
  fechaFinal?: string | null;
};

export type ModelStudyFilterInput = {
  sponsorID?: ModelIDInput | null;
  CIE10?: ModelStringInput | null;
  id?: ModelIDInput | null;
  identificador?: ModelStringInput | null;
  identificadorNCT?: ModelStringInput | null;
  linkClinical?: ModelStringInput | null;
  titulo?: ModelStringInput | null;
  areasTerapeuticas?: ModelStringInput | null;
  tipoPoblacion?: ModelStringInput | null;
  saludPublica?: ModelStringInput | null;
  enfermedadHuerfana?: ModelStringInput | null;
  tipoEstudio?: ModelStringInput | null;
  fase?: ModelStringInput | null;
  fechaAprobacionCasaMatriz?: ModelStringInput | null;
  fechaFactibilidadColombia?: ModelStringInput | null;
  enColombia?: ModelStringInput | null;
  motivoNoSeleccion?: ModelStringInput | null;
  fechaSeleccionColombia?: ModelStringInput | null;
  fechaRecepcionFilialColombia?: ModelStringInput | null;
  fechaVersionEspaniol?: ModelStringInput | null;
  fechaPropuestaCierreReclutamiento?: ModelStringInput | null;
  alcanceEstudio?: ModelStringInput | null;
  codigosATC?: ModelStringInput | null;
  tieneCRO?: ModelStringInput | null;
  numeroPaisesParticipantes?: ModelIntInput | null;
  totalSujetosNivelGlobal?: ModelIntInput | null;
  fechaLiberacionProtocolo?: ModelStringInput | null;
  fechaPrimerPacienteGlobal?: ModelStringInput | null;
  fechaCierreReclutamientoGlobal?: ModelStringInput | null;
  numeroSujetosPlaneadosColombia?: ModelIntInput | null;
  porcentajeSujetosColombia?: ModelIntInput | null;
  fechaRecepcionPaqueteInicialColombia?: ModelStringInput | null;
  fechaPrimerPacienteReclutadoColombia?: ModelStringInput | null;
  fechaCierreReclutamientoColombia?: ModelStringInput | null;
  motivoDeSuspension?: ModelStringInput | null;
  otroMotivoDeSuspension?: ModelStringInput | null;
  linkDePublicacion?: ModelStringInput | null;
  terminadoSatisfactoriamente?: ModelStringInput | null;
  motivoDeTerminacion?: ModelStringInput | null;
  otroMotivoDeTerminacion?: ModelStringInput | null;
  fechaDeLicenciaKit?: ModelStringInput | null;
  fechaDeImportacionEnBodegaKit?: ModelStringInput | null;
  fechaPrimeraImportacionKit?: ModelStringInput | null;
  fechaDeLicenciaMedicamentos?: ModelStringInput | null;
  fechaDeImportacionEnBodegaMedicamentos?: ModelStringInput | null;
  fechaPrimeraImportacionMedicamentos?: ModelStringInput | null;
  estado?: ModelStudyStateInput | null;
  diasAprobacionInvimaInvima?: ModelIntInput | null;
  diasAprobacionInvimaPatrocinador?: ModelIntInput | null;
  anhoAprobacionInvima?: ModelIntInput | null;
  mesAprobacionInvima?: ModelIntInput | null;
  diasInicioEstudio?: ModelIntInput | null;
  anhoInicioEstudio?: ModelIntInput | null;
  mesInicioEstudio?: ModelIntInput | null;
  user?: ModelStringInput | null;
  fechaAprobacionEstudioInvima?: ModelStringInput | null;
  fechaDeSometimientoEstudioInvima?: ModelStringInput | null;
  and?: Array<ModelStudyFilterInput | null> | null;
  or?: Array<ModelStudyFilterInput | null> | null;
  not?: ModelStudyFilterInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelStudyStateInput = {
  eq?: StudyState | null;
  ne?: StudyState | null;
};

export type ModelAddendumFilterInput = {
  studyID?: ModelIDInput | null;
  id?: ModelIDInput | null;
  descripcion?: ModelStringInput | null;
  fechaCasaMatriz?: ModelStringInput | null;
  fechaRecepcionPaquete?: ModelStringInput | null;
  fechaVersionEspanol?: ModelStringInput | null;
  primerPaisImplementacion?: ModelStringInput | null;
  fechaImplementacionPais?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelAddendumFilterInput | null> | null;
  or?: Array<ModelAddendumFilterInput | null> | null;
  not?: ModelAddendumFilterInput | null;
};

export type ModelStudyCenterFilterInput = {
  id?: ModelIDInput | null;
  studyID?: ModelIDInput | null;
  centerID?: ModelIDInput | null;
  user?: ModelStringInput | null;
  costoPorPaciente?: ModelIntInput | null;
  fechaRecepcionPaquete?: ModelStringInput | null;
  fechaRecepcionContrato?: ModelStringInput | null;
  fechaFirmaContrato?: ModelStringInput | null;
  fechaFirmaContratoPatrocinador?: ModelStringInput | null;
  fechaAprobacionInvima?: ModelStringInput | null;
  fechaActivacionCentro?: ModelStringInput | null;
  cantidadPacientesPrevistos?: ModelIntInput | null;
  cantidadPacientesIncluidos?: ModelIntInput | null;
  fechaPrimerPacienteSeleccionado?: ModelStringInput | null;
  fechaPrimerPacienteAleatorizado?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelStudyCenterFilterInput | null> | null;
  or?: Array<ModelStudyCenterFilterInput | null> | null;
  not?: ModelStudyCenterFilterInput | null;
};

export type CreateSponsorInput = {
  id?: string | null;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
};

export type ModelSponsorConditionInput = {
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  correo?: ModelStringInput | null;
  logoURL?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelSponsorConditionInput | null> | null;
  or?: Array<ModelSponsorConditionInput | null> | null;
  not?: ModelSponsorConditionInput | null;
};

export type UpdateSponsorInput = {
  id: string;
  estado?: EntityState | null;
  nit?: string | null;
  nombre?: string | null;
  correo?: string | null;
  logoURL?: string | null;
  user?: string | null;
  informacionContacto?: string | null;
  expectedVersion: number;
};

export type DeleteSponsorInput = {
  id: string;
  expectedVersion: number;
};

export type CreateCROInput = {
  id?: string | null;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
};

export type ModelCROConditionInput = {
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelCROConditionInput | null> | null;
  or?: Array<ModelCROConditionInput | null> | null;
  not?: ModelCROConditionInput | null;
};

export type UpdateCROInput = {
  id: string;
  estado?: EntityState | null;
  nit?: string | null;
  nombre?: string | null;
  informacionContacto?: string | null;
  user?: string | null;
  expectedVersion: number;
};

export type DeleteCROInput = {
  id: string;
  expectedVersion: number;
};

export type CreateCenterInput = {
  id?: string | null;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
};

export type ModelCenterConditionInput = {
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  tipoCentro?: ModelCenterTypeEnumInput | null;
  nivelAtencion?: ModelStringInput | null;
  numeroEmpleados?: ModelIntInput | null;
  municipio?: ModelStringInput | null;
  resolucionCertificacion?: ModelStringInput | null;
  resolucionVigente?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelCenterConditionInput | null> | null;
  or?: Array<ModelCenterConditionInput | null> | null;
  not?: ModelCenterConditionInput | null;
};

export type ModelCenterTypeEnumInput = {
  eq?: CenterTypeEnum | null;
  ne?: CenterTypeEnum | null;
};

export type UpdateCenterInput = {
  id: string;
  estado?: EntityState | null;
  nit?: string | null;
  nombre?: string | null;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio?: string | null;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user?: string | null;
  informacionContacto?: string | null;
  expectedVersion: number;
};

export type DeleteCenterInput = {
  id: string;
  expectedVersion: number;
};

export type CreateCommitteeInput = {
  id?: string | null;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
};

export type ModelCommitteeConditionInput = {
  estado?: ModelEntityStateInput | null;
  nombre?: ModelStringInput | null;
  tipoComite?: ModelCommitteeTypeEnumInput | null;
  periodicidadReunionesCEI?: ModelStringInput | null;
  municipio?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  resolucionInvima?: ModelStringInput | null;
  costoEvaluacion?: ModelFloatInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelCommitteeConditionInput | null> | null;
  or?: Array<ModelCommitteeConditionInput | null> | null;
  not?: ModelCommitteeConditionInput | null;
};

export type ModelCommitteeTypeEnumInput = {
  eq?: CommitteeTypeEnum | null;
  ne?: CommitteeTypeEnum | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCommitteeInput = {
  id: string;
  estado?: EntityState | null;
  nombre?: string | null;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio?: string | null;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user?: string | null;
  expectedVersion: number;
};

export type DeleteCommitteeInput = {
  id: string;
  expectedVersion: number;
};

export type CreateInvimaIterationInput = {
  id?: string | null;
  studyID?: string | null;
  addendumID?: string | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  invimaIterationStudyId?: string | null;
  invimaIterationAddendumId?: string | null;
};

export type ModelInvimaIterationConditionInput = {
  studyID?: ModelIDInput | null;
  addendumID?: ModelIDInput | null;
  tipoIteracion?: ModelStringInput | null;
  tipoRequerimiento?: ModelStringInput | null;
  otroTipoRequerimiento?: ModelStringInput | null;
  fechaDeSometimiento?: ModelStringInput | null;
  fechaRespuestaInvima?: ModelStringInput | null;
  fechaDeNotificacion?: ModelStringInput | null;
  estadoIteracion?: ModelStringInput | null;
  resolucion?: ModelStringInput | null;
  tiempoInvima?: ModelIntInput | null;
  tiempoPatrocinador?: ModelIntInput | null;
  tiempoNotificacion?: ModelIntInput | null;
  causalRetrasoPatrocinador?: ModelStringInput | null;
  otroCausalRetrasoPatrocinador?: ModelStringInput | null;
  notasDeSeguimiento?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelInvimaIterationConditionInput | null> | null;
  or?: Array<ModelInvimaIterationConditionInput | null> | null;
  not?: ModelInvimaIterationConditionInput | null;
};

export type UpdateInvimaIterationInput = {
  id: string;
  studyID?: string | null;
  addendumID?: string | null;
  tipoIteracion?: string | null;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento?: string | null;
  fechaRespuestaInvima?: string | null;
  fechaDeNotificacion?: string | null;
  estadoIteracion?: string | null;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user?: string | null;
  estado?: EntityState | null;
  expectedVersion: number;
  invimaIterationStudyId?: string | null;
  invimaIterationAddendumId?: string | null;
};

export type DeleteInvimaIterationInput = {
  id: string;
  expectedVersion: number;
};

export type CreateStudyCommitteeIterationInput = {
  id?: string | null;
  studyID?: string | null;
  studyCenterCommitteeID: string;
  addendumID?: string | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  studyCommitteeIterationStudyId?: string | null;
  studyCommitteeIterationAddendumId?: string | null;
};

export type ModelStudyCommitteeIterationConditionInput = {
  studyID?: ModelIDInput | null;
  studyCenterCommitteeID?: ModelIDInput | null;
  addendumID?: ModelIDInput | null;
  tipoIteracion?: ModelStringInput | null;
  tipoAclaracion?: ModelStringInput | null;
  otroTipoAclaracion?: ModelStringInput | null;
  fechaDeSometimientoCE?: ModelStringInput | null;
  fechaRespuestaCE?: ModelStringInput | null;
  estadoIteracion?: ModelStringInput | null;
  informacionCarta?: ModelStringInput | null;
  tiempoComite?: ModelIntInput | null;
  tiempoPatrocinador?: ModelIntInput | null;
  causalRetrasoPatrocinador?: ModelStringInput | null;
  otroCausalRetrasoPatrocinador?: ModelStringInput | null;
  notasDeSeguimiento?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelStudyCommitteeIterationConditionInput | null> | null;
  or?: Array<ModelStudyCommitteeIterationConditionInput | null> | null;
  not?: ModelStudyCommitteeIterationConditionInput | null;
};

export type UpdateStudyCommitteeIterationInput = {
  id: string;
  studyID?: string | null;
  studyCenterCommitteeID?: string | null;
  addendumID?: string | null;
  tipoIteracion?: string | null;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE?: string | null;
  fechaRespuestaCE?: string | null;
  estadoIteracion?: string | null;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user?: string | null;
  estado?: EntityState | null;
  expectedVersion: number;
  studyCommitteeIterationStudyId?: string | null;
  studyCommitteeIterationAddendumId?: string | null;
};

export type DeleteStudyCommitteeIterationInput = {
  id: string;
  expectedVersion: number;
};

export type CreateStudyInput = {
  sponsorID: string;
  CIE10?: string | null;
  id?: string | null;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  studyCroId?: string | null;
};

export type ModelStudyConditionInput = {
  sponsorID?: ModelIDInput | null;
  CIE10?: ModelStringInput | null;
  identificador?: ModelStringInput | null;
  identificadorNCT?: ModelStringInput | null;
  linkClinical?: ModelStringInput | null;
  titulo?: ModelStringInput | null;
  areasTerapeuticas?: ModelStringInput | null;
  tipoPoblacion?: ModelStringInput | null;
  saludPublica?: ModelStringInput | null;
  enfermedadHuerfana?: ModelStringInput | null;
  tipoEstudio?: ModelStringInput | null;
  fase?: ModelStringInput | null;
  fechaAprobacionCasaMatriz?: ModelStringInput | null;
  fechaFactibilidadColombia?: ModelStringInput | null;
  enColombia?: ModelStringInput | null;
  motivoNoSeleccion?: ModelStringInput | null;
  fechaSeleccionColombia?: ModelStringInput | null;
  fechaRecepcionFilialColombia?: ModelStringInput | null;
  fechaVersionEspaniol?: ModelStringInput | null;
  fechaPropuestaCierreReclutamiento?: ModelStringInput | null;
  alcanceEstudio?: ModelStringInput | null;
  codigosATC?: ModelStringInput | null;
  tieneCRO?: ModelStringInput | null;
  numeroPaisesParticipantes?: ModelIntInput | null;
  totalSujetosNivelGlobal?: ModelIntInput | null;
  fechaLiberacionProtocolo?: ModelStringInput | null;
  fechaPrimerPacienteGlobal?: ModelStringInput | null;
  fechaCierreReclutamientoGlobal?: ModelStringInput | null;
  numeroSujetosPlaneadosColombia?: ModelIntInput | null;
  porcentajeSujetosColombia?: ModelIntInput | null;
  fechaRecepcionPaqueteInicialColombia?: ModelStringInput | null;
  fechaPrimerPacienteReclutadoColombia?: ModelStringInput | null;
  fechaCierreReclutamientoColombia?: ModelStringInput | null;
  motivoDeSuspension?: ModelStringInput | null;
  otroMotivoDeSuspension?: ModelStringInput | null;
  linkDePublicacion?: ModelStringInput | null;
  terminadoSatisfactoriamente?: ModelStringInput | null;
  motivoDeTerminacion?: ModelStringInput | null;
  otroMotivoDeTerminacion?: ModelStringInput | null;
  fechaDeLicenciaKit?: ModelStringInput | null;
  fechaDeImportacionEnBodegaKit?: ModelStringInput | null;
  fechaPrimeraImportacionKit?: ModelStringInput | null;
  fechaDeLicenciaMedicamentos?: ModelStringInput | null;
  fechaDeImportacionEnBodegaMedicamentos?: ModelStringInput | null;
  fechaPrimeraImportacionMedicamentos?: ModelStringInput | null;
  estado?: ModelStudyStateInput | null;
  diasAprobacionInvimaInvima?: ModelIntInput | null;
  diasAprobacionInvimaPatrocinador?: ModelIntInput | null;
  anhoAprobacionInvima?: ModelIntInput | null;
  mesAprobacionInvima?: ModelIntInput | null;
  diasInicioEstudio?: ModelIntInput | null;
  anhoInicioEstudio?: ModelIntInput | null;
  mesInicioEstudio?: ModelIntInput | null;
  user?: ModelStringInput | null;
  fechaAprobacionEstudioInvima?: ModelStringInput | null;
  fechaDeSometimientoEstudioInvima?: ModelStringInput | null;
  and?: Array<ModelStudyConditionInput | null> | null;
  or?: Array<ModelStudyConditionInput | null> | null;
  not?: ModelStudyConditionInput | null;
};

export type UpdateStudyInput = {
  sponsorID?: string | null;
  CIE10?: string | null;
  id: string;
  identificador?: string | null;
  identificadorNCT?: string | null;
  linkClinical?: string | null;
  titulo?: string | null;
  areasTerapeuticas?: string | null;
  tipoPoblacion?: string | null;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio?: string | null;
  fase?: string | null;
  fechaAprobacionCasaMatriz?: string | null;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio?: string | null;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado?: StudyState | null;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user?: string | null;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  expectedVersion: number;
  studyCroId?: string | null;
};

export type DeleteStudyInput = {
  id: string;
  expectedVersion: number;
};

export type CreateStudyCenterInput = {
  id?: string | null;
  studyID: string;
  centerID: string;
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
};

export type ModelStudyCenterConditionInput = {
  studyID?: ModelIDInput | null;
  centerID?: ModelIDInput | null;
  user?: ModelStringInput | null;
  costoPorPaciente?: ModelIntInput | null;
  fechaRecepcionPaquete?: ModelStringInput | null;
  fechaRecepcionContrato?: ModelStringInput | null;
  fechaFirmaContrato?: ModelStringInput | null;
  fechaFirmaContratoPatrocinador?: ModelStringInput | null;
  fechaAprobacionInvima?: ModelStringInput | null;
  fechaActivacionCentro?: ModelStringInput | null;
  cantidadPacientesPrevistos?: ModelIntInput | null;
  cantidadPacientesIncluidos?: ModelIntInput | null;
  fechaPrimerPacienteSeleccionado?: ModelStringInput | null;
  fechaPrimerPacienteAleatorizado?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelStudyCenterConditionInput | null> | null;
  or?: Array<ModelStudyCenterConditionInput | null> | null;
  not?: ModelStudyCenterConditionInput | null;
};

export type UpdateStudyCenterInput = {
  id: string;
  studyID?: string | null;
  centerID?: string | null;
  user?: string | null;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado?: EntityState | null;
  expectedVersion: number;
};

export type DeleteStudyCenterInput = {
  id: string;
  expectedVersion: number;
};

export type CreateStudyCenterCommitteeInput = {
  id?: string | null;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
};

export type ModelStudyCenterCommitteeConditionInput = {
  studyCenterID?: ModelIDInput | null;
  committeeID?: ModelIDInput | null;
  studyID?: ModelIDInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  diasAprobacionCentroCentro?: ModelIntInput | null;
  diasAprobacionCentroPatrocinador?: ModelIntInput | null;
  anhoAprobacionCentro?: ModelIntInput | null;
  mesAprobacionCentro?: ModelIntInput | null;
  and?: Array<ModelStudyCenterCommitteeConditionInput | null> | null;
  or?: Array<ModelStudyCenterCommitteeConditionInput | null> | null;
  not?: ModelStudyCenterCommitteeConditionInput | null;
};

export type UpdateStudyCenterCommitteeInput = {
  id: string;
  studyCenterID?: string | null;
  committeeID?: string | null;
  studyID?: string | null;
  user?: string | null;
  estado?: EntityState | null;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  expectedVersion: number;
};

export type DeleteStudyCenterCommitteeInput = {
  id: string;
  expectedVersion: number;
};

export type CreateInterruptionInput = {
  studyID: string;
  id?: string | null;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
};

export type ModelInterruptionConditionInput = {
  studyID?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  interrupcionReclutamiento?: ModelInterrupcionReclutamientoTypeEnumInput | null;
  motivoInterrupcion?: ModelmotivoInterrupcionTypeEnumInput | null;
  otroMotivoInterrupcion?: ModelStringInput | null;
  fechaInicialInterrupcion?: ModelStringInput | null;
  fechaFinalizacionTnterrupcion?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelInterruptionConditionInput | null> | null;
  or?: Array<ModelInterruptionConditionInput | null> | null;
  not?: ModelInterruptionConditionInput | null;
};

export type ModelInterrupcionReclutamientoTypeEnumInput = {
  eq?: InterrupcionReclutamientoTypeEnum | null;
  ne?: InterrupcionReclutamientoTypeEnum | null;
};

export type ModelmotivoInterrupcionTypeEnumInput = {
  eq?: motivoInterrupcionTypeEnum | null;
  ne?: motivoInterrupcionTypeEnum | null;
};

export type UpdateInterruptionInput = {
  studyID?: string | null;
  id: string;
  estado?: EntityState | null;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion?: motivoInterrupcionTypeEnum | null;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion?: string | null;
  fechaFinalizacionTnterrupcion?: string | null;
  user?: string | null;
  informacionContacto?: string | null;
  expectedVersion: number;
};

export type DeleteInterruptionInput = {
  id: string;
  expectedVersion: number;
};

export type CreateAddendumInput = {
  studyID: string;
  id?: string | null;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: TimeRecordInput | null;
};

export type TimeRecordInput = {
  nombre?: string | null;
  dias?: number | null;
  diasPatrocinador?: number | null;
  mes?: number | null;
  anho?: number | null;
  fechaInicial?: string | null;
  fechaFinal?: string | null;
};

export type ModelAddendumConditionInput = {
  studyID?: ModelIDInput | null;
  descripcion?: ModelStringInput | null;
  fechaCasaMatriz?: ModelStringInput | null;
  fechaRecepcionPaquete?: ModelStringInput | null;
  fechaVersionEspanol?: ModelStringInput | null;
  primerPaisImplementacion?: ModelStringInput | null;
  fechaImplementacionPais?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelAddendumConditionInput | null> | null;
  or?: Array<ModelAddendumConditionInput | null> | null;
  not?: ModelAddendumConditionInput | null;
};

export type UpdateAddendumInput = {
  studyID?: string | null;
  id: string;
  descripcion?: string | null;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado?: EntityState | null;
  user?: string | null;
  tiemposInvima?: TimeRecordInput | null;
  expectedVersion: number;
};

export type DeleteAddendumInput = {
  id: string;
  expectedVersion: number;
};

export type CreateAddendumStudyCenterInput = {
  addendumID: string;
  studyCenterID: string;
  id?: string | null;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: TimeRecordInput | null;
};

export type ModelAddendumStudyCenterConditionInput = {
  addendumID?: ModelIDInput | null;
  studyCenterID?: ModelIDInput | null;
  fechaEnvioCentro?: ModelStringInput | null;
  fechaReciboCentro?: ModelStringInput | null;
  fechaImplementacionCentro?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelAddendumStudyCenterConditionInput | null> | null;
  or?: Array<ModelAddendumStudyCenterConditionInput | null> | null;
  not?: ModelAddendumStudyCenterConditionInput | null;
};

export type UpdateAddendumStudyCenterInput = {
  addendumID?: string | null;
  studyCenterID?: string | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user?: string | null;
  estado?: EntityState | null;
  tiemposCentro?: TimeRecordInput | null;
  expectedVersion: number;
};

export type DeleteAddendumStudyCenterInput = {
  id: string;
  expectedVersion: number;
};

export type SendNotificationInput = {
  from: string;
  to: string;
  subject: string;
  html: string;
  icalEvent?: string | null;
  attachment?: string | null;
  attachmentFileName?: string | null;
  sendSMS: boolean;
  smsNumber?: string | null;
  smsText?: string | null;
};

export type SendNotificationResponse = {
  __typename: "SendNotificationResponse";
  result: string;
  error?: string | null;
};

export type AuditTrace = {
  __typename: "AuditTrace";
  id: string;
  relatedEntityId: string;
  entity: string;
  eventDateTime: string;
  eventType: string;
  author: string;
  data: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelAuditTraceFilterInput = {
  id?: ModelIDInput | null;
  relatedEntityId?: ModelStringInput | null;
  entity?: ModelStringInput | null;
  eventDateTime?: ModelStringInput | null;
  eventType?: ModelStringInput | null;
  author?: ModelStringInput | null;
  data?: ModelStringInput | null;
  and?: Array<ModelAuditTraceFilterInput | null> | null;
  or?: Array<ModelAuditTraceFilterInput | null> | null;
  not?: ModelAuditTraceFilterInput | null;
};

export type ModelAuditTraceConnection = {
  __typename: "ModelAuditTraceConnection";
  items: Array<AuditTrace | null>;
  nextToken?: string | null;
};

export type ModelSponsorFilterInput = {
  id?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  correo?: ModelStringInput | null;
  logoURL?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelSponsorFilterInput | null> | null;
  or?: Array<ModelSponsorFilterInput | null> | null;
  not?: ModelSponsorFilterInput | null;
};

export type ModelSponsorConnection = {
  __typename: "ModelSponsorConnection";
  items: Array<Sponsor | null>;
  nextToken?: string | null;
};

export type ModelCROFilterInput = {
  id?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelCROFilterInput | null> | null;
  or?: Array<ModelCROFilterInput | null> | null;
  not?: ModelCROFilterInput | null;
};

export type ModelCROConnection = {
  __typename: "ModelCROConnection";
  items: Array<CRO | null>;
  nextToken?: string | null;
};

export type ModelCenterFilterInput = {
  id?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  nit?: ModelStringInput | null;
  nombre?: ModelStringInput | null;
  tipoCentro?: ModelCenterTypeEnumInput | null;
  nivelAtencion?: ModelStringInput | null;
  numeroEmpleados?: ModelIntInput | null;
  municipio?: ModelStringInput | null;
  resolucionCertificacion?: ModelStringInput | null;
  resolucionVigente?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelCenterFilterInput | null> | null;
  or?: Array<ModelCenterFilterInput | null> | null;
  not?: ModelCenterFilterInput | null;
};

export type ModelCenterConnection = {
  __typename: "ModelCenterConnection";
  items: Array<Center | null>;
  nextToken?: string | null;
};

export type ModelCommitteeFilterInput = {
  id?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  nombre?: ModelStringInput | null;
  tipoComite?: ModelCommitteeTypeEnumInput | null;
  periodicidadReunionesCEI?: ModelStringInput | null;
  municipio?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  resolucionInvima?: ModelStringInput | null;
  costoEvaluacion?: ModelFloatInput | null;
  user?: ModelStringInput | null;
  and?: Array<ModelCommitteeFilterInput | null> | null;
  or?: Array<ModelCommitteeFilterInput | null> | null;
  not?: ModelCommitteeFilterInput | null;
};

export type ModelCommitteeConnection = {
  __typename: "ModelCommitteeConnection";
  items: Array<Committee | null>;
  nextToken?: string | null;
};

export type ModelInvimaIterationFilterInput = {
  id?: ModelIDInput | null;
  studyID?: ModelIDInput | null;
  addendumID?: ModelIDInput | null;
  tipoIteracion?: ModelStringInput | null;
  tipoRequerimiento?: ModelStringInput | null;
  otroTipoRequerimiento?: ModelStringInput | null;
  fechaDeSometimiento?: ModelStringInput | null;
  fechaRespuestaInvima?: ModelStringInput | null;
  fechaDeNotificacion?: ModelStringInput | null;
  estadoIteracion?: ModelStringInput | null;
  resolucion?: ModelStringInput | null;
  tiempoInvima?: ModelIntInput | null;
  tiempoPatrocinador?: ModelIntInput | null;
  tiempoNotificacion?: ModelIntInput | null;
  causalRetrasoPatrocinador?: ModelStringInput | null;
  otroCausalRetrasoPatrocinador?: ModelStringInput | null;
  notasDeSeguimiento?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelInvimaIterationFilterInput | null> | null;
  or?: Array<ModelInvimaIterationFilterInput | null> | null;
  not?: ModelInvimaIterationFilterInput | null;
};

export type ModelStudyCommitteeIterationFilterInput = {
  id?: ModelIDInput | null;
  studyID?: ModelIDInput | null;
  studyCenterCommitteeID?: ModelIDInput | null;
  addendumID?: ModelIDInput | null;
  tipoIteracion?: ModelStringInput | null;
  tipoAclaracion?: ModelStringInput | null;
  otroTipoAclaracion?: ModelStringInput | null;
  fechaDeSometimientoCE?: ModelStringInput | null;
  fechaRespuestaCE?: ModelStringInput | null;
  estadoIteracion?: ModelStringInput | null;
  informacionCarta?: ModelStringInput | null;
  tiempoComite?: ModelIntInput | null;
  tiempoPatrocinador?: ModelIntInput | null;
  causalRetrasoPatrocinador?: ModelStringInput | null;
  otroCausalRetrasoPatrocinador?: ModelStringInput | null;
  notasDeSeguimiento?: ModelStringInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  and?: Array<ModelStudyCommitteeIterationFilterInput | null> | null;
  or?: Array<ModelStudyCommitteeIterationFilterInput | null> | null;
  not?: ModelStudyCommitteeIterationFilterInput | null;
};

export type ModelStudyCenterCommitteeFilterInput = {
  id?: ModelIDInput | null;
  studyCenterID?: ModelIDInput | null;
  committeeID?: ModelIDInput | null;
  studyID?: ModelIDInput | null;
  user?: ModelStringInput | null;
  estado?: ModelEntityStateInput | null;
  diasAprobacionCentroCentro?: ModelIntInput | null;
  diasAprobacionCentroPatrocinador?: ModelIntInput | null;
  anhoAprobacionCentro?: ModelIntInput | null;
  mesAprobacionCentro?: ModelIntInput | null;
  and?: Array<ModelStudyCenterCommitteeFilterInput | null> | null;
  or?: Array<ModelStudyCenterCommitteeFilterInput | null> | null;
  not?: ModelStudyCenterCommitteeFilterInput | null;
};

export type ModelInterruptionFilterInput = {
  studyID?: ModelIDInput | null;
  id?: ModelIDInput | null;
  estado?: ModelEntityStateInput | null;
  interrupcionReclutamiento?: ModelInterrupcionReclutamientoTypeEnumInput | null;
  motivoInterrupcion?: ModelmotivoInterrupcionTypeEnumInput | null;
  otroMotivoInterrupcion?: ModelStringInput | null;
  fechaInicialInterrupcion?: ModelStringInput | null;
  fechaFinalizacionTnterrupcion?: ModelStringInput | null;
  user?: ModelStringInput | null;
  informacionContacto?: ModelStringInput | null;
  and?: Array<ModelInterruptionFilterInput | null> | null;
  or?: Array<ModelInterruptionFilterInput | null> | null;
  not?: ModelInterruptionFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type AddendumStudyCenterByAddendumWithAllDataQuery = {
  __typename: "ModelAddendumStudyCenterConnection";
  items: Array<{
    __typename: "AddendumStudyCenter";
    addendum: {
      __typename: "Addendum";
      studyID: string;
      study: {
        __typename: "Study";
        sponsorID: string;
        CIE10?: string | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        diasAprobacionInvimaInvima?: number | null;
        diasAprobacionInvimaPatrocinador?: number | null;
        anhoAprobacionInvima?: number | null;
        mesAprobacionInvima?: number | null;
        diasInicioEstudio?: number | null;
        anhoInicioEstudio?: number | null;
        mesInicioEstudio?: number | null;
        fechaAprobacionEstudioInvima?: string | null;
        fechaDeSometimientoEstudioInvima?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      invimaIterations?: {
        __typename: "ModelInvimaIterationConnection";
        nextToken?: string | null;
      } | null;
      centers?: {
        __typename: "ModelAddendumStudyCenterConnection";
        nextToken?: string | null;
      } | null;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    addendumID: string;
    studyCenter: {
      __typename: "StudyCenter";
      committees?: {
        __typename: "ModelStudyCenterCommitteeConnection";
        nextToken?: string | null;
      } | null;
      addenda?: {
        __typename: "ModelAddendumStudyCenterConnection";
        nextToken?: string | null;
      } | null;
      id: string;
      studyID: string;
      centerID: string;
      study: {
        __typename: "Study";
        sponsorID: string;
        CIE10?: string | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        diasAprobacionInvimaInvima?: number | null;
        diasAprobacionInvimaPatrocinador?: number | null;
        anhoAprobacionInvima?: number | null;
        mesAprobacionInvima?: number | null;
        diasInicioEstudio?: number | null;
        anhoInicioEstudio?: number | null;
        mesInicioEstudio?: number | null;
        fechaAprobacionEstudioInvima?: string | null;
        fechaDeSometimientoEstudioInvima?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      center: {
        __typename: "Center";
        id: string;
        estado: EntityState;
        nit: string;
        nombre: string;
        tipoCentro?: CenterTypeEnum | null;
        nivelAtencion?: string | null;
        numeroEmpleados?: number | null;
        municipio: string;
        resolucionCertificacion?: string | null;
        resolucionVigente?: string | null;
        user: string;
        informacionContacto?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenterID: string;
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      items: Array<{
        __typename: "StudyCommitteeIteration";
        id: string;
        studyID?: string | null;
        studyCenterCommitteeID: string;
        addendumID?: string | null;
        tipoIteracion: string;
        tipoAclaracion?: Array<string | null> | null;
        otroTipoAclaracion?: string | null;
        fechaDeSometimientoCE: string;
        fechaRespuestaCE: string;
        estadoIteracion: string;
        informacionCarta?: string | null;
        tiempoComite?: number | null;
        tiempoPatrocinador?: number | null;
        causalRetrasoPatrocinador?: string | null;
        otroCausalRetrasoPatrocinador?: string | null;
        notasDeSeguimiento?: string | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    id: string;
    fechaEnvioCentro?: string | null;
    fechaReciboCentro?: string | null;
    fechaImplementacionCentro?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudiesBySponsorWithAllDataQuery = {
  __typename: "ModelStudyConnection";
  items: Array<{
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      studies?: {
        __typename: "ModelStudyConnection";
        items: Array<{
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null>;
        nextToken?: string | null;
      } | null;
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      items: Array<{
        __typename: "StudyCenter";
        committees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        studyID: string;
        centerID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        center: {
          __typename: "Center";
          id: string;
          estado: EntityState;
          nit: string;
          nombre: string;
          tipoCentro?: CenterTypeEnum | null;
          nivelAtencion?: string | null;
          numeroEmpleados?: number | null;
          municipio: string;
          resolucionCertificacion?: string | null;
          resolucionVigente?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        user: string;
        costoPorPaciente?: number | null;
        fechaRecepcionPaquete?: string | null;
        fechaRecepcionContrato?: string | null;
        fechaFirmaContrato?: string | null;
        fechaFirmaContratoPatrocinador?: string | null;
        fechaAprobacionInvima?: string | null;
        fechaActivacionCentro?: string | null;
        cantidadPacientesPrevistos?: number | null;
        cantidadPacientesIncluidos?: number | null;
        fechaPrimerPacienteSeleccionado?: string | null;
        fechaPrimerPacienteAleatorizado?: string | null;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      items: Array<{
        __typename: "Interruption";
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        studyID: string;
        id: string;
        estado: EntityState;
        interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
        motivoInterrupcion: motivoInterrupcionTypeEnum;
        otroMotivoInterrupcion?: string | null;
        fechaInicialInterrupcion: string;
        fechaFinalizacionTnterrupcion?: string | null;
        user: string;
        informacionContacto?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      items: Array<{
        __typename: "InvimaIteration";
        id: string;
        studyID?: string | null;
        study?: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        addendumID?: string | null;
        addendum?: {
          __typename: "Addendum";
          studyID: string;
          id: string;
          descripcion: string;
          fechaCasaMatriz?: string | null;
          fechaRecepcionPaquete?: string | null;
          fechaVersionEspanol?: string | null;
          primerPaisImplementacion?: string | null;
          fechaImplementacionPais?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        tipoIteracion: string;
        tipoRequerimiento?: Array<string | null> | null;
        otroTipoRequerimiento?: string | null;
        fechaDeSometimiento: string;
        fechaRespuestaInvima: string;
        fechaDeNotificacion?: string | null;
        estadoIteracion: string;
        resolucion?: string | null;
        tiempoInvima?: number | null;
        tiempoPatrocinador?: number | null;
        tiempoNotificacion?: number | null;
        causalRetrasoPatrocinador?: string | null;
        otroCausalRetrasoPatrocinador?: string | null;
        notasDeSeguimiento?: string | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      items: Array<{
        __typename: "StudyCenterCommittee";
        id: string;
        studyCenterID: string;
        committeeID: string;
        studyID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          fechaAprobacionEstudioInvima?: string | null;
          fechaDeSometimientoEstudioInvima?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        studyCenter: {
          __typename: "StudyCenter";
          id: string;
          studyID: string;
          centerID: string;
          user: string;
          costoPorPaciente?: number | null;
          fechaRecepcionPaquete?: string | null;
          fechaRecepcionContrato?: string | null;
          fechaFirmaContrato?: string | null;
          fechaFirmaContratoPatrocinador?: string | null;
          fechaAprobacionInvima?: string | null;
          fechaActivacionCentro?: string | null;
          cantidadPacientesPrevistos?: number | null;
          cantidadPacientesIncluidos?: number | null;
          fechaPrimerPacienteSeleccionado?: string | null;
          fechaPrimerPacienteAleatorizado?: string | null;
          estado: EntityState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        committee: {
          __typename: "Committee";
          id: string;
          estado: EntityState;
          nombre: string;
          tipoComite?: CommitteeTypeEnum | null;
          periodicidadReunionesCEI?: string | null;
          municipio: string;
          informacionContacto?: string | null;
          resolucionInvima?: string | null;
          costoEvaluacion?: number | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        ecIterations?: {
          __typename: "ModelStudyCommitteeIterationConnection";
          nextToken?: string | null;
        } | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      items: Array<{
        __typename: "Addendum";
        studyID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          fechaAprobacionEstudioInvima?: string | null;
          fechaDeSometimientoEstudioInvima?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        centers?: {
          __typename: "ModelAddendumStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        descripcion: string;
        fechaCasaMatriz?: string | null;
        fechaRecepcionPaquete?: string | null;
        fechaVersionEspanol?: string | null;
        primerPaisImplementacion?: string | null;
        fechaImplementacionPais?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    estado: StudyState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type ListStudysWithAllDataQuery = {
  __typename: "ModelStudyConnection";
  items: Array<{
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      nombre: string;
    };
    cro?: {
      __typename: "CRO";
      nombre: string;
    } | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      items: Array<{
        __typename: "StudyCenter";
        committees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        center: {
          __typename: "Center";
          id: string;
          estado: EntityState;
          nit: string;
          nombre: string;
          tipoCentro?: CenterTypeEnum | null;
          nivelAtencion?: string | null;
          numeroEmpleados?: number | null;
          municipio: string;
          resolucionCertificacion?: string | null;
          resolucionVigente?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
      } | null>;
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      items: Array<{
        __typename: "InvimaIteration";
        id: string;
        tipoIteracion: string;
        tipoRequerimiento?: Array<string | null> | null;
        otroTipoRequerimiento?: string | null;
        fechaDeSometimiento: string;
        fechaRespuestaInvima: string;
        fechaDeNotificacion?: string | null;
        estadoIteracion: string;
        resolucion?: string | null;
        tiempoInvima?: number | null;
        tiempoPatrocinador?: number | null;
        tiempoNotificacion?: number | null;
        causalRetrasoPatrocinador?: string | null;
        otroCausalRetrasoPatrocinador?: string | null;
        notasDeSeguimiento?: string | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      items: Array<{
        __typename: "StudyCenterCommittee";
        id: string;
        studyCenterID: string;
        committeeID: string;
        studyID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        studyCenter: {
          __typename: "StudyCenter";
          id: string;
          studyID: string;
          centerID: string;
          user: string;
          costoPorPaciente?: number | null;
          fechaRecepcionPaquete?: string | null;
          fechaRecepcionContrato?: string | null;
          fechaFirmaContrato?: string | null;
          fechaFirmaContratoPatrocinador?: string | null;
          fechaAprobacionInvima?: string | null;
          fechaActivacionCentro?: string | null;
          cantidadPacientesPrevistos?: number | null;
          cantidadPacientesIncluidos?: number | null;
          fechaPrimerPacienteSeleccionado?: string | null;
          fechaPrimerPacienteAleatorizado?: string | null;
          estado: EntityState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        committee: {
          __typename: "Committee";
          id: string;
          estado: EntityState;
          nombre: string;
          tipoComite?: CommitteeTypeEnum | null;
          periodicidadReunionesCEI?: string | null;
          municipio: string;
          informacionContacto?: string | null;
          resolucionInvima?: string | null;
          costoEvaluacion?: number | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        ecIterations?: {
          __typename: "ModelStudyCommitteeIterationConnection";
          nextToken?: string | null;
        } | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      items: Array<{
        __typename: "Addendum";
        id: string;
        descripcion: string;
        fechaCasaMatriz?: string | null;
        fechaRecepcionPaquete?: string | null;
        fechaVersionEspanol?: string | null;
        primerPaisImplementacion?: string | null;
        fechaImplementacionPais?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    estado: StudyState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetStudyWithAllDataQuery = {
  __typename: "Study";
  sponsorID: string;
  sponsor: {
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      items: Array<{
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  cro?: {
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  CIE10?: string | null;
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      committees?: {
        __typename: "ModelStudyCenterCommitteeConnection";
        items: Array<{
          __typename: "StudyCenterCommittee";
          id: string;
          studyCenterID: string;
          committeeID: string;
          studyID: string;
          user: string;
          estado: EntityState;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null>;
        nextToken?: string | null;
      } | null;
      addenda?: {
        __typename: "ModelAddendumStudyCenterConnection";
        items: Array<{
          __typename: "AddendumStudyCenter";
          addendumID: string;
          studyCenterID: string;
          id: string;
          fechaEnvioCentro?: string | null;
          fechaReciboCentro?: string | null;
          fechaImplementacionCentro?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
          estado: EntityState;
        } | null>;
        nextToken?: string | null;
      } | null;
      id: string;
      studyID: string;
      centerID: string;
      study: {
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      center: {
        __typename: "Center";
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        estado: EntityState;
        nit: string;
        nombre: string;
        tipoCentro?: CenterTypeEnum | null;
        nivelAtencion?: string | null;
        numeroEmpleados?: number | null;
        municipio: string;
        resolucionCertificacion?: string | null;
        resolucionVigente?: string | null;
        user: string;
        informacionContacto?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  interruptions?: {
    __typename: "ModelInterruptionConnection";
    items: Array<{
      __typename: "Interruption";
      study: {
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      studyID: string;
      id: string;
      estado: EntityState;
      interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
      motivoInterrupcion: motivoInterrupcionTypeEnum;
      otroMotivoInterrupcion?: string | null;
      fechaInicialInterrupcion: string;
      fechaFinalizacionTnterrupcion?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      study?: {
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null;
      addendumID?: string | null;
      addendum?: {
        __typename: "Addendum";
        studyID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        centers?: {
          __typename: "ModelAddendumStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        descripcion: string;
        fechaCasaMatriz?: string | null;
        fechaRecepcionPaquete?: string | null;
        fechaVersionEspanol?: string | null;
        primerPaisImplementacion?: string | null;
        fechaImplementacionPais?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
        estado: EntityState;
      } | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  studyCenterCommittees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      study: {
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      studyCenter: {
        __typename: "StudyCenter";
        committees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        studyID: string;
        centerID: string;
        study: {
          __typename: "Study";
          sponsorID: string;
          CIE10?: string | null;
          id: string;
          identificador: string;
          identificadorNCT: string;
          linkClinical?: string | null;
          titulo: string;
          areasTerapeuticas: string;
          tipoPoblacion: string;
          saludPublica?: string | null;
          enfermedadHuerfana?: string | null;
          tipoEstudio: string;
          fase: string;
          fechaAprobacionCasaMatriz: string;
          fechaFactibilidadColombia?: string | null;
          enColombia?: string | null;
          motivoNoSeleccion?: string | null;
          fechaSeleccionColombia?: string | null;
          fechaRecepcionFilialColombia?: string | null;
          fechaVersionEspaniol?: string | null;
          fechaPropuestaCierreReclutamiento?: string | null;
          alcanceEstudio: string;
          codigosATC?: Array<string> | null;
          tieneCRO?: string | null;
          numeroPaisesParticipantes?: number | null;
          totalSujetosNivelGlobal?: number | null;
          fechaLiberacionProtocolo?: string | null;
          fechaPrimerPacienteGlobal?: string | null;
          fechaCierreReclutamientoGlobal?: string | null;
          numeroSujetosPlaneadosColombia?: number | null;
          porcentajeSujetosColombia?: number | null;
          fechaRecepcionPaqueteInicialColombia?: string | null;
          fechaPrimerPacienteReclutadoColombia?: string | null;
          fechaCierreReclutamientoColombia?: string | null;
          motivoDeSuspension?: string | null;
          otroMotivoDeSuspension?: string | null;
          linkDePublicacion?: string | null;
          terminadoSatisfactoriamente?: string | null;
          motivoDeTerminacion?: string | null;
          otroMotivoDeTerminacion?: string | null;
          fechaDeLicenciaKit?: string | null;
          fechaDeImportacionEnBodegaKit?: string | null;
          fechaPrimeraImportacionKit?: string | null;
          fechaDeLicenciaMedicamentos?: string | null;
          fechaDeImportacionEnBodegaMedicamentos?: string | null;
          fechaPrimeraImportacionMedicamentos?: string | null;
          estado: StudyState;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        center: {
          __typename: "Center";
          id: string;
          estado: EntityState;
          nit: string;
          nombre: string;
          tipoCentro?: CenterTypeEnum | null;
          nivelAtencion?: string | null;
          numeroEmpleados?: number | null;
          municipio: string;
          resolucionCertificacion?: string | null;
          resolucionVigente?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        user: string;
        costoPorPaciente?: number | null;
        fechaRecepcionPaquete?: string | null;
        fechaRecepcionContrato?: string | null;
        fechaFirmaContrato?: string | null;
        fechaFirmaContratoPatrocinador?: string | null;
        fechaAprobacionInvima?: string | null;
        fechaActivacionCentro?: string | null;
        cantidadPacientesPrevistos?: number | null;
        cantidadPacientesIncluidos?: number | null;
        fechaPrimerPacienteSeleccionado?: string | null;
        fechaPrimerPacienteAleatorizado?: string | null;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      committee: {
        __typename: "Committee";
        studyCenters?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        estado: EntityState;
        nombre: string;
        tipoComite?: CommitteeTypeEnum | null;
        periodicidadReunionesCEI?: string | null;
        municipio: string;
        informacionContacto?: string | null;
        resolucionInvima?: string | null;
        costoEvaluacion?: number | null;
        user: string;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      ecIterations?: {
        __typename: "ModelStudyCommitteeIterationConnection";
        items: Array<{
          __typename: "StudyCommitteeIteration";
          id: string;
          studyID?: string | null;
          studyCenterCommitteeID: string;
          addendumID?: string | null;
          tipoIteracion: string;
          tipoAclaracion?: Array<string | null> | null;
          otroTipoAclaracion?: string | null;
          fechaDeSometimientoCE: string;
          fechaRespuestaCE: string;
          estadoIteracion: string;
          informacionCarta?: string | null;
          tiempoComite?: number | null;
          tiempoPatrocinador?: number | null;
          causalRetrasoPatrocinador?: string | null;
          otroCausalRetrasoPatrocinador?: string | null;
          notasDeSeguimiento?: string | null;
          user: string;
          estado: EntityState;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null>;
        nextToken?: string | null;
      } | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumConnection";
    items: Array<{
      __typename: "Addendum";
      studyID: string;
      study: {
        __typename: "Study";
        sponsorID: string;
        sponsor: {
          __typename: "Sponsor";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          correo?: string | null;
          logoURL?: string | null;
          user: string;
          informacionContacto?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        };
        cro?: {
          __typename: "CRO";
          id: string;
          estado: EntityState;
          nit?: string | null;
          nombre: string;
          informacionContacto?: string | null;
          user: string;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null;
        CIE10?: string | null;
        studyCenters?: {
          __typename: "ModelStudyCenterConnection";
          nextToken?: string | null;
        } | null;
        interruptions?: {
          __typename: "ModelInterruptionConnection";
          nextToken?: string | null;
        } | null;
        invimaIterations?: {
          __typename: "ModelInvimaIterationConnection";
          nextToken?: string | null;
        } | null;
        studyCenterCommittees?: {
          __typename: "ModelStudyCenterCommitteeConnection";
          nextToken?: string | null;
        } | null;
        addenda?: {
          __typename: "ModelAddendumConnection";
          nextToken?: string | null;
        } | null;
        id: string;
        identificador: string;
        identificadorNCT: string;
        linkClinical?: string | null;
        titulo: string;
        areasTerapeuticas: string;
        tipoPoblacion: string;
        saludPublica?: string | null;
        enfermedadHuerfana?: string | null;
        tipoEstudio: string;
        fase: string;
        fechaAprobacionCasaMatriz: string;
        fechaFactibilidadColombia?: string | null;
        enColombia?: string | null;
        motivoNoSeleccion?: string | null;
        fechaSeleccionColombia?: string | null;
        fechaRecepcionFilialColombia?: string | null;
        fechaVersionEspaniol?: string | null;
        fechaPropuestaCierreReclutamiento?: string | null;
        alcanceEstudio: string;
        codigosATC?: Array<string> | null;
        tieneCRO?: string | null;
        numeroPaisesParticipantes?: number | null;
        totalSujetosNivelGlobal?: number | null;
        fechaLiberacionProtocolo?: string | null;
        fechaPrimerPacienteGlobal?: string | null;
        fechaCierreReclutamientoGlobal?: string | null;
        numeroSujetosPlaneadosColombia?: number | null;
        porcentajeSujetosColombia?: number | null;
        fechaRecepcionPaqueteInicialColombia?: string | null;
        fechaPrimerPacienteReclutadoColombia?: string | null;
        fechaCierreReclutamientoColombia?: string | null;
        motivoDeSuspension?: string | null;
        otroMotivoDeSuspension?: string | null;
        linkDePublicacion?: string | null;
        terminadoSatisfactoriamente?: string | null;
        motivoDeTerminacion?: string | null;
        otroMotivoDeTerminacion?: string | null;
        fechaDeLicenciaKit?: string | null;
        fechaDeImportacionEnBodegaKit?: string | null;
        fechaPrimeraImportacionKit?: string | null;
        fechaDeLicenciaMedicamentos?: string | null;
        fechaDeImportacionEnBodegaMedicamentos?: string | null;
        fechaPrimeraImportacionMedicamentos?: string | null;
        estado: StudyState;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      invimaIterations?: {
        __typename: "ModelInvimaIterationConnection";
        items: Array<{
          __typename: "InvimaIteration";
          id: string;
          studyID?: string | null;
          addendumID?: string | null;
          tipoIteracion: string;
          tipoRequerimiento?: Array<string | null> | null;
          otroTipoRequerimiento?: string | null;
          fechaDeSometimiento: string;
          fechaRespuestaInvima: string;
          fechaDeNotificacion?: string | null;
          estadoIteracion: string;
          resolucion?: string | null;
          tiempoInvima?: number | null;
          tiempoPatrocinador?: number | null;
          tiempoNotificacion?: number | null;
          causalRetrasoPatrocinador?: string | null;
          otroCausalRetrasoPatrocinador?: string | null;
          notasDeSeguimiento?: string | null;
          user: string;
          estado: EntityState;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null>;
        nextToken?: string | null;
      } | null;
      centers?: {
        __typename: "ModelAddendumStudyCenterConnection";
        items: Array<{
          __typename: "AddendumStudyCenter";
          addendumID: string;
          studyCenterID: string;
          id: string;
          fechaEnvioCentro?: string | null;
          fechaReciboCentro?: string | null;
          fechaImplementacionCentro?: string | null;
          createdAt: string;
          updatedAt: string;
          version: number;
        } | null>;
        nextToken?: string | null;
      } | null;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
      estado: EntityState;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  estado: StudyState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type AddendaByStudyWithAllDataQuery = {
  __typename: "ModelAddendumConnection";
  items: Array<{
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      sponsor: {
        __typename: "Sponsor";
        id: string;
        estado: EntityState;
        nit?: string | null;
        nombre: string;
        correo?: string | null;
        logoURL?: string | null;
        user: string;
        informacionContacto?: string | null;
        createdAt: string;
        updatedAt: string;
        version: number;
      };
      cro?: {
        __typename: "CRO";
        id: string;
        estado: EntityState;
        nit?: string | null;
        nombre: string;
        informacionContacto?: string | null;
        user: string;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null;
      CIE10?: string | null;
      studyCenters?: {
        __typename: "ModelStudyCenterConnection";
        nextToken?: string | null;
      } | null;
      interruptions?: {
        __typename: "ModelInterruptionConnection";
        nextToken?: string | null;
      } | null;
      invimaIterations?: {
        __typename: "ModelInvimaIterationConnection";
        nextToken?: string | null;
      } | null;
      studyCenterCommittees?: {
        __typename: "ModelStudyCenterCommitteeConnection";
        nextToken?: string | null;
      } | null;
      addenda?: {
        __typename: "ModelAddendumConnection";
        nextToken?: string | null;
      } | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      items: Array<{
        __typename: "InvimaIteration";
        id: string;
        studyID?: string | null;
        addendumID?: string | null;
        tipoIteracion: string;
        tipoRequerimiento?: Array<string | null> | null;
        otroTipoRequerimiento?: string | null;
        fechaDeSometimiento: string;
        fechaRespuestaInvima: string;
        fechaDeNotificacion?: string | null;
        estadoIteracion: string;
        resolucion?: string | null;
        tiempoInvima?: number | null;
        tiempoPatrocinador?: number | null;
        tiempoNotificacion?: number | null;
        causalRetrasoPatrocinador?: string | null;
        otroCausalRetrasoPatrocinador?: string | null;
        notasDeSeguimiento?: string | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      items: Array<{
        __typename: "AddendumStudyCenter";
        addendumID: string;
        studyCenterID: string;
        id: string;
        fechaEnvioCentro?: string | null;
        fechaReciboCentro?: string | null;
        fechaImplementacionCentro?: string | null;
        user: string;
        estado: EntityState;
        createdAt: string;
        updatedAt: string;
        version: number;
      } | null>;
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type ListCentersByStudyIDQuery = {
  __typename: "ModelStudyCenterConnection";
  items: Array<{
    __typename: "StudyCenter";
    id: string;
    study: {
      __typename: "Study";
      id: string;
      identificador: string;
    };
    center: {
      __typename: "Center";
      nombre: string;
    };
    centerID: string;
    version: number;
  } | null>;
};

export type CreateSponsorMutation = {
  __typename: "Sponsor";
  studies?: {
    __typename: "ModelStudyConnection";
    items: Array<{
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateSponsorMutation = {
  __typename: "Sponsor";
  studies?: {
    __typename: "ModelStudyConnection";
    items: Array<{
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteSponsorMutation = {
  __typename: "Sponsor";
  studies?: {
    __typename: "ModelStudyConnection";
    items: Array<{
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateCROMutation = {
  __typename: "CRO";
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateCROMutation = {
  __typename: "CRO";
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteCROMutation = {
  __typename: "CRO";
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateCenterMutation = {
  __typename: "Center";
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateCenterMutation = {
  __typename: "Center";
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteCenterMutation = {
  __typename: "Center";
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateCommitteeMutation = {
  __typename: "Committee";
  studyCenters?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateCommitteeMutation = {
  __typename: "Committee";
  studyCenters?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteCommitteeMutation = {
  __typename: "Committee";
  studyCenters?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateInvimaIterationMutation = {
  __typename: "InvimaIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateInvimaIterationMutation = {
  __typename: "InvimaIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteInvimaIterationMutation = {
  __typename: "InvimaIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateStudyCommitteeIterationMutation = {
  __typename: "StudyCommitteeIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  studyCenterCommitteeID: string;
  studyCenterCommittee?: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateStudyCommitteeIterationMutation = {
  __typename: "StudyCommitteeIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  studyCenterCommitteeID: string;
  studyCenterCommittee?: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteStudyCommitteeIterationMutation = {
  __typename: "StudyCommitteeIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  studyCenterCommitteeID: string;
  studyCenterCommittee?: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateStudyMutation = {
  __typename: "Study";
  sponsorID: string;
  sponsor: {
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  cro?: {
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  CIE10?: string | null;
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  interruptions?: {
    __typename: "ModelInterruptionConnection";
    items: Array<{
      __typename: "Interruption";
      studyID: string;
      id: string;
      estado: EntityState;
      interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
      motivoInterrupcion: motivoInterrupcionTypeEnum;
      otroMotivoInterrupcion?: string | null;
      fechaInicialInterrupcion: string;
      fechaFinalizacionTnterrupcion?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  studyCenterCommittees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumConnection";
    items: Array<{
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateStudyMutation = {
  __typename: "Study";
  sponsorID: string;
  sponsor: {
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  cro?: {
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  CIE10?: string | null;
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  interruptions?: {
    __typename: "ModelInterruptionConnection";
    items: Array<{
      __typename: "Interruption";
      studyID: string;
      id: string;
      estado: EntityState;
      interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
      motivoInterrupcion: motivoInterrupcionTypeEnum;
      otroMotivoInterrupcion?: string | null;
      fechaInicialInterrupcion: string;
      fechaFinalizacionTnterrupcion?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  studyCenterCommittees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumConnection";
    items: Array<{
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteStudyMutation = {
  __typename: "Study";
  sponsorID: string;
  sponsor: {
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  cro?: {
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  CIE10?: string | null;
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  interruptions?: {
    __typename: "ModelInterruptionConnection";
    items: Array<{
      __typename: "Interruption";
      studyID: string;
      id: string;
      estado: EntityState;
      interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
      motivoInterrupcion: motivoInterrupcionTypeEnum;
      otroMotivoInterrupcion?: string | null;
      fechaInicialInterrupcion: string;
      fechaFinalizacionTnterrupcion?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  studyCenterCommittees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumConnection";
    items: Array<{
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateStudyCenterMutation = {
  __typename: "StudyCenter";
  committees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  studyID: string;
  centerID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  center: {
    __typename: "Center";
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit: string;
    nombre: string;
    tipoCentro?: CenterTypeEnum | null;
    nivelAtencion?: string | null;
    numeroEmpleados?: number | null;
    municipio: string;
    resolucionCertificacion?: string | null;
    resolucionVigente?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateStudyCenterMutation = {
  __typename: "StudyCenter";
  committees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  studyID: string;
  centerID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  center: {
    __typename: "Center";
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit: string;
    nombre: string;
    tipoCentro?: CenterTypeEnum | null;
    nivelAtencion?: string | null;
    numeroEmpleados?: number | null;
    municipio: string;
    resolucionCertificacion?: string | null;
    resolucionVigente?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteStudyCenterMutation = {
  __typename: "StudyCenter";
  committees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  studyID: string;
  centerID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  center: {
    __typename: "Center";
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit: string;
    nombre: string;
    tipoCentro?: CenterTypeEnum | null;
    nivelAtencion?: string | null;
    numeroEmpleados?: number | null;
    municipio: string;
    resolucionCertificacion?: string | null;
    resolucionVigente?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateStudyCenterCommitteeMutation = {
  __typename: "StudyCenterCommittee";
  id: string;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  committee: {
    __typename: "Committee";
    studyCenters?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nombre: string;
    tipoComite?: CommitteeTypeEnum | null;
    periodicidadReunionesCEI?: string | null;
    municipio: string;
    informacionContacto?: string | null;
    resolucionInvima?: string | null;
    costoEvaluacion?: number | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateStudyCenterCommitteeMutation = {
  __typename: "StudyCenterCommittee";
  id: string;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  committee: {
    __typename: "Committee";
    studyCenters?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nombre: string;
    tipoComite?: CommitteeTypeEnum | null;
    periodicidadReunionesCEI?: string | null;
    municipio: string;
    informacionContacto?: string | null;
    resolucionInvima?: string | null;
    costoEvaluacion?: number | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteStudyCenterCommitteeMutation = {
  __typename: "StudyCenterCommittee";
  id: string;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  committee: {
    __typename: "Committee";
    studyCenters?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nombre: string;
    tipoComite?: CommitteeTypeEnum | null;
    periodicidadReunionesCEI?: string | null;
    municipio: string;
    informacionContacto?: string | null;
    resolucionInvima?: string | null;
    costoEvaluacion?: number | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateInterruptionMutation = {
  __typename: "Interruption";
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyID: string;
  id: string;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateInterruptionMutation = {
  __typename: "Interruption";
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyID: string;
  id: string;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteInterruptionMutation = {
  __typename: "Interruption";
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyID: string;
  id: string;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateAddendumMutation = {
  __typename: "Addendum";
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  centers?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateAddendumMutation = {
  __typename: "Addendum";
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  centers?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteAddendumMutation = {
  __typename: "Addendum";
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  centers?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type CreateAddendumStudyCenterMutation = {
  __typename: "AddendumStudyCenter";
  addendum: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  addendumID: string;
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenterID: string;
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type UpdateAddendumStudyCenterMutation = {
  __typename: "AddendumStudyCenter";
  addendum: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  addendumID: string;
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenterID: string;
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type DeleteAddendumStudyCenterMutation = {
  __typename: "AddendumStudyCenter";
  addendum: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  addendumID: string;
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenterID: string;
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type SendNotificationQuery = {
  __typename: "SendNotificationResponse";
  result: string;
  error?: string | null;
};

export type GetAuditTraceQuery = {
  __typename: "AuditTrace";
  id: string;
  relatedEntityId: string;
  entity: string;
  eventDateTime: string;
  eventType: string;
  author: string;
  data: string;
  createdAt: string;
  updatedAt: string;
};

export type ListAuditTracesQuery = {
  __typename: "ModelAuditTraceConnection";
  items: Array<{
    __typename: "AuditTrace";
    id: string;
    relatedEntityId: string;
    entity: string;
    eventDateTime: string;
    eventType: string;
    author: string;
    data: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSponsorQuery = {
  __typename: "Sponsor";
  studies?: {
    __typename: "ModelStudyConnection";
    items: Array<{
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  correo?: string | null;
  logoURL?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListSponsorsQuery = {
  __typename: "ModelSponsorConnection";
  items: Array<{
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetCROQuery = {
  __typename: "CRO";
  id: string;
  estado: EntityState;
  nit?: string | null;
  nombre: string;
  informacionContacto?: string | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListCROsQuery = {
  __typename: "ModelCROConnection";
  items: Array<{
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetCenterQuery = {
  __typename: "Center";
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nit: string;
  nombre: string;
  tipoCentro?: CenterTypeEnum | null;
  nivelAtencion?: string | null;
  numeroEmpleados?: number | null;
  municipio: string;
  resolucionCertificacion?: string | null;
  resolucionVigente?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListCentersQuery = {
  __typename: "ModelCenterConnection";
  items: Array<{
    __typename: "Center";
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit: string;
    nombre: string;
    tipoCentro?: CenterTypeEnum | null;
    nivelAtencion?: string | null;
    numeroEmpleados?: number | null;
    municipio: string;
    resolucionCertificacion?: string | null;
    resolucionVigente?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetCommitteeQuery = {
  __typename: "Committee";
  studyCenters?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  estado: EntityState;
  nombre: string;
  tipoComite?: CommitteeTypeEnum | null;
  periodicidadReunionesCEI?: string | null;
  municipio: string;
  informacionContacto?: string | null;
  resolucionInvima?: string | null;
  costoEvaluacion?: number | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListCommitteesQuery = {
  __typename: "ModelCommitteeConnection";
  items: Array<{
    __typename: "Committee";
    studyCenters?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nombre: string;
    tipoComite?: CommitteeTypeEnum | null;
    periodicidadReunionesCEI?: string | null;
    municipio: string;
    informacionContacto?: string | null;
    resolucionInvima?: string | null;
    costoEvaluacion?: number | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetInvimaIterationQuery = {
  __typename: "InvimaIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoRequerimiento?: Array<string | null> | null;
  otroTipoRequerimiento?: string | null;
  fechaDeSometimiento: string;
  fechaRespuestaInvima: string;
  fechaDeNotificacion?: string | null;
  estadoIteracion: string;
  resolucion?: string | null;
  tiempoInvima?: number | null;
  tiempoPatrocinador?: number | null;
  tiempoNotificacion?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListInvimaIterationsQuery = {
  __typename: "ModelInvimaIterationConnection";
  items: Array<{
    __typename: "InvimaIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoRequerimiento?: Array<string | null> | null;
    otroTipoRequerimiento?: string | null;
    fechaDeSometimiento: string;
    fechaRespuestaInvima: string;
    fechaDeNotificacion?: string | null;
    estadoIteracion: string;
    resolucion?: string | null;
    tiempoInvima?: number | null;
    tiempoPatrocinador?: number | null;
    tiempoNotificacion?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetStudyCommitteeIterationQuery = {
  __typename: "StudyCommitteeIteration";
  id: string;
  studyID?: string | null;
  study?: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  studyCenterCommitteeID: string;
  studyCenterCommittee?: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  addendumID?: string | null;
  addendum?: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  tipoIteracion: string;
  tipoAclaracion?: Array<string | null> | null;
  otroTipoAclaracion?: string | null;
  fechaDeSometimientoCE: string;
  fechaRespuestaCE: string;
  estadoIteracion: string;
  informacionCarta?: string | null;
  tiempoComite?: number | null;
  tiempoPatrocinador?: number | null;
  causalRetrasoPatrocinador?: string | null;
  otroCausalRetrasoPatrocinador?: string | null;
  notasDeSeguimiento?: string | null;
  user: string;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListStudyCommitteeIterationsQuery = {
  __typename: "ModelStudyCommitteeIterationConnection";
  items: Array<{
    __typename: "StudyCommitteeIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    studyCenterCommitteeID: string;
    studyCenterCommittee?: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoAclaracion?: Array<string | null> | null;
    otroTipoAclaracion?: string | null;
    fechaDeSometimientoCE: string;
    fechaRespuestaCE: string;
    estadoIteracion: string;
    informacionCarta?: string | null;
    tiempoComite?: number | null;
    tiempoPatrocinador?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetStudyQuery = {
  __typename: "Study";
  sponsorID: string;
  sponsor: {
    __typename: "Sponsor";
    studies?: {
      __typename: "ModelStudyConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    correo?: string | null;
    logoURL?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  cro?: {
    __typename: "CRO";
    id: string;
    estado: EntityState;
    nit?: string | null;
    nombre: string;
    informacionContacto?: string | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null;
  CIE10?: string | null;
  studyCenters?: {
    __typename: "ModelStudyCenterConnection";
    items: Array<{
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  interruptions?: {
    __typename: "ModelInterruptionConnection";
    items: Array<{
      __typename: "Interruption";
      studyID: string;
      id: string;
      estado: EntityState;
      interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
      motivoInterrupcion: motivoInterrupcionTypeEnum;
      otroMotivoInterrupcion?: string | null;
      fechaInicialInterrupcion: string;
      fechaFinalizacionTnterrupcion?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  studyCenterCommittees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumConnection";
    items: Array<{
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  identificador: string;
  identificadorNCT: string;
  linkClinical?: string | null;
  titulo: string;
  areasTerapeuticas: string;
  tipoPoblacion: string;
  saludPublica?: string | null;
  enfermedadHuerfana?: string | null;
  tipoEstudio: string;
  fase: string;
  fechaAprobacionCasaMatriz: string;
  fechaFactibilidadColombia?: string | null;
  enColombia?: string | null;
  motivoNoSeleccion?: string | null;
  fechaSeleccionColombia?: string | null;
  fechaRecepcionFilialColombia?: string | null;
  fechaVersionEspaniol?: string | null;
  fechaPropuestaCierreReclutamiento?: string | null;
  alcanceEstudio: string;
  codigosATC?: Array<string> | null;
  tieneCRO?: string | null;
  numeroPaisesParticipantes?: number | null;
  totalSujetosNivelGlobal?: number | null;
  fechaLiberacionProtocolo?: string | null;
  fechaPrimerPacienteGlobal?: string | null;
  fechaCierreReclutamientoGlobal?: string | null;
  numeroSujetosPlaneadosColombia?: number | null;
  porcentajeSujetosColombia?: number | null;
  fechaRecepcionPaqueteInicialColombia?: string | null;
  fechaPrimerPacienteReclutadoColombia?: string | null;
  fechaCierreReclutamientoColombia?: string | null;
  motivoDeSuspension?: string | null;
  otroMotivoDeSuspension?: string | null;
  linkDePublicacion?: string | null;
  terminadoSatisfactoriamente?: string | null;
  motivoDeTerminacion?: string | null;
  otroMotivoDeTerminacion?: string | null;
  fechaDeLicenciaKit?: string | null;
  fechaDeImportacionEnBodegaKit?: string | null;
  fechaPrimeraImportacionKit?: string | null;
  fechaDeLicenciaMedicamentos?: string | null;
  fechaDeImportacionEnBodegaMedicamentos?: string | null;
  fechaPrimeraImportacionMedicamentos?: string | null;
  estado: StudyState;
  diasAprobacionInvimaInvima?: number | null;
  diasAprobacionInvimaPatrocinador?: number | null;
  anhoAprobacionInvima?: number | null;
  mesAprobacionInvima?: number | null;
  diasInicioEstudio?: number | null;
  anhoInicioEstudio?: number | null;
  mesInicioEstudio?: number | null;
  user: string;
  fechaAprobacionEstudioInvima?: string | null;
  fechaDeSometimientoEstudioInvima?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListStudysQuery = {
  __typename: "ModelStudyConnection";
  items: Array<{
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetStudyCenterQuery = {
  __typename: "StudyCenter";
  committees?: {
    __typename: "ModelStudyCenterCommitteeConnection";
    items: Array<{
      __typename: "StudyCenterCommittee";
      id: string;
      studyCenterID: string;
      committeeID: string;
      studyID: string;
      user: string;
      estado: EntityState;
      diasAprobacionCentroCentro?: number | null;
      diasAprobacionCentroPatrocinador?: number | null;
      anhoAprobacionCentro?: number | null;
      mesAprobacionCentro?: number | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  addenda?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  studyID: string;
  centerID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  center: {
    __typename: "Center";
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nit: string;
    nombre: string;
    tipoCentro?: CenterTypeEnum | null;
    nivelAtencion?: string | null;
    numeroEmpleados?: number | null;
    municipio: string;
    resolucionCertificacion?: string | null;
    resolucionVigente?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  user: string;
  costoPorPaciente?: number | null;
  fechaRecepcionPaquete?: string | null;
  fechaRecepcionContrato?: string | null;
  fechaFirmaContrato?: string | null;
  fechaFirmaContratoPatrocinador?: string | null;
  fechaAprobacionInvima?: string | null;
  fechaActivacionCentro?: string | null;
  cantidadPacientesPrevistos?: number | null;
  cantidadPacientesIncluidos?: number | null;
  fechaPrimerPacienteSeleccionado?: string | null;
  fechaPrimerPacienteAleatorizado?: string | null;
  estado: EntityState;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListStudyCentersQuery = {
  __typename: "ModelStudyCenterConnection";
  items: Array<{
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetStudyCenterCommitteeQuery = {
  __typename: "StudyCenterCommittee";
  id: string;
  studyCenterID: string;
  committeeID: string;
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  committee: {
    __typename: "Committee";
    studyCenters?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    estado: EntityState;
    nombre: string;
    tipoComite?: CommitteeTypeEnum | null;
    periodicidadReunionesCEI?: string | null;
    municipio: string;
    informacionContacto?: string | null;
    resolucionInvima?: string | null;
    costoEvaluacion?: number | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  estado: EntityState;
  diasAprobacionCentroCentro?: number | null;
  diasAprobacionCentroPatrocinador?: number | null;
  anhoAprobacionCentro?: number | null;
  mesAprobacionCentro?: number | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListStudyCenterCommitteesQuery = {
  __typename: "ModelStudyCenterCommitteeConnection";
  items: Array<{
    __typename: "StudyCenterCommittee";
    id: string;
    studyCenterID: string;
    committeeID: string;
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    committee: {
      __typename: "Committee";
      id: string;
      estado: EntityState;
      nombre: string;
      tipoComite?: CommitteeTypeEnum | null;
      periodicidadReunionesCEI?: string | null;
      municipio: string;
      informacionContacto?: string | null;
      resolucionInvima?: string | null;
      costoEvaluacion?: number | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    estado: EntityState;
    diasAprobacionCentroCentro?: number | null;
    diasAprobacionCentroPatrocinador?: number | null;
    anhoAprobacionCentro?: number | null;
    mesAprobacionCentro?: number | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetInterruptionQuery = {
  __typename: "Interruption";
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyID: string;
  id: string;
  estado: EntityState;
  interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
  motivoInterrupcion: motivoInterrupcionTypeEnum;
  otroMotivoInterrupcion?: string | null;
  fechaInicialInterrupcion: string;
  fechaFinalizacionTnterrupcion?: string | null;
  user: string;
  informacionContacto?: string | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListInterruptionsQuery = {
  __typename: "ModelInterruptionConnection";
  items: Array<{
    __typename: "Interruption";
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyID: string;
    id: string;
    estado: EntityState;
    interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
    motivoInterrupcion: motivoInterrupcionTypeEnum;
    otroMotivoInterrupcion?: string | null;
    fechaInicialInterrupcion: string;
    fechaFinalizacionTnterrupcion?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetAddendumQuery = {
  __typename: "Addendum";
  studyID: string;
  study: {
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  invimaIterations?: {
    __typename: "ModelInvimaIterationConnection";
    items: Array<{
      __typename: "InvimaIteration";
      id: string;
      studyID?: string | null;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoRequerimiento?: Array<string | null> | null;
      otroTipoRequerimiento?: string | null;
      fechaDeSometimiento: string;
      fechaRespuestaInvima: string;
      fechaDeNotificacion?: string | null;
      estadoIteracion: string;
      resolucion?: string | null;
      tiempoInvima?: number | null;
      tiempoPatrocinador?: number | null;
      tiempoNotificacion?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  centers?: {
    __typename: "ModelAddendumStudyCenterConnection";
    items: Array<{
      __typename: "AddendumStudyCenter";
      addendumID: string;
      studyCenterID: string;
      id: string;
      fechaEnvioCentro?: string | null;
      fechaReciboCentro?: string | null;
      fechaImplementacionCentro?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  descripcion: string;
  fechaCasaMatriz?: string | null;
  fechaRecepcionPaquete?: string | null;
  fechaVersionEspanol?: string | null;
  primerPaisImplementacion?: string | null;
  fechaImplementacionPais?: string | null;
  estado: EntityState;
  user: string;
  tiemposInvima?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListAddendumsQuery = {
  __typename: "ModelAddendumConnection";
  items: Array<{
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetAddendumStudyCenterQuery = {
  __typename: "AddendumStudyCenter";
  addendum: {
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  addendumID: string;
  studyCenter: {
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
  studyCenterID: string;
  ecIterations?: {
    __typename: "ModelStudyCommitteeIterationConnection";
    items: Array<{
      __typename: "StudyCommitteeIteration";
      id: string;
      studyID?: string | null;
      studyCenterCommitteeID: string;
      addendumID?: string | null;
      tipoIteracion: string;
      tipoAclaracion?: Array<string | null> | null;
      otroTipoAclaracion?: string | null;
      fechaDeSometimientoCE: string;
      fechaRespuestaCE: string;
      estadoIteracion: string;
      informacionCarta?: string | null;
      tiempoComite?: number | null;
      tiempoPatrocinador?: number | null;
      causalRetrasoPatrocinador?: string | null;
      otroCausalRetrasoPatrocinador?: string | null;
      notasDeSeguimiento?: string | null;
      user: string;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  fechaEnvioCentro?: string | null;
  fechaReciboCentro?: string | null;
  fechaImplementacionCentro?: string | null;
  user: string;
  estado: EntityState;
  tiemposCentro?: {
    __typename: "TimeRecord";
    nombre?: string | null;
    dias?: number | null;
    diasPatrocinador?: number | null;
    mes?: number | null;
    anho?: number | null;
    fechaInicial?: string | null;
    fechaFinal?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type ListAddendumStudyCentersQuery = {
  __typename: "ModelAddendumStudyCenterConnection";
  items: Array<{
    __typename: "AddendumStudyCenter";
    addendum: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    addendumID: string;
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenterID: string;
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    fechaEnvioCentro?: string | null;
    fechaReciboCentro?: string | null;
    fechaImplementacionCentro?: string | null;
    user: string;
    estado: EntityState;
    tiemposCentro?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type GetAuditInfoQuery = {
  __typename: "ModelAuditTraceConnection";
  items: Array<{
    __typename: "AuditTrace";
    id: string;
    relatedEntityId: string;
    entity: string;
    eventDateTime: string;
    eventType: string;
    author: string;
    data: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type IteracionesByStudyQuery = {
  __typename: "ModelInvimaIterationConnection";
  items: Array<{
    __typename: "InvimaIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoRequerimiento?: Array<string | null> | null;
    otroTipoRequerimiento?: string | null;
    fechaDeSometimiento: string;
    fechaRespuestaInvima: string;
    fechaDeNotificacion?: string | null;
    estadoIteracion: string;
    resolucion?: string | null;
    tiempoInvima?: number | null;
    tiempoPatrocinador?: number | null;
    tiempoNotificacion?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type IteracionesInvimaByAddendumQuery = {
  __typename: "ModelInvimaIterationConnection";
  items: Array<{
    __typename: "InvimaIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoRequerimiento?: Array<string | null> | null;
    otroTipoRequerimiento?: string | null;
    fechaDeSometimiento: string;
    fechaRespuestaInvima: string;
    fechaDeNotificacion?: string | null;
    estadoIteracion: string;
    resolucion?: string | null;
    tiempoInvima?: number | null;
    tiempoPatrocinador?: number | null;
    tiempoNotificacion?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type CommitteeIterationsByStudyQuery = {
  __typename: "ModelStudyCommitteeIterationConnection";
  items: Array<{
    __typename: "StudyCommitteeIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    studyCenterCommitteeID: string;
    studyCenterCommittee?: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoAclaracion?: Array<string | null> | null;
    otroTipoAclaracion?: string | null;
    fechaDeSometimientoCE: string;
    fechaRespuestaCE: string;
    estadoIteracion: string;
    informacionCarta?: string | null;
    tiempoComite?: number | null;
    tiempoPatrocinador?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type CommitteeIterationsByiamCommitteeQuery = {
  __typename: "ModelStudyCommitteeIterationConnection";
  items: Array<{
    __typename: "StudyCommitteeIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    studyCenterCommitteeID: string;
    studyCenterCommittee?: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoAclaracion?: Array<string | null> | null;
    otroTipoAclaracion?: string | null;
    fechaDeSometimientoCE: string;
    fechaRespuestaCE: string;
    estadoIteracion: string;
    informacionCarta?: string | null;
    tiempoComite?: number | null;
    tiempoPatrocinador?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type IteracionesCEByAddendumQuery = {
  __typename: "ModelStudyCommitteeIterationConnection";
  items: Array<{
    __typename: "StudyCommitteeIteration";
    id: string;
    studyID?: string | null;
    study?: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    studyCenterCommitteeID: string;
    studyCenterCommittee?: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    addendumID?: string | null;
    addendum?: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    tipoIteracion: string;
    tipoAclaracion?: Array<string | null> | null;
    otroTipoAclaracion?: string | null;
    fechaDeSometimientoCE: string;
    fechaRespuestaCE: string;
    estadoIteracion: string;
    informacionCarta?: string | null;
    tiempoComite?: number | null;
    tiempoPatrocinador?: number | null;
    causalRetrasoPatrocinador?: string | null;
    otroCausalRetrasoPatrocinador?: string | null;
    notasDeSeguimiento?: string | null;
    user: string;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudiesBySponsorQuery = {
  __typename: "ModelStudyConnection";
  items: Array<{
    __typename: "Study";
    sponsorID: string;
    sponsor: {
      __typename: "Sponsor";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      correo?: string | null;
      logoURL?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    cro?: {
      __typename: "CRO";
      id: string;
      estado: EntityState;
      nit?: string | null;
      nombre: string;
      informacionContacto?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | null;
    CIE10?: string | null;
    studyCenters?: {
      __typename: "ModelStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    interruptions?: {
      __typename: "ModelInterruptionConnection";
      nextToken?: string | null;
    } | null;
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    studyCenterCommittees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    identificador: string;
    identificadorNCT: string;
    linkClinical?: string | null;
    titulo: string;
    areasTerapeuticas: string;
    tipoPoblacion: string;
    saludPublica?: string | null;
    enfermedadHuerfana?: string | null;
    tipoEstudio: string;
    fase: string;
    fechaAprobacionCasaMatriz: string;
    fechaFactibilidadColombia?: string | null;
    enColombia?: string | null;
    motivoNoSeleccion?: string | null;
    fechaSeleccionColombia?: string | null;
    fechaRecepcionFilialColombia?: string | null;
    fechaVersionEspaniol?: string | null;
    fechaPropuestaCierreReclutamiento?: string | null;
    alcanceEstudio: string;
    codigosATC?: Array<string> | null;
    tieneCRO?: string | null;
    numeroPaisesParticipantes?: number | null;
    totalSujetosNivelGlobal?: number | null;
    fechaLiberacionProtocolo?: string | null;
    fechaPrimerPacienteGlobal?: string | null;
    fechaCierreReclutamientoGlobal?: string | null;
    numeroSujetosPlaneadosColombia?: number | null;
    porcentajeSujetosColombia?: number | null;
    fechaRecepcionPaqueteInicialColombia?: string | null;
    fechaPrimerPacienteReclutadoColombia?: string | null;
    fechaCierreReclutamientoColombia?: string | null;
    motivoDeSuspension?: string | null;
    otroMotivoDeSuspension?: string | null;
    linkDePublicacion?: string | null;
    terminadoSatisfactoriamente?: string | null;
    motivoDeTerminacion?: string | null;
    otroMotivoDeTerminacion?: string | null;
    fechaDeLicenciaKit?: string | null;
    fechaDeImportacionEnBodegaKit?: string | null;
    fechaPrimeraImportacionKit?: string | null;
    fechaDeLicenciaMedicamentos?: string | null;
    fechaDeImportacionEnBodegaMedicamentos?: string | null;
    fechaPrimeraImportacionMedicamentos?: string | null;
    estado: StudyState;
    diasAprobacionInvimaInvima?: number | null;
    diasAprobacionInvimaPatrocinador?: number | null;
    anhoAprobacionInvima?: number | null;
    mesAprobacionInvima?: number | null;
    diasInicioEstudio?: number | null;
    anhoInicioEstudio?: number | null;
    mesInicioEstudio?: number | null;
    user: string;
    fechaAprobacionEstudioInvima?: string | null;
    fechaDeSometimientoEstudioInvima?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudyCenterByStudyQuery = {
  __typename: "ModelStudyCenterConnection";
  items: Array<{
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudyCenterByCenterQuery = {
  __typename: "ModelStudyCenterConnection";
  items: Array<{
    __typename: "StudyCenter";
    committees?: {
      __typename: "ModelStudyCenterCommitteeConnection";
      nextToken?: string | null;
    } | null;
    addenda?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    studyID: string;
    centerID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    center: {
      __typename: "Center";
      id: string;
      estado: EntityState;
      nit: string;
      nombre: string;
      tipoCentro?: CenterTypeEnum | null;
      nivelAtencion?: string | null;
      numeroEmpleados?: number | null;
      municipio: string;
      resolucionCertificacion?: string | null;
      resolucionVigente?: string | null;
      user: string;
      informacionContacto?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    user: string;
    costoPorPaciente?: number | null;
    fechaRecepcionPaquete?: string | null;
    fechaRecepcionContrato?: string | null;
    fechaFirmaContrato?: string | null;
    fechaFirmaContratoPatrocinador?: string | null;
    fechaAprobacionInvima?: string | null;
    fechaActivacionCentro?: string | null;
    cantidadPacientesPrevistos?: number | null;
    cantidadPacientesIncluidos?: number | null;
    fechaPrimerPacienteSeleccionado?: string | null;
    fechaPrimerPacienteAleatorizado?: string | null;
    estado: EntityState;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudyCenterComiteesByStudyCenterQuery = {
  __typename: "ModelStudyCenterCommitteeConnection";
  items: Array<{
    __typename: "StudyCenterCommittee";
    id: string;
    studyCenterID: string;
    committeeID: string;
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    committee: {
      __typename: "Committee";
      id: string;
      estado: EntityState;
      nombre: string;
      tipoComite?: CommitteeTypeEnum | null;
      periodicidadReunionesCEI?: string | null;
      municipio: string;
      informacionContacto?: string | null;
      resolucionInvima?: string | null;
      costoEvaluacion?: number | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    estado: EntityState;
    diasAprobacionCentroCentro?: number | null;
    diasAprobacionCentroPatrocinador?: number | null;
    anhoAprobacionCentro?: number | null;
    mesAprobacionCentro?: number | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudyCenterComiteesByComiteeQuery = {
  __typename: "ModelStudyCenterCommitteeConnection";
  items: Array<{
    __typename: "StudyCenterCommittee";
    id: string;
    studyCenterID: string;
    committeeID: string;
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    committee: {
      __typename: "Committee";
      id: string;
      estado: EntityState;
      nombre: string;
      tipoComite?: CommitteeTypeEnum | null;
      periodicidadReunionesCEI?: string | null;
      municipio: string;
      informacionContacto?: string | null;
      resolucionInvima?: string | null;
      costoEvaluacion?: number | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    estado: EntityState;
    diasAprobacionCentroCentro?: number | null;
    diasAprobacionCentroPatrocinador?: number | null;
    anhoAprobacionCentro?: number | null;
    mesAprobacionCentro?: number | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type StudyCenterComiteesByStudyQuery = {
  __typename: "ModelStudyCenterCommitteeConnection";
  items: Array<{
    __typename: "StudyCenterCommittee";
    id: string;
    studyCenterID: string;
    committeeID: string;
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    committee: {
      __typename: "Committee";
      id: string;
      estado: EntityState;
      nombre: string;
      tipoComite?: CommitteeTypeEnum | null;
      periodicidadReunionesCEI?: string | null;
      municipio: string;
      informacionContacto?: string | null;
      resolucionInvima?: string | null;
      costoEvaluacion?: number | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    estado: EntityState;
    diasAprobacionCentroCentro?: number | null;
    diasAprobacionCentroPatrocinador?: number | null;
    anhoAprobacionCentro?: number | null;
    mesAprobacionCentro?: number | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type InterruptionByStudyQuery = {
  __typename: "ModelInterruptionConnection";
  items: Array<{
    __typename: "Interruption";
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyID: string;
    id: string;
    estado: EntityState;
    interrupcionReclutamiento?: InterrupcionReclutamientoTypeEnum | null;
    motivoInterrupcion: motivoInterrupcionTypeEnum;
    otroMotivoInterrupcion?: string | null;
    fechaInicialInterrupcion: string;
    fechaFinalizacionTnterrupcion?: string | null;
    user: string;
    informacionContacto?: string | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type AddendaByStudyQuery = {
  __typename: "ModelAddendumConnection";
  items: Array<{
    __typename: "Addendum";
    studyID: string;
    study: {
      __typename: "Study";
      sponsorID: string;
      CIE10?: string | null;
      id: string;
      identificador: string;
      identificadorNCT: string;
      linkClinical?: string | null;
      titulo: string;
      areasTerapeuticas: string;
      tipoPoblacion: string;
      saludPublica?: string | null;
      enfermedadHuerfana?: string | null;
      tipoEstudio: string;
      fase: string;
      fechaAprobacionCasaMatriz: string;
      fechaFactibilidadColombia?: string | null;
      enColombia?: string | null;
      motivoNoSeleccion?: string | null;
      fechaSeleccionColombia?: string | null;
      fechaRecepcionFilialColombia?: string | null;
      fechaVersionEspaniol?: string | null;
      fechaPropuestaCierreReclutamiento?: string | null;
      alcanceEstudio: string;
      codigosATC?: Array<string> | null;
      tieneCRO?: string | null;
      numeroPaisesParticipantes?: number | null;
      totalSujetosNivelGlobal?: number | null;
      fechaLiberacionProtocolo?: string | null;
      fechaPrimerPacienteGlobal?: string | null;
      fechaCierreReclutamientoGlobal?: string | null;
      numeroSujetosPlaneadosColombia?: number | null;
      porcentajeSujetosColombia?: number | null;
      fechaRecepcionPaqueteInicialColombia?: string | null;
      fechaPrimerPacienteReclutadoColombia?: string | null;
      fechaCierreReclutamientoColombia?: string | null;
      motivoDeSuspension?: string | null;
      otroMotivoDeSuspension?: string | null;
      linkDePublicacion?: string | null;
      terminadoSatisfactoriamente?: string | null;
      motivoDeTerminacion?: string | null;
      otroMotivoDeTerminacion?: string | null;
      fechaDeLicenciaKit?: string | null;
      fechaDeImportacionEnBodegaKit?: string | null;
      fechaPrimeraImportacionKit?: string | null;
      fechaDeLicenciaMedicamentos?: string | null;
      fechaDeImportacionEnBodegaMedicamentos?: string | null;
      fechaPrimeraImportacionMedicamentos?: string | null;
      estado: StudyState;
      diasAprobacionInvimaInvima?: number | null;
      diasAprobacionInvimaPatrocinador?: number | null;
      anhoAprobacionInvima?: number | null;
      mesAprobacionInvima?: number | null;
      diasInicioEstudio?: number | null;
      anhoInicioEstudio?: number | null;
      mesInicioEstudio?: number | null;
      user: string;
      fechaAprobacionEstudioInvima?: string | null;
      fechaDeSometimientoEstudioInvima?: string | null;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    invimaIterations?: {
      __typename: "ModelInvimaIterationConnection";
      nextToken?: string | null;
    } | null;
    centers?: {
      __typename: "ModelAddendumStudyCenterConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    descripcion: string;
    fechaCasaMatriz?: string | null;
    fechaRecepcionPaquete?: string | null;
    fechaVersionEspanol?: string | null;
    primerPaisImplementacion?: string | null;
    fechaImplementacionPais?: string | null;
    estado: EntityState;
    user: string;
    tiemposInvima?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type AddendumStudyCenterByAddendumQuery = {
  __typename: "ModelAddendumStudyCenterConnection";
  items: Array<{
    __typename: "AddendumStudyCenter";
    addendum: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    addendumID: string;
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenterID: string;
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    fechaEnvioCentro?: string | null;
    fechaReciboCentro?: string | null;
    fechaImplementacionCentro?: string | null;
    user: string;
    estado: EntityState;
    tiemposCentro?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

export type AddendumStudyCenterByStudyCenterQuery = {
  __typename: "ModelAddendumStudyCenterConnection";
  items: Array<{
    __typename: "AddendumStudyCenter";
    addendum: {
      __typename: "Addendum";
      studyID: string;
      id: string;
      descripcion: string;
      fechaCasaMatriz?: string | null;
      fechaRecepcionPaquete?: string | null;
      fechaVersionEspanol?: string | null;
      primerPaisImplementacion?: string | null;
      fechaImplementacionPais?: string | null;
      estado: EntityState;
      user: string;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    addendumID: string;
    studyCenter: {
      __typename: "StudyCenter";
      id: string;
      studyID: string;
      centerID: string;
      user: string;
      costoPorPaciente?: number | null;
      fechaRecepcionPaquete?: string | null;
      fechaRecepcionContrato?: string | null;
      fechaFirmaContrato?: string | null;
      fechaFirmaContratoPatrocinador?: string | null;
      fechaAprobacionInvima?: string | null;
      fechaActivacionCentro?: string | null;
      cantidadPacientesPrevistos?: number | null;
      cantidadPacientesIncluidos?: number | null;
      fechaPrimerPacienteSeleccionado?: string | null;
      fechaPrimerPacienteAleatorizado?: string | null;
      estado: EntityState;
      createdAt: string;
      updatedAt: string;
      version: number;
    };
    studyCenterID: string;
    ecIterations?: {
      __typename: "ModelStudyCommitteeIterationConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    fechaEnvioCentro?: string | null;
    fechaReciboCentro?: string | null;
    fechaImplementacionCentro?: string | null;
    user: string;
    estado: EntityState;
    tiemposCentro?: {
      __typename: "TimeRecord";
      nombre?: string | null;
      dias?: number | null;
      diasPatrocinador?: number | null;
      mes?: number | null;
      anho?: number | null;
      fechaInicial?: string | null;
      fechaFinal?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    version: number;
  } | null>;
  nextToken?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async AddendumStudyCenterByAddendumWithAllData(
    addendumID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddendumStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddendumStudyCenterByAddendumWithAllDataQuery> {
    const statement = `query AddendumStudyCenterByAddendumWithAllData($addendumID: ID!, $sortDirection: ModelSortDirection, $filter: ModelAddendumStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        AddendumStudyCenterByAddendum(
          addendumID: $addendumID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            addendum {
              __typename
              studyID
              study {
                __typename
                sponsorID
                CIE10
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                diasAprobacionInvimaInvima
                diasAprobacionInvimaPatrocinador
                anhoAprobacionInvima
                mesAprobacionInvima
                diasInicioEstudio
                anhoInicioEstudio
                mesInicioEstudio
                fechaAprobacionEstudioInvima
                fechaDeSometimientoEstudioInvima
                createdAt
                updatedAt
                version
              }
              invimaIterations {
                __typename
                nextToken
              }
              centers {
                __typename
                nextToken
              }
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              createdAt
              updatedAt
              version
            }
            addendumID
            studyCenter {
              __typename
              committees {
                __typename
                nextToken
              }
              addenda {
                __typename
                nextToken
              }
              id
              studyID
              centerID
              study {
                __typename
                sponsorID
                CIE10
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                diasAprobacionInvimaInvima
                diasAprobacionInvimaPatrocinador
                anhoAprobacionInvima
                mesAprobacionInvima
                diasInicioEstudio
                anhoInicioEstudio
                mesInicioEstudio
                fechaAprobacionEstudioInvima
                fechaDeSometimientoEstudioInvima
                createdAt
                updatedAt
                version
              }
              center {
                __typename
                id
                estado
                nit
                nombre
                tipoCentro
                nivelAtencion
                numeroEmpleados
                municipio
                resolucionCertificacion
                resolucionVigente
                user
                informacionContacto
                createdAt
                updatedAt
                version
              }
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            studyCenterID
            ecIterations {
              __typename
              items {
                __typename
                id
                studyID
                studyCenterCommitteeID
                addendumID
                tipoIteracion
                tipoAclaracion
                otroTipoAclaracion
                fechaDeSometimientoCE
                fechaRespuestaCE
                estadoIteracion
                informacionCarta
                tiempoComite
                tiempoPatrocinador
                causalRetrasoPatrocinador
                otroCausalRetrasoPatrocinador
                notasDeSeguimiento
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            id
            fechaEnvioCentro
            fechaReciboCentro
            fechaImplementacionCentro
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      addendumID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddendumStudyCenterByAddendumWithAllDataQuery>(
      response.data.AddendumStudyCenterByAddendum
    );
  }
  async StudiesBySponsorWithAllData(
    sponsorID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudiesBySponsorWithAllDataQuery> {
    const statement = `query StudiesBySponsorWithAllData($sponsorID: ID!, $sortDirection: ModelSortDirection, $filter: ModelStudyFilterInput, $limit: Int, $nextToken: String) {
        studiesBySponsor(
          sponsorID: $sponsorID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            sponsorID
            sponsor {
              __typename
              studies {
                __typename
                items {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                nextToken
              }
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                committees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                studyID
                centerID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                center {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  tipoCentro
                  nivelAtencion
                  numeroEmpleados
                  municipio
                  resolucionCertificacion
                  resolucionVigente
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                user
                costoPorPaciente
                fechaRecepcionPaquete
                fechaRecepcionContrato
                fechaFirmaContrato
                fechaFirmaContratoPatrocinador
                fechaAprobacionInvima
                fechaActivacionCentro
                cantidadPacientesPrevistos
                cantidadPacientesIncluidos
                fechaPrimerPacienteSeleccionado
                fechaPrimerPacienteAleatorizado
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            interruptions {
              __typename
              items {
                __typename
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                studyID
                id
                estado
                interrupcionReclutamiento
                motivoInterrupcion
                otroMotivoInterrupcion
                fechaInicialInterrupcion
                fechaFinalizacionTnterrupcion
                user
                informacionContacto
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            invimaIterations {
              __typename
              items {
                __typename
                id
                studyID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                addendumID
                addendum {
                  __typename
                  studyID
                  id
                  descripcion
                  fechaCasaMatriz
                  fechaRecepcionPaquete
                  fechaVersionEspanol
                  primerPaisImplementacion
                  fechaImplementacionPais
                  createdAt
                  updatedAt
                  version
                }
                tipoIteracion
                tipoRequerimiento
                otroTipoRequerimiento
                fechaDeSometimiento
                fechaRespuestaInvima
                fechaDeNotificacion
                estadoIteracion
                resolucion
                tiempoInvima
                tiempoPatrocinador
                tiempoNotificacion
                causalRetrasoPatrocinador
                otroCausalRetrasoPatrocinador
                notasDeSeguimiento
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            studyCenterCommittees(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                id
                studyCenterID
                committeeID
                studyID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  fechaAprobacionEstudioInvima
                  fechaDeSometimientoEstudioInvima
                  estado
                  createdAt
                  updatedAt
                  version
                }
                studyCenter {
                  __typename
                  id
                  studyID
                  centerID
                  user
                  costoPorPaciente
                  fechaRecepcionPaquete
                  fechaRecepcionContrato
                  fechaFirmaContrato
                  fechaFirmaContratoPatrocinador
                  fechaAprobacionInvima
                  fechaActivacionCentro
                  cantidadPacientesPrevistos
                  cantidadPacientesIncluidos
                  fechaPrimerPacienteSeleccionado
                  fechaPrimerPacienteAleatorizado
                  estado
                  createdAt
                  updatedAt
                  version
                }
                committee {
                  __typename
                  id
                  estado
                  nombre
                  tipoComite
                  periodicidadReunionesCEI
                  municipio
                  informacionContacto
                  resolucionInvima
                  costoEvaluacion
                  user
                  createdAt
                  updatedAt
                  version
                }
                ecIterations {
                  __typename
                  nextToken
                }
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            addenda(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                studyID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  fechaAprobacionEstudioInvima
                  fechaDeSometimientoEstudioInvima
                  estado
                  createdAt
                  updatedAt
                  version
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                centers {
                  __typename
                  nextToken
                }
                id
                descripcion
                fechaCasaMatriz
                fechaRecepcionPaquete
                fechaVersionEspanol
                primerPaisImplementacion
                fechaImplementacionPais
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      sponsorID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudiesBySponsorWithAllDataQuery>response.data.studiesBySponsor;
  }
  async ListStudysWithAllData(
    filter?: ModelStudyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudysWithAllDataQuery> {
    const statement = `query ListStudysWithAllData($filter: ModelStudyFilterInput, $limit: Int, $nextToken: String) {
        listStudys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            sponsorID
            sponsor {
              __typename
              nombre
            }
            cro {
              __typename
              nombre
            }
            studyCenters(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                committees {
                  __typename
                  nextToken
                }
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                center {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  tipoCentro
                  nivelAtencion
                  numeroEmpleados
                  municipio
                  resolucionCertificacion
                  resolucionVigente
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
              }
              nextToken
            }
            invimaIterations {
              __typename
              items {
                __typename
                id
                tipoIteracion
                tipoRequerimiento
                otroTipoRequerimiento
                fechaDeSometimiento
                fechaRespuestaInvima
                fechaDeNotificacion
                estadoIteracion
                resolucion
                tiempoInvima
                tiempoPatrocinador
                tiempoNotificacion
                causalRetrasoPatrocinador
                otroCausalRetrasoPatrocinador
                notasDeSeguimiento
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            studyCenterCommittees(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                id
                studyCenterID
                committeeID
                studyID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                studyCenter {
                  __typename
                  id
                  studyID
                  centerID
                  user
                  costoPorPaciente
                  fechaRecepcionPaquete
                  fechaRecepcionContrato
                  fechaFirmaContrato
                  fechaFirmaContratoPatrocinador
                  fechaAprobacionInvima
                  fechaActivacionCentro
                  cantidadPacientesPrevistos
                  cantidadPacientesIncluidos
                  fechaPrimerPacienteSeleccionado
                  fechaPrimerPacienteAleatorizado
                  estado
                  createdAt
                  updatedAt
                  version
                }
                committee {
                  __typename
                  id
                  estado
                  nombre
                  tipoComite
                  periodicidadReunionesCEI
                  municipio
                  informacionContacto
                  resolucionInvima
                  costoEvaluacion
                  user
                  createdAt
                  updatedAt
                  version
                }
                ecIterations {
                  __typename
                  nextToken
                }
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            addenda(filter: {estado: {ne: DELETED}}) {
              __typename
              items {
                __typename
                id
                descripcion
                fechaCasaMatriz
                fechaRecepcionPaquete
                fechaVersionEspanol
                primerPaisImplementacion
                fechaImplementacionPais
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudysWithAllDataQuery>response.data.listStudys;
  }
  async GetStudyWithAllData(id: string): Promise<GetStudyWithAllDataQuery> {
    const statement = `query GetStudyWithAllData($id: ID!) {
        getStudy(id: $id) {
          __typename
          sponsorID
          sponsor {
            __typename
            studies {
              __typename
              items {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          cro {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          CIE10
          studyCenters(filter: {estado: {ne: DELETED}}) {
            __typename
            items {
              __typename
              committees {
                __typename
                items {
                  __typename
                  id
                  studyCenterID
                  committeeID
                  studyID
                  user
                  estado
                  createdAt
                  updatedAt
                  version
                }
                nextToken
              }
              addenda {
                __typename
                items {
                  __typename
                  addendumID
                  studyCenterID
                  id
                  fechaEnvioCentro
                  fechaReciboCentro
                  fechaImplementacionCentro
                  createdAt
                  updatedAt
                  version
                  estado
                }
                nextToken
              }
              id
              studyID
              centerID
              study {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              center {
                __typename
                studyCenters {
                  __typename
                  nextToken
                }
                id
                estado
                nit
                nombre
                tipoCentro
                nivelAtencion
                numeroEmpleados
                municipio
                resolucionCertificacion
                resolucionVigente
                user
                informacionContacto
                createdAt
                updatedAt
                version
              }
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          interruptions(filter: {estado: {ne: DELETED}}) {
            __typename
            items {
              __typename
              study {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              studyID
              id
              estado
              interrupcionReclutamiento
              motivoInterrupcion
              otroMotivoInterrupcion
              fechaInicialInterrupcion
              fechaFinalizacionTnterrupcion
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          invimaIterations(filter: {estado: {ne: DELETED}}) {
            __typename
            items {
              __typename
              id
              studyID
              study {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              addendumID
              addendum {
                __typename
                studyID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                centers {
                  __typename
                  nextToken
                }
                id
                descripcion
                fechaCasaMatriz
                fechaRecepcionPaquete
                fechaVersionEspanol
                primerPaisImplementacion
                fechaImplementacionPais
                createdAt
                updatedAt
                version
                estado
              }
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          studyCenterCommittees(filter: {estado: {ne: DELETED}}) {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              study {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              studyCenter {
                __typename
                committees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                studyID
                centerID
                study {
                  __typename
                  sponsorID
                  CIE10
                  id
                  identificador
                  identificadorNCT
                  linkClinical
                  titulo
                  areasTerapeuticas
                  tipoPoblacion
                  saludPublica
                  enfermedadHuerfana
                  tipoEstudio
                  fase
                  fechaAprobacionCasaMatriz
                  fechaFactibilidadColombia
                  enColombia
                  motivoNoSeleccion
                  fechaSeleccionColombia
                  fechaRecepcionFilialColombia
                  fechaVersionEspaniol
                  fechaPropuestaCierreReclutamiento
                  alcanceEstudio
                  codigosATC
                  tieneCRO
                  numeroPaisesParticipantes
                  totalSujetosNivelGlobal
                  fechaLiberacionProtocolo
                  fechaPrimerPacienteGlobal
                  fechaCierreReclutamientoGlobal
                  numeroSujetosPlaneadosColombia
                  porcentajeSujetosColombia
                  fechaRecepcionPaqueteInicialColombia
                  fechaPrimerPacienteReclutadoColombia
                  fechaCierreReclutamientoColombia
                  motivoDeSuspension
                  otroMotivoDeSuspension
                  linkDePublicacion
                  terminadoSatisfactoriamente
                  motivoDeTerminacion
                  otroMotivoDeTerminacion
                  fechaDeLicenciaKit
                  fechaDeImportacionEnBodegaKit
                  fechaPrimeraImportacionKit
                  fechaDeLicenciaMedicamentos
                  fechaDeImportacionEnBodegaMedicamentos
                  fechaPrimeraImportacionMedicamentos
                  estado
                  createdAt
                  updatedAt
                  version
                }
                center {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  tipoCentro
                  nivelAtencion
                  numeroEmpleados
                  municipio
                  resolucionCertificacion
                  resolucionVigente
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                user
                costoPorPaciente
                fechaRecepcionPaquete
                fechaRecepcionContrato
                fechaFirmaContrato
                fechaFirmaContratoPatrocinador
                fechaAprobacionInvima
                fechaActivacionCentro
                cantidadPacientesPrevistos
                cantidadPacientesIncluidos
                fechaPrimerPacienteSeleccionado
                fechaPrimerPacienteAleatorizado
                estado
                createdAt
                updatedAt
                version
              }
              committee {
                __typename
                studyCenters {
                  __typename
                  nextToken
                }
                id
                estado
                nombre
                tipoComite
                periodicidadReunionesCEI
                municipio
                informacionContacto
                resolucionInvima
                costoEvaluacion
                user
                createdAt
                updatedAt
                version
              }
              ecIterations {
                __typename
                items {
                  __typename
                  id
                  studyID
                  studyCenterCommitteeID
                  addendumID
                  tipoIteracion
                  tipoAclaracion
                  otroTipoAclaracion
                  fechaDeSometimientoCE
                  fechaRespuestaCE
                  estadoIteracion
                  informacionCarta
                  tiempoComite
                  tiempoPatrocinador
                  causalRetrasoPatrocinador
                  otroCausalRetrasoPatrocinador
                  notasDeSeguimiento
                  user
                  estado
                  createdAt
                  updatedAt
                  version
                }
                nextToken
              }
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda(filter: {estado: {ne: DELETED}}) {
            __typename
            items {
              __typename
              studyID
              study {
                __typename
                sponsorID
                sponsor {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  correo
                  logoURL
                  user
                  informacionContacto
                  createdAt
                  updatedAt
                  version
                }
                cro {
                  __typename
                  id
                  estado
                  nit
                  nombre
                  informacionContacto
                  user
                  createdAt
                  updatedAt
                  version
                }
                CIE10
                studyCenters {
                  __typename
                  nextToken
                }
                interruptions {
                  __typename
                  nextToken
                }
                invimaIterations {
                  __typename
                  nextToken
                }
                studyCenterCommittees {
                  __typename
                  nextToken
                }
                addenda {
                  __typename
                  nextToken
                }
                id
                identificador
                identificadorNCT
                linkClinical
                titulo
                areasTerapeuticas
                tipoPoblacion
                saludPublica
                enfermedadHuerfana
                tipoEstudio
                fase
                fechaAprobacionCasaMatriz
                fechaFactibilidadColombia
                enColombia
                motivoNoSeleccion
                fechaSeleccionColombia
                fechaRecepcionFilialColombia
                fechaVersionEspaniol
                fechaPropuestaCierreReclutamiento
                alcanceEstudio
                codigosATC
                tieneCRO
                numeroPaisesParticipantes
                totalSujetosNivelGlobal
                fechaLiberacionProtocolo
                fechaPrimerPacienteGlobal
                fechaCierreReclutamientoGlobal
                numeroSujetosPlaneadosColombia
                porcentajeSujetosColombia
                fechaRecepcionPaqueteInicialColombia
                fechaPrimerPacienteReclutadoColombia
                fechaCierreReclutamientoColombia
                motivoDeSuspension
                otroMotivoDeSuspension
                linkDePublicacion
                terminadoSatisfactoriamente
                motivoDeTerminacion
                otroMotivoDeTerminacion
                fechaDeLicenciaKit
                fechaDeImportacionEnBodegaKit
                fechaPrimeraImportacionKit
                fechaDeLicenciaMedicamentos
                fechaDeImportacionEnBodegaMedicamentos
                fechaPrimeraImportacionMedicamentos
                estado
                createdAt
                updatedAt
                version
              }
              invimaIterations {
                __typename
                items {
                  __typename
                  id
                  studyID
                  addendumID
                  tipoIteracion
                  tipoRequerimiento
                  otroTipoRequerimiento
                  fechaDeSometimiento
                  fechaRespuestaInvima
                  fechaDeNotificacion
                  estadoIteracion
                  resolucion
                  tiempoInvima
                  tiempoPatrocinador
                  tiempoNotificacion
                  causalRetrasoPatrocinador
                  otroCausalRetrasoPatrocinador
                  notasDeSeguimiento
                  user
                  estado
                  createdAt
                  updatedAt
                  version
                }
                nextToken
              }
              centers {
                __typename
                items {
                  __typename
                  addendumID
                  studyCenterID
                  id
                  fechaEnvioCentro
                  fechaReciboCentro
                  fechaImplementacionCentro
                  createdAt
                  updatedAt
                  version
                }
                nextToken
              }
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              createdAt
              updatedAt
              version
              estado
            }
            nextToken
          }
          id
          identificador
          identificadorNCT
          linkClinical
          titulo
          areasTerapeuticas
          tipoPoblacion
          saludPublica
          enfermedadHuerfana
          tipoEstudio
          fase
          fechaAprobacionCasaMatriz
          fechaFactibilidadColombia
          enColombia
          motivoNoSeleccion
          fechaSeleccionColombia
          fechaRecepcionFilialColombia
          fechaVersionEspaniol
          fechaPropuestaCierreReclutamiento
          alcanceEstudio
          codigosATC
          tieneCRO
          numeroPaisesParticipantes
          totalSujetosNivelGlobal
          fechaLiberacionProtocolo
          fechaPrimerPacienteGlobal
          fechaCierreReclutamientoGlobal
          numeroSujetosPlaneadosColombia
          porcentajeSujetosColombia
          fechaRecepcionPaqueteInicialColombia
          fechaPrimerPacienteReclutadoColombia
          fechaCierreReclutamientoColombia
          motivoDeSuspension
          otroMotivoDeSuspension
          linkDePublicacion
          terminadoSatisfactoriamente
          motivoDeTerminacion
          otroMotivoDeTerminacion
          fechaDeLicenciaKit
          fechaDeImportacionEnBodegaKit
          fechaPrimeraImportacionKit
          fechaDeLicenciaMedicamentos
          fechaDeImportacionEnBodegaMedicamentos
          fechaPrimeraImportacionMedicamentos
          fechaAprobacionEstudioInvima
          fechaDeSometimientoEstudioInvima
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudyWithAllDataQuery>response.data.getStudy;
  }
  async AddendaByStudyWithAllData(
    studyID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddendumFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddendaByStudyWithAllDataQuery> {
    const statement = `query AddendaByStudyWithAllData($studyID: ID!, $sortDirection: ModelSortDirection, $filter: ModelAddendumFilterInput, $limit: Int, $nextToken: String) {
        addendaByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            studyID
            study {
              __typename
              sponsorID
              sponsor {
                __typename
                id
                estado
                nit
                nombre
                correo
                logoURL
                user
                informacionContacto
                createdAt
                updatedAt
                version
              }
              cro {
                __typename
                id
                estado
                nit
                nombre
                informacionContacto
                user
                createdAt
                updatedAt
                version
              }
              CIE10
              studyCenters {
                __typename
                nextToken
              }
              interruptions {
                __typename
                nextToken
              }
              invimaIterations {
                __typename
                nextToken
              }
              studyCenterCommittees {
                __typename
                nextToken
              }
              addenda {
                __typename
                nextToken
              }
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              items {
                __typename
                id
                studyID
                addendumID
                tipoIteracion
                tipoRequerimiento
                otroTipoRequerimiento
                fechaDeSometimiento
                fechaRespuestaInvima
                fechaDeNotificacion
                estadoIteracion
                resolucion
                tiempoInvima
                tiempoPatrocinador
                tiempoNotificacion
                causalRetrasoPatrocinador
                otroCausalRetrasoPatrocinador
                notasDeSeguimiento
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            centers {
              __typename
              items {
                __typename
                addendumID
                studyCenterID
                id
                fechaEnvioCentro
                fechaReciboCentro
                fechaImplementacionCentro
                user
                estado
                createdAt
                updatedAt
                version
              }
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      studyID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddendaByStudyWithAllDataQuery>response.data.addendaByStudy;
  }
  async ListCentersByStudyID(
    filter?: ModelStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCentersByStudyIDQuery> {
    const statement = `query ListCentersByStudyID($filter: ModelStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        listStudyCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            study {
              __typename
              id
              identificador
            }
            center {
              __typename
              nombre
            }
            centerID
            version
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCentersByStudyIDQuery>response.data.listStudyCenters;
  }
  async CreateSponsor(
    input: CreateSponsorInput,
    condition?: ModelSponsorConditionInput
  ): Promise<CreateSponsorMutation> {
    const statement = `mutation CreateSponsor($input: CreateSponsorInput!, $condition: ModelSponsorConditionInput) {
        createSponsor(input: $input, condition: $condition) {
          __typename
          studies {
            __typename
            items {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          correo
          logoURL
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSponsorMutation>response.data.createSponsor;
  }
  async UpdateSponsor(
    input: UpdateSponsorInput,
    condition?: ModelSponsorConditionInput
  ): Promise<UpdateSponsorMutation> {
    const statement = `mutation UpdateSponsor($input: UpdateSponsorInput!, $condition: ModelSponsorConditionInput) {
        updateSponsor(input: $input, condition: $condition) {
          __typename
          studies {
            __typename
            items {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          correo
          logoURL
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSponsorMutation>response.data.updateSponsor;
  }
  async DeleteSponsor(
    input: DeleteSponsorInput,
    condition?: ModelSponsorConditionInput
  ): Promise<DeleteSponsorMutation> {
    const statement = `mutation DeleteSponsor($input: DeleteSponsorInput!, $condition: ModelSponsorConditionInput) {
        deleteSponsor(input: $input, condition: $condition) {
          __typename
          studies {
            __typename
            items {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          correo
          logoURL
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSponsorMutation>response.data.deleteSponsor;
  }
  async CreateCRO(
    input: CreateCROInput,
    condition?: ModelCROConditionInput
  ): Promise<CreateCROMutation> {
    const statement = `mutation CreateCRO($input: CreateCROInput!, $condition: ModelCROConditionInput) {
        createCRO(input: $input, condition: $condition) {
          __typename
          id
          estado
          nit
          nombre
          informacionContacto
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCROMutation>response.data.createCRO;
  }
  async UpdateCRO(
    input: UpdateCROInput,
    condition?: ModelCROConditionInput
  ): Promise<UpdateCROMutation> {
    const statement = `mutation UpdateCRO($input: UpdateCROInput!, $condition: ModelCROConditionInput) {
        updateCRO(input: $input, condition: $condition) {
          __typename
          id
          estado
          nit
          nombre
          informacionContacto
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCROMutation>response.data.updateCRO;
  }
  async DeleteCRO(
    input: DeleteCROInput,
    condition?: ModelCROConditionInput
  ): Promise<DeleteCROMutation> {
    const statement = `mutation DeleteCRO($input: DeleteCROInput!, $condition: ModelCROConditionInput) {
        deleteCRO(input: $input, condition: $condition) {
          __typename
          id
          estado
          nit
          nombre
          informacionContacto
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCROMutation>response.data.deleteCRO;
  }
  async CreateCenter(
    input: CreateCenterInput,
    condition?: ModelCenterConditionInput
  ): Promise<CreateCenterMutation> {
    const statement = `mutation CreateCenter($input: CreateCenterInput!, $condition: ModelCenterConditionInput) {
        createCenter(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          tipoCentro
          nivelAtencion
          numeroEmpleados
          municipio
          resolucionCertificacion
          resolucionVigente
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCenterMutation>response.data.createCenter;
  }
  async UpdateCenter(
    input: UpdateCenterInput,
    condition?: ModelCenterConditionInput
  ): Promise<UpdateCenterMutation> {
    const statement = `mutation UpdateCenter($input: UpdateCenterInput!, $condition: ModelCenterConditionInput) {
        updateCenter(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          tipoCentro
          nivelAtencion
          numeroEmpleados
          municipio
          resolucionCertificacion
          resolucionVigente
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCenterMutation>response.data.updateCenter;
  }
  async DeleteCenter(
    input: DeleteCenterInput,
    condition?: ModelCenterConditionInput
  ): Promise<DeleteCenterMutation> {
    const statement = `mutation DeleteCenter($input: DeleteCenterInput!, $condition: ModelCenterConditionInput) {
        deleteCenter(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          tipoCentro
          nivelAtencion
          numeroEmpleados
          municipio
          resolucionCertificacion
          resolucionVigente
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCenterMutation>response.data.deleteCenter;
  }
  async CreateCommittee(
    input: CreateCommitteeInput,
    condition?: ModelCommitteeConditionInput
  ): Promise<CreateCommitteeMutation> {
    const statement = `mutation CreateCommittee($input: CreateCommitteeInput!, $condition: ModelCommitteeConditionInput) {
        createCommittee(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nombre
          tipoComite
          periodicidadReunionesCEI
          municipio
          informacionContacto
          resolucionInvima
          costoEvaluacion
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommitteeMutation>response.data.createCommittee;
  }
  async UpdateCommittee(
    input: UpdateCommitteeInput,
    condition?: ModelCommitteeConditionInput
  ): Promise<UpdateCommitteeMutation> {
    const statement = `mutation UpdateCommittee($input: UpdateCommitteeInput!, $condition: ModelCommitteeConditionInput) {
        updateCommittee(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nombre
          tipoComite
          periodicidadReunionesCEI
          municipio
          informacionContacto
          resolucionInvima
          costoEvaluacion
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommitteeMutation>response.data.updateCommittee;
  }
  async DeleteCommittee(
    input: DeleteCommitteeInput,
    condition?: ModelCommitteeConditionInput
  ): Promise<DeleteCommitteeMutation> {
    const statement = `mutation DeleteCommittee($input: DeleteCommitteeInput!, $condition: ModelCommitteeConditionInput) {
        deleteCommittee(input: $input, condition: $condition) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nombre
          tipoComite
          periodicidadReunionesCEI
          municipio
          informacionContacto
          resolucionInvima
          costoEvaluacion
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommitteeMutation>response.data.deleteCommittee;
  }
  async CreateInvimaIteration(
    input: CreateInvimaIterationInput,
    condition?: ModelInvimaIterationConditionInput
  ): Promise<CreateInvimaIterationMutation> {
    const statement = `mutation CreateInvimaIteration($input: CreateInvimaIterationInput!, $condition: ModelInvimaIterationConditionInput) {
        createInvimaIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoRequerimiento
          otroTipoRequerimiento
          fechaDeSometimiento
          fechaRespuestaInvima
          fechaDeNotificacion
          estadoIteracion
          resolucion
          tiempoInvima
          tiempoPatrocinador
          tiempoNotificacion
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInvimaIterationMutation>response.data.createInvimaIteration;
  }
  async UpdateInvimaIteration(
    input: UpdateInvimaIterationInput,
    condition?: ModelInvimaIterationConditionInput
  ): Promise<UpdateInvimaIterationMutation> {
    const statement = `mutation UpdateInvimaIteration($input: UpdateInvimaIterationInput!, $condition: ModelInvimaIterationConditionInput) {
        updateInvimaIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoRequerimiento
          otroTipoRequerimiento
          fechaDeSometimiento
          fechaRespuestaInvima
          fechaDeNotificacion
          estadoIteracion
          resolucion
          tiempoInvima
          tiempoPatrocinador
          tiempoNotificacion
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInvimaIterationMutation>response.data.updateInvimaIteration;
  }
  async DeleteInvimaIteration(
    input: DeleteInvimaIterationInput,
    condition?: ModelInvimaIterationConditionInput
  ): Promise<DeleteInvimaIterationMutation> {
    const statement = `mutation DeleteInvimaIteration($input: DeleteInvimaIterationInput!, $condition: ModelInvimaIterationConditionInput) {
        deleteInvimaIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoRequerimiento
          otroTipoRequerimiento
          fechaDeSometimiento
          fechaRespuestaInvima
          fechaDeNotificacion
          estadoIteracion
          resolucion
          tiempoInvima
          tiempoPatrocinador
          tiempoNotificacion
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInvimaIterationMutation>response.data.deleteInvimaIteration;
  }
  async CreateStudyCommitteeIteration(
    input: CreateStudyCommitteeIterationInput,
    condition?: ModelStudyCommitteeIterationConditionInput
  ): Promise<CreateStudyCommitteeIterationMutation> {
    const statement = `mutation CreateStudyCommitteeIteration($input: CreateStudyCommitteeIterationInput!, $condition: ModelStudyCommitteeIterationConditionInput) {
        createStudyCommitteeIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenterCommitteeID
          studyCenterCommittee {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoAclaracion
          otroTipoAclaracion
          fechaDeSometimientoCE
          fechaRespuestaCE
          estadoIteracion
          informacionCarta
          tiempoComite
          tiempoPatrocinador
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudyCommitteeIterationMutation>(
      response.data.createStudyCommitteeIteration
    );
  }
  async UpdateStudyCommitteeIteration(
    input: UpdateStudyCommitteeIterationInput,
    condition?: ModelStudyCommitteeIterationConditionInput
  ): Promise<UpdateStudyCommitteeIterationMutation> {
    const statement = `mutation UpdateStudyCommitteeIteration($input: UpdateStudyCommitteeIterationInput!, $condition: ModelStudyCommitteeIterationConditionInput) {
        updateStudyCommitteeIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenterCommitteeID
          studyCenterCommittee {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoAclaracion
          otroTipoAclaracion
          fechaDeSometimientoCE
          fechaRespuestaCE
          estadoIteracion
          informacionCarta
          tiempoComite
          tiempoPatrocinador
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudyCommitteeIterationMutation>(
      response.data.updateStudyCommitteeIteration
    );
  }
  async DeleteStudyCommitteeIteration(
    input: DeleteStudyCommitteeIterationInput,
    condition?: ModelStudyCommitteeIterationConditionInput
  ): Promise<DeleteStudyCommitteeIterationMutation> {
    const statement = `mutation DeleteStudyCommitteeIteration($input: DeleteStudyCommitteeIterationInput!, $condition: ModelStudyCommitteeIterationConditionInput) {
        deleteStudyCommitteeIteration(input: $input, condition: $condition) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenterCommitteeID
          studyCenterCommittee {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoAclaracion
          otroTipoAclaracion
          fechaDeSometimientoCE
          fechaRespuestaCE
          estadoIteracion
          informacionCarta
          tiempoComite
          tiempoPatrocinador
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudyCommitteeIterationMutation>(
      response.data.deleteStudyCommitteeIteration
    );
  }
  async CreateStudy(
    input: CreateStudyInput,
    condition?: ModelStudyConditionInput
  ): Promise<CreateStudyMutation> {
    const statement = `mutation CreateStudy($input: CreateStudyInput!, $condition: ModelStudyConditionInput) {
        createStudy(input: $input, condition: $condition) {
          __typename
          sponsorID
          sponsor {
            __typename
            studies {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          cro {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          CIE10
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          interruptions {
            __typename
            items {
              __typename
              studyID
              id
              estado
              interrupcionReclutamiento
              motivoInterrupcion
              otroMotivoInterrupcion
              fechaInicialInterrupcion
              fechaFinalizacionTnterrupcion
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          studyCenterCommittees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          identificador
          identificadorNCT
          linkClinical
          titulo
          areasTerapeuticas
          tipoPoblacion
          saludPublica
          enfermedadHuerfana
          tipoEstudio
          fase
          fechaAprobacionCasaMatriz
          fechaFactibilidadColombia
          enColombia
          motivoNoSeleccion
          fechaSeleccionColombia
          fechaRecepcionFilialColombia
          fechaVersionEspaniol
          fechaPropuestaCierreReclutamiento
          alcanceEstudio
          codigosATC
          tieneCRO
          numeroPaisesParticipantes
          totalSujetosNivelGlobal
          fechaLiberacionProtocolo
          fechaPrimerPacienteGlobal
          fechaCierreReclutamientoGlobal
          numeroSujetosPlaneadosColombia
          porcentajeSujetosColombia
          fechaRecepcionPaqueteInicialColombia
          fechaPrimerPacienteReclutadoColombia
          fechaCierreReclutamientoColombia
          motivoDeSuspension
          otroMotivoDeSuspension
          linkDePublicacion
          terminadoSatisfactoriamente
          motivoDeTerminacion
          otroMotivoDeTerminacion
          fechaDeLicenciaKit
          fechaDeImportacionEnBodegaKit
          fechaPrimeraImportacionKit
          fechaDeLicenciaMedicamentos
          fechaDeImportacionEnBodegaMedicamentos
          fechaPrimeraImportacionMedicamentos
          estado
          diasAprobacionInvimaInvima
          diasAprobacionInvimaPatrocinador
          anhoAprobacionInvima
          mesAprobacionInvima
          diasInicioEstudio
          anhoInicioEstudio
          mesInicioEstudio
          user
          fechaAprobacionEstudioInvima
          fechaDeSometimientoEstudioInvima
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudyMutation>response.data.createStudy;
  }
  async UpdateStudy(
    input: UpdateStudyInput,
    condition?: ModelStudyConditionInput
  ): Promise<UpdateStudyMutation> {
    const statement = `mutation UpdateStudy($input: UpdateStudyInput!, $condition: ModelStudyConditionInput) {
        updateStudy(input: $input, condition: $condition) {
          __typename
          sponsorID
          sponsor {
            __typename
            studies {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          cro {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          CIE10
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          interruptions {
            __typename
            items {
              __typename
              studyID
              id
              estado
              interrupcionReclutamiento
              motivoInterrupcion
              otroMotivoInterrupcion
              fechaInicialInterrupcion
              fechaFinalizacionTnterrupcion
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          studyCenterCommittees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          identificador
          identificadorNCT
          linkClinical
          titulo
          areasTerapeuticas
          tipoPoblacion
          saludPublica
          enfermedadHuerfana
          tipoEstudio
          fase
          fechaAprobacionCasaMatriz
          fechaFactibilidadColombia
          enColombia
          motivoNoSeleccion
          fechaSeleccionColombia
          fechaRecepcionFilialColombia
          fechaVersionEspaniol
          fechaPropuestaCierreReclutamiento
          alcanceEstudio
          codigosATC
          tieneCRO
          numeroPaisesParticipantes
          totalSujetosNivelGlobal
          fechaLiberacionProtocolo
          fechaPrimerPacienteGlobal
          fechaCierreReclutamientoGlobal
          numeroSujetosPlaneadosColombia
          porcentajeSujetosColombia
          fechaRecepcionPaqueteInicialColombia
          fechaPrimerPacienteReclutadoColombia
          fechaCierreReclutamientoColombia
          motivoDeSuspension
          otroMotivoDeSuspension
          linkDePublicacion
          terminadoSatisfactoriamente
          motivoDeTerminacion
          otroMotivoDeTerminacion
          fechaDeLicenciaKit
          fechaDeImportacionEnBodegaKit
          fechaPrimeraImportacionKit
          fechaDeLicenciaMedicamentos
          fechaDeImportacionEnBodegaMedicamentos
          fechaPrimeraImportacionMedicamentos
          estado
          diasAprobacionInvimaInvima
          diasAprobacionInvimaPatrocinador
          anhoAprobacionInvima
          mesAprobacionInvima
          diasInicioEstudio
          anhoInicioEstudio
          mesInicioEstudio
          user
          fechaAprobacionEstudioInvima
          fechaDeSometimientoEstudioInvima
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudyMutation>response.data.updateStudy;
  }
  async DeleteStudy(
    input: DeleteStudyInput,
    condition?: ModelStudyConditionInput
  ): Promise<DeleteStudyMutation> {
    const statement = `mutation DeleteStudy($input: DeleteStudyInput!, $condition: ModelStudyConditionInput) {
        deleteStudy(input: $input, condition: $condition) {
          __typename
          sponsorID
          sponsor {
            __typename
            studies {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          cro {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          CIE10
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          interruptions {
            __typename
            items {
              __typename
              studyID
              id
              estado
              interrupcionReclutamiento
              motivoInterrupcion
              otroMotivoInterrupcion
              fechaInicialInterrupcion
              fechaFinalizacionTnterrupcion
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          studyCenterCommittees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          identificador
          identificadorNCT
          linkClinical
          titulo
          areasTerapeuticas
          tipoPoblacion
          saludPublica
          enfermedadHuerfana
          tipoEstudio
          fase
          fechaAprobacionCasaMatriz
          fechaFactibilidadColombia
          enColombia
          motivoNoSeleccion
          fechaSeleccionColombia
          fechaRecepcionFilialColombia
          fechaVersionEspaniol
          fechaPropuestaCierreReclutamiento
          alcanceEstudio
          codigosATC
          tieneCRO
          numeroPaisesParticipantes
          totalSujetosNivelGlobal
          fechaLiberacionProtocolo
          fechaPrimerPacienteGlobal
          fechaCierreReclutamientoGlobal
          numeroSujetosPlaneadosColombia
          porcentajeSujetosColombia
          fechaRecepcionPaqueteInicialColombia
          fechaPrimerPacienteReclutadoColombia
          fechaCierreReclutamientoColombia
          motivoDeSuspension
          otroMotivoDeSuspension
          linkDePublicacion
          terminadoSatisfactoriamente
          motivoDeTerminacion
          otroMotivoDeTerminacion
          fechaDeLicenciaKit
          fechaDeImportacionEnBodegaKit
          fechaPrimeraImportacionKit
          fechaDeLicenciaMedicamentos
          fechaDeImportacionEnBodegaMedicamentos
          fechaPrimeraImportacionMedicamentos
          estado
          diasAprobacionInvimaInvima
          diasAprobacionInvimaPatrocinador
          anhoAprobacionInvima
          mesAprobacionInvima
          diasInicioEstudio
          anhoInicioEstudio
          mesInicioEstudio
          user
          fechaAprobacionEstudioInvima
          fechaDeSometimientoEstudioInvima
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudyMutation>response.data.deleteStudy;
  }
  async CreateStudyCenter(
    input: CreateStudyCenterInput,
    condition?: ModelStudyCenterConditionInput
  ): Promise<CreateStudyCenterMutation> {
    const statement = `mutation CreateStudyCenter($input: CreateStudyCenterInput!, $condition: ModelStudyCenterConditionInput) {
        createStudyCenter(input: $input, condition: $condition) {
          __typename
          committees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          studyID
          centerID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          center {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            tipoCentro
            nivelAtencion
            numeroEmpleados
            municipio
            resolucionCertificacion
            resolucionVigente
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          user
          costoPorPaciente
          fechaRecepcionPaquete
          fechaRecepcionContrato
          fechaFirmaContrato
          fechaFirmaContratoPatrocinador
          fechaAprobacionInvima
          fechaActivacionCentro
          cantidadPacientesPrevistos
          cantidadPacientesIncluidos
          fechaPrimerPacienteSeleccionado
          fechaPrimerPacienteAleatorizado
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudyCenterMutation>response.data.createStudyCenter;
  }
  async UpdateStudyCenter(
    input: UpdateStudyCenterInput,
    condition?: ModelStudyCenterConditionInput
  ): Promise<UpdateStudyCenterMutation> {
    const statement = `mutation UpdateStudyCenter($input: UpdateStudyCenterInput!, $condition: ModelStudyCenterConditionInput) {
        updateStudyCenter(input: $input, condition: $condition) {
          __typename
          committees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          studyID
          centerID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          center {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            tipoCentro
            nivelAtencion
            numeroEmpleados
            municipio
            resolucionCertificacion
            resolucionVigente
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          user
          costoPorPaciente
          fechaRecepcionPaquete
          fechaRecepcionContrato
          fechaFirmaContrato
          fechaFirmaContratoPatrocinador
          fechaAprobacionInvima
          fechaActivacionCentro
          cantidadPacientesPrevistos
          cantidadPacientesIncluidos
          fechaPrimerPacienteSeleccionado
          fechaPrimerPacienteAleatorizado
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudyCenterMutation>response.data.updateStudyCenter;
  }
  async DeleteStudyCenter(
    input: DeleteStudyCenterInput,
    condition?: ModelStudyCenterConditionInput
  ): Promise<DeleteStudyCenterMutation> {
    const statement = `mutation DeleteStudyCenter($input: DeleteStudyCenterInput!, $condition: ModelStudyCenterConditionInput) {
        deleteStudyCenter(input: $input, condition: $condition) {
          __typename
          committees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          studyID
          centerID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          center {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            tipoCentro
            nivelAtencion
            numeroEmpleados
            municipio
            resolucionCertificacion
            resolucionVigente
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          user
          costoPorPaciente
          fechaRecepcionPaquete
          fechaRecepcionContrato
          fechaFirmaContrato
          fechaFirmaContratoPatrocinador
          fechaAprobacionInvima
          fechaActivacionCentro
          cantidadPacientesPrevistos
          cantidadPacientesIncluidos
          fechaPrimerPacienteSeleccionado
          fechaPrimerPacienteAleatorizado
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudyCenterMutation>response.data.deleteStudyCenter;
  }
  async CreateStudyCenterCommittee(
    input: CreateStudyCenterCommitteeInput,
    condition?: ModelStudyCenterCommitteeConditionInput
  ): Promise<CreateStudyCenterCommitteeMutation> {
    const statement = `mutation CreateStudyCenterCommittee($input: CreateStudyCenterCommitteeInput!, $condition: ModelStudyCenterCommitteeConditionInput) {
        createStudyCenterCommittee(input: $input, condition: $condition) {
          __typename
          id
          studyCenterID
          committeeID
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          committee {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nombre
            tipoComite
            periodicidadReunionesCEI
            municipio
            informacionContacto
            resolucionInvima
            costoEvaluacion
            user
            createdAt
            updatedAt
            version
          }
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          user
          estado
          diasAprobacionCentroCentro
          diasAprobacionCentroPatrocinador
          anhoAprobacionCentro
          mesAprobacionCentro
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStudyCenterCommitteeMutation>(
      response.data.createStudyCenterCommittee
    );
  }
  async UpdateStudyCenterCommittee(
    input: UpdateStudyCenterCommitteeInput,
    condition?: ModelStudyCenterCommitteeConditionInput
  ): Promise<UpdateStudyCenterCommitteeMutation> {
    const statement = `mutation UpdateStudyCenterCommittee($input: UpdateStudyCenterCommitteeInput!, $condition: ModelStudyCenterCommitteeConditionInput) {
        updateStudyCenterCommittee(input: $input, condition: $condition) {
          __typename
          id
          studyCenterID
          committeeID
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          committee {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nombre
            tipoComite
            periodicidadReunionesCEI
            municipio
            informacionContacto
            resolucionInvima
            costoEvaluacion
            user
            createdAt
            updatedAt
            version
          }
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          user
          estado
          diasAprobacionCentroCentro
          diasAprobacionCentroPatrocinador
          anhoAprobacionCentro
          mesAprobacionCentro
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStudyCenterCommitteeMutation>(
      response.data.updateStudyCenterCommittee
    );
  }
  async DeleteStudyCenterCommittee(
    input: DeleteStudyCenterCommitteeInput,
    condition?: ModelStudyCenterCommitteeConditionInput
  ): Promise<DeleteStudyCenterCommitteeMutation> {
    const statement = `mutation DeleteStudyCenterCommittee($input: DeleteStudyCenterCommitteeInput!, $condition: ModelStudyCenterCommitteeConditionInput) {
        deleteStudyCenterCommittee(input: $input, condition: $condition) {
          __typename
          id
          studyCenterID
          committeeID
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          committee {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nombre
            tipoComite
            periodicidadReunionesCEI
            municipio
            informacionContacto
            resolucionInvima
            costoEvaluacion
            user
            createdAt
            updatedAt
            version
          }
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          user
          estado
          diasAprobacionCentroCentro
          diasAprobacionCentroPatrocinador
          anhoAprobacionCentro
          mesAprobacionCentro
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStudyCenterCommitteeMutation>(
      response.data.deleteStudyCenterCommittee
    );
  }
  async CreateInterruption(
    input: CreateInterruptionInput,
    condition?: ModelInterruptionConditionInput
  ): Promise<CreateInterruptionMutation> {
    const statement = `mutation CreateInterruption($input: CreateInterruptionInput!, $condition: ModelInterruptionConditionInput) {
        createInterruption(input: $input, condition: $condition) {
          __typename
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyID
          id
          estado
          interrupcionReclutamiento
          motivoInterrupcion
          otroMotivoInterrupcion
          fechaInicialInterrupcion
          fechaFinalizacionTnterrupcion
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInterruptionMutation>response.data.createInterruption;
  }
  async UpdateInterruption(
    input: UpdateInterruptionInput,
    condition?: ModelInterruptionConditionInput
  ): Promise<UpdateInterruptionMutation> {
    const statement = `mutation UpdateInterruption($input: UpdateInterruptionInput!, $condition: ModelInterruptionConditionInput) {
        updateInterruption(input: $input, condition: $condition) {
          __typename
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyID
          id
          estado
          interrupcionReclutamiento
          motivoInterrupcion
          otroMotivoInterrupcion
          fechaInicialInterrupcion
          fechaFinalizacionTnterrupcion
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInterruptionMutation>response.data.updateInterruption;
  }
  async DeleteInterruption(
    input: DeleteInterruptionInput,
    condition?: ModelInterruptionConditionInput
  ): Promise<DeleteInterruptionMutation> {
    const statement = `mutation DeleteInterruption($input: DeleteInterruptionInput!, $condition: ModelInterruptionConditionInput) {
        deleteInterruption(input: $input, condition: $condition) {
          __typename
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyID
          id
          estado
          interrupcionReclutamiento
          motivoInterrupcion
          otroMotivoInterrupcion
          fechaInicialInterrupcion
          fechaFinalizacionTnterrupcion
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInterruptionMutation>response.data.deleteInterruption;
  }
  async CreateAddendum(
    input: CreateAddendumInput,
    condition?: ModelAddendumConditionInput
  ): Promise<CreateAddendumMutation> {
    const statement = `mutation CreateAddendum($input: CreateAddendumInput!, $condition: ModelAddendumConditionInput) {
        createAddendum(input: $input, condition: $condition) {
          __typename
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          centers {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          descripcion
          fechaCasaMatriz
          fechaRecepcionPaquete
          fechaVersionEspanol
          primerPaisImplementacion
          fechaImplementacionPais
          estado
          user
          tiemposInvima {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAddendumMutation>response.data.createAddendum;
  }
  async UpdateAddendum(
    input: UpdateAddendumInput,
    condition?: ModelAddendumConditionInput
  ): Promise<UpdateAddendumMutation> {
    const statement = `mutation UpdateAddendum($input: UpdateAddendumInput!, $condition: ModelAddendumConditionInput) {
        updateAddendum(input: $input, condition: $condition) {
          __typename
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          centers {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          descripcion
          fechaCasaMatriz
          fechaRecepcionPaquete
          fechaVersionEspanol
          primerPaisImplementacion
          fechaImplementacionPais
          estado
          user
          tiemposInvima {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAddendumMutation>response.data.updateAddendum;
  }
  async DeleteAddendum(
    input: DeleteAddendumInput,
    condition?: ModelAddendumConditionInput
  ): Promise<DeleteAddendumMutation> {
    const statement = `mutation DeleteAddendum($input: DeleteAddendumInput!, $condition: ModelAddendumConditionInput) {
        deleteAddendum(input: $input, condition: $condition) {
          __typename
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          centers {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          descripcion
          fechaCasaMatriz
          fechaRecepcionPaquete
          fechaVersionEspanol
          primerPaisImplementacion
          fechaImplementacionPais
          estado
          user
          tiemposInvima {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAddendumMutation>response.data.deleteAddendum;
  }
  async CreateAddendumStudyCenter(
    input: CreateAddendumStudyCenterInput,
    condition?: ModelAddendumStudyCenterConditionInput
  ): Promise<CreateAddendumStudyCenterMutation> {
    const statement = `mutation CreateAddendumStudyCenter($input: CreateAddendumStudyCenterInput!, $condition: ModelAddendumStudyCenterConditionInput) {
        createAddendumStudyCenter(input: $input, condition: $condition) {
          __typename
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          addendumID
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          studyCenterID
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          fechaEnvioCentro
          fechaReciboCentro
          fechaImplementacionCentro
          user
          estado
          tiemposCentro {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAddendumStudyCenterMutation>(
      response.data.createAddendumStudyCenter
    );
  }
  async UpdateAddendumStudyCenter(
    input: UpdateAddendumStudyCenterInput,
    condition?: ModelAddendumStudyCenterConditionInput
  ): Promise<UpdateAddendumStudyCenterMutation> {
    const statement = `mutation UpdateAddendumStudyCenter($input: UpdateAddendumStudyCenterInput!, $condition: ModelAddendumStudyCenterConditionInput) {
        updateAddendumStudyCenter(input: $input, condition: $condition) {
          __typename
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          addendumID
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          studyCenterID
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          fechaEnvioCentro
          fechaReciboCentro
          fechaImplementacionCentro
          user
          estado
          tiemposCentro {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAddendumStudyCenterMutation>(
      response.data.updateAddendumStudyCenter
    );
  }
  async DeleteAddendumStudyCenter(
    input: DeleteAddendumStudyCenterInput,
    condition?: ModelAddendumStudyCenterConditionInput
  ): Promise<DeleteAddendumStudyCenterMutation> {
    const statement = `mutation DeleteAddendumStudyCenter($input: DeleteAddendumStudyCenterInput!, $condition: ModelAddendumStudyCenterConditionInput) {
        deleteAddendumStudyCenter(input: $input, condition: $condition) {
          __typename
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          addendumID
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          studyCenterID
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          fechaEnvioCentro
          fechaReciboCentro
          fechaImplementacionCentro
          user
          estado
          tiemposCentro {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAddendumStudyCenterMutation>(
      response.data.deleteAddendumStudyCenter
    );
  }
  async SendNotification(
    input?: SendNotificationInput
  ): Promise<SendNotificationQuery> {
    const statement = `query SendNotification($input: SendNotificationInput) {
        sendNotification(input: $input) {
          __typename
          result
          error
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SendNotificationQuery>response.data.sendNotification;
  }
  async GetAuditTrace(id: string): Promise<GetAuditTraceQuery> {
    const statement = `query GetAuditTrace($id: ID!) {
        getAuditTrace(id: $id) {
          __typename
          id
          relatedEntityId
          entity
          eventDateTime
          eventType
          author
          data
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAuditTraceQuery>response.data.getAuditTrace;
  }
  async ListAuditTraces(
    filter?: ModelAuditTraceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAuditTracesQuery> {
    const statement = `query ListAuditTraces($filter: ModelAuditTraceFilterInput, $limit: Int, $nextToken: String) {
        listAuditTraces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            relatedEntityId
            entity
            eventDateTime
            eventType
            author
            data
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAuditTracesQuery>response.data.listAuditTraces;
  }
  async GetSponsor(id: string): Promise<GetSponsorQuery> {
    const statement = `query GetSponsor($id: ID!) {
        getSponsor(id: $id) {
          __typename
          studies {
            __typename
            items {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          correo
          logoURL
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSponsorQuery>response.data.getSponsor;
  }
  async ListSponsors(
    filter?: ModelSponsorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSponsorsQuery> {
    const statement = `query ListSponsors($filter: ModelSponsorFilterInput, $limit: Int, $nextToken: String) {
        listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            studies {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSponsorsQuery>response.data.listSponsors;
  }
  async GetCRO(id: string): Promise<GetCROQuery> {
    const statement = `query GetCRO($id: ID!) {
        getCRO(id: $id) {
          __typename
          id
          estado
          nit
          nombre
          informacionContacto
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCROQuery>response.data.getCRO;
  }
  async ListCROs(
    filter?: ModelCROFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCROsQuery> {
    const statement = `query ListCROs($filter: ModelCROFilterInput, $limit: Int, $nextToken: String) {
        listCROs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCROsQuery>response.data.listCROs;
  }
  async GetCenter(id: string): Promise<GetCenterQuery> {
    const statement = `query GetCenter($id: ID!) {
        getCenter(id: $id) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nit
          nombre
          tipoCentro
          nivelAtencion
          numeroEmpleados
          municipio
          resolucionCertificacion
          resolucionVigente
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCenterQuery>response.data.getCenter;
  }
  async ListCenters(
    filter?: ModelCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCentersQuery> {
    const statement = `query ListCenters($filter: ModelCenterFilterInput, $limit: Int, $nextToken: String) {
        listCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            tipoCentro
            nivelAtencion
            numeroEmpleados
            municipio
            resolucionCertificacion
            resolucionVigente
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCentersQuery>response.data.listCenters;
  }
  async GetCommittee(id: string): Promise<GetCommitteeQuery> {
    const statement = `query GetCommittee($id: ID!) {
        getCommittee(id: $id) {
          __typename
          studyCenters {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          estado
          nombre
          tipoComite
          periodicidadReunionesCEI
          municipio
          informacionContacto
          resolucionInvima
          costoEvaluacion
          user
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommitteeQuery>response.data.getCommittee;
  }
  async ListCommittees(
    filter?: ModelCommitteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommitteesQuery> {
    const statement = `query ListCommittees($filter: ModelCommitteeFilterInput, $limit: Int, $nextToken: String) {
        listCommittees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nombre
            tipoComite
            periodicidadReunionesCEI
            municipio
            informacionContacto
            resolucionInvima
            costoEvaluacion
            user
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommitteesQuery>response.data.listCommittees;
  }
  async GetInvimaIteration(id: string): Promise<GetInvimaIterationQuery> {
    const statement = `query GetInvimaIteration($id: ID!) {
        getInvimaIteration(id: $id) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoRequerimiento
          otroTipoRequerimiento
          fechaDeSometimiento
          fechaRespuestaInvima
          fechaDeNotificacion
          estadoIteracion
          resolucion
          tiempoInvima
          tiempoPatrocinador
          tiempoNotificacion
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInvimaIterationQuery>response.data.getInvimaIteration;
  }
  async ListInvimaIterations(
    filter?: ModelInvimaIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInvimaIterationsQuery> {
    const statement = `query ListInvimaIterations($filter: ModelInvimaIterationFilterInput, $limit: Int, $nextToken: String) {
        listInvimaIterations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoRequerimiento
            otroTipoRequerimiento
            fechaDeSometimiento
            fechaRespuestaInvima
            fechaDeNotificacion
            estadoIteracion
            resolucion
            tiempoInvima
            tiempoPatrocinador
            tiempoNotificacion
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInvimaIterationsQuery>response.data.listInvimaIterations;
  }
  async GetStudyCommitteeIteration(
    id: string
  ): Promise<GetStudyCommitteeIterationQuery> {
    const statement = `query GetStudyCommitteeIteration($id: ID!) {
        getStudyCommitteeIteration(id: $id) {
          __typename
          id
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenterCommitteeID
          studyCenterCommittee {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          addendumID
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          tipoIteracion
          tipoAclaracion
          otroTipoAclaracion
          fechaDeSometimientoCE
          fechaRespuestaCE
          estadoIteracion
          informacionCarta
          tiempoComite
          tiempoPatrocinador
          causalRetrasoPatrocinador
          otroCausalRetrasoPatrocinador
          notasDeSeguimiento
          user
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudyCommitteeIterationQuery>(
      response.data.getStudyCommitteeIteration
    );
  }
  async ListStudyCommitteeIterations(
    filter?: ModelStudyCommitteeIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudyCommitteeIterationsQuery> {
    const statement = `query ListStudyCommitteeIterations($filter: ModelStudyCommitteeIterationFilterInput, $limit: Int, $nextToken: String) {
        listStudyCommitteeIterations(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenterCommitteeID
            studyCenterCommittee {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoAclaracion
            otroTipoAclaracion
            fechaDeSometimientoCE
            fechaRespuestaCE
            estadoIteracion
            informacionCarta
            tiempoComite
            tiempoPatrocinador
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudyCommitteeIterationsQuery>(
      response.data.listStudyCommitteeIterations
    );
  }
  async GetStudy(id: string): Promise<GetStudyQuery> {
    const statement = `query GetStudy($id: ID!) {
        getStudy(id: $id) {
          __typename
          sponsorID
          sponsor {
            __typename
            studies {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            correo
            logoURL
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          cro {
            __typename
            id
            estado
            nit
            nombre
            informacionContacto
            user
            createdAt
            updatedAt
            version
          }
          CIE10
          studyCenters {
            __typename
            items {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          interruptions {
            __typename
            items {
              __typename
              studyID
              id
              estado
              interrupcionReclutamiento
              motivoInterrupcion
              otroMotivoInterrupcion
              fechaInicialInterrupcion
              fechaFinalizacionTnterrupcion
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          studyCenterCommittees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          identificador
          identificadorNCT
          linkClinical
          titulo
          areasTerapeuticas
          tipoPoblacion
          saludPublica
          enfermedadHuerfana
          tipoEstudio
          fase
          fechaAprobacionCasaMatriz
          fechaFactibilidadColombia
          enColombia
          motivoNoSeleccion
          fechaSeleccionColombia
          fechaRecepcionFilialColombia
          fechaVersionEspaniol
          fechaPropuestaCierreReclutamiento
          alcanceEstudio
          codigosATC
          tieneCRO
          numeroPaisesParticipantes
          totalSujetosNivelGlobal
          fechaLiberacionProtocolo
          fechaPrimerPacienteGlobal
          fechaCierreReclutamientoGlobal
          numeroSujetosPlaneadosColombia
          porcentajeSujetosColombia
          fechaRecepcionPaqueteInicialColombia
          fechaPrimerPacienteReclutadoColombia
          fechaCierreReclutamientoColombia
          motivoDeSuspension
          otroMotivoDeSuspension
          linkDePublicacion
          terminadoSatisfactoriamente
          motivoDeTerminacion
          otroMotivoDeTerminacion
          fechaDeLicenciaKit
          fechaDeImportacionEnBodegaKit
          fechaPrimeraImportacionKit
          fechaDeLicenciaMedicamentos
          fechaDeImportacionEnBodegaMedicamentos
          fechaPrimeraImportacionMedicamentos
          estado
          diasAprobacionInvimaInvima
          diasAprobacionInvimaPatrocinador
          anhoAprobacionInvima
          mesAprobacionInvima
          diasInicioEstudio
          anhoInicioEstudio
          mesInicioEstudio
          user
          fechaAprobacionEstudioInvima
          fechaDeSometimientoEstudioInvima
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudyQuery>response.data.getStudy;
  }
  async ListStudys(
    filter?: ModelStudyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudysQuery> {
    const statement = `query ListStudys($filter: ModelStudyFilterInput, $limit: Int, $nextToken: String) {
        listStudys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudysQuery>response.data.listStudys;
  }
  async GetStudyCenter(id: string): Promise<GetStudyCenterQuery> {
    const statement = `query GetStudyCenter($id: ID!) {
        getStudyCenter(id: $id) {
          __typename
          committees {
            __typename
            items {
              __typename
              id
              studyCenterID
              committeeID
              studyID
              user
              estado
              diasAprobacionCentroCentro
              diasAprobacionCentroPatrocinador
              anhoAprobacionCentro
              mesAprobacionCentro
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          addenda {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          studyID
          centerID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          center {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nit
            nombre
            tipoCentro
            nivelAtencion
            numeroEmpleados
            municipio
            resolucionCertificacion
            resolucionVigente
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          user
          costoPorPaciente
          fechaRecepcionPaquete
          fechaRecepcionContrato
          fechaFirmaContrato
          fechaFirmaContratoPatrocinador
          fechaAprobacionInvima
          fechaActivacionCentro
          cantidadPacientesPrevistos
          cantidadPacientesIncluidos
          fechaPrimerPacienteSeleccionado
          fechaPrimerPacienteAleatorizado
          estado
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudyCenterQuery>response.data.getStudyCenter;
  }
  async ListStudyCenters(
    filter?: ModelStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudyCentersQuery> {
    const statement = `query ListStudyCenters($filter: ModelStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        listStudyCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudyCentersQuery>response.data.listStudyCenters;
  }
  async GetStudyCenterCommittee(
    id: string
  ): Promise<GetStudyCenterCommitteeQuery> {
    const statement = `query GetStudyCenterCommittee($id: ID!) {
        getStudyCenterCommittee(id: $id) {
          __typename
          id
          studyCenterID
          committeeID
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          committee {
            __typename
            studyCenters {
              __typename
              nextToken
            }
            id
            estado
            nombre
            tipoComite
            periodicidadReunionesCEI
            municipio
            informacionContacto
            resolucionInvima
            costoEvaluacion
            user
            createdAt
            updatedAt
            version
          }
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          user
          estado
          diasAprobacionCentroCentro
          diasAprobacionCentroPatrocinador
          anhoAprobacionCentro
          mesAprobacionCentro
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStudyCenterCommitteeQuery>response.data.getStudyCenterCommittee;
  }
  async ListStudyCenterCommittees(
    filter?: ModelStudyCenterCommitteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStudyCenterCommitteesQuery> {
    const statement = `query ListStudyCenterCommittees($filter: ModelStudyCenterCommitteeFilterInput, $limit: Int, $nextToken: String) {
        listStudyCenterCommittees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            studyCenterID
            committeeID
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            committee {
              __typename
              id
              estado
              nombre
              tipoComite
              periodicidadReunionesCEI
              municipio
              informacionContacto
              resolucionInvima
              costoEvaluacion
              user
              createdAt
              updatedAt
              version
            }
            ecIterations {
              __typename
              nextToken
            }
            user
            estado
            diasAprobacionCentroCentro
            diasAprobacionCentroPatrocinador
            anhoAprobacionCentro
            mesAprobacionCentro
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStudyCenterCommitteesQuery>(
      response.data.listStudyCenterCommittees
    );
  }
  async GetInterruption(id: string): Promise<GetInterruptionQuery> {
    const statement = `query GetInterruption($id: ID!) {
        getInterruption(id: $id) {
          __typename
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          studyID
          id
          estado
          interrupcionReclutamiento
          motivoInterrupcion
          otroMotivoInterrupcion
          fechaInicialInterrupcion
          fechaFinalizacionTnterrupcion
          user
          informacionContacto
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInterruptionQuery>response.data.getInterruption;
  }
  async ListInterruptions(
    filter?: ModelInterruptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInterruptionsQuery> {
    const statement = `query ListInterruptions($filter: ModelInterruptionFilterInput, $limit: Int, $nextToken: String) {
        listInterruptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyID
            id
            estado
            interrupcionReclutamiento
            motivoInterrupcion
            otroMotivoInterrupcion
            fechaInicialInterrupcion
            fechaFinalizacionTnterrupcion
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInterruptionsQuery>response.data.listInterruptions;
  }
  async GetAddendum(id: string): Promise<GetAddendumQuery> {
    const statement = `query GetAddendum($id: ID!) {
        getAddendum(id: $id) {
          __typename
          studyID
          study {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          invimaIterations {
            __typename
            items {
              __typename
              id
              studyID
              addendumID
              tipoIteracion
              tipoRequerimiento
              otroTipoRequerimiento
              fechaDeSometimiento
              fechaRespuestaInvima
              fechaDeNotificacion
              estadoIteracion
              resolucion
              tiempoInvima
              tiempoPatrocinador
              tiempoNotificacion
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          centers {
            __typename
            items {
              __typename
              addendumID
              studyCenterID
              id
              fechaEnvioCentro
              fechaReciboCentro
              fechaImplementacionCentro
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          descripcion
          fechaCasaMatriz
          fechaRecepcionPaquete
          fechaVersionEspanol
          primerPaisImplementacion
          fechaImplementacionPais
          estado
          user
          tiemposInvima {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAddendumQuery>response.data.getAddendum;
  }
  async ListAddendums(
    filter?: ModelAddendumFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAddendumsQuery> {
    const statement = `query ListAddendums($filter: ModelAddendumFilterInput, $limit: Int, $nextToken: String) {
        listAddendums(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAddendumsQuery>response.data.listAddendums;
  }
  async GetAddendumStudyCenter(
    id: string
  ): Promise<GetAddendumStudyCenterQuery> {
    const statement = `query GetAddendumStudyCenter($id: ID!) {
        getAddendumStudyCenter(id: $id) {
          __typename
          addendum {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          addendumID
          studyCenter {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          studyCenterID
          ecIterations {
            __typename
            items {
              __typename
              id
              studyID
              studyCenterCommitteeID
              addendumID
              tipoIteracion
              tipoAclaracion
              otroTipoAclaracion
              fechaDeSometimientoCE
              fechaRespuestaCE
              estadoIteracion
              informacionCarta
              tiempoComite
              tiempoPatrocinador
              causalRetrasoPatrocinador
              otroCausalRetrasoPatrocinador
              notasDeSeguimiento
              user
              estado
              createdAt
              updatedAt
              version
            }
            nextToken
          }
          id
          fechaEnvioCentro
          fechaReciboCentro
          fechaImplementacionCentro
          user
          estado
          tiemposCentro {
            __typename
            nombre
            dias
            diasPatrocinador
            mes
            anho
            fechaInicial
            fechaFinal
          }
          createdAt
          updatedAt
          version
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAddendumStudyCenterQuery>response.data.getAddendumStudyCenter;
  }
  async ListAddendumStudyCenters(
    filter?: ModelAddendumStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAddendumStudyCentersQuery> {
    const statement = `query ListAddendumStudyCenters($filter: ModelAddendumStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        listAddendumStudyCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            addendumID
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            studyCenterID
            ecIterations {
              __typename
              nextToken
            }
            id
            fechaEnvioCentro
            fechaReciboCentro
            fechaImplementacionCentro
            user
            estado
            tiemposCentro {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAddendumStudyCentersQuery>(
      response.data.listAddendumStudyCenters
    );
  }
  async GetAuditInfo(
    entity?: string,
    relatedEntityId?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAuditTraceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetAuditInfoQuery> {
    const statement = `query GetAuditInfo($entity: String, $relatedEntityId: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAuditTraceFilterInput, $limit: Int, $nextToken: String) {
        getAuditInfo(
          entity: $entity
          relatedEntityId: $relatedEntityId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            relatedEntityId
            entity
            eventDateTime
            eventType
            author
            data
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (entity) {
      gqlAPIServiceArguments.entity = entity;
    }
    if (relatedEntityId) {
      gqlAPIServiceArguments.relatedEntityId = relatedEntityId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAuditInfoQuery>response.data.getAuditInfo;
  }
  async IteracionesByStudy(
    studyID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelInvimaIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<IteracionesByStudyQuery> {
    const statement = `query IteracionesByStudy($studyID: ID, $sortDirection: ModelSortDirection, $filter: ModelInvimaIterationFilterInput, $limit: Int, $nextToken: String) {
        iteracionesByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoRequerimiento
            otroTipoRequerimiento
            fechaDeSometimiento
            fechaRespuestaInvima
            fechaDeNotificacion
            estadoIteracion
            resolucion
            tiempoInvima
            tiempoPatrocinador
            tiempoNotificacion
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <IteracionesByStudyQuery>response.data.iteracionesByStudy;
  }
  async IteracionesInvimaByAddendum(
    addendumID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelInvimaIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<IteracionesInvimaByAddendumQuery> {
    const statement = `query IteracionesInvimaByAddendum($addendumID: ID, $sortDirection: ModelSortDirection, $filter: ModelInvimaIterationFilterInput, $limit: Int, $nextToken: String) {
        iteracionesInvimaByAddendum(
          addendumID: $addendumID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoRequerimiento
            otroTipoRequerimiento
            fechaDeSometimiento
            fechaRespuestaInvima
            fechaDeNotificacion
            estadoIteracion
            resolucion
            tiempoInvima
            tiempoPatrocinador
            tiempoNotificacion
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (addendumID) {
      gqlAPIServiceArguments.addendumID = addendumID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <IteracionesInvimaByAddendumQuery>(
      response.data.iteracionesInvimaByAddendum
    );
  }
  async CommitteeIterationsByStudy(
    studyID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCommitteeIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CommitteeIterationsByStudyQuery> {
    const statement = `query CommitteeIterationsByStudy($studyID: ID, $sortDirection: ModelSortDirection, $filter: ModelStudyCommitteeIterationFilterInput, $limit: Int, $nextToken: String) {
        committeeIterationsByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenterCommitteeID
            studyCenterCommittee {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoAclaracion
            otroTipoAclaracion
            fechaDeSometimientoCE
            fechaRespuestaCE
            estadoIteracion
            informacionCarta
            tiempoComite
            tiempoPatrocinador
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CommitteeIterationsByStudyQuery>(
      response.data.committeeIterationsByStudy
    );
  }
  async CommitteeIterationsByiamCommittee(
    studyCenterCommitteeID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCommitteeIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CommitteeIterationsByiamCommitteeQuery> {
    const statement = `query CommitteeIterationsByiamCommittee($studyCenterCommitteeID: ID, $sortDirection: ModelSortDirection, $filter: ModelStudyCommitteeIterationFilterInput, $limit: Int, $nextToken: String) {
        committeeIterationsByiamCommittee(
          studyCenterCommitteeID: $studyCenterCommitteeID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenterCommitteeID
            studyCenterCommittee {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoAclaracion
            otroTipoAclaracion
            fechaDeSometimientoCE
            fechaRespuestaCE
            estadoIteracion
            informacionCarta
            tiempoComite
            tiempoPatrocinador
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyCenterCommitteeID) {
      gqlAPIServiceArguments.studyCenterCommitteeID = studyCenterCommitteeID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CommitteeIterationsByiamCommitteeQuery>(
      response.data.committeeIterationsByiamCommittee
    );
  }
  async IteracionesCEByAddendum(
    addendumID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCommitteeIterationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<IteracionesCEByAddendumQuery> {
    const statement = `query IteracionesCEByAddendum($addendumID: ID, $sortDirection: ModelSortDirection, $filter: ModelStudyCommitteeIterationFilterInput, $limit: Int, $nextToken: String) {
        iteracionesCEByAddendum(
          addendumID: $addendumID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenterCommitteeID
            studyCenterCommittee {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            addendumID
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            tipoIteracion
            tipoAclaracion
            otroTipoAclaracion
            fechaDeSometimientoCE
            fechaRespuestaCE
            estadoIteracion
            informacionCarta
            tiempoComite
            tiempoPatrocinador
            causalRetrasoPatrocinador
            otroCausalRetrasoPatrocinador
            notasDeSeguimiento
            user
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (addendumID) {
      gqlAPIServiceArguments.addendumID = addendumID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <IteracionesCEByAddendumQuery>response.data.iteracionesCEByAddendum;
  }
  async StudiesBySponsor(
    sponsorID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudiesBySponsorQuery> {
    const statement = `query StudiesBySponsor($sponsorID: ID, $sortDirection: ModelSortDirection, $filter: ModelStudyFilterInput, $limit: Int, $nextToken: String) {
        studiesBySponsor(
          sponsorID: $sponsorID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            sponsorID
            sponsor {
              __typename
              id
              estado
              nit
              nombre
              correo
              logoURL
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            cro {
              __typename
              id
              estado
              nit
              nombre
              informacionContacto
              user
              createdAt
              updatedAt
              version
            }
            CIE10
            studyCenters {
              __typename
              nextToken
            }
            interruptions {
              __typename
              nextToken
            }
            invimaIterations {
              __typename
              nextToken
            }
            studyCenterCommittees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            identificador
            identificadorNCT
            linkClinical
            titulo
            areasTerapeuticas
            tipoPoblacion
            saludPublica
            enfermedadHuerfana
            tipoEstudio
            fase
            fechaAprobacionCasaMatriz
            fechaFactibilidadColombia
            enColombia
            motivoNoSeleccion
            fechaSeleccionColombia
            fechaRecepcionFilialColombia
            fechaVersionEspaniol
            fechaPropuestaCierreReclutamiento
            alcanceEstudio
            codigosATC
            tieneCRO
            numeroPaisesParticipantes
            totalSujetosNivelGlobal
            fechaLiberacionProtocolo
            fechaPrimerPacienteGlobal
            fechaCierreReclutamientoGlobal
            numeroSujetosPlaneadosColombia
            porcentajeSujetosColombia
            fechaRecepcionPaqueteInicialColombia
            fechaPrimerPacienteReclutadoColombia
            fechaCierreReclutamientoColombia
            motivoDeSuspension
            otroMotivoDeSuspension
            linkDePublicacion
            terminadoSatisfactoriamente
            motivoDeTerminacion
            otroMotivoDeTerminacion
            fechaDeLicenciaKit
            fechaDeImportacionEnBodegaKit
            fechaPrimeraImportacionKit
            fechaDeLicenciaMedicamentos
            fechaDeImportacionEnBodegaMedicamentos
            fechaPrimeraImportacionMedicamentos
            estado
            diasAprobacionInvimaInvima
            diasAprobacionInvimaPatrocinador
            anhoAprobacionInvima
            mesAprobacionInvima
            diasInicioEstudio
            anhoInicioEstudio
            mesInicioEstudio
            user
            fechaAprobacionEstudioInvima
            fechaDeSometimientoEstudioInvima
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (sponsorID) {
      gqlAPIServiceArguments.sponsorID = sponsorID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudiesBySponsorQuery>response.data.studiesBySponsor;
  }
  async StudyCenterByStudy(
    studyID?: string,
    centerID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudyCenterByStudyQuery> {
    const statement = `query StudyCenterByStudy($studyID: ID, $centerID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        studyCenterByStudy(
          studyID: $studyID
          centerID: $centerID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (centerID) {
      gqlAPIServiceArguments.centerID = centerID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudyCenterByStudyQuery>response.data.studyCenterByStudy;
  }
  async StudyCenterByCenter(
    centerID?: string,
    studyID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudyCenterByCenterQuery> {
    const statement = `query StudyCenterByCenter($centerID: ID, $studyID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        studyCenterByCenter(
          centerID: $centerID
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            committees {
              __typename
              nextToken
            }
            addenda {
              __typename
              nextToken
            }
            id
            studyID
            centerID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            center {
              __typename
              id
              estado
              nit
              nombre
              tipoCentro
              nivelAtencion
              numeroEmpleados
              municipio
              resolucionCertificacion
              resolucionVigente
              user
              informacionContacto
              createdAt
              updatedAt
              version
            }
            user
            costoPorPaciente
            fechaRecepcionPaquete
            fechaRecepcionContrato
            fechaFirmaContrato
            fechaFirmaContratoPatrocinador
            fechaAprobacionInvima
            fechaActivacionCentro
            cantidadPacientesPrevistos
            cantidadPacientesIncluidos
            fechaPrimerPacienteSeleccionado
            fechaPrimerPacienteAleatorizado
            estado
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (centerID) {
      gqlAPIServiceArguments.centerID = centerID;
    }
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudyCenterByCenterQuery>response.data.studyCenterByCenter;
  }
  async StudyCenterComiteesByStudyCenter(
    studyCenterID?: string,
    committeeID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCenterCommitteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudyCenterComiteesByStudyCenterQuery> {
    const statement = `query StudyCenterComiteesByStudyCenter($studyCenterID: ID, $committeeID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelStudyCenterCommitteeFilterInput, $limit: Int, $nextToken: String) {
        studyCenterComiteesByStudyCenter(
          studyCenterID: $studyCenterID
          committeeID: $committeeID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyCenterID
            committeeID
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            committee {
              __typename
              id
              estado
              nombre
              tipoComite
              periodicidadReunionesCEI
              municipio
              informacionContacto
              resolucionInvima
              costoEvaluacion
              user
              createdAt
              updatedAt
              version
            }
            ecIterations {
              __typename
              nextToken
            }
            user
            estado
            diasAprobacionCentroCentro
            diasAprobacionCentroPatrocinador
            anhoAprobacionCentro
            mesAprobacionCentro
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyCenterID) {
      gqlAPIServiceArguments.studyCenterID = studyCenterID;
    }
    if (committeeID) {
      gqlAPIServiceArguments.committeeID = committeeID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudyCenterComiteesByStudyCenterQuery>(
      response.data.studyCenterComiteesByStudyCenter
    );
  }
  async StudyCenterComiteesByComitee(
    committeeID?: string,
    studyCenterID?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCenterCommitteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudyCenterComiteesByComiteeQuery> {
    const statement = `query StudyCenterComiteesByComitee($committeeID: ID, $studyCenterID: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelStudyCenterCommitteeFilterInput, $limit: Int, $nextToken: String) {
        studyCenterComiteesByComitee(
          committeeID: $committeeID
          studyCenterID: $studyCenterID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyCenterID
            committeeID
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            committee {
              __typename
              id
              estado
              nombre
              tipoComite
              periodicidadReunionesCEI
              municipio
              informacionContacto
              resolucionInvima
              costoEvaluacion
              user
              createdAt
              updatedAt
              version
            }
            ecIterations {
              __typename
              nextToken
            }
            user
            estado
            diasAprobacionCentroCentro
            diasAprobacionCentroPatrocinador
            anhoAprobacionCentro
            mesAprobacionCentro
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (committeeID) {
      gqlAPIServiceArguments.committeeID = committeeID;
    }
    if (studyCenterID) {
      gqlAPIServiceArguments.studyCenterID = studyCenterID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudyCenterComiteesByComiteeQuery>(
      response.data.studyCenterComiteesByComitee
    );
  }
  async StudyCenterComiteesByStudy(
    studyID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStudyCenterCommitteeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StudyCenterComiteesByStudyQuery> {
    const statement = `query StudyCenterComiteesByStudy($studyID: ID, $sortDirection: ModelSortDirection, $filter: ModelStudyCenterCommitteeFilterInput, $limit: Int, $nextToken: String) {
        studyCenterComiteesByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            studyCenterID
            committeeID
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            committee {
              __typename
              id
              estado
              nombre
              tipoComite
              periodicidadReunionesCEI
              municipio
              informacionContacto
              resolucionInvima
              costoEvaluacion
              user
              createdAt
              updatedAt
              version
            }
            ecIterations {
              __typename
              nextToken
            }
            user
            estado
            diasAprobacionCentroCentro
            diasAprobacionCentroPatrocinador
            anhoAprobacionCentro
            mesAprobacionCentro
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StudyCenterComiteesByStudyQuery>(
      response.data.studyCenterComiteesByStudy
    );
  }
  async InterruptionByStudy(
    studyID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelInterruptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<InterruptionByStudyQuery> {
    const statement = `query InterruptionByStudy($studyID: ID, $sortDirection: ModelSortDirection, $filter: ModelInterruptionFilterInput, $limit: Int, $nextToken: String) {
        interruptionByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            studyID
            id
            estado
            interrupcionReclutamiento
            motivoInterrupcion
            otroMotivoInterrupcion
            fechaInicialInterrupcion
            fechaFinalizacionTnterrupcion
            user
            informacionContacto
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <InterruptionByStudyQuery>response.data.interruptionByStudy;
  }
  async AddendaByStudy(
    studyID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddendumFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddendaByStudyQuery> {
    const statement = `query AddendaByStudy($studyID: ID, $sortDirection: ModelSortDirection, $filter: ModelAddendumFilterInput, $limit: Int, $nextToken: String) {
        addendaByStudy(
          studyID: $studyID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            studyID
            study {
              __typename
              sponsorID
              CIE10
              id
              identificador
              identificadorNCT
              linkClinical
              titulo
              areasTerapeuticas
              tipoPoblacion
              saludPublica
              enfermedadHuerfana
              tipoEstudio
              fase
              fechaAprobacionCasaMatriz
              fechaFactibilidadColombia
              enColombia
              motivoNoSeleccion
              fechaSeleccionColombia
              fechaRecepcionFilialColombia
              fechaVersionEspaniol
              fechaPropuestaCierreReclutamiento
              alcanceEstudio
              codigosATC
              tieneCRO
              numeroPaisesParticipantes
              totalSujetosNivelGlobal
              fechaLiberacionProtocolo
              fechaPrimerPacienteGlobal
              fechaCierreReclutamientoGlobal
              numeroSujetosPlaneadosColombia
              porcentajeSujetosColombia
              fechaRecepcionPaqueteInicialColombia
              fechaPrimerPacienteReclutadoColombia
              fechaCierreReclutamientoColombia
              motivoDeSuspension
              otroMotivoDeSuspension
              linkDePublicacion
              terminadoSatisfactoriamente
              motivoDeTerminacion
              otroMotivoDeTerminacion
              fechaDeLicenciaKit
              fechaDeImportacionEnBodegaKit
              fechaPrimeraImportacionKit
              fechaDeLicenciaMedicamentos
              fechaDeImportacionEnBodegaMedicamentos
              fechaPrimeraImportacionMedicamentos
              estado
              diasAprobacionInvimaInvima
              diasAprobacionInvimaPatrocinador
              anhoAprobacionInvima
              mesAprobacionInvima
              diasInicioEstudio
              anhoInicioEstudio
              mesInicioEstudio
              user
              fechaAprobacionEstudioInvima
              fechaDeSometimientoEstudioInvima
              createdAt
              updatedAt
              version
            }
            invimaIterations {
              __typename
              nextToken
            }
            centers {
              __typename
              nextToken
            }
            id
            descripcion
            fechaCasaMatriz
            fechaRecepcionPaquete
            fechaVersionEspanol
            primerPaisImplementacion
            fechaImplementacionPais
            estado
            user
            tiemposInvima {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyID) {
      gqlAPIServiceArguments.studyID = studyID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddendaByStudyQuery>response.data.addendaByStudy;
  }
  async AddendumStudyCenterByAddendum(
    addendumID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddendumStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddendumStudyCenterByAddendumQuery> {
    const statement = `query AddendumStudyCenterByAddendum($addendumID: ID, $sortDirection: ModelSortDirection, $filter: ModelAddendumStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        AddendumStudyCenterByAddendum(
          addendumID: $addendumID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            addendumID
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            studyCenterID
            ecIterations {
              __typename
              nextToken
            }
            id
            fechaEnvioCentro
            fechaReciboCentro
            fechaImplementacionCentro
            user
            estado
            tiemposCentro {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (addendumID) {
      gqlAPIServiceArguments.addendumID = addendumID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddendumStudyCenterByAddendumQuery>(
      response.data.AddendumStudyCenterByAddendum
    );
  }
  async AddendumStudyCenterByStudyCenter(
    studyCenterID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddendumStudyCenterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddendumStudyCenterByStudyCenterQuery> {
    const statement = `query AddendumStudyCenterByStudyCenter($studyCenterID: ID, $sortDirection: ModelSortDirection, $filter: ModelAddendumStudyCenterFilterInput, $limit: Int, $nextToken: String) {
        AddendumStudyCenterByStudyCenter(
          studyCenterID: $studyCenterID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            addendum {
              __typename
              studyID
              id
              descripcion
              fechaCasaMatriz
              fechaRecepcionPaquete
              fechaVersionEspanol
              primerPaisImplementacion
              fechaImplementacionPais
              estado
              user
              createdAt
              updatedAt
              version
            }
            addendumID
            studyCenter {
              __typename
              id
              studyID
              centerID
              user
              costoPorPaciente
              fechaRecepcionPaquete
              fechaRecepcionContrato
              fechaFirmaContrato
              fechaFirmaContratoPatrocinador
              fechaAprobacionInvima
              fechaActivacionCentro
              cantidadPacientesPrevistos
              cantidadPacientesIncluidos
              fechaPrimerPacienteSeleccionado
              fechaPrimerPacienteAleatorizado
              estado
              createdAt
              updatedAt
              version
            }
            studyCenterID
            ecIterations {
              __typename
              nextToken
            }
            id
            fechaEnvioCentro
            fechaReciboCentro
            fechaImplementacionCentro
            user
            estado
            tiemposCentro {
              __typename
              nombre
              dias
              diasPatrocinador
              mes
              anho
              fechaInicial
              fechaFinal
            }
            createdAt
            updatedAt
            version
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (studyCenterID) {
      gqlAPIServiceArguments.studyCenterID = studyCenterID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddendumStudyCenterByStudyCenterQuery>(
      response.data.AddendumStudyCenterByStudyCenter
    );
  }
}
