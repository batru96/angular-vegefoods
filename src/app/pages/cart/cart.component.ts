import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { AppService } from '../../services/app/app.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService, public appService: AppService) { }

  public getItemTotalAsString(index: number): string {
    return `${this.appService.getCurrency()} ${this.cartService.getCart()[index].price * this.cartService.getCart()[index].quantity}`;
  }
}
