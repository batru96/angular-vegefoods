import { computed, Injectable, signal } from '@angular/core';
import { CartItem, ProductModel } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = signal<CartItem[]>([]);

  private totalItems = computed(() => {
    let counter = 0;

    this.cart().forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  })

  constructor(private httpClient: HttpClient) { 
    this.fetchCart()
  }

  fetchCart() {
    this.httpClient.get<CartItem[]>('/cart').subscribe(value => {
      this.cart.set(value);
    });
  }

  addToCart(product: ProductModel): void {
    console.log('addToCart', product);
  }

  getCart() {
    return this.cart();
  }
  
  getTotalItems() {
    return this.totalItems();
  }
}
