import React from "react";
import { FilterTask } from "../js/Actions";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(FilterTask(e.target.value));
  };
  return (
    <form>
      <label>No Filter</label>
      <input type="radio" name="cc" value="no-filter" onChange={handleChange} />
      <label>Task Done</label>
      <input type="radio" name="cc" value="Done" onChange={handleChange} />
      <label>Task Not Done</label>
      <input type="radio" name="cc" value="UnDone" onChange={handleChange} />
    </form>
  );
};

export default Filter;
