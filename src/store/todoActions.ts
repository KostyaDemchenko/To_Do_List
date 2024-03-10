// todoActions.ts

export const ADD_TODO = "addTodo";
export const TOGGLE_TODO = "toggleTodo";
export const SET_FILTER = "setFilter";

// Action to add a task
export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: content,
});

// Action to switch task state
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

// Action to set the filter
export const setFilter = (filter: Filters) => ({
  type: SET_FILTER,
  payload: filter,
});

// Filter definitions
export enum Filters {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  INCOMPLETE = "INCOMPLETE",
  CURRENT = "CURRENT",
}
