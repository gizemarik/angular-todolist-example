import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  addTask(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(`${this.URL}/`, item, this.httpOptions);
  }

  updateTask(item: TodoItem): Observable<void> {
    return this.httpClient.put<void>(`${this.URL}/${item.id}`, item, this.httpOptions);
    
  }


  deleteTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/${id}`);
  }

}
