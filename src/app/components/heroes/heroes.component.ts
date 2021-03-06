import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from './heroe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  goToHero(idx: number) {
    this.router.navigate(['/hero', idx]);
  }
}
