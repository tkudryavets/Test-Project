import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarItemModule } from 'src/app/shared/components/calendar-item/calendar-item.module';
import { MatIconModule } from '@angular/material/icon'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { CalendarDialogComponent } from 'src/app/shared/components/calendar-dialog/calendar-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
// import { CalendarDialogModule } from 'src/app/shared/components/calendar-dialog/calendar-dialog.module';



@NgModule({
  declarations: [CalendarComponent, CalendarDialogComponent],
  imports: [
    CommonModule, CalendarRoutingModule, CalendarItemModule, MatIconModule,
    FormsModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatInputModule,
    MatButtonModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
