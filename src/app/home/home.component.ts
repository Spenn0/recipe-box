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

  onSubmit = (recipeForm: any): void => {
    let searchQuery = recipeForm.form.value.searchQuery;
    let cookTime = recipeForm.form.value.cookTime;
    let dietType = recipeForm.form.value.dietType;
    this.recipeCardService
      .searchRecipes(searchQuery, cookTime, dietType)
      .subscribe((response: any) => {
        this.recipeData = response;
        console.log(response);
      });
  };
}
