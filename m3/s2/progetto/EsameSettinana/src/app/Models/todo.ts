import { ITodo } from "./i-todo";

export class Todo implements ITodo {
  id?: number | undefined;

  constructor(
    public title: string,
    public completed: string | boolean
  ){

  }



}
