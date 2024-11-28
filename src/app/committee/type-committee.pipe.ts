import { Pipe, PipeTransform } from '@angular/core';
import { CommitteeTypeEnum } from '../services/API.service';

@Pipe({
  name: 'typeCommittee'
})
export class TypeCommitteePipe implements PipeTransform {
  transform(state: any): string {
    if (state === CommitteeTypeEnum.EXTERNO) {
      return 'Externo';
    } else if (state === CommitteeTypeEnum.INSTITUCIONAL) {
      return 'Institucional';
    } else {
      // return 'Error';
    }
  }
}
