import React, { useState } from "react";
import { useRef } from "react";

function Creategame() {
  const [lwin, setlwin] = useState(0);
  const [llose, setllose] = useState(0);
  const [drawa, setdrawa] = useState(0);
  const [drawb, setdrawb] = useState(0);
  const [wpoint, setwpoint] = useState(0);
  const [lpoint, setlpoint] = useState(0);
  const [condition, setcondition] = useState(false);

  function onsubmit(event) {
    event.preventDefault();
    async function getwin() {
      //win,lose 정보 설정
      const win = await fetch(
        `http://localhost:3002/Teams/${winteam.current.value}`
      );
      const winn = await win.json();
      setlwin(winn.win + 1);
      setdrawa(winn.draw);
      setwpoint((winn.win + 1) * 3 + winn.draw);
      const los = await fetch(
        `http://localhost:3002/Teams/${loseteam.current.value}`
      );
      const lose = await los.json();
      setllose(lose.lose + 1);
      setdrawb(lose.draw);
      setlpoint(lose.win * 3 + lose.draw);
    }
    async function getdraw() {
      //draw 정보 설정
      const res = await fetch(
        `http://localhost:3002/Teams/${winteam.current.value}`
      );
      const ress = await res.json();
      setlwin(ress.win);
      setdrawa(ress.draw + 1);
      setwpoint(ress.win * 3 + ress.draw + 1);

      const ab = await fetch(
        `http://localhost:3002/Teams/${loseteam.current.value}`
      );
      const abc = await ab.json();
      setllose(abc.lose);
      setdrawb(abc.draw + 1);
      setlpoint(ress.win * 3 + ress.draw + 1);
    }
    winscore.current.value === losescore.current.value ? getdraw() : getwin();
    setcondition(true);
  }
  function onclick(event) {
    //저장 할 시 win팀의 정보와 lose팀의 정보를 patch한다.
    event.preventDefault();
    fetch(`http://localhost:3002/Teams/${winteam.current.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        win: lwin,
        draw: drawa,
        point: wpoint,
      }),
    });
    fetch(`http://localhost:3002/Teams/${loseteam.current.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lose: llose,
        draw: drawb,
        point: lpoint,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("update 완료");
      }
    });
    setcondition(false);
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
      {condition ? <button onClick={onclick}>저장하시겠습니까?</button> : null}
    </form>
  );
}

export default Creategame;
