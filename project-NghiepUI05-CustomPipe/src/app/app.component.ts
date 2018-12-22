import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = `Gặp U21 Myanmar vào chiều 18/12 trên sân Tự Do (Huế), đội U21 tuyển chọn Việt Nam đánh bại đối thủ sau loạt sút luân 
                            lưu nghẹt thở với tỷ số 5-3. Trước đó, hai đội hòa nhau 2-2 ở thời gian thi đấu chính thức. 
                            Như vậy, đại diện của Việt Nam chính thức lên ngôi ở giải đấu năm nay.`;

  public idFilter: string;
  public nameFilter: string;
  public statusFilter: string;

  public products :any[] = [
    {
      id : 1,
      name : 'Dell inspison n5110',
      status: true
    },
    {
      id : 2,
      name : 'Iphone 7',
      status: false
    },
    {
      id : 3,
      name : 'Samsung galaxy s6',
      status: false
    },
    {
      id : 4,
      name : 'Levono',
      status: true
    },
    {
      id : 21,
      name : 'Levono',
      status: true
    }
  ]
}
