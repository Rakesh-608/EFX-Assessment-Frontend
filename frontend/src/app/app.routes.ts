import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
    {path: 'user-page', component: UserPageComponent},
    { path: '',   redirectTo: '/user-page', pathMatch: 'full' }
];
