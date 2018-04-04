import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { TodosComponent } from './todos/todos.component';
import {TodoComponent} from './todos/todo/todo.component';
import {HeaderComponent} from './shared/header/header.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent, TodoComponent, HeaderComponent, WishlistComponent, TodosComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
