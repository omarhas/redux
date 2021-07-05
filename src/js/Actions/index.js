import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
} from "../constantes";
export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const CompleteTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});
export const EditTodo = (newTodo) => ({
  type: EDIT_TODO,
  payload: newTodo,
});
export const FilterTask = (str) => ({
  type: FILTER_TODO,
  payload: str,
});
