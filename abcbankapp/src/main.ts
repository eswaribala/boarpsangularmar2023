import {enableProdMode, importProvidersFrom} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {BaCreateComponent} from "./app/bankaccount/ba-create/ba-create.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//bootstrapApplication(BaCreateComponent,{providers:[importProvidersFrom([BrowserModule,BrowserAnimationsModule])]});
