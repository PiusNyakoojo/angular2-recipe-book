import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.duden.de/_media_/full/S/Schnitzel-201020474666.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Delicious', 'http://cdn.pinchofyum.com/wp-content/uploads/Green-Goddess-Quinoa-Summer-Salad.jpg', [])
  ];

  getRecipes() {
    return this.recipes;
  }
}
