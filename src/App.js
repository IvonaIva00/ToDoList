import "./styles.css";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="App">
      <h1>Task management app</h1>
      <Todos />
    </div>
  );
}
