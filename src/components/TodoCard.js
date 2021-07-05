import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, CompleteTodo, EditTodo } from "../js/Actions";
import EditForm from "../components/EditForm";
const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-card">
      <p
        style={
          todo.isDone ? { textDecoration: "line-through", opacity: "0.2" } : {}
        }
      >
        {todo.text}
      </p>
      <button onClick={() => dispatch(CompleteTodo(todo.id))}>
        {todo.isDone ? "Done" : "Undone"}
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
      <EditForm todo={todo} />
    </div>
  );
};

export default TodoCard;
