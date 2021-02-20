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

  // enum CuisineType{
  //   indian:"indian",
  // }

  constructor(private http: HttpClient) {}

  // getRecipes = (): any => {
  //   return this.http.get(this.edamamSearchUrl, {
  //     params: {
  //       app_id: this.appId,
  //       app_key: this.appKey,

  //     },
  //   });
  // };

  searchRecipes = (
    searchTerm: string
    // cookTime: string,
    // dietType: string,
  ): any => {
    return this.http.get(this.edamamSearchUrl, {
      params: {
        app_id: this.appId,
        app_key: this.appKey,
        q: searchTerm,
        // time: cookTime,
        // diet: dietType,
      },
    });
  };
}
// FIGURE OUT WHY Q ISN"T SHOWING UP AS THE QUERY SEARCHED
// FIGURE OUT WHY RECIPE CARD ISN"T POPULATING RECIPES
