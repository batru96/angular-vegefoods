import { Injectable, signal } from '@angular/core';
import { CartModel, ProductModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = signal<CartModel>({});

  constructor() { }

  addToCart(product: ProductModel): void {
    
  }
}
