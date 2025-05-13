import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models';
import { AppService } from '../../services/app/app.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product?: ProductModel;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, public appService: AppService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get<ProductModel>('/products/' + id).subscribe((data) => {
      if (data) {
        this.product = data;
      }
    });
  }
}
