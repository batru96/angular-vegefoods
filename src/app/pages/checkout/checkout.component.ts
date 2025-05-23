import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { FormControlComponent } from "../../components/form-control/form-control.component";

enum PaymentMethod {
  BankTransfer = 'bank transfer',
  CheckPayment = 'check payment',
  Paypal = 'paypal'
}

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CurrencyPipe, FormControlComponent, JsonPipe],
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
    paymentMethod: new FormControl<PaymentMethod | undefined>(undefined, Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
  })

  get firstName() {
    console.log('firstName', this.checkoutForm.get('firstName'));
    return this.checkoutForm.controls['firstName']
  }

  get lastName() {
    return this.checkoutForm.get('lastName')!;
  }

  paymentMethods = [
    { value: PaymentMethod.BankTransfer, label: 'Bank Transfer' },
    { value: PaymentMethod.CheckPayment, label: 'Check Payment' },
    { value: PaymentMethod.Paypal, label: 'Paypal' },
  ];
  countries = ['China', 'France', 'Germany', 'Italy', 'Japan', 'South Korea', 'Spain', 'United Kingdom', 'United States', 'Vietnam'];

  constructor(public cartService: CartService) {
  }
  

  onSubmit() {
    console.log('CheckoutForm:', this.checkoutForm);
    if (this.checkoutForm.valid) {
      console.log('Form Submitted!', this.checkoutForm.value);
      // Here you can handle the form submission, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
