import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Result() {
  const [result, setresult] = useState([]);
  useEffect(() => {
    async function settable() {
      const json = await fetch("http://localhost:3002/Results");
      const data = await json.json();
      setresult(data);
    }
    settable();
  }, []);
  return (
    <div>
      {result.map((game) => (
        <h1 key={game.id}>
          winteam = {game.win}, loseteam = {game.lose}, {game.winscore}:
          {game.losescore}
        </h1>
      ))}
    </div>
  );
}

export default Result;
