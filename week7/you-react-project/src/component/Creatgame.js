import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";

function Creategame() {
  const [winteam, setwinteam] = useState("");
  const [loseteam, setloseteam] = useState("");
  const [winscore, setwinscore] = useState(0);
  const [losescore, setlosescore] = useState(0);
  const [lwin, setlwin] = useState(0);
  const [llose, setllose] = useState(0);
  const [drawa, setdrawa] = useState(0);
  const [drawb, setdrawb] = useState(0);
  const [wpoint, setwpoint] = useState(0);
  const [lpoint, setlpoint] = useState(0);
  const [condition, setcondition] = useState(false);
  const [modalcondition, setmodalcondition] = useState(false);
  const [gameid, setgameid] = useState(0);
  const [wgame, setwgame] = useState(0);
  const [lgame, setlgame] = useState(0);
  const navigate = useNavigate();
  function winteamhandle(e) {
    setwinteam(e.target.value);
  }
  function loseteamhandle(e) {
    setloseteam(e.target.value);
  }
  function winscorehanle(e) {
    setwinscore(e.target.value);
  }
  function losescorehanle(e) {
    setlosescore(e.target.value);
  }

  function onsubmit(event) {
    event.preventDefault();
    async function getgamenum() {
      const gam = await fetch(`http://localhost:3002/Results`);
      const game = await gam.json();
      setgameid(game.length + 1);
    }
    async function getwin() {
      //win,lose 정보 설정
      const win = await fetch(`http://localhost:3002/Teams/${winteam}`);
      const winn = await win.json();
      setlwin(winn.win + 1);
      setdrawa(winn.draw);
      setwpoint((winn.win + 1) * 3 + winn.draw);
      setwgame(winn.win+1+winn.lose+winn.draw)
      const los = await fetch(`http://localhost:3002/Teams/${loseteam}`);
      const lose = await los.json();
      setllose(lose.lose + 1);
      setdrawb(lose.draw);
      setlpoint(lose.win * 3 + lose.draw);
      setlgame(lose.win+lose.lose+1+lose.draw)
    }
    async function getdraw() {
      //draw 정보 설정
      const res = await fetch(`http://localhost:3002/Teams/${winteam}`);
      const ress = await res.json();
      setlwin(ress.win);
      setdrawa(ress.draw + 1);
      setwpoint(ress.win * 3 + ress.draw + 1);
      setwgame(ress.win+ress.lose+ress.draw+1)
      const ab = await fetch(`http://localhost:3002/Teams/${loseteam}`);
      const abc = await ab.json();
      setllose(abc.lose);
      setdrawb(abc.draw + 1);
      setlpoint(ress.win * 3 + ress.draw + 1);
      setlgame(abc.win+abc.lose+abc.draw+1)
    }
    getgamenum();
    winscore === losescore ? getdraw() : getwin();
    setcondition(true);
  }
  function onclick(event) {
    //저장 할 시 win팀의 정보와 lose팀의 정보를 patch한다.
    event.preventDefault();
    fetch(`http://localhost:3002/Results/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: gameid,
        win: winteam,
        winscore: winscore,
        lose: loseteam,
        losescore: losescore,
      }),
    });
    fetch(`http://localhost:3002/Teams/${winteam}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game: wgame,
        win: lwin,
        draw: drawa,
        point: wpoint,
        gf : winscore,
        ga : losescore
      }),
    });
    fetch(`http://localhost:3002/Teams/${loseteam}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game: lgame,
        lose: llose,
        draw: drawb,
        point: lpoint,
        gf : losescore,
        ga : winscore
      }),
    }).then((res) => {
      if (res.ok) {
        alert("update 완료");
        navigate(-1);
      }
    });

    setcondition(false);
    setmodalcondition(false);
  }
  return (
    <div>
      <Button onClick={() => setmodalcondition(true)} variant="contained">경기 추가</Button>
      <Dialog open={modalcondition} onClose={() => setmodalcondition(false)}>
        <DialogTitle>경기 추가</DialogTitle>
        <DialogContent>
          <br />
          <TextField
            label="Win Team"
            input
            type="text"
            placeholder="C101"
            onChange={winteamhandle}
          ></TextField>
          <TextField
            label="Lose Team"
            input
            type="text"
            placeholder="C102"
            onChange={loseteamhandle}
          ></TextField>
          <br />
          <br />
          <TextField
            label="Win score"
            input
            type="text"
            placeholder="2"
            onChange={winscorehanle}
          ></TextField>
          <TextField
            label="Lose score"
            input
            type="text"
            placeholder="1"
            onChange={losescorehanle}
          ></TextField>
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={onsubmit}>추가</Button>
          {condition ? (
            <Button onClick={onclick}>저장하시겠습니까?</Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Creategame;
