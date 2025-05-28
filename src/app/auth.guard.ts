import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem('token') === null) {
    console.log('Access denied. No token found.');
    return router.createUrlTree(['/'])
  } else {
    console.log('Access granted. Token found.');
    return true;
  }
};

export const canActiveLogin: CanActivateFn = (route, state) => {
  const router = inject(Router)
  
  if (localStorage.getItem('token') === null) {
    return true
  } else {
    return router.createUrlTree(['/'])
  }
}
