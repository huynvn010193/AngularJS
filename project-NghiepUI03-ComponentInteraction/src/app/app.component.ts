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
      phone: '13221321'
    },
    {
      id: 2,
      name: 'Trần Văn B',
      phone: '321321321'
    },
    {
      id: 3,
      name: 'Lê Văn Long',
      phone: '312321'
    }
  ];
  
  public txtFullName : string;
  public txtPhone : number;

  onGetFulname(value: string){
    this.txtFullName = value;
  }

  onGetPhone(phone: number){
    this.txtPhone = phone;
  }
  
}
