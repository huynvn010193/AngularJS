import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arrNumber = [0, 100, 1, 5, 25, 10];
  public sortValue = 1;
  onHandleSort(value){
    this.sortValue = value;
  }
}
