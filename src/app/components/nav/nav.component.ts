import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  constructor(public cartService: CartService) { 
  }

  ngOnInit(): void {
    console.log('NavComponent initialized', this.cartService.getTotalItems());
  }
}
