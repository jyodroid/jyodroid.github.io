import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Angular may need to inject other dependencies into this service
@Injectable()
export class HeroService {
  getHeroes(): void {} //Stub
}
