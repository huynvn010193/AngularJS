import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  private _loggingService : LoginService;

  constructor(_loggingService : LoginService) { 
    this._loggingService = _loggingService;
  }

  ngOnInit() {
  }

  click() {
    this._loggingService.logging();
  }

}
