import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero-list';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = this.heroService.getHeroes();
  selectedHero: Hero | undefined;

  constructor(private heroService: HeroService) { }
  ngOnInit() {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
