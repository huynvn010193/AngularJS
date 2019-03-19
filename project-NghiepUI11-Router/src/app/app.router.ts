import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './product-management/components/products/products.component';
import { ProductDetailComponent } from './product-management/components/product-detail/product-detail.component';
import { ProductListComponent } from './product-management/components/product-list/product-list.component';
import { ProductEditComponent } from './product-management/components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/guards/auth.guard';
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
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'product/:id',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductDetailComponent
      },
      {
        path: 'edit',
        component: ProductEditComponent
      },
    ]
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