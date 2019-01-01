import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLifecycleComponent } from './order-lifecycle.component';

describe('OrderLifecycleComponent', () => {
  let component: OrderLifecycleComponent;
  let fixture: ComponentFixture<OrderLifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
