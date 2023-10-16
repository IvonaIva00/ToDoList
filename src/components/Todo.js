import { useState, useEffect } from "react";

export default function Todo(props) {
  const [edit, setEdit] = useState(false);

  const todo = props.todo;
  function handleDelete() {
    props.remove(todo);
  }
  function handleStatusChange() {
    props.toggleChecked(todo);
  }
  function handleEdite() {
    setEdit(!edit);
  }

  return (
    <>
      <li className="todo">
        <p>
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={todo.checked}
          />
          <span>
            {todo.checked === true ? <del>{todo.title}</del> : todo.title}
          </span>
        </p>

        <div className="buttons">
          <button onClick={handleEdite}>edit</button>
          ))
          <button className="remove_button" onClick={handleDelete}>
            remove
          </button>
        </div>
      </li>
    </>
  );
}
