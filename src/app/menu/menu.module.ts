import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdGridListModule, MdButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuFormComponent } from './menu-form.component';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    MenuComponent,
    MenuFormComponent,
    CalendarComponent
  ],
  exports: [MenuComponent],
  providers: [],
  entryComponents: [MenuFormComponent]
})
export class MenuModule { }
