import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Recipe } from '../../recipes/recipe.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
    constructor(private http: Http) { }

    //TODO: make this configurable
    private recipesUrl = 'http://localhost:8080/recipes';

    getRecipes(): Observable<Recipe[]> {
        return this.http.get(this.recipesUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getRecipeById(id: string): Observable<Recipe> {
      return this.http.get(`${this.recipesUrl}/${id}`)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createRecipe(body: Object): Observable<Recipe[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.recipesUrl, body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteRecipe(id: string): Observable<Recipe[]> {
        return this.http.delete(`${this.recipesUrl}/${id}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateRecipe(itemToUpdate: Recipe): Observable<Recipe[]> {
       return this.http.put(`${this.recipesUrl}/${itemToUpdate.id}`, JSON.stringify(itemToUpdate))
           .map((response: Response) => <Recipe>response.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
