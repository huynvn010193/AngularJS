import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMarried: boolean = true;
  public age: number = 18;
  public users : any[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      address: 'TPHCM'
    },
    {
      id: 2,
      name: 'Trần Văn B',
      address: 'Long An'
    },
    {
      id: 3,
      name: 'Lê Văn Long',
      address: 'Đà Nẵng'
    }
  ];
}
