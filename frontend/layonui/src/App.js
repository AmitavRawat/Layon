import { Grid, Typography } from "@mui/material";
import React, { Component, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";
import Map from "./components/Map";
import MapSlider from "./components/MapSlider";
import MyNavbar from "./components/MyNavbar";
import StateInfo from "./components/StateInfo";
import ThemeSwitch from "./components/ThemeSwitch";
import YearCounter from "./components/YearCounter";
import importedStateConfig from "./data/stateConfigData"; //temporary

const App = () => {
  //current highlighted state
  const [selectedState, setSelectedState] = useState(null);

  //dark theme true or false
  const [dark, setDark] = useState(false);

  //data that is loaded containing the dataset data
  const [data, setData] = useState(null);

  //checks if we are currently displaying future data
  const [inFuture, setInFuture] = useState(false);

  //current month
  const [month, setMonth] = useState("Jan2018");

  //current year
  const [year, setYear] = useState("2018");

  //predicted data
  const [predictedData, setPredictedData] = useState(null);

  //total layoffs for easier rendering
  const [totalLayoffs, setTotalLayoffs] = useState(0);

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

  //returns bg color
  const getBackgroundColor = () => {
    if (dark) {
      return "#282C34";
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <Grid
        style={{ backgroundColor: getBackgroundColor() }}
        container
        direction="row"
      >
        <Grid item>
          <MyNavbar dark={dark} getBackgroundColor={getBackgroundColor} />
        </Grid>
        <Grid item style={{ marginLeft: 1100, marginTop: 20 }}>
          <ThemeSwitch dark={dark} setDark={setDark} />
        </Grid>
      </Grid>
      {/* Grid to organize UI components */}
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: getBackgroundColor() }}
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
            predictedData={predictedData}
            setPredictedData={setPredictedData}
            inFuture={inFuture}
          />
        </Grid>

        <Grid item xs={8}>
          <MapSlider year={year} setMonth={setMonth} />
          <YearCounter
            month={month}
            year={year}
            setYear={setYear}
            setMonth={setMonth}
            inFuture={inFuture}
            setInFuture={setInFuture}
            dark={dark}
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
            <Typography color={dark ? "white" : null}>
              "No Data to Display!"
            </Typography>
          )}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </React.Fragment>
  );
};

export default App;
