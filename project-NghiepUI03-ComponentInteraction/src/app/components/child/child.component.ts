import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('married') isMarried : boolean = false;
  @Input('age') myAge : number;
  // @Input('name') name : string;
  private _name: string;
  public txtFullName : string;
  @Output('txtFullName') onHandleFulName = new EventEmitter<string>();

  onSubmitForm(){
    this.onHandleFulName.emit(this.txtFullName);
  }

  constructor() { }
  ngOnInit() {
  }

  @Input()
  set name(name : string){
    this._name = name;
  }

  get name(){
    return this._name;
  }
}
