import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  public isShow: boolean = true;
  public username: string = 'huyNVN';
  constructor() { }

  ngOnInit() {
  }

  onToggle(){
    this.isShow = !this.isShow;
  }
}
