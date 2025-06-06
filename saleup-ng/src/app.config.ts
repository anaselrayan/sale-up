import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { authInterceptor } from '@module/auth/services/auth.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { StartUpService } from '@shared/services/startup.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, 'assets/translations/', '.json');

export function initializeApp(startupService: StartUpService) {
  return () => startupService.startUp();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        importProvidersFrom([TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: httpLoaderFactory,
              deps: [HttpClient],
            },
          })]),
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [StartUpService],
          multi: true,
        },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService,
        ConfirmationService
    ]
};
