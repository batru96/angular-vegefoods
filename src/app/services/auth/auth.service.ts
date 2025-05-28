import { Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
