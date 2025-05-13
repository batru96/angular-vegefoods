import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.fetchCart();
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).runScript();
      }
    });
  }
}
