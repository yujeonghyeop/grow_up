import React, { useState, useEffect } from "react";
import { useRef } from "react";

function Creategame() {
  const [lwin, setlwin] = useState(0);
  const [llose,setllose] = useState(0);
  const [ldraw,setldraw] = useState(0);
  const [lwinscore,setlwinscore] = useState(0);
  const [llosescore,setllosescore] = useState(0);
  const [condition,setcondition] = useState(false)

  function onsubmit(event) {
    event.preventDefault();
    async function getwin() {   //win팀의 정보 설정
      const res = await fetch(
        `http://localhost:3002/Teams/${winteam.current.value}`
      );
      const ress = await res.json();
      setlwin(ress.win);
      
    }
    async function getlose() {    //lose팀의 정보 설정
      const res = await fetch(
        `http://localhost:3002/Teams/${loseteam.current.value}`
      );
      const ress = await res.json();
      setllose(ress.lose);
    }
    getwin();
    getlose();
  }
  function onclick(event){    //저장 할 시 win팀의 정보와 lose팀의 정보를 patch한다. 
    event.preventDefault()
    fetch(`http://localhost:3002/Teams/${winteam.current.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        win: lwin + 1,
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
  console.log(lwin);
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
      <button onClick={onclick}>저장하시겠습니까?</button>
    </form>
  );
}

export default Creategame;
