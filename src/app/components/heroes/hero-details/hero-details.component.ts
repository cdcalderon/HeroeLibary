import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Hero} from '../heroe.model';
import {HeroesService} from '../../../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this.heroesService.getHero(params['id']);
      console.log(this.hero );
    });
  }

  getHouseImg() {
    return `assets/img/${this.hero.casa === 'DC' ? 'dc.png' : 'marvel.png'}`;
  }

}
