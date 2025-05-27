import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { CurrencyPipe } from '@angular/common';
import { FormControlComponent } from "../../components/form-control/form-control.component";
import { HttpClient } from '@angular/common/http';
import { Province } from '../../models';
import { Router } from '@angular/router';

enum PaymentMethod {
  BankTransfer = 'bank transfer',
  CheckPayment = 'check payment',
  Paypal = 'paypal'
}

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CurrencyPipe, FormControlComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required, ),
    lastName: new FormControl('', Validators.required),
    province: new FormControl('0', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^0\d{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    paymentMethod: new FormControl<PaymentMethod | undefined>(undefined, Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
  })

  paymentMethods = [
    { value: PaymentMethod.BankTransfer, label: 'Bank Transfer' },
    { value: PaymentMethod.CheckPayment, label: 'Check Payment' },
    { value: PaymentMethod.Paypal, label: 'Paypal' },
  ];
  provinces: Province[] = []
  countries = ['China', 'France', 'Germany', 'Italy', 'Japan', 'South Korea', 'Spain', 'United Kingdom', 'United States', 'Vietnam'];

  constructor(public cartService: CartService, private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<Province[]>('/provinces').subscribe((data: any) => {
      this.provinces = data;
    })
  }

  onSubmit() {
    console.log('CheckoutForm:', {
      errors: this.checkoutForm.errors,
      value: this.checkoutForm.value,
      valid: this.checkoutForm.valid,
      form: this.checkoutForm
    });


    console.log('Has errors:', this.checkoutForm.hasError('required', 'firstName'));
    if (this.checkoutForm.valid) {
      this.cartService.clear();
      this.router.navigate(['/thank-you']);
      console.log('Form Submitted!', this.checkoutForm.value);
      // Here you can handle the form submission, e.g., send the data to a server
    }
  }
}
