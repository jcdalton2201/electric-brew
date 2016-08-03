import {provideRouter, RouterConfig} from '@angular/router';
import {RecipesList} from './recipes/listRecipes';
import {RecipesAdd} from './recipes/addRecipes';
import {Empty} from './empty';
const routes: RouterConfig = [
  {
    path:'',
    component: Empty
  },
  {
    path:'matter/add',
    component: RecipesAdd
  },
  {
    path:'matter/list',
    component: RecipesList
  }
];
export const appRouterProviders = [
  provideRouter(routes)
];
