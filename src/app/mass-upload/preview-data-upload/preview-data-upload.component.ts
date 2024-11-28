import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonFunctionsService } from 'src/app/utils/common-functions.service';
import { MassUploadStudiesService } from '../mass-upload-studies.service';
import { MassUploadService } from '../mass-upload.service';

@Component({
  selector: 'app-preview-data-upload',
  templateUrl: './preview-data-upload.component.html',
  styleUrls: ['./preview-data-upload.component.scss'],
})
export class PreviewDataUploadComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() itemsTable: any[] = [];
  @Input() source: string = '';
  dataPreview: any[] = [];

  constructor(
    public massUploadStudiesService: MassUploadStudiesService,
    private massUploadService: MassUploadService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    for (const d of this.data) {
      const data3 = [];
      for (let index = 0; index < this.itemsTable.length; index++) {
        if (d.hasOwnProperty(this.itemsTable[index])) {
          data3.push([d[this.itemsTable[index]]]);
        } else {
          data3.push(['']);
        }

        if (d.errorDecription.hasOwnProperty(this.itemsTable[index])) {
          for (const o of d.errorDecription[this.itemsTable[index]]) {
            data3[index].push(o);
          }
        }
      }
      this.dataPreview.push({
        data: data3,
        state: {
          action: d.action,
          validatedError: d.validatedError,
        },
      });
    }
  }

  transforDate(data): void {
    let dataTrensformed;
    if (this.massUploadService.isValidDate(data)) {
      dataTrensformed = this.datePipe.transform(data, 'dd/MM/yyyy');
    } else {
      dataTrensformed = data;
    }
    return dataTrensformed;
  }
}
