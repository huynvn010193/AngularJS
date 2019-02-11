import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public error : number = 0;
  constructor() { }

  ngOnInit() {
  }

  onAccess(key) {
    if(key == "12345"){
      localStorage.removeItem('key');
      localStorage.clear();
      localStorage.setItem('key',key);
    }else{
      this.error = -1;
      localStorage.removeItem('key');
      localStorage.clear();
    }
  }
}
