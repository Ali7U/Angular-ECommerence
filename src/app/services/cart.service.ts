import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();
  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubject.asObservable();
  totalPrice: number = 0;

  constructor() {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartSubject.next(storedCart);
  }

  addToCart(product: Product) {
    const currentCart = this.cartSubject.value;
    const existingProductIndex = currentCart.findIndex(
      (item: Product) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      currentCart[existingProductIndex].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1, image: product.images });
    }

    this.cartSubject.next(currentCart);
    this.updateLocalStorage(currentCart); // Optional
    this.updateTotalPrice(currentCart);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  private updateTotalPrice(cart: Product[]) {
    this.totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.totalPriceSubject.next(this.totalPrice);
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
  }

  private updateLocalStorage(cart: Product[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    this.cartSubject.next([]);
    this.totalPriceSubject.next(0);
    localStorage.clear();
  }
}
