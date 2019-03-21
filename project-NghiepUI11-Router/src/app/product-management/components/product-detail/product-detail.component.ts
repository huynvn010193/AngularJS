import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = null;
  public subscription : Subscription;
  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService,
    public routerService : Router
  ) { }

  ngOnInit() {
    this.handleParams();
  }

  handleParams(){
    this.subscription = this.activatedRoute.params.subscribe(data =>{
      let id = data.id;
      this.product = this.productService.getProductById(id);
    })
  }

  handleParamsRouteBySnapshot(){
    // Thêm dấu (+) => Chuyển id về số => tránh lỗi xảy ra.
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.getProductById(id);
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onBackToList(){
    // this.routerService.navigate(['products/list']);
    // relativeTo: thay vì truyền đường dẫn chích xác thì truyền ntn !!
    this.routerService.navigate(['products']);
  }

  onEdit(){
     // Cách 1:
    // this.routerService.navigate([`edit/${this.product.id}`],{
    //   relativeTo : this.activatedRoute.parent
    // });
    this.routerService.navigate(['edit'],{
      relativeTo : this.activatedRoute.parent
    });
  }
}
