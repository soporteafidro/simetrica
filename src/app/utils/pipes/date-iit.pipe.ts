import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateIIT'
})
export class DateIITPipe extends DatePipe implements PipeTransform  {

  transform(value: string | Date): string {

      return this.getDateString(value);

  }

  transformWithTime(value: string | Date): string {

    return this.getDateString(value) + ' ' + this.getTimeString(value);

  }

  getDateString(value): string {

    if (value && value !== "---") {
      const date = new Date(value);
      const year = date.getFullYear().toString();
      const monthFix = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      return (day.length > 1 ? day : '0' + day) + '-' + (monthFix.length > 1 ? monthFix : '0' + monthFix) + '-' + year;
    }
    return '---';

  }

  getTimeString(value): string {

    if (value && value !== "---") {
      const date = new Date(value);
      const hour = date.getHours().toString();
      const minutes = date.getMinutes().toString();
      const seconds = date.getSeconds().toString();
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      return hour + ':' + minutes + ':' + seconds + ' ' + ampm;
    }
    return '---';
  }

}
