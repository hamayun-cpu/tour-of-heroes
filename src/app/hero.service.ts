import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
