import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sortBy : string = 'name'; // price
  public sortValue : number = 1; // 1: tăng, -1: giảm
  public products : any[] = [
    {
      id: 1,
      name : 'Iphone 7 plus',
      price : 500
    },
    {
      id: 2,
      name : 'Galaxy',
      price : 200
    },
    {
      id: 3,
      name : 'Nokia',
      price : 700
    },
    {
      id: 4,
      name : 'Samsung',
      price : 600
    }
  ];

  onSort(col){
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }

}
