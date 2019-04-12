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
}
