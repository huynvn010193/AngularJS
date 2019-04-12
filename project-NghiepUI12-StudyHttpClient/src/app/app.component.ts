import { Component,OnInit,OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs/subscription';
import { Todo } from './models/todo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  public todos : Todo[] = [];
  public subscription : Subscription;

  constructor(
    public todoService : TodoService
  ){
  
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.subscription = this.todoService.getAllTodos().subscribe(data => {
      this.todos = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    
  }
}
