import { Component, input } from '@angular/core';
import { ProductModel } from '../../models';
import { CartService } from '../../services/cart/cart.service';
import { AppService } from '../../services/app/app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[app-product-preview]',
  imports: [RouterLink],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.css'
})
export class ProductPreviewComponent {
  product = input.required<ProductModel>()

  constructor(private cartService: CartService, public appService: AppService) {}

  addToCart() {
    this.cartService.addToCart(this.product());
  }
}
