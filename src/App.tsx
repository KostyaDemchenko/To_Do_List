import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoCounter from "./components/TodoCounter";

function App() {
  return (
    <div className='App'>
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <TodoCounter />
    </div>
  );
}

export default App;
