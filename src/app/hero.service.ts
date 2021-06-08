import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  idNumber = 21;

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

  delHero(hero: Hero) {
    let ind = HEROES.indexOf(hero);
    this.messageService.add(`HeroService: Delete Hero with id: ${HEROES[ind].id}`);
    HEROES.splice(ind,1);
  }

  private getId() {
    let num = this.idNumber;
    this.idNumber += 1;
    return num;
  }
}
