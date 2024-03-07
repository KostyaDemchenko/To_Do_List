import { addTodo, toggleTodo, setFilter, Filters } from "./todoActions";

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: string;
}

const initialState: TodoState = {
  todos: [],
  filter: Filters.ALL,
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addTodo:
      const nextId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1;
      if (action.payload.length <= 10) {
        // Replace 10 with your N
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: nextId, content: action.payload, completed: false },
          ],
        };
      }
      return state;

    case toggleTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case setFilter:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
