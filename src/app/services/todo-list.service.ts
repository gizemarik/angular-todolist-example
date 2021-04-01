import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const todoListStorageKey = 'Todo_List';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList!: TodoItem[];

  private URL = 'http://localhost:3000/tasks';

  constructor(private storageService: StorageService, private httpClient: HttpClient) {
    this.getList()
    .subscribe(data => this.todoList = data);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getList(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.URL);
  }

  postToList(item: TodoItem): Observable<TodoItem> {
    console.log('servis içerisindeki post fonksiyonundayım');
    console.log(item);
      return this.httpClient.post<TodoItem>(this.URL, item, this.httpOptions);
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
