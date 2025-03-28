import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss']
})
export class CartScreenComponent {
  cart = [
    { name: 'Audífonos', image: 'assets/images/audifonos.jpg' },
    { name: 'Smartwatch', image: 'assets/images/smartwatch.jpg' }
  ];
}
