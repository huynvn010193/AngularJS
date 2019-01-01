import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';
import { OrderLifecycleComponent } from './components/order-lifecycle/order-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHookComponent,
    OrderLifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
