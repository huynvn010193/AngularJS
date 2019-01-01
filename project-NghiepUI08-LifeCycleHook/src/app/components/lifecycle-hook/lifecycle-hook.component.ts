import { 
  Component, 
  OnInit, 
  OnDestroy,
  OnChanges, 
  Input, 
  SimpleChanges,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit,OnDestroy,OnChanges,DoCheck {
  @Input('total') total : number;

  public previousTotal : number;
  public title : string ='LifeCycleHook Compoment';

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit: LifeCycleHook');
  }

  ngOnDestroy(){
    console.log('Destroy');
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnchange');
    this.previousTotal = simpleChanges.total.previousValue;
  }

  ngDoCheck(){
    console.log('DoCheck');
  }
}
