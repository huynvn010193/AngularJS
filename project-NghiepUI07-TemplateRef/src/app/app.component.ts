import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('txtName') name : ElementRef;
  onGetData(txtName): void{
    console.log(txtName);
  }
  onGetDataOnComponent(): void{
    console.log(this.name.nativeElement.value);
  }
}
