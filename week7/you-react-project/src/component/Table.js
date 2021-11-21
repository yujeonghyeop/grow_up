import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Dormtable() {
  const [dorm, Setdorm] = useState([]);
  let i = 1;
  useEffect(() => {
    async function settable() {
      const json = await fetch("http://localhost:3002/Teams");
      const data = await json.json();
      data.sort(function (a, b) {
        return a.point - b.point;
      });
      Setdorm(data.reverse());
    }
    settable();
  }, []);
  function plus() {
    i = i + 1;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Num</TableCell>
            <TableCell align="center">Team name</TableCell>
            <TableCell align="center">Win</TableCell>
            <TableCell align="center">Draw</TableCell>
            <TableCell align="center">Lose</TableCell>
            <TableCell align="center">Point</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dorm.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{i}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.win}</TableCell>
              <TableCell align="center">{row.draw}</TableCell>
              <TableCell align="center">{row.lose}</TableCell>
              <TableCell align="center">{row.point}</TableCell>
              {plus()}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dormtable;
