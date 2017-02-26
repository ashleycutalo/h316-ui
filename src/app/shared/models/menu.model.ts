import { Recipe } from './recipe.model';

export class Menu {
  constructor(
    public id: string,
    public recipe: Recipe,
    public title: string,
    public start: string,
    public url: string,
    public meal: string
  ) {  }
}
