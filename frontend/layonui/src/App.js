import { Grid } from "@mui/material";
import React, { Component, useState } from "react";
import "./App.css";
import Map from "./components/Map";

const App = () => {
  return (
    <React.Fragment>
      {/* Grid to organize UI components */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Map />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
