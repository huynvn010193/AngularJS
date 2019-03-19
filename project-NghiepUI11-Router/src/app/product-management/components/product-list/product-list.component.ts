import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { Product } from 'src/app/models/product.class';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  public products : Product[] = [];
  public name : string;
  public price : number;
  public queryParamsSubscription : Subscription;

  constructor(
    public productService : ProductService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    debugger
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(data =>{
      let name = data['name'];
      let price = data['price'];
      this.name = name;
      this.price = price;
      this.products = this.productService.getAllProduct(name,price);
    });
  }

  ngOnDestroy(){
    if(this.queryParamsSubscription){
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onSearch(){
    this.routerService.navigate(['/products/list'],{queryParams: { name: this.name ? this.name : '', price:this.price ? this.price : '' }});
  }

}
