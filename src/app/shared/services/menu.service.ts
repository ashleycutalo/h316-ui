import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Menu } from '../models/menu.model';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {
    constructor(private http: Http) { }

    //TODO: make this configurable
    private menuUrl = 'http://localhost:8080/menus';
    private recipesUrl = 'http://localhost:8080/recipes';

    // Menu Scheduling
    getMenus(): Observable<Menu[]> {
        return this.http.get(this.menuUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // getMenuById(id: string): Observable<Menu> {
    //   return this.http.get(`${this.menuUrl}/${id}`)
    //       .map((res: Response) => res.json())
    //       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }

    createMenu(body: Object): Observable<Menu[]> {
        console.log(JSON.stringify(body))
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.menuUrl, body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

  //   deleteMenu(id: string): Observable<Menu[]> {
  //       return this.http.delete(`${this.menuUrl}/${id}`)
  //           .map((res: Response) => res.json())
  //           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //   }
   //
  //   updateMenu(itemToUpdate: Menu): Observable<Menu[]> {
  //      return this.http.put(`${this.menuUrl}/${itemToUpdate.id}`, JSON.stringify(itemToUpdate))
  //          .map((response: Response) => <Menu>response.json())
  //          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  //  }

   // Recipe CRUD
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
