import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private _loggingService : LoginService
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    this._loggingService.logging();
  }

  // login() : void {
  //   console.log("Hello");
  // }

}
