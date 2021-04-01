import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
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
                      (update)="updateItem($event.item)"></app-todo-item>
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
    this.todoListService.getList()
      .subscribe(data => this.todoList = data);
  }

  //All new added tasks have not completed status.
  addItem(value: string) {
    this.todoListService.addTask({ id: Date.now(), name: value, status: false }).subscribe(
      (data: TodoItem) => {
        this.todoList.push(data)
      },
      (error:any) =>  console.log(error)
    );
    
  }

  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem) {
    const updatedItem = {id: item.id, name: item.name, status: !item.status}
    this.todoListService.updateTask(updatedItem);
  }

}
