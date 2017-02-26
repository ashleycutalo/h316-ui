import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Menu } from '../shared/models/menu.model';
import { MenuService } from '../shared/services/menu.service';
import { MenuFormComponent } from './menu-form.component';

@Component({
    selector: 'menu',
    template: require('./menu.component.html')
})

export class MenuComponent implements OnInit {
  calendarOptions:Object
  menuSchedule: Menu[]
  dialogRef: MdDialogRef<any>;

  constructor(
      private menuService: MenuService,
      private dialog: MdDialog,
      public snackBar: MdSnackBar
  ) { }

  openMenuForm() {
      this.dialogRef = this.dialog.open(MenuFormComponent, {
          disableClose: false
      });
      this.dialogRef.afterClosed().subscribe(
        menuSchedule => {
            this.loadMenuSchedule()
            this.setCalendarOptions()
            location.reload()
        },
        err => {
            console.log(err);
        });
  }

  loadMenuSchedule() {
      this.menuService.getMenus()
          .subscribe(
          menuSchedule => this.menuSchedule = menuSchedule,
          err => {
              console.log(err);
          });
  }

  setCalendarOptions() {
    this.calendarOptions = {
            height: 'auto',
            fixedWeekCount : false,
            defaultDate: new Date().toLocaleDateString(),
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            header: {
                left:   'title',
                center: '',
                right:  'today month basicWeek basicDay prev,next'
            },
            events: this.menuSchedule
          };

  }


  ngOnInit() {
    this.menuService.getMenus()
        .subscribe(
        menuSchedule => {
          this.menuSchedule = menuSchedule
          this.setCalendarOptions()
        },
        err => {
            console.log(err);
        });
  }

}
