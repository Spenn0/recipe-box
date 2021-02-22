import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites:any[]=[];

  constructor(private yumService: RecipeService) { }

  ngOnInit(): void {
    this.getAndSetFavorites()
  }
  getAndSetFavorites = ():void => {
    this.favorites = this.yumService.getFavorites();
  }
}
