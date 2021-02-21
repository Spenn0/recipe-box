import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;

  constructor(private recipeCardService: RecipeService) {}

  ngOnInit(): void {}

  onSubmit = (searchTerm: string, cookTime: string, dietType: string): void => {
    this.recipeCardService
      .searchRecipes(searchTerm, cookTime, dietType)
      .subscribe((response: any) => {
        this.recipeData = response;
        console.log(response);
      });
  };
}
