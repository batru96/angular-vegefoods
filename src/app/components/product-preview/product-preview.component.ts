import { Component, input } from '@angular/core';
import { ProductModel } from '../../models';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[app-product-preview]',
  imports: [RouterLink, CurrencyPipe],
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
