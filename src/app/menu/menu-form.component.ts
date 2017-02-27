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
  private preexistingMenus: Menu[]
  private recipes: Recipe[]
  private meals = ["Breakfast", "Lunch", "Dinner"]
  private showMealExistsError : boolean = false

  constructor(
      public dialogRef: MdDialogRef<MenuFormComponent>,
      public snackBar: MdSnackBar,
      private _menuService: MenuService
  ) {}

  submit(m : Menu) {
    if (this.containsKey(this.preexistingMenus, m.meal)) {
      this.showMealExistsError = true
    } else {
      m.url = 'menu/' + m.start
      m.title = m.meal + ": " + m.recipe.name
      this._menuService.createMenu(m).subscribe(
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
  }

  private getPreexistingMenus()  {
    this._menuService.getMenusByDate(this.today())
        .subscribe(
        menus => {
          this.preexistingMenus = menus
        },
        err => {
            console.log(err);
        });
  }

  private containsKey(menus : Menu[], k : string) : boolean {
    for(var m of menus) {
      if (m.meal === k) {
        return true
      }
    }
    return false
  }

  private today() : string {
    var local = new Date()
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
    return local.toJSON().slice(0,10)
  }

  ngOnInit() {
    this._menuService.getRecipes()
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

    this._menuService.getMenusByDate(this.today())
        .subscribe(
        menus => {
          this.preexistingMenus = menus
        },
        err => {
            console.log(err);
        });
  }
}
