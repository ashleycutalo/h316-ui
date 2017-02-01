import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule } from '@angular/material';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, MdCardModule, MdInputModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: []
})
export class MenuModule { }
