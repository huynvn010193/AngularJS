import { 
  Component, 
  OnInit, 
  AfterContentInit, 
  AfterContentChecked, 
  ContentChild, 
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-order-lifecycle',
  templateUrl: './order-lifecycle.component.html',
  styleUrls: ['./order-lifecycle.component.css']
})
export class OrderLifecycleComponent implements OnInit,AfterContentInit,AfterContentChecked {

  constructor() { }

  public title = "Order LifeCycle";
  @ContentChild('value') value : ElementRef;

  ngOnInit() {
  }

  ngAfterContentInit(){
    // console.log(this.value);
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    // console.log(this.value.nativeElement.innerText);
    // console.log('ngAfterContentChecked');
  }

}
