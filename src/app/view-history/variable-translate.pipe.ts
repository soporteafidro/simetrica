import { Pipe, PipeTransform } from '@angular/core';
import { EntityState } from '../services/API.service';

@Pipe({
  name: 'variableTranslate',
})
export class VariableTranslatePipe implements PipeTransform {
  constructor() {}
  transform(state: any): string {
    if (state === 'nombre') {
      return 'Nombre';
    } else if (state === 'informacionContacto') {
      return 'Información contacto';
    } else if (state === 'nit') {
      return 'Nit';
    } else if (state === 'correo') {
      return 'Correo';
    } else if (state === 'tipoCentro') {
      return 'Tipo de centro';
    } else if (state === 'nivelAtencion') {
      return 'Nivel de atencíon';
    } else if (state === 'numeroEmpleados') {
      return 'Numeró de empleados';
    } else if (state === 'municipio') {
      return 'Municipio';
    } else if (state === 'resolucionCertificacion') {
      return 'Resolucíon de certificación';
    } else if (state === 'resolucionVigente') {
      return 'Resolucíon de vigencia';
    } else if (state === 'tipoComite') {
      return 'Tipo de comite';
    } else if (state === 'periodicidadReunionesCEI') {
      return 'Periodicidad Reuniones CEI';
    } else if (state === 'resolucionInvima') {
      return 'Resolución invima';
    } else if (state === 'logoUrl') {
      return 'Logo';
    } else if (state === 'estado') {
      if (state === EntityState.ACTIVE) {
        return 'Activo';
      } else if (state === EntityState.DELETED) {
        return 'Eliminado';
      } else if (state === EntityState.INACTIVE) {
        return 'Inactivo';
      } else if (state === EntityState.PENDING) {
        return 'Pendiente';
      }
    } else if (state === 'interrupcionReclutamiento') {
      return 'Interrupción de reclutamiento';
    } else if (state === 'fechaInicialInterrupcion') {
      return 'Fecha inicial interrupción';
    } else if (state === 'fechaFinalizacionTnterrupcion') {
      return 'Fecha final de interrupción';
    } else if (state === 'motivoInterrupcion') {
      return 'Motivo interrupción';
    } else if (state === 'fechaRecepcionPaquete') {
      return 'Fecha recepción de paquete';
    } else if (state === 'fechaRecepcionContrato') {
      return 'Fecha recepción de contrato';
    } else if (state === 'fechaFirmaContrato') {
      return 'Fecha firma de contrato';
    } else if (state === 'fechaFirmaContratoPatrocinador') {
      return 'Fecha firma de contrato con Ptr.';
    } else if (state === 'fechaAprobacionInvima') {
      return 'Fecha aprobación INVIMA';
    } else if (state === 'fechaActivacionCentro') {
      return 'Fecha activación centro';
    } else if (state === 'fechaPrimerPacienteSeleccionado') {
      return 'Fecha primer paciente seleccionado';
    } else if (state === 'fechaPrimerPacienteAleatorizado') {
      return 'Fecha primer paciente aleatorizado';
    } else if (state === 'costoPorPaciente') {
      return 'Costo por paciente';
    } else if (state === 'cantidadPacientesPrevistos') {
      return 'Cant. pacientes previstos';
    } else if (state === 'causalRetrasoPatrocinador') {
      return 'Causal retraso';
    } else if (state === 'estadoIteracion') {
      return 'Estado';
    } else if (state === 'tipoAclaracion') {
      return 'Tipo de aclaración';
    } else if (state === 'fechaDeSometimientoCE') {
      return 'Fecha de sometimiento CE';
    } else if (state === 'fechaRespuestaCE') {
      return 'Fecha de contestación CE';
    } else if (state === 'informacionCarta') {
      return 'Información carta respuesta CE';
    } else if (state === 'notasDeSeguimiento') {
      return 'Notas de seguimiento';
    } else if (state === 'tipoIteracion') {
      return 'Tipo de interacción';
    } else if (state === 'tiempoComite') {
      return 'Dias resolución Comité';
    } else if (state === 'tiempoPatrocinador') {
      return 'Dias patrocinador';
    } else if (state === 'descripcion') {
      return 'Descripción enmienda';
    } else if (state === 'fechaCasaMatriz') {
      return 'Fecha de enmienda casa matriz';
    } else if (state === 'fechaVersionEspanol') {
      return 'Fecha de versión en español';
    } else if (state === 'primerPaisImplementacion') {
      return 'Primer país en implementar enmienda';
    } else if (state === 'fechaImplementacionPais') {
      return 'Fecha de implementación enmienda en país';
    } else if (state === 'studyCenterID') {
      return 'Centro';
    } else if (state === 'fechaEnvioCentro') {
      return 'Fecha de envío al centro';
    } else if (state === 'fechaReciboCentro') {
      return 'Fecha de recepción';
    } else if (state === 'fechaImplementacionCentro') {
      return 'Fecha de implementación';
    } else if (state === 'fechaDeSometimiento') {
      return 'Fecha de sometimiento';
    } else if (state === 'tiempoInvima') {
      return 'Tiempo INVIMA';
    } else if (state === 'linkClinical') {
      return 'Link de base internacional';
    } else if (state === 'título') {
      return 'Título';
    } else if (state === 'enfermedadHuerfana') {
      return '¿De enfermedad huérfana?';
    } else if (state === 'saludPublica') {
      return '¿En salud pública?';
    } else if (state === 'identificadorNCT') {
      return 'Identificador de base internacional';
    } else if (state === 'tipoEstudio') {
      return 'Tipo de estudio';
    } else if (state === 'fase') {
      return 'Fase';
    } else if (state === 'fechaAprobacionCasaMatriz') {
      return 'Fecha de aprobación protocolo casa matriz';
    } else if (state === 'areasTerapeuticas') {
      return 'Áreas terapéuticas';
    } else if (state === 'sponsorID') {
      return 'Patrocinador';
    } else if (state === 'CIE10') {
      return 'CIE-10';
    } else if (state === 'identificador') {
      return 'Identificador';
    } else if (state === 'fechaFactibilidadColombia') {
      return 'Fecha de factibilidad en Colombia';
    } else if (state === 'fechaRecepcionFilialColombia') {
      return 'Fecha de recepción protocolo filial Colombia';
    } else if (state === 'fechaVersionEspaniol') {
      return 'Fecha de versión en español';
    } else if (state === 'fechaPropuestaCierreReclutamiento') {
      return 'Fecha propuesta de cierre del reclutamiento';
    } else if (state === 'fechaSeleccionColombia') {
      return 'Fecha de selección de Colombia';
    } else if (state === 'totalSujetosNivelGlobal') {
      return 'Total de sujetos a nivel global';
    } else if (state === 'numeroSujetosPlaneadosColombia') {
      return 'Número de sujetos planeados';
    } else if (state === 'numeroPaisesParticipantes') {
      return 'Número de países participantes';
    } else if (state === 'fechaLiberacionProtocolo') {
      return 'Fecha de liberación del protocolo';
    } else if (state === 'fechaPrimerPacienteReclutadoColombia') {
      return 'Fecha del primer paciente reclutado';
    } else if (state === 'fechaRecepcionPaqueteInicialColombia') {
      return 'Fecha de recepción paquete inicial';
    } else if (state === 'fechaCierreReclutamientoColombia') {
      return 'Fecha cierre de reclutamiento';
    } else if (state === 'fechaCierreReclutamientoGlobal') {
      return 'Fecha cierre de reclutamiento global';
    } else if (state === 'fechaPrimerPacienteGlobal') {
      return 'Fecha del primer paciente global';
    } else if (state === 'tieneCRO') {
      return '¿Tiene CRO?';
    } else if (state === 'studyCroId') {
      return 'CRO';
    } else if (state === 'alcanceEstudio') {
      return 'Alcance del estudio';
    } else if (state === 'fechaDeImportacionEnBodega') {
      return 'Fecha de la importación en bodega';
    } else if (state === 'fechaDeLicencia') {
      return 'Fecha de la licencia';
    } else if (state === 'fechaPrimeraImportacionInsumos') {
      return 'Fecha de la primera importación de insumos';
    } else if (state === 'codigosATC') {
      return 'Códigos ATC';
    } else {
      return state;
    }
  }
}
