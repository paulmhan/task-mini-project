import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';


interface AuthUser {
    userID: number;
    email: string;
    password: string;
}

interface JwtPayload extends AuthUser {
    exp: number;
    iat: number;
}

@Injectable()
export class AuthService {
    public token: string = null;
    public user: AuthUser = null;

    constructor(public readonly router: Router) {}

    getToken(): string {
        try {
          if (localStorage.getItem(this.tokenKey) && localStorage.getItem(this.tokenKey) !== '') {
            // const expires = Number(localStorage.getItem(this.expiresKey));
            const seconds = Math.floor(new Date().getTime() / 1000);
    
            if (seconds >= expires) {
              this.router.navigate(['/Logout']);
              this.logout();
            } else {
              this.setToken(localStorage.getItem(this.tokenKey));
            }
          } else {
            return '';
          }
        } catch (err) {
          this.defaultErrorHandler(err);
        }
    
        return this.token;
      }
    
      defaultErrorHandler(err: Error): void {
        console.log(err);
      }

}