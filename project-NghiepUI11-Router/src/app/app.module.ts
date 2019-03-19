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
import { appRoutes } from './app.router';

import { LoginComponent } from './components/login/login.component';

// Khai báo Service
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './service/guards/auth.guard';
import { AccessGuard } from './service/guards/access.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
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
