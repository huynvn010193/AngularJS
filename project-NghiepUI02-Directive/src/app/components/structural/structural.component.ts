import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  public isShow: boolean = true;
  public username: string = 'huyNVN';
  public isChecked: boolean = false;
  public age: number;

  public names : string[] = ['TPHCM','Hà Nội','Vĩnh Long','Long An'];
  public products : any[] = [
    {
      id: 1,
      name: 'Iphone 6 plus',
      price: 800000
    },
    {
      id: 2,
      name: 'Iphone SX max',
      price: 900000
    },
    {
      id: 3,
      name: 'Galaxy S9',
      price: 200000
    },
    {
      id: 4,
      name: 'Nokia',
      price: 500000
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  onToggle(){
    this.isShow = !this.isShow;
  }

  onChange(value){
    this.isChecked = value;
  }
}
