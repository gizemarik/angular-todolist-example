import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListService } from './services/todo-list.service';
import { AppComponent } from './app.component';
import { FormUnitComponent } from './form-unit/form-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodolistComponent } from './todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToDoMaterialModule} from './material-ui-modules';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormUnitComponent,
    TodoItemComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToDoMaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
