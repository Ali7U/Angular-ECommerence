import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule, TableModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  quantityPrice: number = 0;
  totalPrice = localStorage.getItem('totalPrice');

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  clearLocalStorage() {
    this.cartService.clearCart();
    this.cart = [];
    this.totalPrice = '';
  }
}
