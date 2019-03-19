import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { Product } from 'src/app/models/product.class';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

}
