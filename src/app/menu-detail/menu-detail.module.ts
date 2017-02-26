import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdGridListModule, MdButtonModule, MdSnackBarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MenuDetailComponent } from './menu-detail.component';
import { RecipeDetailModule } from '../recipe-detail/recipe-detail.module';
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    RecipeDetailModule,
    ConfirmDialogModule
  ],
  declarations: [
    MenuDetailComponent
  ],
  exports: [MenuDetailComponent],
  providers: [],
  entryComponents: []
})
export class MenuDetailModule { }
