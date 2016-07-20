import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number = 1;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
