import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../store/todoActions";
import { Todo } from "../../store/types";
import { Filters } from "../../store/todoActions"; // Импортируем типы фильтров

import "./style.css";

const TodoCounter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);
  const filter = useSelector((state: any) => state.filter); // Получаем текущий выбранный фильтр

  // Фильтруем задачи в соответствии с выбранным фильтром
  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === Filters.ALL) {
      return true;
    } else if (filter === Filters.COMPLETED) {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  const completedTodos = filteredTodos.filter((todo: Todo) => todo.completed);
  const uncompletedTodos = filteredTodos.filter(
    (todo: Todo) => !todo.completed
  );

  return (
    <div className='todo-counter'>
      <div className='un-completed-container'>
        <hgroup>
          <h3>Uncompleted: {uncompletedTodos.length}</h3>
        </hgroup>
        {uncompletedTodos.map((todo: Todo) => (
          <div
            className='un-completed-element'
            onClick={() => dispatch(toggleTodo(todo.id))}
            key={todo.id} // Переместил key внутрь div
          >
            <p>{todo.content}</p>
          </div>
        ))}
      </div>
      <div className='completed-container'>
        <hgroup>
          <h3>Completed: {completedTodos.length}</h3>
        </hgroup>
        {completedTodos.map((todo: Todo) => (
          <div
            className='completed-element'
            onClick={() => dispatch(toggleTodo(todo.id))}
            key={todo.id} // Переместил key внутрь div
          >
            <p>{todo.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCounter;
