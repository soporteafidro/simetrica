import { Component, OnInit } from '@angular/core';
import { Logger } from 'aws-amplify';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DomSanitizer } from '@angular/platform-browser';
import { SisecService } from 'src/app/services/sisec.service';
const logger = new Logger('file-preview');
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent implements OnInit {
  fileSrc = null;
  fileSrcView = false;
  filePDFView = false;

  constructor(
    private sisecService: SisecService,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    const file = this.config.data;
    logger.debug(file);
    this.sisecService.showSpinner('Cargando Archivo');
    this.sisecService.getFile(file.file).then((response) => {
      logger.debug('getFile response', response);
      this.fileSrc = this.sanitizer.bypassSecurityTrustResourceUrl(response);
      this.sisecService.hideSpinner();
      if (file.type === 'jpg' || file.type === 'png' || file.type === 'jpeg') {
        this.fileSrcView = true;
      } else if (file.type === 'pdf') {
        this.filePDFView = true;
        this.sisecService.hideSpinner();
      }
    });
  }
}
