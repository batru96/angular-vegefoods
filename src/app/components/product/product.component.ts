import { Component, input } from '@angular/core';
import { ProductModel } from '../../models';

@Component({
  selector: '[app-product]',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<ProductModel>()

  addToCart() {
    console.log('Product added to cart:', this.product);
  }
}
