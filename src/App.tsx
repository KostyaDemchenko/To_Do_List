import React from "react";

// import components
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoCounter from "./components/TodoCounter";

// import css
import "./global.css";

function App() {
  return (
    <div className='app-wrapper'>
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoFilter />
      <TodoCounter />
    </div>
  );
}

export default App;
