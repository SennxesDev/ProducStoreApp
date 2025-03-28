import { Component } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.scss']
})
export class ProductsScreenComponent {
  products = [
    { id: 1, name: 'Audífonos', price: 500 },
    { id: 2, name: 'Smartwatch', price: 1200 },
    { id: 3, name: 'Cámara', price: 3200 }
  ];
}
