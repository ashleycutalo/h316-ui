import { Component, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { EmitterService } from '../../emitter.service';
import { Recipe } from '../shared/models/recipe.model';
import { MenuService } from '../shared/services/menu.service';

@Component({
    selector: 'recipe-form',
    template: require('./recipe-form.component.html')
})

export class RecipeFormComponent {
  public confirm: string;
  public title: string;
  private recipe: Recipe;

  constructor(
      public dialogRef: MdDialogRef<RecipeFormComponent>,
      public snackBar: MdSnackBar,
      private menuService: MenuService
  ) {}

  submit(r : Recipe) {
    r.ingredients = String(r.ingredients).split('\n')
    if (this.confirm == "CREATE RECIPE") {
      this.menuService.createRecipe(r).subscribe(
        recipe => {
          this.dialogRef.close();
          this.snackBar.open("Successfully created recipe " + r.name, "OK", {
            duration: 2000,
          });
        },
        err => {
          console.log(err);
      });
    } else if (this.confirm == "UPDATE RECIPE") {
      r.id = this.recipe.id;
      this.menuService.updateRecipe(r).subscribe(recipe => {
        this.dialogRef.close();
        this.snackBar.open("Successfully modified recipe " + r.name, "OK", {
          duration: 2000,
        });
      },
      err => {
        console.log(err);
    });
    }
  }

  ngOnInit() {
    if (this.recipe === undefined) {
      this.recipe = {
        id : '',
        name: '',
        description: '',
        ingredients: [],
        directions: '',
        imageUrl: ''
      }
    }
  }
}
