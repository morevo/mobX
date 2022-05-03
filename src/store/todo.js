import { action, makeAutoObservable, observable } from "mobx";
import { todosAPI } from "../api/todosAPI";

class Todo {
  todos = [
    { id: 0, complatedTodo: false, title: "Go for a walk" },
    { id: 1, complatedTodo: false, title: "Find my phone" },
    { id: 2, complatedTodo: false, title: "Go to the gym" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  complatedTodo(todo) {
    todo.complatedTodo = !todo.complatedTodo;
  }

  getAllTodos() {
    todosAPI.getTodos().then((res) => this.todos = [...this.todos, ...res]);
  }
}

export default new Todo();
