import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterChartComponent } from './filter-chart/filter-chart.component';
import { TimeBarChartComponent } from './time-bar-chart/time-bar-chart.component';
import { ReportComponent } from './report/report.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../utils/primeng.module';

@NgModule({
  declarations: [FilterChartComponent, TimeBarChartComponent, ReportComponent],
  imports: [CommonModule, SharedModule, PrimengModule],
})
export class ReportsModule {}
