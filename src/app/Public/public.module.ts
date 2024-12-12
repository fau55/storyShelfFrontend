import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
// firebase start 
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from "../../Enviroment/enviroment";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
// firebase End
import { SearchProductPipe } from '../Pipes/search-product.pipe';
const routes: Routes = [
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
  }
];


@NgModule({
    imports: [
        // firebase
        UploadWidgetModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        //fireBase
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        PublicComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        ContactUsComponent,
        AboutUsComponent,
        RegisterComponent,
        LoginComponent,
        CategoryComponent,
        ProductComponent,
        CartComponent,
        ProductDetailsComponent,
        LatestNewsComponent,
        NewsLetterComponent,
        LandingPageComponent,
        SearchProductPipe
    ]
})
export class PublicModule { }
