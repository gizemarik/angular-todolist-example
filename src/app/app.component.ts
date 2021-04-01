import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-form-unit></app-form-unit>
    <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.name }}
    </li>
  </ul>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {name: 'install NodeJS'},
    {name: 'install Angular CLI'},
    {name: 'create new app'},
    {name: 'serve app'},
    {name: 'develop app'},
    {name: 'deploy app'},
  ];
}
