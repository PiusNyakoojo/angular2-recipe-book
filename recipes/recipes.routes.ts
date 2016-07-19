import { RouterConfig } from '@angular/router';

import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const RECIPES_ROUTES: RouterConfig = [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeStartComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeStartComponent }
];
