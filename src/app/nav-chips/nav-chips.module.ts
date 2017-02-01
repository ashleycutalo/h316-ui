import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdChipsModule } from '@angular/material';
import { NavChipsComponent } from './nav-chips.component';

@NgModule({
    imports: [CommonModule, MdChipsModule],
    declarations: [NavChipsComponent],
    exports: [NavChipsComponent],
    providers: []
})
export class NavChipsModule { }
