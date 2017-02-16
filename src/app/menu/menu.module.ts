import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdGridListModule } from '@angular/material';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, MdCardModule, MdGridListModule, MdInputModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: []
})
export class MenuModule { }
