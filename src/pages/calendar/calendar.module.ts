import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarItemModule } from 'src/app/shared/components/calendar-item/calendar-item.module';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule, CalendarRoutingModule, CalendarItemModule, MatIconModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
