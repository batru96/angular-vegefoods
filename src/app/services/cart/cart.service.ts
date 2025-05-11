import { computed, Injectable, signal, effect } from '@angular/core';
import { CartItem, ProductModel } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartItem[]>([]);

  private totalItems = computed(() => {
    let counter = 0;

    this.cart().forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  });

  constructor() {
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    });
  }

  fetchCart() {
    const cartStorage = localStorage.getItem('cart');
    if (!cartStorage) return;

    const cart = JSON.parse(cartStorage);

    if (Array.isArray(cart)) {
      this.cart.set(cart as CartItem[]);
    }
  }

  addToCart({ priceSale, price, ...product}: ProductModel): void {
    const cartItem: CartItem = {
      ...product,
      price: priceSale || price,
      quantity: 1,
    }

    const productIndex = this.cart().findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      this.cart.update((prev) => [...prev, cartItem]);
    } else {
      const newCart = this.cart();
      newCart[productIndex].quantity += 1;
      this.cart.set([...newCart]);
    }
  }

  getCart() {
    return this.cart();
  }

  getTotalItems() {
    return this.totalItems();
  }
}
