import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {
  public name : string = 'HuyNVN';
  public age: number = 25;
  public isMarried: boolean = true;
  public user: object = {
    name : 'HuyNVN',
    age: 22,
    isMarried: false
  }
  public imgWidth: number = 500;
  public isValid: boolean = true;
  public tbWidth: number = 500;
  public tbBorder: number = 1;
  public isBorder: boolean = true;
  public isChecked: number = 1; // 1: add Class, 0: remove class
  public isSpecical: boolean = true;
  public size: number = 24;

  constructor() { }

  ngOnInit() {
  }

  showInfo(){
    return `Tên: ${this.user['name']}`;
  }

  public imgLink : string = './../assets/image/matroi.png';
  public textLink: string = 'Go to Zing.vn';
  public link : string='http://news.zing.vn/';
}
