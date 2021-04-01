import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todolist',
  template: `
  <div class="todo-app">
    <app-form-unit (submit)="addItem($event)"></app-form-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList!: TodoItem[];

  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  //All new added tasks have not completed status.
  addItem(value: string) {
    this.todoList.push({ name: value, status: false });
  }

}
