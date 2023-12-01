import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'http://localhost:3000';
  private todos: Todo[] = [];

  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }


  getCompletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos?completed=true`);
  }


  getTodosForPage(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos?completed=false`);
  }


  getCompletedTodosForPage(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos?completed=true`);
  }


  addTodo(newTodo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(`${this.apiUrl}/todos`, newTodo);
  }


  removeTodo(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.apiUrl}/todos/${id}`);
  }


  toggleTodoCompletion(id: number): Observable<Todo[]> {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return this.http.put<Todo[]>(`${this.apiUrl}/todos/${id}`, todo);
    }
    return this.getTodos();  // Return the updated todo list
  }
}


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


