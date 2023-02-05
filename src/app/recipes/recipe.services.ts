import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/olive-garden-ziti-al-forno-recipe-2-1640031063.jpeg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
