import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassUploadComponent } from './mass-upload/mass-upload.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../utils/primeng.module';
import { PreviewDataUploadComponent } from './preview-data-upload/preview-data-upload.component';
import { TransforHeadersTablePipe } from './transfor-headers-table.pipe';

@NgModule({
  declarations: [
    MassUploadComponent,
    PreviewDataUploadComponent,
    TransforHeadersTablePipe,
  ],
  imports: [CommonModule, SharedModule, PrimengModule],
  exports: [MassUploadComponent],
})
export class MassUploadModule {}
