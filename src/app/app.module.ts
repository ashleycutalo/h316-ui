import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeModule } from './home/home.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipeDetailModule } from './recipe-detail/recipe-detail.module';
import { SharedModule } from './shared/shared.module';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { NavChipsModule } from './nav-chips/nav-chips.module';
import { MenuModule } from './menu/menu.module';
import { MenuDetailModule } from './menu-detail/menu-detail.module';

import { EmitterService } from '../emitter.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CodemirrorModule,
        HomeModule,
        RecipesModule,
        RecipeDetailModule,
        ConfirmDialogModule,
        NavChipsModule,
        MenuModule,
        MenuDetailModule,
        SharedModule.forRoot(),
        MaterialModule.forRoot(),
        routing
    ],
    providers: [
        appRoutingProviders,
        EmitterService
      ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
