export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  content?: string;
}

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_FILTER = "SET_FILTER";

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: content,
});
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});

export const Filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  CURRENT: "CURRENT",
};
