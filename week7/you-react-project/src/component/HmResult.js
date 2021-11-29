import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HmResult() {
  const [result, setresult] = useState([]);
  useEffect(() => {
    async function settable() {
      const json = await fetch("http://localhost:3002/Results");
      const data = await json.json();
      setresult(data.slice(-6));
    }
    settable();
  }, []);
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={6}
      >
        {result.map((game) => (
          <Item>
            <div>
              <h6>Match{game.id}</h6>
              <h3>
                {game.win} vs {game.lose}
              </h3>
              <h4>
                {game.winscore} : {game.losescore}
              </h4>
            </div>
          </Item>
        ))}
      </Stack>
    </div>
  );
}

export default HmResult;
