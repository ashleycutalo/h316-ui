import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'h316-ui',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
