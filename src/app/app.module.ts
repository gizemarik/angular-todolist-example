import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListService } from './services/todo-list.service';
import { AppComponent } from './app.component';
import { FormUnitComponent } from './form-unit/form-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUnitComponent,
    TodoItemComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
