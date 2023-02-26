import { Grid } from "@mui/material";
import React, { Component, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";
import Map from "./components/Map";
import MapSlider from "./components/MapSlider";
import MyNavbar from "./components/MyNavbar";
import StateInfo from "./components/StateInfo";
import YearCounter from "./components/YearCounter";
import importedStateConfig from "./data/stateConfigData"; //temporary

const App = () => {
  const [selectedState, setSelectedState] = useState(null);

  //data that is loaded containing the dataset data
  const [data, setData] = useState(null);

  //current month
  const [month, setMonth] = useState("Jan2018");

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
      <header>
        <MyNavbar />
      </header>
      {/* Grid to organize UI components */}
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ backgroundColor: "#282C34" }}
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
          <YearCounter
            month={month}
            year={year}
            setYear={setYear}
            setMonth={setMonth}
          />
          <StateInfo selectedState={selectedState} data={data} month={month} />
        </Grid>
        <Grid item xs={2} />
        <Grid style={{ marginTop: "100" }} item xs={8}>
          {selectedState != null && currentCities.length != 0 ? (
            <Cities
              currentCities={currentCities}
              selectedState={selectedState}
            />
          ) : (
            "No Data to Display!"
          )}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </React.Fragment>
  );
};

export default App;
