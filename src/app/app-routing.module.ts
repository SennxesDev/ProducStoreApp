import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { ProductsScreenComponent } from './views/products-screen/products-screen.component';
import { ProductsDetailsScreenComponent } from './views/products-details-screen/products-details-screen.component';
import { CartScreenComponent } from './views/cart-screen/cart-screen.component';
import { AboutScreenComponent } from './views/about-screen/about-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'products', component: ProductsScreenComponent },
  { path: 'product/:id', component: ProductsDetailsScreenComponent },
  { path: 'cart', component: CartScreenComponent },
  { path: 'about', component: AboutScreenComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
