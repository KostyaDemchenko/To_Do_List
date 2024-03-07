// todoActions.ts

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

// Действие для добавления задачи
export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: content,
});

// Действие для переключения состояния задачи
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

// Действие для установки фильтра
export const setFilter = (filter: Filters) => ({
  type: SET_FILTER,
  payload: filter,
});

// Определения фильтров...
export enum Filters {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  INCOMPLETE = "INCOMPLETE",
  CURRENT = "CURRENT",
}
