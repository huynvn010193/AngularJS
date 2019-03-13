import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../service/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit,OnDestroy {
  public product: Product = null;
  public subscription : Subscription = null;

  constructor(
    public activatedRouteService: ActivatedRoute,
    public productService : ProductService,
  ) { }

  // Lấy cú pháp trên đường dẫn


  ngOnInit() {
    this.handleParams();
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  handleParams(){
    this.subscription = this.activatedRouteService.parent.params.subscribe((params: Params) => {
      let id = params['id'];
      this.product = this.productService.getProductById(id);
    })
  }
}
