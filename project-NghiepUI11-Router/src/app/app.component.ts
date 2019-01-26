import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dự án Router';

  constructor(
    public routerService : Router
  ){}
  
  navigate(url : string){
    //this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }
}

