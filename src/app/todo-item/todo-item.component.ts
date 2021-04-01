import { Component, OnInit,Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  {{ item.name }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item!: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
