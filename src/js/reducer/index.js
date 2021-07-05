import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
} from "../constantes";
const initialState = {
  todoList: [
    { id: 0, text: "learn react", isDone: false },
    { id: 1, text: "learn redux", isDone: false },
  ],
  filterTodo: "no-filter",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((el) => el.id !== payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((el) =>
          el.id === payload.id ? { ...el, text: payload.text } : el
        ),
      };
    case FILTER_TODO:
      return {
        ...state,
        filterTodo: payload,
      };
    default:
      return state;
  }
};
