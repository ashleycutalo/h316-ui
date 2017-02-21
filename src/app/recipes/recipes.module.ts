import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodemirrorModule } from 'ng2-codemirror';

import { SharedModule } from '../shared/shared.module';
import { Recipe } from './recipe.model';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeFormComponent } from './recipe-form.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    imports: [
      CommonModule,
      CodemirrorModule,
      SharedModule
    ],
    declarations: [
      RecipesComponent,
      RecipeFormComponent,
      RecipeListComponent,
      TruncatePipe
    ],
    exports: [
      RecipesComponent,
      RecipeListComponent,
      RecipeFormComponent
    ],
    providers: [],
    entryComponents: [RecipeFormComponent]
})
export class RecipesModule { }
