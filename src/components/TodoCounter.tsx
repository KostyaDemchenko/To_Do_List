import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../store/todoActions";

const TodoCounter = () => {
  const todos = useSelector((state: any) => state.todos);
  const completedCount = todos.filter((todo: Todo) => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  return (
    <div>
      <p>Completed: {completedCount}</p>
      <p>Uncompleted: {uncompletedCount}</p>
    </div>
  );
};

export default TodoCounter;
