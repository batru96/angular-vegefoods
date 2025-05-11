import { Component } from '@angular/core';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import { ProductService } from '../../services/product/product.service';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-home',
  imports: [ProductPreviewComponent],
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
}
