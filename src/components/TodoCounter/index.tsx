// import components
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../store/todoActions";
import { Todo } from "../../store/types";

// import css
import "./style.css";

const TodoCounter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const completedTodos = todos.filter((todo: Todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo: Todo) => !todo.completed);

  return (
    <div className='todo-counter'>
      <div className='un-complited-container'>
        <h4>Uncompleted: {uncompletedTodos.length}</h4>
        {uncompletedTodos.map((todo: Todo) => (
          <p
            className='un-complited-element'
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.content}
          </p>
        ))}
      </div>
      <div className='complited-container'>
        <h4>Completed: {completedTodos.length}</h4>
        {completedTodos.map((todo: Todo) => (
          <p
            className='complited-element'
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TodoCounter;
