import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { MenuService } from '../shared/services/menu.service';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Menu } from '../shared/models/menu.model';
import { Recipe } from '../shared/models/recipe.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

@Component({
    selector: 'menu-detail',
    template: require('./menu-detail.component.html')
})

export class MenuDetailComponent implements OnInit {
  dialogRef: MdDialogRef<any>;
  private menus : Menu[]
  private date : string
  private showRecipeDiv : boolean = false
  private showDetailsById : {[key : string] : boolean} = {}

  constructor(
      private router: Router,
      private _menuService: MenuService,
      private dialog: MdDialog,
      public snackBar: MdSnackBar
  ) {}

  getCurrentPage(route : string) : string {
    var p : string[] = route.split("/");
    return p[(p.length - 1)];
  }

  showRecipe(id : string) {
   this.showDetailsById[id] = !this.showDetailsById[id]
 }

 getShowDetailsById(id : string) {
   return this.showDetailsById[id]
 }

 openDeleteConfirm(id: string) {
   this.dialogRef = this.dialog.open(ConfirmDialogComponent,  {
     disableClose: false
   });
   this.dialogRef.componentInstance.title = "Delete Menu";
   this.dialogRef.componentInstance.content = "Are you sure you want to delete " + id + "?";
   this.dialogRef.componentInstance.confirm = "DELETE";

   this.dialogRef.afterClosed().subscribe(result => {
      if (result == "DELETE") {
        this._menuService.deleteMenu(id).subscribe(
          res => {
            if (this.menus.length <= 1) {
              this.router.navigateByUrl('/menu');
            }
            this.getMenus()
            this.snackBar.open("Successfully deleted menu", "OK", {
              duration: 2000,
            });
          },
          err => {
            console.log(err);
          }
        );
      }
    });
 }

 getMenus() {
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
          this.menus.map((m => {
            this.showDetailsById[m.id] = false
          }))
        },
        err => {
            console.log(err);
        });
  }

}
