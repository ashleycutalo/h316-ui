import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../shared/services/menu.service';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Menu } from '../shared/models/menu.model';
import { Recipe } from '../shared/models/recipe.model';

@Component({
    selector: 'menu-detail',
    template: require('./menu-detail.component.html')
})

export class MenuDetailComponent implements OnInit {
  private menus: Menu[]
  private date: string
  private showRecipeDiv : boolean = false
  private recipe : Recipe = null

  constructor(
      private router: Router,
      private _menuService: MenuService
  ) {}

  getCurrentPage(route : string) : string {
    var p : string[] = route.split("/");
    return p[(p.length - 1)];
  }

  showRecipe(id : string) {
   this.showRecipeDiv = !this.showRecipeDiv;
   if (this.showRecipeDiv) {
     this._menuService.getRecipeById(id).subscribe(
       r => {
         this.recipe = r
       },
       err => {
           console.log(err);
       });
   }
 }

 sortMenusByMeal() {
   var sortedMenus : Menu[] = []
   if (this.menus.length == 0) {
     console.log("No menus to sort")
   } else {
     var breakfast : Menu = this.menus.filter(m => m.meal == "Breakfast")[0]
     var lunch : Menu = this.menus.filter(m => m.meal == "Lunch")[0]
     var dinner : Menu = this.menus.filter(m => m.meal == "Dinner")[0]

     breakfast ? sortedMenus.push(breakfast) : null
     lunch ? sortedMenus.push(lunch) : null
     dinner ? sortedMenus.push(dinner) : null
   }

   this.menus = sortedMenus
 }

  ngOnInit() {
    this.date = this.getCurrentPage(this.router.url)
    this._menuService.getMenusByDate(this.date)
        .subscribe(
        menus => {
          this.menus = menus
          this.sortMenusByMeal()
        },
        err => {
            console.log(err);
        });
  }
}
