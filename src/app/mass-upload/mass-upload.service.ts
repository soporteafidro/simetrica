import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StudiesService } from '../studies/studies.service';
import { Logger } from 'aws-amplify';
const logger = new Logger('mass-upload');

@Injectable({
  providedIn: 'root',
})
export class MassUploadService {
  constructor(
    private authService: AuthService,
    private studiesService: StudiesService
  ) {}

  async TransforDate(items: any[], dates: any[]): Promise<any> {
    const studiesTransformed: any = [];
    for (const i of items) {
      for (const d of dates) {
        if (i[d]) {
          i[d] = new Date((i[d] - (25567 + 1)) * 86400 * 1000);
        }
      }
      studiesTransformed.push(i);
    }
    return studiesTransformed;
  }
  isValidDate(date: any): boolean {
    const d = date;
    const n = date;
    return d instanceof Date && !isNaN(n);
  }
  async listStudy(): Promise<any> {
    if (this.authService.isAdmin()) {
      return this.studiesService.listStudiesWithAllData();
    } else {
      const sponsorId = this.authService.getUserSponsorId();
      return this.studiesService.studiesBySponsorWithAllData(sponsorId);
    }
  }
}
