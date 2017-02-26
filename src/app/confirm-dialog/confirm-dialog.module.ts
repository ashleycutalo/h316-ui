import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule
  ],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  providers: [],
  entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
