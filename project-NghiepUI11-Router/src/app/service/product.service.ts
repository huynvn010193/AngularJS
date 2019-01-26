import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tạo đối tượng kiểu product => là 1 array
  public products : Product[] = [
    {
      id : 1,
      name : 'Iphone 7 plus',
      price: 17000000,
      status: true
    },
    {
      id : 2,
      name : 'Galaxy S9',
      price: 12000000,
      status: false
    },
    {
      id : 3,
      name : 'Iphone SX',
      price: 25000000,
      status: true
    },
    {
      id : 4,
      name : 'Oppo 5',
      price: 10000000,
      status: true
    }
  ];
  constructor() { }
  
  getAllProduct(){
    return this.products;
  }

  getProductById(id : number){
    let result = null;
    for (var i = 0; i < this.products.length; i++){
      if(this.products[i].id == id){
        result = this.products[i].id;
        break;
      }
    }
    return result;
  }

}
