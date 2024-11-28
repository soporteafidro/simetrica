import { Injectable } from '@angular/core';

import cie10s from '../../assets/CIE10/cie10.json';
@Injectable({
  providedIn: 'root',
})
export class CIE10Service {
  constructor() { }
  listCIE10(word: string): string[] {
    let wordClear = this.removeSpaces(word);
    wordClear = this.removeAccents(wordClear.toLowerCase());
    const list = cie10s.filter(
      (x: any) => {
        let description = this.removeAccents(x.description.toLowerCase());
        let code = this.removeAccents(x.code.toLowerCase());
        let cie10Complete = this.removeSpaces(`${code}-${description}`);
        return code.indexOf(wordClear) !== -1 ||
          description.indexOf(wordClear) !== -1 ||
          cie10Complete.indexOf(wordClear) !== -1
      }
    );
    return list.map((x) => x.code + ' - ' + x.description);
  }
  private removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private removeSpaces(value: string): string {
    return value.split(' ').join('');
  }
}
