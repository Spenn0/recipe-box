import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipeCards: any

  constructor(private recipeCardService: RecipeService) { }

  ngOnInit(): void {
    this.recipeCardService.getRecipes()
  }

  getRecipes = (searchTerm: string):void => {
    this.recipeCardService.searchRecipes(searchTerm).subscribe((response: any)=>{
      console.log(response);
      this.recipeCards = response
    })
  }

}
