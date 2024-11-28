import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transforHeadersTable',
})
export class TransforHeadersTablePipe implements PipeTransform {
  transform(header: string, source: string): string {
    if (source === 'studies') {
      if (header === 'identificador') {
        return 'Identificador';
      } else if (header === 'sponsorID') {
        return 'Patrocinador';
      } else if (header === 'identificadorDeBaseInternacional') {
        return 'Identificador de base internacional';
      } else if (header === 'linkClinical') {
        return 'Link Clinical';
      } else if (header === 'titulo') {
        return 'Título';
      } else if (header === 'areasTerapeuticas') {
        return 'Areas terapeuticas';
      } else if (header === 'tipoPoblacion') {
        return 'Tipo poblacion';
      } else if (header === 'CIE10') {
        return 'CIE10';
      } else if (header === 'tipoEstudio') {
        return 'Tipo estudio';
      } else if (header === 'saludPublica') {
        return 'Salud pública';
      } else if (header === 'enfermedadHuerfana') {
        return 'Enfermedad huérfana';
      } else if (header === 'fase') {
        return 'Fase';
      } else if (header === 'fechaAprobacionCasaMatriz') {
        return 'Fecha aprobación casa matriz';
      } else if (header === 'fechaFactibilidadColombia') {
        return 'Fecha factibilidad Colombia';
      } else if (header === 'enColombia') {
        return 'En Colombia';
      } else if (header === 'motivoNoSeleccion') {
        return 'Motivo no selección';
      } else if (header === 'fechaSeleccionColombia') {
        return 'Fecha selección Colombia';
      } else if (header === 'fechaRecepcionFilialColombia') {
        return 'Fecha recepción filial Colombia';
      } else if (header === 'fechaVersionEspaniol') {
        return 'Fecha version español';
      } else if (header === 'fechaPropuestaCierreReclutamiento') {
        return 'Fecha propuesta cierre reclutamiento';
      } else if (header === 'alcanceEstudio') {
        return 'Alcance estudio';
      } else if (header === 'fechaDeLicenciaKit') {
        return 'Fecha de licencia kits / insumos';
      } else if (header === 'fechaDeImportacionEnBodegaKit') {
        return 'Fecha de importación en bodega kits / insumos';
      } else if (header === 'fechaPrimeraImportacionKit') {
        return 'Fecha de la primera importación kits / insumos';
      } else if (header === 'fechaDeLicenciaMedicamentos') {
        return 'Fecha de licencia medicamentos';
      } else if (header === 'fechaDeImportacionEnBodegaMedicamentos') {
        return 'Fecha de importación en bodega medicamentos';
      } else if (header === 'fechaPrimeraImportacionMedicamentos') {
        return 'Fecha de la primera importación medicamentos';
      } else if (header === 'codigosATC') {
        return 'Códigos ATC';
      } else if (header === 'tieneCRO') {
        return 'Tiene CRO';
      } else if (header === 'studyCroId') {
        return 'CRO';
      } else if (header === 'numeroPaisesParticipantes') {
        return 'Numero países participantes';
      } else if (header === 'totalSujetosNivelGlobal') {
        return 'Total sujetos nivel global';
      } else if (header === 'fechaLiberacionProtocolo') {
        return 'Fecha liberación protocolo';
      } else if (header === 'fechaPrimerPacienteGlobal') {
        return 'Fecha primer paciente global';
      } else if (header === 'fechaCierreReclutamientoGlobal') {
        return 'Fecha cierre reclutamiento global';
      } else if (header === 'numeroSujetosPlaneadosColombia') {
        return 'Numero sujetos planeados Colombia';
      } else if (header === 'fechaRecepcionPaqueteInicialColombia') {
        return 'Fecha recepción paquete inicial Colombia';
      } else if (header === 'fechaPrimerPacienteReclutadoColombia') {
        return 'Fecha primer paciente reclutado Colombia';
      } else if (header === 'fechaCierreReclutamientoColombia') {
        return 'Fecha cierre reclutamiento Colombia';
      }
    } else if (source === 'centers') {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'centerID') {
        return 'Centro';
      } else if (header === 'costoPorPaciente') {
        return 'Costo por paciente';
      } else if (header === 'fechaRecepcionPaquete') {
        return 'Fecha recepción de contrato';
      } else if (header === 'fechaFirmaContrato') {
        return 'Fecha firma contrato';
      } else if (header === 'fechaRecepcionContrato') {
        return 'Fecha recepción contrato';
      } else if (header === 'fechaFirmaContratoPatrocinador') {
        return 'Fecha firma contrato patrocinador';
      } else if (header === 'fechaAprobacionInvima') {
        return 'Fecha aprobación invima';
      } else if (header === 'numeroEmpleados') {
        return 'Número de empleados';
      } else if (header === 'fechaActivacionCentro') {
        return 'Fecha activación centro';
      } else if (header === 'resolucionCertificacion') {
        return 'Resolución de certificación:';
      } else if (header === 'cantidadPacientesIncluidos') {
        return 'Cantidad pacientes incluidos';
      } else if (header === 'fechaPrimerPacienteSeleccionado') {
        return 'Fecha primer paciente seleccionado';
      } else if (header === 'fechaPrimerPacienteAleatorizado') {
        return 'Fecha primer paciente aleatorizado';
      }
    } else if (source === 'committee') {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'studyCenterID') {
        return 'Centro';
      } else if (header === 'committeeID') {
        return 'Comité';
      }
    } else if (source === 'interruption') {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'interrupcionReclutamiento') {
        return 'Interrupcion reclutamiento';
      } else if (header === 'motivoInterrupcion') {
        return 'Motivo interrupción';
      } else if (header === 'otroMotivoInterrupcion') {
        return 'Otro motivo interrupción';
      } else if (header === 'fechaInicialInterrupcion') {
        return 'fecha inicial interrupción';
      } else if (header === 'fechaFinalizacionTnterrupcion') {
        return 'fecha finalización interrupción';
      }
    } else if (source === 'amendments') {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'descripcion') {
        return 'Descripcion';
      } else if (header === 'primerPaisImplementacion') {
        return 'Primer país implementación';
      } else if (header === 'fechaCasaMatriz') {
        return 'Fecha casa matriz';
      } else if (header === 'fechaRecepcionPaquete') {
        return 'Fecha recepción paquete';
      } else if (header === 'fechaVersionEspanol') {
        return 'Fecha version español';
      } else if (header === 'fechaImplementacionPais') {
        return 'Fecha implementacion país';
      }
    } else if (source === 'centers-addendum') {
      if (header === 'addendumID') {
        return 'Enmienda';
      } else if (header === 'studyCenterID') {
        return 'Centro';
      } else if (header === 'fechaEnvioCentro') {
        return 'Fecha de envió centro';
      } else if (header === 'fechaReciboCentro') {
        return 'Fecha recepción centro';
      } else if (header === 'fechaImplementacionCentro') {
        return 'Fecha implementación de centro';
      }
    } else if (
      source === 'interactions-invima-study' ||
      source === 'interactions-invima-addendum'
    ) {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'addendumID') {
        return 'Enmienda';
      } else if (header === 'tipoIteracion') {
        return 'Tipo de interacción';
      } else if (header === 'tipoRequerimiento') {
        return 'Tipo requerimiento';
      } else if (header === 'otroTipoRequerimiento') {
        return 'Otro tipo requerimiento';
      } else if (header === 'fechaDeSometimiento') {
        return 'Fecha de sometimiento';
      } else if (header === 'fechaRespuestaInvima') {
        return 'Fecha respuesta invima';
      } else if (header === 'fechaDeNotificacion') {
        return 'Fecha de notificación';
      } else if (header === 'estadoIteracion') {
        return 'Estado iteración';
      } else if (header === 'resolucion') {
        return 'Resolución';
      } else if (header === 'tiempoInvima') {
        return 'Tiempo invima';
      } else if (header === 'tiempoPatrocinador') {
        return 'Tiempo patrocinador';
      } else if (header === 'tiempoNotificacion') {
        return 'Tiempo notificación';
      } else if (header === 'causalRetrasoPatrocinador') {
        return 'Causal retraso patrocinador';
      } else if (header === 'otroCausalRetrasoPatrocinador') {
        return 'Otro causal retraso patrocinador';
      } else if (header === 'notasDeSeguimiento') {
        return 'Notas de seguimiento';
      }
    } else if (source === 'interactions-committee') {
      if (header === 'studyID') {
        return 'Estudio';
      } else if (header === 'addendumID') {
        return 'Enmienda';
      } else if (header === 'studyCenterCommitteeID') {
        return 'Comité';
      } else if (header === 'tipoIteracion') {
        return 'Tipo iteración';
      } else if (header === 'tipoAclaracion') {
        return 'Tipo aclaración';
      } else if (header === 'otroTipoAclaracion') {
        return 'Otro tipo aclaración';
      } else if (header === 'fechaDeSometimientoCE') {
        return 'Fecha de sometimiento CE';
      } else if (header === 'fechaRespuestaCE') {
        return 'Fecha respuesta CE';
      } else if (header === 'estadoIteracion') {
        return 'Estado iteración';
      } else if (header === 'informacionCarta') {
        return 'Información carta';
      } else if (header === 'tiempoComite') {
        return 'tiempo comité';
      } else if (header === 'tiempoPatrocinador') {
        return 'tiempo patrocinador';
      } else if (header === 'causalRetrasoPatrocinador') {
        return 'Causal retraso patrocinador';
      } else if (header === 'otroCausalRetrasoPatrocinador') {
        return 'Otro causal retraso patrocinador';
      } else if (header === 'notasDeSeguimiento') {
        return 'Notas de seguimiento';
      }
    }
    return 'error';
  }
}
