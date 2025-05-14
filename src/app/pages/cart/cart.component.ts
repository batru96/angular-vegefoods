import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { AppService } from '../../services/app/app.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

const MAX_BUY = 100;

@Component({
  selector: 'app-cart',
  imports: [RouterLink, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public cartService: CartService, public appService: AppService) {
    console.log('CartComponent initialized', cartService.cart);
  }

  public getItemTotalAsString(index: number): string {
    const { price, quantity } = this.cartService.cart()[index];
    const total = price * quantity;

    return this.appService.getPriceFormatted(total);
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
}
