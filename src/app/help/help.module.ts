import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFileComponent } from './list-file/list-file.component';
import { PrimengModule } from '../utils/primeng.module';
import { SharedModule } from 'primeng/api';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ListFileComponent, FilePreviewComponent],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HelpModule { }
