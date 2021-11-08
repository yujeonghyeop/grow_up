import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const minus = () => {
    setValue((prev)=>prev+1)
  }
  const onchange = (event) =>{
    setKeyword(event.target.value)
  }
  useEffect(()=>{console.log("counter Change")},[counter])
  useEffect(() => {console.log("input change!")},[keyword])
  return (
    <div>
      <input value ={keyword} onChange={onchange} type ="text" placeholder ="go input" />
      <h1>{counter}</h1>
      <button onClick={minus}>click</button>
    </div>
  );
}

export default App;
 