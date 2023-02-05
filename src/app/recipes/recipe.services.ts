import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Awesome',
      'https://static.dw.com/image/19338867_6.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Burguer',
      'Delicious',
      'https://comeonburger.com.br/wp-content/uploads/2019/12/xburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
