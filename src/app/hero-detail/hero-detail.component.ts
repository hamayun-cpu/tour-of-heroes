import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location, public auth: AuthService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}
