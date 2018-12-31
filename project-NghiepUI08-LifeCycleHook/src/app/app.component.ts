import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHook';
  public isShowing : boolean = true;

  onToggle(){
    this.isShowing = !this.isShowing;
  }
}
