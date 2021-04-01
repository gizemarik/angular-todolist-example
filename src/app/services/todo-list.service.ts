import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {
      name: 'First Task',
      status: true
    },
    {
      name: 'Second Task',
      status: false
    },
    {
      name: 'Third Task',
      status: false
    },
  ];
  
  constructor() { }


  getTodoList() {
    return this.todoList;
  }

}
