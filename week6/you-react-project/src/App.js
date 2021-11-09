import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onchange = (event) => setTodo(event.target.value);
  const onsubmit = (event) => {
    event.preventDefault();
    console.log(todo);
    if (todo === "") {
      return;
    }
    setTodos((currentarray) => [todo, ...currentarray]); //...array 는 array안에 있는 요소들을 다 출력하게 해준다.
    setTodo("");
  };
  return (
    <div>
      <h1>My To Do ({todos.length})</h1>
      <form onSubmit={onsubmit}>
        <input
          onChange={onchange}
          value={todo}
          type="text"
          placeholder="write your todo"
        ></input>
        <button>add todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
