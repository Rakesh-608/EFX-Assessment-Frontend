import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
    {path: 'user-page', component: UserPageComponent},
    // {path: '', redirectTo: '/user-page', pathMatch: 'full' },
    {path: 'admin-page', component: AdminPageComponent},
];
