import { Grid } from "@mui/material";
import React, { Component, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";
import Map from "./components/Map";
import MapSlider from "./components/MapSlider";
import YearDropdown from "./components/YearDropdown";
import importedStateConfig from "./data/stateConfigData"; //temporary

const App = () => {
  const [selectedState, setSelectedState] = useState(null);

  //data that is loaded containing the dataset data
  const [data, setData] = useState(null);

  //current month
  const [month, setMonth] = useState("Feb2020");

  //current year
  const [year, setYear] = useState("2018");

  //currently selected state
  const [statesConfig, setStatesConfig] = useState({
    ...importedStateConfig,
    // NJ: {
    //   backupFill: "navy",
    //   fill: "navy",
    //   //   clickHandler: (event) =>
    //   // console.log("Custom handler for NJ", event.target.dataset),
    // },
    // NY: {
    //   backupFill: "#CC0000",
    //   fill: "#CC0000",
    // },
  });

  //cities to be displayed
  const [currentCities, setCurrentCities] = useState([]);
  console.log(currentCities);

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
            data={data}
            setData={setData}
            month={month}
            setMonth={setMonth}
            statesConfig={statesConfig}
            setStatesConfig={setStatesConfig}
            currentCities={currentCities}
            setCurrentCities={setCurrentCities}
            year={year}
          />
        </Grid>

        <Grid item xs={8}>
          <MapSlider year={year} setMonth={setMonth} />
        </Grid>
        <Grid item xs={2} />
        <Grid style={{ marginTop: "100" }} item xs={8}>
          {selectedState != null ? (
            <Cities currentCities={currentCities} />
          ) : null}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </React.Fragment>
  );
};

export default App;
