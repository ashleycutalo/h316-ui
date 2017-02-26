import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { MenuService } from '../shared/services/menu.service';
import { Menu } from '../shared/models/menu.model';
import { Recipe } from '../shared/models/recipe.model';

@Component({
    selector: 'menu-form',
    template: require('./menu-form.component.html')
})

export class MenuFormComponent {
  private menu: Menu
  private recipes: Recipe[]
  private meals = ["Breakfast", "Lunch", "Dinner"]

  constructor(
      public dialogRef: MdDialogRef<MenuFormComponent>,
      public snackBar: MdSnackBar,
      private menuService: MenuService
  ) {}

  submit(m : Menu) {
    m.url = 'recipes/' +  m.recipe.id
    m.title = m.meal + ": " + m.recipe.name
    this.menuService.createMenu(m).subscribe(
      menu => {
        this.dialogRef.close();
        this.snackBar.open("Successfully scheduled " + m.title, "OK", {
          duration: 2000,
        });
      },
      err => {
        console.log(err);
    });
  }

  private today() {
    var local = new Date()
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
    return local.toJSON().slice(0,10)
  }

  ngOnInit() {
    this.menuService.getRecipes()
        .subscribe(
        recipes => this.recipes = recipes,
        err => {
            console.log(err);
        });

    if (this.menu === undefined) {
      this.menu = {
        id : '',
        title: '',
        meal: '',
        recipe: null,
        start: this.today(),
        url: ''
      }
    }
  }
}
