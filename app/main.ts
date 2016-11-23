import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
const platform = platformBrowserDynamic();
// enableProdMode();
if (process.env.ENV === 'production') {
  enableProdMode();
}
platform.bootstrapModule(AppModule);
