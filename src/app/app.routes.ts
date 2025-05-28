import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { authGuard, canActiveLogin } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActiveLogin]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  }
];
