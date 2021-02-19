import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  appKey: string = 'c0bf23a0689bd3e32d80dd41405a2e8a';
  edamamSearchUrl: string = 'https://api.edamam.com/search';
  favorites: any[] = [];
  // enum CuisineType{
  //   indian:"indian",
  // }

  constructor(private http: HttpClient) {}

  getRecipes = (): any => {
    return this.http.get(this.edamamSearchUrl, {
      params: {
        appKey: this.appKey,
      },
    });
  };

  searchRecipes = (
    searchTerm: string,
    // cookTime: string,
    // dietType: string,
  ): any => {
    return this.http.get(this.edamamSearchUrl, {
      params: {
        appKey: this.appKey,
        q: searchTerm,
        // time: cookTime,
        // diet: dietType,
      },
    });
  };
}
