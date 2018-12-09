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
  public products : any[] = [{
    id: 1,
    name: 'Iphone 6 plus',
    image: './../assets/image/ip6.jpg';
  }]
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
