import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "./ExTable.js";
import BoxResult from "./BoxResult.js";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Game Result</h3>
          <BoxResult />
        </Grid>
        <Grid item xs={12}>
          <h3>Team Table</h3>
          <Table />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
