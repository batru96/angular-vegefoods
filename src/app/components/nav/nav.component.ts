import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(public cartService: CartService) { 
  }
}
