import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/services/carrito.service'; 
import { Product } from '../../services/services/product.model'; 
@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss']
})
export class CartScreenComponent implements OnInit {
  cart: Product[] = []; // Ahora especificamos que es un arreglo de productos

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cart = this.carritoService.getCarrito(); // Obtiene los productos del carrito al iniciar el componente
  }
}
