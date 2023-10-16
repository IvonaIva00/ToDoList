import { useState } from "react";
import { nanoid } from "nanoid";
export default function Todoform(props) {
  const [title, setTitle] = useState("");
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleShowInput = () => {};
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { title: title, id: nanoid() };
    props.addTodo(newTodo);
    setTitle("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div></div>

        <label>
          <input type="text" onChange={handleTitleChange} value={title} />
        </label>
        <button>Add</button>
        <button onClick={() => handleAdd()}>Add Task</button>
      </form>
    </>
  );
}
