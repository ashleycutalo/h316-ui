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

  ngOnInit() {
    this.date = this.getCurrentPage(this.router.url)
    this._menuService.getMenusByDate(this.date)
        .subscribe(
        menus => this.menus = menus,
        err => {
            console.log(err);
        });
  }
}
