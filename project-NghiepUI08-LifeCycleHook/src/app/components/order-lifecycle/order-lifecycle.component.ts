import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-lifecycle',
  templateUrl: './order-lifecycle.component.html',
  styleUrls: ['./order-lifecycle.component.css']
})
export class OrderLifecycleComponent implements OnInit {

  constructor() { }

  public title = "Order LifeCycle";

  ngOnInit() {
  }

}
