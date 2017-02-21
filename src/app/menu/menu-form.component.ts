import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { MenuService } from '../shared/services/menu.service';
import { Menu } from './menu.model';

@Component({
    selector: 'menu-form',
    template: require('./menu-form.component.html')
})

export class MenuFormComponent {
  private menu: Menu;

  constructor(
      public dialogRef: MdDialogRef<MenuFormComponent>,
      public snackBar: MdSnackBar,
      private menuService: MenuService
  ) {}

  submit(m : Menu) {
    m.url = 'google.com'
    this.menuService.createMenu(m).subscribe(
      menu => {
        this.dialogRef.close();
        this.snackBar.open("Successfully scheduled menu " + m.title, "OK", {
          duration: 2000,
        });
      },
      err => {
        console.log(err);
    });
  }

  ngOnInit() {
    if (this.menu === undefined) {
      this.menu = {
        id : '',
        title: '',
        start: new Date(),
        url: ''
      }
    }
  }
}
