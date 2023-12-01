import { Component } from '@angular/core';
import { TodosService } from '../../todo.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodoComponent {

  constructor(private todosSvc:TodosService){}

  newTodo:Partial<Todo> = {
    completed: '0'
  };

  saveTodo(){
    this.todosSvc.createTodo(this.newTodo);
  }
}
