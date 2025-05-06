import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-vegefoods';
  ourProducts = [
    {
      id: '1',
      status: '30%',
      name: 'Bell Pepper',
      price: '$120.00',
      priceSale: '$80.00',
      image: 'images/product-1.jpg'
    },
    {
      id: '2',
      status: '',
      name: 'Strawberry',
      price: '$120.00',
      priceSale: '',
      image: 'images/product-2.jpg'
    },
    {
      id: '3',
      status: '',
      name: 'Green Beans',
      price: '$120.00',
      priceSale: '',
      image: 'images/product-3.jpg'
    },
    {
      id: '4',
      status: '',
      name: 'Purple Cabbage',
      price: '$95.00',
      priceSale: '',
      image: 'images/product-4.jpg'
    },
    {
      id: '5',
      status: '30$',
      name: 'Tomatoe',
      price: '$120.00',
      priceSale: '$80.00',
      image: 'images/product-5.jpg'
    },
    {
      id: '6',
      status: '',
      name: 'Broccoli',
      price: '$130.00',
      priceSale: '',
      image: 'images/product-6.jpg'
    },
    {
      id: '7',
      status: '',
      name: 'Carrots',
      price: '$70.00',
      priceSale: '',
      image: 'images/product-7.jpg'
    },
    {
      id: '8',
      status: '',
      name: 'Fruit Juice',
      price: '$65.00',
      priceSale: '',
      image: 'images/product-8.jpg'
    }
  ];

  addToCart() {
    console.log('Item added to cart');
  }
}
