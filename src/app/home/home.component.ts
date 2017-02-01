import {Component} from '@angular/core';
import {RecipeFormComponent} from '../recipes/recipe-form.component';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {
  dialogRef: MdDialogRef<any>;

  constructor(
      private dialog: MdDialog
  ) {}

  openCreateForm() {
    this.dialogRef = this.dialog.open(RecipeFormComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirm = "Create Recipe";
    this.dialogRef.componentInstance.title = "New Recipe";
  }
}
