// import components
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, Filters } from "../../store/todoActions";

// import css
import "./style.css";

const TodoFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className='todo-filter'>
      <button
        className='btn-sub-primary'
        onClick={() => dispatch(setFilter(Filters.ALL))}
      >
        All
      </button>
      <button
        className='btn-sub-primary'
        onClick={() => dispatch(setFilter(Filters.COMPLETED))}
      >
        Completed
      </button>
      <button
        className='btn-sub-primary'
        onClick={() => dispatch(setFilter(Filters.CURRENT))}
      >
        Current
      </button>
    </div>
  );
};

export default TodoFilter;
