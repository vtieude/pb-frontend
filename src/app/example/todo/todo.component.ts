import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/model';
import { TodoService } from 'src/app/services/example/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  activeTodos: Todo[] = [];
  completedTodos: Todo[] = [];
  todoMessage: string | undefined;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllWithToken();
  }

  getAll() {
    this.todoService.getTodoList().subscribe((data: any) => {
      if (data != null) {
        this.activeTodos = data;
        this.completedTodos =  this.activeTodos.filter((a) => a.complete);
      }
    });
  }

  getAllWithToken() {
    this.todoService.getTodoListWithToken().subscribe((data: any) => {
      if (data != null) {
        this.activeTodos = data;
        this.completedTodos =  this.activeTodos.filter((a) => a.complete);
      }
    });
  }


  addTodo() {
    const newTodo: Todo = {
      message: this.todoMessage,
      id: '',
      complete: false
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getAll();
      this.todoMessage = '';
    });
  }

  completeTodo(todo: Todo) {
    this.todoService.completeTodo(todo).subscribe(() => {
      this.getAll();
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.getAll();
    });
  }
}
