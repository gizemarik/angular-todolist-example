import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todolist',
  template: `
  <app-form-unit (submit)="addItem($event)"></app-form-unit>
  <ul>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList: TodoItem[] = [
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

  ngOnInit(): void {
  }

  //All new added tasks have not completed status.
  addItem(value: string) {
    this.todoList.push({ name: value, status: false });
  }

}
