import { provideRouter, RouterConfig } from '@angular/router';
import { login } from '../app/app.login';


export const routes: RouterConfig = [
    { path: '/login', component: login }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];