import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoActions";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
