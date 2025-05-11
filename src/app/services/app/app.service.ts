import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private currency: string = '$';

  constructor() { }

  getCurrency(): string {
    return this.currency;
  }
}
