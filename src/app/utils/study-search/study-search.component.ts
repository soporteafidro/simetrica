import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudiesService } from 'src/app/studies/studies.service';
import { Logger } from 'aws-amplify';
const logger = new Logger('study-serach');

@Component({
  selector: 'app-study-search',
  templateUrl: './study-search.component.html',
  styleUrls: ['./study-search.component.scss'],
})
export class StudySearchComponent {
  constructor(
    private studiesService: StudiesService,
    private router: Router,
    private auth: AuthService
  ) {}

  selected: any;
  results: any[] = [];

  currQuery = '';
  onSelect(evt: any): void {
    logger.debug(this.selected);
    if (this.selected) {
      this.router.navigate(['studies/' + this.selected.id + '/view']);
      this.selected = null;
      this.currQuery = '';
    }
  }

  search(evt: any): void {
    const filtered: any[] = [];
    this.currQuery = evt.query;
    logger.debug(this.currQuery);
    if (this.auth.isSponsorUser()) {
      const sponsorId = this.auth.getUserSponsorId();
      this.studiesService.studiesBySponsor(sponsorId).then((studies) => {
        studies.items.forEach((study) => {
          this.filterStudies(evt.query, study, filtered);
        });
        this.results = filtered;
      });
    } else {
      this.studiesService.listStudies().then((studies) => {
        studies.items.forEach((study) => {
          this.filterStudies(evt.query, study, filtered);
        });
        this.results = filtered;
      });
    }
  }

  filterStudies(query: string, study: any, resultList: any[]): void {
    let added = false;
    if (study.titulo.toLowerCase().indexOf(query.toLowerCase()) > -1) {
      resultList.push(study);
      added = true;
    }
    if (
      study.identificador.toLowerCase().indexOf(query.toLowerCase()) > -1 &&
      !added
    ) {
      resultList.push(study);
      added = true;
    }
    if (
      study.identificadorNCT.toLowerCase().indexOf(query.toLowerCase()) > -1 &&
      !added
    ) {
      resultList.push(study);
      added = true;
    }
  }
}
