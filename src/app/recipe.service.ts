import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  appId: string = 'ca347ff4';
  appKey: string = 'c0bf23a0689bd3e32d80dd41405a2e8a';
  edamamSearchUrl: string = 'https://api.edamam.com/search';
  favorites: any[] = [];

  constructor(private http: HttpClient) {}
  //SEARCH RECIPES CAN TAKE IN AN OBJECT AND IF IT HAS CERTAIN PROPERTIES IT WILL USE THEM FOR PARAMS
  searchRecipes = (searchObject: any): any => {
    console.log(searchObject);
    let params: any = {
      app_id: this.appId,
      app_key: this.appKey,
    };
    if (searchObject.q) {
      params.q = searchObject.q;
    }
    if (searchObject.dietType) {
      params.diet = searchObject.dietType;
    }
    if (searchObject.cookTime) {
      params.time = searchObject.cookTime;
    }
    console.log(params);
    return this.http.get(this.edamamSearchUrl, {
      params: params,
    });
  };
}
// FIGURE OUT WHY TYPES ARE UNDEFINED FOR TIME OR DIET
// FIGURE OUT WHY RECIPE CARD ISN"T POPULATING RECIPES
