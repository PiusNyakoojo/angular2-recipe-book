import { provideRouter } from '@angular/router';

import { RECIPES_ROUTES } from './recipes/recipes.routes';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// Define app routes
export const APP_ROUTES_PROVIDER = [
  provideRouter([
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent }
  ])
];
