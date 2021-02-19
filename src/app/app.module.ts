import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';
import { Search1Component } from './search1/search1.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    FourOhFourComponent,
    HeaderComponent,
    Search1Component,
    RecipeCardComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
