import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { AppService } from '../../services/app/app.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      country: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      apartment: new FormControl(''), // optional
      city: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
    }),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })

  countries = ['China', 'France', 'Germany', 'Italy', 'Japan', 'South Korea', 'Spain', 'United Kingdom', 'United States', 'Vietnam'];

  constructor(public cartService: CartService, public appService: AppService) {
  }
  

  onSubmit() {
    console.log(this.checkoutForm.value);
    if (this.checkoutForm.valid) {
      console.log('Form Submitted!', this.checkoutForm.value);
      // Here you can handle the form submission, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
