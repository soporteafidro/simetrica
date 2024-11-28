import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { NavBarComponent } from './navbar/navbar.component';
import { StudySearchComponent } from './study-search/study-search.component';
import { ConstantService } from './constant.service';
import { DateIITPipe } from './pipes/date-iit.pipe';
import { WarningMessageComponent } from './warning-message/warning-message.component';
@NgModule({
    declarations: [
        FormatTimePipe,
        DateIITPipe,
        NavBarComponent,
        StudySearchComponent,
        WarningMessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        FormatTimePipe,
        RouterModule,
        NavBarComponent,
        DateIITPipe,
        StudySearchComponent,
        WarningMessageComponent
    ], providers: [
        DatePipe,
        FormatTimePipe,
        ConstantService,
        DateIITPipe
    ]
})

export class SharedModule {
}
