import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './models/product.model';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-vegefoods';
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
