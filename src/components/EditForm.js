import React, { useState, useEffect, Fragment } from "react";
import Modal from "react-modal";
import { EditTodo } from "../js/Actions";
import { useDispatch } from "react-redux";

const EditForm = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [NewText, setNewText] = useState("");
  const dispatch = useDispatch();

  const toggle = () => setShow(!show);
  useEffect(() => {
    setNewText(todo.text);
  }, [show]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditTodo({ ...todo, text: NewText }));
    setNewText("");
    toggle();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Fragment>
      <button onClick={toggle}>Edit</button>
      <Modal isOpen={show} style={customStyles} onRequestClose={toggle}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={NewText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button onClick={toggle} type="reset">
            Cancel
          </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditForm;
