import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit: LifeCycleHook');
  }

  ngOnDestroy(){
    console.log('Destroy');
  }

  // ngOnChanges() {
  //   console.log('ngOnchange');
  // }


}
