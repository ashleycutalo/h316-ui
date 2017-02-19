import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmitterService } from '../../emitter.service';
import { Recipe } from './recipe.model';
import { RecipeFormComponent } from './recipe-form.component';
import { RecipeService } from '../shared/services/recipe.service';
import { TruncatePipe } from './truncate.pipe';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.component.html')
})

export class RecipeListComponent implements OnInit, OnChanges {
    dialogRef: MdDialogRef<any>;

    constructor(
        private recipeService: RecipeService,
        private dialog: MdDialog,
        public snackBar: MdSnackBar
    ) { }

    recipes: Recipe[];

    loadRecipes() {
        this.recipeService.getRecipes()
            .subscribe(
            recipes => this.recipes = recipes,
            err => {
                console.log(err);
            });
    }

    openCreateForm() {
        this.dialogRef = this.dialog.open(RecipeFormComponent, {
            disableClose: false
        });
        this.dialogRef.componentInstance.confirm = "CREATE RECIPE";
        this.dialogRef.componentInstance.title = "New Recipe";
        this.dialogRef.afterClosed().subscribe(
          recipes => {
              this.loadRecipes();
          },
          err => {
              console.log(err);
          });
    }

    //TODO: refactor edit/delete into reusable component
    deleteRecipe(id: string) {
        this.recipeService.deleteRecipe(id).subscribe(
            recipes => {
                EmitterService.get("recipes").emit(recipes);
                this.loadRecipes();
                this.snackBar.open("Successfully deleted recipe", "OK", {
                  duration: 2000,
                });
            },
            err => {
                console.log(err);
            });
    }

    openDeleteConfirm(id: string) {
        this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
            disableClose: false
        });
        this.dialogRef.componentInstance.title = "Delete Recipe";
        this.dialogRef.componentInstance.content = "Are you sure you want to delete " + id + "?";
        this.dialogRef.componentInstance.confirm = "Delete";

        this.dialogRef.afterClosed().subscribe(result => {
            if (result == "Delete") {
                this.deleteRecipe(id);
            }
        });
    }

    openEditForm(r: Recipe) {
        this.dialogRef = this.dialog.open(RecipeFormComponent, {
            disableClose: false
        });
        this.dialogRef.componentInstance.confirm = "UPDATE RECIPE";
        this.dialogRef.componentInstance.title = "Modify Recipe";
        this.dialogRef.componentInstance.recipe = r;
    }

    ngOnInit() {
        this.loadRecipes()
    }

    ngOnChanges(...args: any[]) {
      //TODO: fix emitter service
      console.log("change detected");
        EmitterService.get("recipes").subscribe((recipes: Recipe[]) => { this.loadRecipes() });
    }
}
