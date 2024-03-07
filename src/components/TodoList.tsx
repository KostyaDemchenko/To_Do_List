import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, Todo, Filters } from "../store/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);
  const filter = useSelector((state: any) => state.filter);

  const filteredTodos = todos.filter((todo: Todo) => {
    switch (filter) {
      case Filters.COMPLETED:
        return todo.completed;
      case Filters.CURRENT:
        return !todo.completed;
      case Filters.ALL:
      default:
        return true;
    }
  });

  return (
    <ul>
      {filteredTodos.map((todo: Todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.content}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
