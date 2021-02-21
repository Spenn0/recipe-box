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

  searchRecipes = (
    searchTerm: string,
    cookTime: string,
    dietType: string
  ): any => {
    return this.http.get(this.edamamSearchUrl, {
      params: {
        app_id: this.appId,
        app_key: this.appKey,
        q: searchTerm,
        time: cookTime,
        Diet: dietType,
      },
    });
  };
}
// FIGURE OUT WHY TYPES ARE UNDEFINED FOR TIME OR DIET
// FIGURE OUT WHY RECIPE CARD ISN"T POPULATING RECIPES
