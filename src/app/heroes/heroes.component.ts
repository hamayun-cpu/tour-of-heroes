import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] | undefined;
  signedInUser: any;

  constructor(private heroService: HeroService, private auth: AuthService) { }
  ngOnInit() {
    this.getHeroes();
    this.auth.user$.subscribe(user => { this.signedInUser = user });
  }

  getHeroes(){
   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  addHero(name: string){
    if(this.isUserSignedIn()){
      if (name!== ''){
        this.heroService.addHero(name);
      }
    } else {
      window.alert('Only ADMIN can add Heroes');
    }
  }

  delHero(hero: Hero) {
    if(this.isUserSignedIn()){
      this.heroService.delHero(hero);
    } else {
      window.alert('Only ADMIN can delete Heroes');
    }
  }

  isUserSignedIn(){
    if(this.signedInUser.email === 'hamayun.waheed1999@gmail.com'){
      return true;
    } else {
      return false;
    }
  }
}
