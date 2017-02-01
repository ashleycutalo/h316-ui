import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'menu-site',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
