import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicComponent } from './Public/public/public.component';
import { HomeComponent } from './Public/Components/home/home.component';
import { ContactUsComponent } from './Public/Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Public/Components/about-us/about-us.component';
import { RegisterComponent } from './Public/Components/register/register.component';
import { LoginComponent } from './Public/Components/login/login.component';
import { CategoryComponent } from './Public/Components/category/category.component';
import { CartComponent } from './Public/Components/cart/cart.component';
import { ProductDetailsComponent } from './Public/Components/product-details/product-details.component';
import { ProductsComponent } from './Public/Components/products/products.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './Admin/Components/all-users/all-users.component';
import { AllProductsComponent } from './Admin/Components/all-products/all-products.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'public', pathMatch: 'full' },
            {
                path: 'public',
                component: PublicComponent,
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: HomeComponent },
                    { path: 'contact-us', component: ContactUsComponent },
                    { path: 'about-us', component: AboutUsComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'login', component: LoginComponent },
                    { path: 'category', component: CategoryComponent },
                    { path: 'cart', component: CartComponent },
                    {
                        path: 'product-details/:productId',
                        component: ProductDetailsComponent,
                    },
                    { path: 'product', component: ProductsComponent },
                ],
            },
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: AdminDashboardComponent },
                    { path: 'all-users', component: AllUsersComponent },
                    { path: 'all-products', component: AllProductsComponent },
                ],
            },
        ],
    },
];
