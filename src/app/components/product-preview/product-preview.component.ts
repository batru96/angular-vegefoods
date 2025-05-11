import { Component, input } from '@angular/core';
import { ProductModel } from '../../models';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: '[app-product-preview]',
  imports: [],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.css'
})
export class ProductPreviewComponent {
  product = input.required<ProductModel>()

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product());
  }
}
