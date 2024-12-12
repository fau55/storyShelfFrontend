import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { AllUserComponent } from './Components/all-user/all-user.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { FormsModule } from '@angular/forms';
// firebase start 
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from "../../Enviroment/enviroment";
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
// firebase End
const routes: Routes = [
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
    imports: [
        FormsModule,
        // firebase
        UploadWidgetModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        //fireBase
        CommonModule,
        RouterModule.forChild(routes),
        AdminComponent,
        AdminPageComponent,
        CartComponent,
        AllUserComponent,
        AllProductsComponent,
        AdminDashboardComponent
    ]
})
export class AdminModule { }
