import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BookComponent} from './book/book.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthorComponent} from './author/author.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    AuthorComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
