import React, { useState,useEffect } from "react";
import { useRef } from "react";

function Creategame() {
  const [lwin,setlwin]=useState(0)
  function onsubmit(event) {
    event.preventDefault();

    async function geturl(){
      const res = await fetch(`http://localhost:3002/Teams/${winteam.current.value}`)
      const ress= await res.json()
      setlwin(ress.win)
    }
    geturl()
    fetch(`http://localhost:3002/Teams/${winteam.current.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        win: lwin+1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("update 완료");
      }
    });
  }
  const winteam = useRef(null); //useRef는 돔에접근할수 있게 해준다.
  const winscore = useRef(null);
  const loseteam = useRef(null);
  const losescore = useRef(null);
  return (
    
    <form onSubmit={onsubmit}>
      <div className="input_area">
        <label>win team</label>
        <input type="text" placeholder="C101" ref={winteam}></input>
      </div>
      <div className="input_area">
        <label>win score</label>
        <input type="text" placeholder="2" ref={winscore}></input>
      </div>
      <div className="input_area">
        <label>lose team</label>
        <input type="text" placeholder="C102" ref={loseteam}></input>
      </div>
      <div className="input_area">
        <label>lose score</label>
        <input type="text" placeholder="0" ref={losescore}></input>
      </div>
      <button>저장</button>
    </form>
  );
}

export default Creategame;
