// types.ts

// Тип для представления одной задачи
export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// Тип для состояния списка задач
export interface TodoState {
  todos: Todo[];
  filter: Filters;
}

// Перечисление для фильтров списка задач
export enum Filters {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  INCOMPLETE = "INCOMPLETE",
  // Если вам нужен фильтр CURRENT, добавьте его здесь
  CURRENT = "CURRENT",
}
