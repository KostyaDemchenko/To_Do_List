// TodoForm.jsx или TodoForm.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoActions";

// import css
import "./style.css";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a todo...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default TodoForm;
