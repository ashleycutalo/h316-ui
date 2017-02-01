import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  providers: [],
  entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
