// todoReducer.ts

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters } from "./todoActions";

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: Filters;
}

const initialState: TodoState = {
  todos: [],
  filter: Filters.ALL,
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: // Используйте тип действия, а не само действие
      const nextId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 0;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId,
            content: action.payload,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO: // Используйте тип действия, а не само действие
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case SET_FILTER: // Используйте тип действия, а не само действие
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
