import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { LoginComponent } from './components/login/login.component';
import { AccessGuard } from './service/guards/access.guard';

export const appRoutes : Routes = [
  {
    path:'',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  {
    path : 'index',
    canDeactivate: [AccessGuard],
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path:'products/:id',
  //   component : ProductDetailComponent
  // },
  {
    path : '**',
    component : NotFoundComponent
  }
];