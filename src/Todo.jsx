import { observer } from "mobx-react-lite";
import React from "react";
import todo from "./store/todo";
import "./Todo.css";

export const Todo = observer(() => {
  let setTodo = (title) => {
    let complatedTodo = {
      title,
      id: Date.now(),
      complatedTodo: false,
    };

    todo.addTodo(complatedTodo);
  };

  let deleteTodo = (id) => {
    todo.removeTodo(id);
  };

  let checkTodo = (id) => {
    todo.complatedTodo(id);
  };

  let allTodos = () => {
    todo.getAllTodos();
  };

  return (
    <div className="todo">
      <button onClick={() => allTodos()}>Get all todos</button>
      <input
        onClick={() => setTodo(prompt("Please, enter message"))}
        type="button"
        value="Add todo"
      />
      <h1>Todos</h1>
      <ul>
        {todo.todos.map((item) => (
          <div key={item.id}>
            <li onClick={() => checkTodo(item)}>{item.title}</li>
            <button onClick={() => deleteTodo(item.id)}>X</button>
            <input type="checkbox" id="check" checked={item.complatedTodo}/>
          </div>
        ))}
      </ul>
    </div>
  );
});
