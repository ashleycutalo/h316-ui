import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule } from '@angular/material';
import { RecipeDetailComponent } from './recipe-detail.component';

@NgModule({
  imports: [CommonModule, MdCardModule, MdInputModule],
  declarations: [RecipeDetailComponent],
  exports: [RecipeDetailComponent],
  providers: []
})
export class RecipeDetailModule { }
