import { computed, Injectable, signal, effect } from '@angular/core';
import { CartItem, Coupon, ProductModel } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartItem[]>([]);
  private discount: number = 0

  constructor(private httpClient: HttpClient) {
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    });
  }

  getCart() {
    return this.cart();
  }

  fetchCart() {
    const cartStorage = localStorage.getItem('cart');
    if (!cartStorage) return;

    const cart = JSON.parse(cartStorage);

    if (Array.isArray(cart)) {
      this.cart.set(cart as CartItem[]);
    }
  }

  addToCart({ priceSale, price, ...product }: ProductModel): void {
    const cartItem: CartItem = {
      ...product,
      price: priceSale || price,
      quantity: 1,
    };

    const productIndex = this.cart().findIndex(
      (item) => item.id === product.id
    );
    if (productIndex === -1) {
      this.cart.update((prev) => [...prev, cartItem]);
    } else {
      const newCart = this.cart();
      newCart[productIndex].quantity += 1;
      this.cart.set([...newCart]);
    }
  }

  getTotalItems() {
    let counter = 0;

    this.cart().forEach((item) => {
      counter += item.quantity;
    });

    return counter;
  }

  removeItem(index: number) {
    this.cart.update((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  }

  updateItemQuantity(index: number, quantity: number) {
    const newCart = this.cart().map((item, idx) => {
      if (index === idx) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });
    this.cart.set(newCart);
  }

  getSubTotal() {
    return this.cart().reduce((sum, item) => {
      return sum + item.quantity * item.price
    }, 0)
  }

  getTotal() {
    return this.getSubTotal() - this.getDiscount()
  }

  getDiscount() {
    return this.discount
  }

  applyCoupon(coupon: string) {
    this.httpClient.get<Coupon[]>(`/coupons?name=${coupon.toUpperCase()}`).subscribe((data) => {
      if (data[0]) {
        this.discount = data[0].discount;
      } else {
        console.error('Not found coupon')
      }
    })
  }
}
