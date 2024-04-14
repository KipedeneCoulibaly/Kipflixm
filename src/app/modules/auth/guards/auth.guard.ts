import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authService = inject(AuthService);

  if(authService.isAuthenticated() == false){
    router.navigateByUrl("/login");
    return false;
  }
  else return true;
};
