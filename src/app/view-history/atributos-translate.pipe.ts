import { Pipe, PipeTransform } from '@angular/core';
import { TypeCenterPipe } from '../centers/type-center.pipe';
import { TypeCommitteePipe } from '../committee/type-committee.pipe';
import { InterruptionMotivoPipePipe } from '../interruption/interruption-motivo-pipe.pipe';
import { InterruptionReclutamientoPipePipe } from '../interruption/interruption-reclutamiento-pipe.pipe';
import { LocationService } from '../services/location.service';
import { DateIITPipe } from '../utils/pipes/date-iit.pipe';

@Pipe({
  name: 'atributosTranslate'
})
export class AtributosTranslatePipe implements PipeTransform {
  constructor(
    private typeCenterPipe: TypeCenterPipe,
    private typeCommitteePipe: TypeCommitteePipe,
    private locationService: LocationService,
    private interruptionReclutamientoPipePipe: InterruptionReclutamientoPipePipe,
    private interruptionMotivoPipePipe: InterruptionMotivoPipePipe,
    private dateIITPipe: DateIITPipe,
    ){}
  transform(state: any, variable: string): string {
    if (variable === 'tipoCentro') {
      return this.typeCenterPipe.transform(state);
    } else if (variable === 'tipoComite') {
      return this.typeCommitteePipe.transform(state);
    } else if (variable === 'municipio') {
      const muni = this.locationService.getMunicipioName(state);
      return muni;
    } else if (variable === 'interrupcionReclutamiento') {
      return this.interruptionReclutamientoPipePipe.transform(state);
    } else if (variable === 'InterruptionMotivoPipePipe') {
      return this.interruptionMotivoPipePipe.transform(state);
    } else if (variable === 'fechaInicialInterrupcion') {
      return this.dateIITPipe.transformWithTime(state);
    } else if (variable === 'fechaFinalizacionTnterrupcion') {
      return this.dateIITPipe.transformWithTime(state);
    } else if (variable === 'fechaDeSometimiento') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRespuestaInvima') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaDeNotificacion') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaFirmaContrato') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRecepcionPaquete') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRecepcionContrato') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaFirmaContratoPatrocinador') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaAprobacionInvima') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaActivacionCentro') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPrimerPacienteSeleccionado') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPrimerPacienteAleatorizado') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaDeSometimientoCE') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRespuestaCE') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaCasaMatriz') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaVersionEspanol') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaImplementacionPais') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaEnvioCentro') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaReciboCentro') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaImplementacionCentro') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaAprobacionCasaMatriz') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaFactibilidadColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRecepcionFilialColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaVersionEspaniol') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPropuestaCierreReclutamiento') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaSeleccionColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaLiberacionProtocolo') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPrimerPacienteReclutadoColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRecepcionPaqueteInicialColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaCierreReclutamientoColombia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaCierreReclutamientoGlobal') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPrimerPacienteGlobal') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaDeImportacionEnBodega') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaDeLicencia') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaPrimeraImportacionInsumos') {
      return this.dateIITPipe.transform(state);
    } else if (variable === 'fechaRespuestaCE') {
      return this.dateIITPipe.transform(state);
    } else {
      return state;
    }
  }
}
