import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: Fetched Hero with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  addHero(nam: string) {
    let idd = this.getId();
    this.messageService.add(`HeroService: Add Hero with id: ${idd}`);
    HEROES.push({name: nam, id: idd});
  }

  private getId() {
    let idd = HEROES[0].id;
    let prev = idd;
    for (let i = 0; i < HEROES.length; i++) { 
      if ((HEROES[i].id - prev) > 1) {
        idd = prev+1;
        return idd;
      }   
      prev = HEROES[i].id; 
    }
    return HEROES[HEROES.length-1].id + 1; 
  }
}
