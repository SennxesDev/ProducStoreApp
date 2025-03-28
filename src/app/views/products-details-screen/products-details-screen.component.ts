import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/services/carrito.service'
import { Product } from '../../services/services/product.model';  

@Component({
  selector: 'app-products-details-screen',
  templateUrl: './products-details-screen.component.html',
  styleUrls: ['./products-details-screen.component.scss']
})
export class ProductsDetailsScreenComponent {
  product: Product = { 
    id: 1, 
    name: 'Audífonos', 
    price: 500, 
    description: 'Audífonos con cancelación de ruido.',
    image: 'assets/images/audifonos.jpg' // Asegúrate de incluir la propiedad de imagen
  };

  constructor(private router: Router, private carritoService: CarritoService) {}

 
  addToCart() {
    this.carritoService.addToCart(this.product);
    alert('Producto agregado al carrito');
  }

  // Método para ir al carrito de compras
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
