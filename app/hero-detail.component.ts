import { Component, Input } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'my-hero-detail',
  template:`
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `
})
export class HeroDetailComponent {

  // by declaring de decorated input anotation we are binding attribute with
  // the caller parent module (component) 
  @Input()
  hero: Hero;
}
