import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arrNumber : number[] = [0, 100, 1, 5, 25, 10];
  public sortValue : number = 1;
  public name : string = '';

  onHandleSort(value): void{
    this.sortValue = value;
  }
}
