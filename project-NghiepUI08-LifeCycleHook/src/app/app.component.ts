import { Component,AfterViewInit,AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,AfterViewChecked {
  @ViewChild('arrProductAfter') arrProductAfter;

  title = 'App Component';
  public isShowing : boolean = true;
  public total : number = 0;
  public a : number;
  public b : number; 
  public content : string ='ngContent';
  public products : any[] = [
    {
      id : 1,
      name : "Iphone 7"
    },
    {
      id : 2,
      name : "Samsung Galaxy"
    },
    {
      id : 3,
      name : "Note 9"
    }
  ];

  onToggle(){
    this.isShowing = !this.isShowing;
  }

  amount(){
    this.total = Number(this.a) + Number(this.b);
  }

  onClick(value){
    this.content = value;
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    //console.log(this.arrProductAfter);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
    console.log(this.arrProductAfter);
  }

  addProduct(value){
    this.products.push(value);
  }
}
