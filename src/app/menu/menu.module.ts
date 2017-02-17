import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdGridListModule } from '@angular/material';
import { MenuComponent } from './menu.component';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  declarations: [MenuComponent, CalendarComponent],
  exports: [MenuComponent],
  providers: []
})
export class MenuModule { }
