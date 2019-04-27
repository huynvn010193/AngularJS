import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Todo } from './../models/todo.class';

@Injectable()
export class TodoService {
  public API : string = 'https://5caf6cedf7850e001462933e.mockapi.io/todos';

  constructor(
    public http : HttpClient
  ) { }

  getAllTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.API);
  }

  addTodos(todo : Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.API,todo);
  }

  updateTodo(todo : Todo) : Observable<Todo> {
    return this.http.put<Todo>(`${this.API}/${todo.id}`,todo);
  }

  handleError(err){
    if(err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.errpr}`);
    }
  }

}
