import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CodemirrorModule } from 'ng2-codemirror';
import { Recipe } from '../shared/models/recipe.model';
import { MenuService } from '../shared/services/menu.service';
import { RecipeFormComponent } from '../recipes/recipe-form.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'


import 'codemirror/mode/javascript/javascript';

@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html')
})

export class RecipeDetailComponent implements OnInit {
  dialogRef: MdDialogRef<any>;
  private sub : any;
  recipe : Recipe;
  private config: any;
  code: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MdDialog
  ) {
    this.config = {
          lineNumbers: true,
          mode: {
            name: 'javascript',
            json: true
          }
        };
    this.code = `// Some js code...
      if (true) {
        console.log('hello world');
      }
      `;

  }

  //TODO: refactor edit/delete into reusable component
  openEditForm(r: Recipe) {
    this.dialogRef = this.dialog.open(RecipeFormComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.title = "Modify Recipe";
    this.dialogRef.componentInstance.confirm = "UPDATE RECIPE";
    this.dialogRef.componentInstance.recipe = r;
  }

  deleteRecipe(id: string) {
      this.menuService.deleteRecipe(id).subscribe(
        res => {
          this.router.navigateByUrl('/recipes');
        },
        err => {
          console.log(err);
        }
      );
  }

  openDeleteConfirm(id: string) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent,  {
      disableClose: false
    });
    this.dialogRef.componentInstance.title = "Delete Recipe";
    this.dialogRef.componentInstance.content = "Are you sure you want to delete " + id + "?";
    this.dialogRef.componentInstance.confirm = "DELETE";

    this.dialogRef.afterClosed().subscribe(result => {
       if (result == "DELETE") {
         this.deleteRecipe(id);
       }
     });
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {

        let id = params['id'];

        this.menuService.getRecipeById(id).subscribe(
          recipe => this.recipe = recipe,
          err => {
              console.log(err);
          });
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
