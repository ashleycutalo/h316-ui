import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdGridListModule, MdButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MenuDetailComponent } from './menu-detail.component';
import { RecipeDetailModule } from '../recipe-detail/recipe-detail.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    RecipeDetailModule
  ],
  declarations: [
    MenuDetailComponent
  ],
  exports: [MenuDetailComponent],
  providers: [],
  entryComponents: []
})
export class MenuDetailModule { }
