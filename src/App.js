import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;
