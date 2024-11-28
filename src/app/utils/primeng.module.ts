import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    AutoCompleteModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    CalendarModule,
    SelectButtonModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    InputNumberModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ChartModule,
    CardModule,
    DropdownModule,
    BlockUIModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    DynamicDialogModule,
    DialogModule,
    TableModule,
    MenuModule,
    StepsModule,
    MenubarModule,
    ProgressBarModule,
    TabViewModule,
    TableModule,
    AccordionModule,
    FieldsetModule,
    TooltipModule,
  ],
  providers: [
    MessageService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig,
    ConfirmationService,
  ],
})
export class PrimengModule {}
