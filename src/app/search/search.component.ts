import { HeroService } from './../hero.service';
import { HEROES } from './../hero-list';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  heroes: Hero[] = [];
  term: string = '';

  constructor(private http: HttpClient, private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => (this.heroes = data));
  }

}
