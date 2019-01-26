import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { Product } from 'src/app/models/product.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products : Product[] = [];
  constructor(
    public productService : ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProduct();
  }

}
