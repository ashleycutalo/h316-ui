import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Menu } from './menu.model';
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
      this.dialogRef.componentInstance.confirm = "SCHEDULE MENU";
      this.dialogRef.componentInstance.title = "Schedule Menu";
      this.dialogRef.afterClosed().subscribe(
        menuSchedule => {
            this.loadMenuSchedule();
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


  ngOnInit() {
    // var test = [
    //   {
    //     title: 'All Day Event',
    //     start: '2017-02-01'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2017-02-09',
    //     end: '2017-02-10'
    //   }
    // ];
    if (this.calendarOptions === undefined) {
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
              // events: this.menuSchedule
            };
    }
  }

}
