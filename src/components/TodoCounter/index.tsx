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
        <hgroup>
          <h3>Uncompleted: {uncompletedTodos.length}</h3>
        </hgroup>
        {uncompletedTodos.map((todo: Todo) => (
          <div
            className='un-complited-element'
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            <p key={todo.id}>{todo.content}</p>
          </div>
        ))}
      </div>
      <div className='complited-container'>
        <hgroup>
          <h3>Completed: {completedTodos.length}</h3>
        </hgroup>
        {completedTodos.map((todo: Todo) => (
          <div
            className='complited-element'
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            <p key={todo.id}>{todo.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCounter;
