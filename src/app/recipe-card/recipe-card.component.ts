import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipeRef: any;
  @Input() favoritesRef!: any[];
  @Output() favoriteEvent = new EventEmitter<any>();
  // @Input() recipeIngredients: any;
  ingredients: any;
  recipe: any;
  showPopup: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showDetails = (): void => {
    this.showPopup = !this.showPopup;
  };

  emitFavoriteEvent = (recipe: any): void => {
    this.favoriteEvent.emit(recipe);
  };

  checkFavorite = (recipe: any): boolean => {
    return this.favoritesRef.some((item: any) => {
      return item.recipe.uri === recipe.recipe.uri;
    });
  };

  // toggleFavorite = (recipe: any): boolean => {
  //   return this.favoritesRef.some((item: any) => {
  //     return item.id === recipe.id;
  //   });
  // };
}
