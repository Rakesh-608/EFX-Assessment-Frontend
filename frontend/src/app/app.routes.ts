import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { DeleteProductFormComponent } from './delete-product-form/delete-product-form.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { ProductCardComponent } from './product-card/product-card.component';

export const routes: Routes = [
    {path: 'user-page', component: UserPageComponent},
    {path: '', redirectTo: '/user-page', pathMatch: 'full' },
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'add-product-form', component: AddProductFormComponent},
    {path:'update-product-form', component: UpdateProductFormComponent},
    {path:'delete-product-form', component: DeleteProductFormComponent},
    {path:'update-product', component: UpdatePageComponent},
    {path:'product-card', component: ProductCardComponent},
];
