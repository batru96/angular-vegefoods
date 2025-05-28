import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public cartService: CartService, public authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
