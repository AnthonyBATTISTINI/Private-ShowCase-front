import { Routes } from '@angular/router';
import { PATH_WELCOME } from './app-routing.constants';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const ROUTES: Routes = [
    {
        path: PATH_WELCOME,
        component: WelcomeComponent
    }
];
