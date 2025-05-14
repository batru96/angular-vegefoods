import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { AppService } from '../../services/app/app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  

  constructor(public cartService: CartService, public appService: AppService) { 
    console.log('CartComponent initialized', cartService.getCart());
  }

  public getItemTotalAsString(index: number): string {
    return `${this.appService.getCurrency()} ${this.cartService.getCart()[index].price * this.cartService.getCart()[index].quantity}`;
  }

  remove(index: number): void {
    this.cartService.removeItem(index)
  }
}
