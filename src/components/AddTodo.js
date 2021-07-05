import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../js/Actions";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), text: text, isDone: false }));
  };
  return (
    <div className="add-todo-container">
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
