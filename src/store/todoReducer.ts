// Import action types and Filters enum from todoActions file
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters } from "./todoActions";

// Define the shape of a Todo object
export interface Todo {
  id: number; // Unique identifier for the todo
  content: string; // Text content of the todo
  completed: boolean; // Indicates whether the todo is completed
}

// Define the TodoState interface with todos array and filter property
interface TodoState {
  todos: Todo[]; // Array of todos
  filter: Filters; // Filter for todos
}

// Define the initial state for the todoReducer
const initialState: TodoState = {
  todos: [], // Empty array of todos
  filter: Filters.ALL, // Default filter value
};

// Define the todoReducer function to handle todo-related actions
const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      // Add a new todo to the todos array
      const nextId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 0;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId, // Assign next available id
            content: action.payload, // Use action payload as todo content
            completed: false, // Set completed to false for new todo
          },
        ],
      };

    case TOGGLE_TODO:
      // Toggle the completed status of a specific todo
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case SET_FILTER:
      // Update the filter property with the new filter value
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state; // Return the current state for unknown actions
  }
};

export default todoReducer; // Export the todoReducer function as the default export
