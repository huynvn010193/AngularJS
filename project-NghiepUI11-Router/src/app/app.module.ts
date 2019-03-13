import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Khai báo Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { appRoutes } from './app.router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';

// Khai báo Service
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './service/guards/auth.guard';
import { AccessGuard } from './service/guards/access.guard';
import { ModuleComponent } from './product-management/module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    AuthGuard,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
