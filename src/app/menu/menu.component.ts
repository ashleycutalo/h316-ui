import { Component, NgZone, OnInit } from '@angular/core';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";

@Component({
    selector: 'menu',
    template: require('./menu.component.html')
})

export class MenuComponent implements OnInit {
  calendarOptions:Object

  ngOnInit() {
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
              events: [
                {
                  title: 'All Day Event',
                  start: '2017-02-01'
                },
                {
                  title: 'Long Event',
                  start: '2017-02-07',
                  end: '2017-02-10'
                }
              ]
            };
    }
  }

}
