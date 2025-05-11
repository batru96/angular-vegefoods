import { Component, input } from '@angular/core';
import { ProductModel } from '../../models';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: '[app-product]',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<ProductModel>()

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product());
  }
}
