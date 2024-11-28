import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonFunctionsService {
  optionNavbar = new Subject<any>();

  constructor(private authService: AuthService) {}

  static copyMatchingKeyValues(target, source): any {
    return Object.keys(target).forEach((key) => {
      if (source[key] !== undefined) {
        target[key] = source[key];
      }
    });
  }

  static validateDates(
    form: NgForm,
    fechaAComparar: string,
    desde: number,
    hasta: number,
    fechas: any[],
    addDate?: boolean
  ): void {
    for (let i = desde; i < hasta; i++) {
      const fechaMayor = form.controls[`${fechaAComparar}`].value;
      if (fechaMayor && fechas[i].value && fechas[i].value != '') {
        const fechaMenorRaw = fechas[i].value;
        const fechaMenor = new Date(fechaMenorRaw);

        if (fechaMayor < fechaMenor) {
          if (addDate) {
            form.controls[`${fechaAComparar}`].setErrors({
              ...(form.controls[`${fechaAComparar}`].errors || {}),
              errorFecha:
                `La fecha debe ser mayor a la ${fechas[i].key} ` +
                ' (' +
                CommonFunctionsService.transform(fechaMenor) +
                ').',
            });
          } else {
            form.controls[`${fechaAComparar}`].setErrors({
              ...(form.controls[`${fechaAComparar}`].errors || {}),
              errorFecha: `La fecha debe ser mayor a la ${fechas[i].key} .`,
            });
          }
        } else {
          if (form.controls[`${fechaAComparar}`].hasError('errorFecha')) {
            delete form.controls[`${fechaAComparar}`].errors['errorFecha'];
            form.controls[`${fechaAComparar}`].updateValueAndValidity();
          }
        }
      }
    }
  }

  static transform(value: string | Date): string {
    return this.getDateString(value);
  }

  static getDateString(value): string {
    if (value && value !== '---') {
      const date = new Date(value);
      const year = date.getFullYear().toString();
      const monthFix = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      return (
        (day.length > 1 ? day : '0' + day) +
        '-' +
        (monthFix.length > 1 ? monthFix : '0' + monthFix) +
        '-' +
        year
      );
    }
    return '---';
  }

  compareLabels(x, y): number {
    const a = x.label.toUpperCase();
    const b = y.label.toUpperCase();
    return a === b ? 0 : a > b ? 1 : -1;
  }

  onlyLetters(word: string): boolean {
    const reg = /[a-zA-Z]+$/;
    return reg.test(word);
  }

  onlyNumbers(word: string): boolean {
    const reg = /^[0-9]*$/;
    return reg.test(word);
  }

  buildMenu(): any {
    const items = [];
    if (this.authService.isAdmin()) {
      items.push({ label: 'ESTUDIOS', routerLink: ['studies'] });
      items.push({ label: 'USUARIOS', routerLink: ['admin/users/list'] });
      items.push({ label: 'REPORTES', routerLink: ['reports'] });
      items.push({
        label: 'CATÁLOGOS',
        items: [
          { label: 'PATROCINADORES', routerLink: ['admin/sponsors/list'] },
          { label: 'CENTROS', routerLink: ['centers'] },
          { label: 'COMITÉS', routerLink: ['committees'] },
          { label: 'CROS', routerLink: ['cro'] },
        ],
      });

      items.push({
        label: 'CARGA MASIVA',
        items: [
          {
            label: 'Cargar data a estudios',
            items: [
              { label: 'Estudios', routerLink: ['upload', 'studies'] },
              { label: 'Centros', routerLink: ['upload', 'centers'] },
              { label: 'Comité de ética', routerLink: ['upload', 'committee'] },
              {
                label: 'interacciones comité de ética',
                routerLink: ['upload', 'interactions-committee'],
              },
              {
                label: 'interacciones de INVIMA',
                routerLink: ['upload', 'interactions-invima-study'],
              },
              { label: 'Enmiendas', routerLink: ['upload', 'amendments'] },
              {
                label: 'Interrupciones',
                routerLink: ['upload', 'interruption'],
              },
            ],
          },
          {
            label: 'Cargar data a enmiendas',
            items: [
              {
                label: 'INVIMA',
                routerLink: ['upload', 'interactions-invima-addendum'],
              },
              { label: 'Centros', routerLink: ['upload', 'centers-addendum'] },
              {
                label: 'Comités de ética',
                routerLink: ['upload', 'interactions-committee'],
              },
            ],
          },
        ],
      });

      items.push({ label: 'AYUDA', routerLink: ['help'] });
    } else if (this.authService.isSupervisor()) {
      items.push({ label: 'MIS ESTUDIOS', routerLink: ['studies'] });

      items.push({
        label: 'CARGA MASIVA',
        items: [
          {
            label: 'Cargar data a estudios',
            items: [
              { label: 'Estudios', routerLink: ['upload', 'studies'] },
              { label: 'Centros', routerLink: ['upload', 'centers'] },
              { label: 'Comité de ética', routerLink: ['upload', 'committee'] },
              {
                label: 'interacciones comité de ética',
                routerLink: ['upload', 'interactions-committee'],
              },
              {
                label: 'interacciones de INVIMA',
                routerLink: ['upload', 'interactions-invima-study'],
              },
              { label: 'Enmiendas', routerLink: ['upload', 'amendments'] },
              {
                label: 'Interrupciones',
                routerLink: ['upload', 'interruption'],
              },
            ],
          },
          {
            label: 'Cargar data a enmiendas',
            items: [
              {
                label: 'INVIMA',
                routerLink: ['upload', 'interactions-invima-addendum'],
              },
              { label: 'Centros', routerLink: ['upload', 'centers-addendum'] },
              {
                label: 'Comités de ética',
                routerLink: ['upload', 'interactions-committee'],
              },
            ],
          },
        ],
      });

      items.push({ label: 'AYUDA', routerLink: ['help'] });
    } else if (this.authService.isReader()) {
      items.push({ label: 'HOME', routerLink: ['home'] });
      items.push({ label: 'ESTUDIOS', routerLink: ['studies'] });
      items.push({ label: 'AYUDA', routerLink: ['help'] });
    } else if (this.authService.isDigitizer()) {
      items.push({ label: 'HOME', routerLink: ['home'] });
      items.push({ label: 'MIS ESTUDIOS', routerLink: ['studies'] });

      items.push({
        label: 'CARGA MASIVA',
        items: [
          { label: 'ESTUDIOS', routerLink: ['upload', 'studies'] },
          { label: 'ASIGNAR CENTRO', routerLink: ['upload', 'centers'] },
          { label: 'ASIGNAR CENTRO', routerLink: ['upload', 'centers'] },
          { label: 'ASIGNAR COMITÉ', routerLink: ['upload', 'committee'] },
          {
            label: 'ASIGNAR INTERACCIÓN COMITÉ',
            routerLink: ['upload', 'interactions-committee'],
          },
          {
            label: 'ASIGNAR INTERACCIÓN INVIMA',
            routerLink: ['upload', 'interactions-invima'],
          },
          {
            label: 'ENMIENDAS',
            routerLink: ['upload', 'amendments'],
          },
          {
            label: 'INTERRUPCIONES',
            routerLink: ['upload', 'interruption'],
          },
        ],
      });

      items.push({ label: 'AYUDA', routerLink: ['help'] });
    }
    this.optionNavbar.next(items);
  }
}
