import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../services/product/product.service';
import { ProductModel } from '../../models';

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
