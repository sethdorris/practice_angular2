import { provideRouter, RouterConfig } from '@angular/router';
import { login } from '../app/app.login';
import { welcome } from '../app/app.welcome';
import { AppComponent } from '../app/app.component';


export const routes: RouterConfig = [
    { path: 'login', component: login },
    { path: 'welcome', component: welcome }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];