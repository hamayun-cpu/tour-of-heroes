import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = this.heroService.getHeroes();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
