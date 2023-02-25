import { Grid } from "@mui/material";
import React, { Component, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";
import Map from "./components/Map";

const App = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <React.Fragment>
      {/* Grid to organize UI components */}
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Map
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid style={{ marginTop: "100" }} item xs={8}>
          {selectedState != null ? <Cities /> : null}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </React.Fragment>
  );
};

export default App;
