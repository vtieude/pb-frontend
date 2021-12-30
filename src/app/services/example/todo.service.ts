import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  getTodoList() {
    return this.httpClient.get(environment.gateway + '/todo');
  }
  getTodoListWithToken() {
    return this.httpClient.get(environment.gateway + '/alltodo');
  }

  addTodo(todo: Todo) {
    return this.httpClient.post(environment.gateway + '/todo', todo);
  }

  completeTodo(todo: Todo) {
    return this.httpClient.put(environment.gateway + '/todo', todo);
  }

  deleteTodo(todo: Todo) {
    return this.httpClient.delete(environment.gateway + '/todo/' + todo.id);
  }
}
