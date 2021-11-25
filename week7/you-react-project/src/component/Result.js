import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Match</TableCell>
            <TableCell align="right">Win Team</TableCell>
            <TableCell align="right">Win Score</TableCell>
            <TableCell align="left">Lose Score</TableCell>
            <TableCell align="left">Lose Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((game) => (
            <TableRow
              key={game.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">Match{game.id}</TableCell>
              <TableCell align="right">{game.win}</TableCell>
              <TableCell align="right">{game.winscore}</TableCell>
              <TableCell align="left">{game.losescore}</TableCell>
              <TableCell align="left">{game.lose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Result;
