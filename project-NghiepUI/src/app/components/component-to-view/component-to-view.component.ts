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
