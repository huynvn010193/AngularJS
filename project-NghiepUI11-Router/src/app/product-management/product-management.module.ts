import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component Product
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class ProductManagementModule { }
