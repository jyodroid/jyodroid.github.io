import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../mocks/mock-heroes';

// Angular may need to inject other dependencies into this service
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
