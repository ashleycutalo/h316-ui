import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    selector: 'confirm-dialog',
    template: require('./confirm-dialog.component.html')
})

export class ConfirmDialogComponent {
    public title: string;
    public content: string;
    public confirm : string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) { }
}
