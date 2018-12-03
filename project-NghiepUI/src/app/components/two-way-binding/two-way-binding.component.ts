import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public title:string = "two-way-binding";
  public name:string = "";
  public gender:number = 0; // 0: Nữ, 1: Nam

  constructor() { }

  ngOnInit() {
  }

}
