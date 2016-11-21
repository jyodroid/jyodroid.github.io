import './utils/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroSearchComponent } from './modules/hero-search/hero-search.component';
import { HeroService } from './services/hero.service';

import { AppRoutingModule }     from './modules/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],
  declarations: [
                  AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                  HeroSearchComponent
                ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
