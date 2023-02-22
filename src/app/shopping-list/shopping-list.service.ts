import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredienteChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredienteChanged.next(this.ingredients.slice());
  }

  addNewIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredienteChanged.next(this.ingredients.slice());
  }
}
