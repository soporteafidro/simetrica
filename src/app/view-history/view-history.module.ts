import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHistoryComponent } from './view-history/view-history.component';
import { PrimengModule } from '../utils/primeng.module';
import { SharedModule } from 'primeng/api';
import { VariableTranslatePipe } from './variable-translate.pipe';
import { AtributosTranslatePipe } from './atributos-translate.pipe';



@NgModule({
  declarations: [ViewHistoryComponent, VariableTranslatePipe, AtributosTranslatePipe],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ],
  providers: [VariableTranslatePipe, AtributosTranslatePipe]
})
export class ViewHistoryModule { }
