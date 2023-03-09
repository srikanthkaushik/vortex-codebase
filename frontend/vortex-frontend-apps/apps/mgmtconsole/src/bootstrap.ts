import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
//import { CommonModule } from '@angular/common';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
