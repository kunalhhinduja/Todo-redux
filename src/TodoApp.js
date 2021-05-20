import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import VisibilityFilters from "./components/VisibilityFilters";
// import "./styles.css";


const TodoApp = () => {
  return (
    <div className="todo-app">
      <h1> Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoApp;
