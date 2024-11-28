import { Pipe, PipeTransform } from '@angular/core';
import { motivoInterrupcionTypeEnum } from '../services/API.service';

@Pipe({
  name: 'interruptionMotivoPipe'
})
export class InterruptionMotivoPipePipe implements PipeTransform {
  transform(state: any): string {
    if (state === motivoInterrupcionTypeEnum.APROBACION_ENMIENDA) {
      return 'Aprobación enmienda';
    } else if (state === motivoInterrupcionTypeEnum.CALIDAD) {
      return 'Calidad';
    } else if (state === motivoInterrupcionTypeEnum.MEDIDA_SANITARIA) {
      return 'Medida sanitaria';
    } else if (state === motivoInterrupcionTypeEnum.TEMAS_LOGISTICOS) {
      return 'Temas logisticos';
    }else if (state === motivoInterrupcionTypeEnum.OTRA) {
      return 'Otra';
    } else {
      return 'Error';
    }
  }
}
