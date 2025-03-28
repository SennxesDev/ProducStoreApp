import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './views/views/home-screen/home-screen.component';
import { ProductsScreenComponent } from './views/views/products-screen/products-screen.component';
import { ProductsDetailsScreenComponent } from './views/views/products-details-screen/products-details-screen.component';
import { CartScreenComponent } from './views/views/cart-screen/cart-screen.component';
import { AboutScreenComponent } from './views/views/about-screen/about-screen.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
