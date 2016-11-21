import { Component } from '@angular/core';

import { HeroesComponent } from './modules/heroes/heroes.component';

import { Hero } from './models/hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent{
    title = 'Tour of Heroes';
}
