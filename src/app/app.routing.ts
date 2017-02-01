import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent },
    { path: 'menu', component: MenuComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
