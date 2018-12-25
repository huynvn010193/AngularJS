import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content : string = `
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.`;
  public name : string = 'lương đình của';
  public title : string = 'Học angular 4';
  public amount : number = 35.142567;
  public result : number = 0.85161321;
  public names : string[] = ['abc','def','xyz','123','456'];
  public total: number = 75.8434;
  public today : Date = new Date();
  public product : any = {
    id: 1,
    name: 'Samsung galaxy s7',
    price: 15,
    status: true
  }
}
