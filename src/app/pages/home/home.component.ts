import { Component } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { ProductService } from '../../product.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ourProducts: ProductModel[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.ourProducts = data;
    });
  }

  addToCart() {
    console.log('Item added to cart');
  }

}
