import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HmTable from "./HmTable.js";
import HmResult from "./HmResult.js";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Game Result</h3>
          <HmResult />
        </Grid>
        <Grid item xs={12}>
          <h3>Team Table</h3>
          <HmTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
