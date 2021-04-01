import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';


const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
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

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }


  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes: any) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

}
