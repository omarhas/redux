import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const filterState = useSelector((state) => state.filterTodo);
  const FilterTodos = (todolist, str) => {
    switch (str) {
      case "Done":
        return todolist.filter((todo) => todo.isDone === true);

      case "UnDone":
        return todolist.filter((todo) => todo.isDone === false);
      case "no-filter":
      default:
        return todolist;
    }
  };
  const todoListFiltered = FilterTodos(todoList, filterState);
  return (
    <div className="todo-list">
      {todoListFiltered.map((el, i) => (
        <TodoCard todo={el} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
