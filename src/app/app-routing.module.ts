import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from './todos/todos.component';
import {TodoComponent} from './todos/todo/todo.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  }, {
    path: 'todos/:id',
    component: TodoComponent
  }, {
    path: 'wishlist',
    component: WishlistComponent
  }, {
    path: 'not-found',
    component: PageNotFoundComponent
  }, {
    path: '**',
    redirectTo: 'not-found'
  }];

@NgModule({
   imports: [
     RouterModule.forRoot(appRoutes)
   ],
   exports: [RouterModule]
})

export class AppRoutingModule {

}
