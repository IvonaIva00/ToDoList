import Todo from "./Todo";
import Todoform from "./TodoForm";
import { useState } from "react";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  }
  function removeTodo(track) {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id !== track.id;
    });
    setTodos(updatedTodos);
  }
  function toggleChecked(track) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === track.id) {
        todo.checked = !todo.checked;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggleChecked={toggleChecked}
          />
        ))}
      </ul>
      <Todoform addTodo={addTodo} />
    </>
  );
}
