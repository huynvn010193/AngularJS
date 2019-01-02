import { Component,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,AfterViewChecked {
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
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
}
