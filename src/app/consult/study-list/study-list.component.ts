import { Component, Input } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent {
  @Input() studies: any[] = [];
  msgs = [{severity: 'warn', summary: '', detail: 'No se encontraron estudios con los criterios de búsquedas ingresados.'}];
  constructor(public location: LocationService) { }
}
