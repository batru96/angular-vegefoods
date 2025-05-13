import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private appConfig: AppConfig = {
    currency: ''
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<AppConfig>('/config').subscribe((data) => {
      this.appConfig = data;
    })
  }

  getCurrency(): string {
    return this.appConfig.currency;
  }

  getPriceFormatted(price: number): string {
    return `${this.getCurrency()}${price.toFixed(2)}`;
  }
}
