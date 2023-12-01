// todos.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo, TodosService } from '../../todo.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodos: Todo[] = [];
  todoForm: FormGroup;
  private todosSubscription: Subscription | undefined;

  // todos.component.ts
constructor(private todosService: TodosService, private fb: FormBuilder) {
  this.todoForm = this.fb.group({
    title: ['', Validators.required],
  });
}


  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todosSubscription = this.todosService.getTodosForPage().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  // todos.component.ts
// todos.component.ts
// todos.component.ts
onSubmit(event: Event): void {
  event.preventDefault();

  console.log('onSubmit called'); // Log to check if the method is called

  if (this.todoForm.valid) {
    const newTodo: Todo = {
      id: Date.now(),
      title: this.todoForm.value.title,
      completed: false,
    };

    console.log('New Todo:', newTodo); // Log the newTodo

    this.todosService.addTodo(newTodo).subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.todoForm.reset();
      },
      (error) => {
        console.error('Error adding todo:', error);
      }
    );
  }
}





  moveToCompleted(todo: Todo): void {
    this.todosService.toggleTodoCompletion(todo.id).subscribe(() => {
      this.newTodos = this.newTodos.filter(t => t.id !== todo.id);
      this.fetchTodos();
    });
  }

  ngOnDestroy(): void {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }
}
