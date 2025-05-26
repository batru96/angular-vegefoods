import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

const MAX_BUY = 100;

@Component({
  selector: 'app-cart',
  imports: [RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  couponCode = ''

  constructor(public cartService: CartService) {
    console.log('CartComponent initialized', cartService.getCart());
  }

  public getItemTotal(index: number): number {
    const { price, quantity } = this.cartService.getCart()[index];
    return price * quantity;
  }

  remove(index: number): void {
    this.cartService.removeItem(index);
  }

  onQuantityInputChange(value: number, index: number) {
    if (value > MAX_BUY) {
      window.alert(`Sorry, you can't buy more than ${MAX_BUY}.`);
      this.cartService.updateItemQuantity(index, MAX_BUY);
    } else {
      this.cartService.updateItemQuantity(0, 10);
    }
  }

  applyCoupon() {
    this.cartService.applyCoupon(this.couponCode)
  }
}
