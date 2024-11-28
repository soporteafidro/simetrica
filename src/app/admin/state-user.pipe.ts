import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateUser'
})
export class StateUserPipe implements PipeTransform {
  transform(state: any): string {
    if (state === true) {
      return 'Activo';
    } else if (state === false) {
      return 'Inactivo';
    } else if (state === 'FORCE_CHANGE_PASSWORD') {
      return 'Cambio de clave';
    } else {
      return 'Error';
    }
  }
}
