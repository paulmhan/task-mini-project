import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class IsLoggedInAuthGuardService implements CanActivate {
  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/sign-in'], {
        queryParams: {
          redirectUrl: state.url
        },
        queryParamsHandling: 'merge'
      });

      return false;
    }
  }
}