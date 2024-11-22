import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/components/home/home.component';
import { ContactUsComponent } from './public/components/contact-us/contact-us.component';
import { RegisterComponent } from './public/components/register/register.component';
import { AboutUsComponent } from './public/components/about-us/about-us.component';
import { LoginComponent } from './public/components/login/login.component';
import { CategoryComponent } from './public/components/category/category.component';
import { CartComponent } from './public/components/cart/cart.component';
import { ProductDetailsComponent } from './public/components/product-details/product-details.component';
import { ProductComponent } from './public/components/product/product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin/Components/admin-page/admin-page.component';
import { AdminDashboardComponent } from './admin/Components/admin-dashboard/admin-dashboard.component';
import { AllUserComponent } from './admin/Components/all-user/all-user.component';
import { AllProductsComponent } from './admin/Components/all-products/all-products.component';

export const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-details/:productId', component: ProductDetailsComponent },
      { path: 'product', component: ProductComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin-page', pathMatch: 'full' },
      {
        path: 'admin-page', component: AdminPageComponent, children: [
          { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
          { path: 'admin-dashboard', component: AdminDashboardComponent },
          { path: 'all-user', component: AllUserComponent },
          { path: 'all-products', component: AllProductsComponent },
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
