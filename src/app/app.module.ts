import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { ProductsScreenComponent } from './views/products-screen/products-screen.component';
import { ProductsDetailsScreenComponent } from './views/products-details-screen/products-details-screen.component';
import { CartScreenComponent } from './views/cart-screen/cart-screen.component';
import { AboutScreenComponent } from './views/about-screen/about-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ProductsScreenComponent,
    ProductsDetailsScreenComponent,
    CartScreenComponent,
    AboutScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
