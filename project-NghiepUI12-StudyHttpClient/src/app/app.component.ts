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

  public title : string;
  public completed : boolean = false;

  public todo: Todo = null;

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
      this.todoService.handleError(error);
    });
  }

  onAddTodo() {
    console.log(`${this.title} - ${this.completed}`);
    let todo = new Todo(this.title,this.completed);
    this.subscription = this.todoService.addTodos(todo).subscribe( data => {
      this.todos.push(data);
    }, error => {
      this.todoService.handleError(error);
    });
  }

  onEditTodo(item : Todo){
    this.todo = item;
  }

  onUpdateTodo() {
    this.subscription = this.todoService.updateTodo(this.todo).subscribe(data => {
      // Tìm vị trí của tk sau khi update đè lên tk trước update
      
    }, error => {
      this.todoService.handleError(error);
    });
  }

  // Hủy subscription trước khi component bị hủy => Nếu như không hủy thì lúc nào subcription cũng tiếp tục lắng nghe => làm chậm tiến trình. 
  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
