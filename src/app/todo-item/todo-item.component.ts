import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">

    <mat-checkbox class="example-margin" (click)="completeItem()" [checked]="item.status">
      <span class="todo-title" [ngClass]="{'todo-complete': item.status}">
        {{ item.name }}
      </span>
    </mat-checkbox>

    <mat-icon aria-hidden="false" class="trash" (click)="removeItem()">delete</mat-icon>

  </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item!: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { status: !this.item.status }
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
