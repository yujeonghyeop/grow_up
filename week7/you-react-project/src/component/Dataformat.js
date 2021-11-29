import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

function Dataformat() {
  const dorm = ["C101", "C102", "C103", "C104"];
  const [gamenum, setgamenum] = useState(0);
  const navigate = useNavigate();
  async function setleng() {
    const gam = await fetch(`http://localhost:3002/Results`);
    const game = await gam.json();
    setgamenum(game.length);
  }
  setleng();
  function onclick() {
    function tableformat() {
      for (let i = 0; i < dorm.length; i++) {
        fetch(`http://localhost:3002/Teams/${dorm[i]}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            game: 0,
            win: 0,
            lose: 0,
            draw: 0,
            point: 0,
          }),
        });
      }
      for (let i = 1; i < gamenum + 1; i++) {
        fetch(`http://localhost:3002/Results/${i}`, {
          method: "DELETE",
        });
      }
    }
    if (window.confirm("데이터를 포맷하시겠습니까?")) {
      tableformat();
      alert("format이 완료되었습니다.");
      navigate(-2);
    }
  }
  return (
    <div>
      <Button onClick={onclick} variant="contained" color="error">
        Data Format
      </Button>
    </div>
  );
}

export default Dataformat;
