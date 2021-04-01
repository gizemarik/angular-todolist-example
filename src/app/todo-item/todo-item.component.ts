import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">

    <mat-checkbox class="example-margin" (click)="submitItem()" [checked]="item.status">
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

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  completeItem(): void {
    this.update.emit({
      item: this.item
    });
  }

  submitItem(): void {
    this.todoListService.updateTask(this.item).subscribe(() => {
      console.log('submit subscribtion')
    }, (err: any) => {
      console.log(err)
    })
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
