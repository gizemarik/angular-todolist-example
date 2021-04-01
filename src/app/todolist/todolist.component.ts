import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  template: `
  <div class="todo-app">
    <app-form-unit (submit)="addItem($event)"></app-form-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"
                      (remove)="removeItem($event)"
                      (update)="updateItem($event.item, $event.changes)"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {


  todoList!: TodoItem[];

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  //All new added tasks have not completed status.
  addItem(value: string) {
    this.todoListService.addItem({ id: Date.now(), name: value, status: false });
  }

  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any) {
    this.todoListService.updateItem(item, changes);
  }

}
