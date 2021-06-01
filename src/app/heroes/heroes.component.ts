import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
// import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id: 1, name: 'hamayuin'};

  constructor() { }
  ngOnInit() {}
}
