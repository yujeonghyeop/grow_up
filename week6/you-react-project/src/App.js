import { useEffect, useState } from "react";
function Hello(){
  useEffect(()=>{console.log("HI :)"); return ()=> console.log("Bye :(") },[])
  return <h1>Hello</h1>
}
function App() {
  const [show, showing] =useState(false)
  const onclick = () => {
    showing((prev)=>!prev)
  }
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick = {onclick}>{show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
 