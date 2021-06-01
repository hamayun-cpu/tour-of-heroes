import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HEROES } from './hero-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.heroes;
  }
}
