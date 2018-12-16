import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  public isSpecial : boolean = false;
  
  setClasses(){
    return {
      'border-blue' : this.isSpecial,
      'pd-10': this.isSpecial,
      'cl-red': this.isSpecial,
      'border-yellow': !this.isSpecial
    }
  }

  setStyle(){
    return {
      'border': this.isSpecial ? 'solid 2px blue' : '',
      'padding.px': this.isSpecial ? '10':'',
      'color': this.isSpecial ? 'red':''
    }
  }

  onToggleSpecial(){
    this.isSpecial = !this.isSpecial;
  }

  constructor() { }

  ngOnInit() {
  }

}
