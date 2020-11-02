import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private signIn: SignInComponent, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.signIn.isLoggedIn) { return true; }
    // Store the attempted URL for redirecting
    this.signIn.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/sign-in']);
    return false;
  }
}