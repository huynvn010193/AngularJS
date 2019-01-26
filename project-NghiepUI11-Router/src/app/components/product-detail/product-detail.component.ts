import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = null;

  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService
  ) { }

  ngOnInit() {
    // this.handleParamsRouteBySnapshot();
    this.handleParams();
  }

  handleParams(){
    let id = (+this.activatedRoute.params.subscribe(data =>{
      let id = data.id;
      this.product = this.productService.getProductById(id);
    }))
  }

  handleParamsRouteBySnapshot(){
    // Thêm dấu (+) => Chuyển id về số => tránh lỗi xảy ra.
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.getProductById(id);
  }
}
