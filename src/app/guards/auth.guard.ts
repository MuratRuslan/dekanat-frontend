import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {isUndefined} from "util";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentUser') && !this.isAnonymous()) {
      // logged in so return true
      const userToken = JSON.parse(localStorage.getItem('currentUser'));
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  isAnonymous(): boolean {
    const userToken = JSON.parse(localStorage.getItem('currentUser'));
    if (userToken.username === 'ANONYMOUS' || isUndefined(userToken) || userToken == null) {
      return true;
    }
    return false;
  }
}

class UserToken {
  username: string;
  token: string;
}
