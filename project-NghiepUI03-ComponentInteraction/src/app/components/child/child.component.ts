import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('married') isMarried : boolean = false;
  @Input('age') myAge : number;
  // @Input('name') name : string;
  private _name: string;

  constructor() { }
  ngOnInit() {
  }

  @Input()
  set name(name : string){
    this._name = name;
  }

  get name(){
    return this._name;
  }
}
