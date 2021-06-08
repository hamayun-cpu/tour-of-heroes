import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn = false;

  login(userName: string, password: string) {
    this.isUserLoggedIn = (userName == 'admin' && password == 'admin');
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000)
   );
  }

  logout() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
  }
  
  constructor() { }
}
