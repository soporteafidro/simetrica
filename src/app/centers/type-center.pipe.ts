import { Pipe, PipeTransform } from '@angular/core';
import { CenterTypeEnum } from '../services/API.service';

@Pipe({
  name: 'typeCenter'
})
export class TypeCenterPipe implements PipeTransform {
  transform(state: any): string {
    if (state === CenterTypeEnum.EXCLUSIVO_INVESTIGACION) {
      return 'Exclusivo para Investigación Clínica';
    } else if (state === CenterTypeEnum.PRIVADO) {
      return 'Privado';
    }else if (state === CenterTypeEnum.PUBLICO) {
      return 'Público';
    } else {
      // return 'Error';
    }
  }
}
