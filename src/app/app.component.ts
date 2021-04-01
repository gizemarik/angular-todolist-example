import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Angular {{ title }}!
    </h1>

    <app-todolist></app-todolist>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List Sample';
}
