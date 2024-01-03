import { Routes } from '@angular/router';
import { InputCardComponent } from './components/input-card/input-card.component';

export const routes: Routes = [
    {
        path: "auth-page",
        component: InputCardComponent
    },
    {
        path: '',
        redirectTo: 'auth-page',
        pathMatch: 'full'
    }
];
