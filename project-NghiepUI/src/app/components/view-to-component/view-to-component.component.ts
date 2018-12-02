import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title: string = 'Event binding';
  public count: number = 0; 
  public username: string = '';
  public name: string = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe(event){
    console.log(event.target.innerText);
  }

  onDbClickMe(event){
    console.log(event.target.innerText);
  }

  onKeyUp(event){
    this.username = event.target.value;
  }

  onKeyUpEnter(event){
    this.name = event.target.value;
  }
  // onInc(){
  //   this.count++;
  // }
}
