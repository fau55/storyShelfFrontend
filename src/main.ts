import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routes';
import { PublicModule } from './app/public/public.module';
import { AdminModule } from './app/admin/admin.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideClientHydration, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AdminModule, PublicModule, BrowserModule),
        provideClientHydration(),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
