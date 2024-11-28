import { Pipe, PipeTransform } from '@angular/core';
import { InterrupcionReclutamientoTypeEnum } from '../services/API.service';

@Pipe({
  name: 'interruptionReclutamientoPipe'
})
export class InterruptionReclutamientoPipePipe implements PipeTransform {
  transform(state: any): string {
    if (state === InterrupcionReclutamientoTypeEnum.CENTRO) {
      return 'Centro';
    } else if (state === InterrupcionReclutamientoTypeEnum.PAIS) {
      return 'Pais';
    } else {
      return 'Error';
    }
  }
}
