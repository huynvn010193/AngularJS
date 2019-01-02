import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component';
  public isShowing : boolean = true;
  public total : number = 0;
  public a : number;
  public b : number; 
  public content : string ='ngContent';
  onToggle(){
    this.isShowing = !this.isShowing;
  }

  amount(){
    this.total = Number(this.a) + Number(this.b);
  }

  onClick(value){
    this.content = value;
  }
}
