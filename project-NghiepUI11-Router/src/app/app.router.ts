import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const appRoutes : Routes = [
  {
    path:'',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  {
    path : 'index',
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
    path:'products',
    children: [
      {
        path: '',
        redirectTo: '/products/list',
        pathMatch : 'full'
      },
      {
        path: 'list',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
    ]
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