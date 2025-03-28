import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-details-screen',
  templateUrl: './products-details-screen.component.html',
  styleUrls: ['./products-details-screen.component.scss']
})
export class ProductsDetailsScreenComponent {
  product = { 
    id: 1, 
    name: 'Audífonos', 
    price: 500, 
    description: 'Audífonos con cancelación de ruido.' 
  };

  constructor(private router: Router) {}

  // Método para agregar al carrito
  addToCart() {
    alert('Producto agregado al carrito');
  }

  // Método para ir al carrito de compras
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
