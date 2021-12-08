import "./App.css"
import { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setList([...list, toDo]);
    setToDo("");
    
  }
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onClick = (event) => {
  }
  return (
    <div>
      <h1>Your To Do!</h1>
      <form onSubmit = {onSubmit}>
        <input value = {toDo} onChange = {onChange} type = "text" placeholder = "Write your To Do"></input>
        <button className = "button" onClick = {onClick}>Save To Do</button>
      </form>
      <hr />
        <ul>
          {list.map((todo, index) => <li key = {index}>{todo}</li>)}
        </ul>
    </div>
  );
}

export default App;
