import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from "./interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
