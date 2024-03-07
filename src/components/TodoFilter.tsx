import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, Filters } from "../store/todoActions";

const TodoFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter(Filters.ALL))}>All</button>
      <button onClick={() => dispatch(setFilter(Filters.COMPLETED))}>
        Completed
      </button>
      <button onClick={() => dispatch(setFilter(Filters.CURRENT))}>
        Current
      </button>
    </div>
  );
};

export default TodoFilter;
