import { UserComponent } from './user/user.component';
import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  isLoggedIn!: boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.isAuthenticated$.subscribe(loginAns => this.isLoggedIn = loginAns);
    if (this.isLoggedIn) {
      return true;
    } else {
      window.alert("You have to logedIn to view this page");
      this.auth.loginWithRedirect();
      return false;
    }
  }

  constructor(private auth: AuthService) {}
  
}
