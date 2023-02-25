import React, { Component, useState, useEffect } from "react";
import "../App.css";
import USAMap from "react-usa-map";
import importedStateConfig from "../data/stateConfigData"; //temporary
import importedStateData from "../data/data"; //actual data beinig used

const Map = () => {
  //data that is loaded containing the dataset data
  const [data, setData] = useState(null);

  //current month
  const [month, setMonth] = useState("Feb2020");

  //currently selected state
  const [selectedState, setSelectedState] = useState(null);

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

  //this function returns a hexadecimal value for the map based on the intensity
  const getRedHexValue = (number, range) => {};

  const mapHandler = (event) => {
    // console.log(event.target.dataset.name);
    var statesConfigLocal = JSON.parse(JSON.stringify(statesConfig));

    //changes the color of the current selected state back to the original color
    if (selectedState != null) {
      console.log(statesConfigLocal[selectedState].backupFill);
      statesConfigLocal[selectedState].fill =
        statesConfigLocal[selectedState].backupFill;
    }

    //changing the color of the selected state on the map
    if (statesConfigLocal[event.target.dataset.name] == null) {
      statesConfigLocal[event.target.dataset.name] = {
        backupFill: "#D3D3D3",
        fill: "navy",
      };
    } else {
      statesConfigLocal[event.target.dataset.name].fill = "navy";
    }

    setSelectedState(event.target.dataset.name);

    // for (const [key, value] of Object.entries(statesConfigLocal)) {
    //   if (key == event.target.dataset.name) {
    // }

    //sets the stateConfigLocal back to the state with updated values
    setStatesConfig({ ...statesConfigLocal });
  };

  //useEffect hook that runs on initial load
  useEffect(() => {
    console.log(importedStateData);
    setData(importedStateData); //sets the data after loading it
  }, []);

  //useEffect hook to change statesConfig based on data
  useEffect(() => {
    if (data != null && statesConfig != null) {
      let statesConfigLocal = JSON.parse(JSON.stringify(statesConfig));

      let dataSubset = data[month];
      console.log(importedStateData);

      //keep track of min & max layoff values to generate the map shading range
      let range = { min: Number.MAX_SAFE_INTEGER, max: -1 };

      for (const [key, value] of Object.entries(statesConfigLocal)) {
        if (dataSubset != null && dataSubset[key] != null) {
          statesConfigLocal[key]["layoffs"] = dataSubset[key]["layoffs"];
          if (dataSubset[key]["layoffs"] < range.min) {
            //setting min and max values
            range.min = dataSubset[key]["layoffs"];
          }
          if (dataSubset[key]["layoffs"] > range.max) {
            range.max = dataSubset[key]["layoffs"];
          }
        } else if (dataSubset[key] == null) {
          statesConfigLocal[key]["layoffs"] = 0;
        }
      }

      for (const [key, value] of Object.entries(statesConfigLocal)) {
        if (statesConfigLocal[key] != null) {
          statesConfigLocal[key]["fill"] = getRedHexValue(
            statesConfigLocal[key]["layoffs"],
            range
          );
        }
      }

      setStatesConfig({ ...statesConfigLocal });
    }
  }, [data]);

  console.log(statesConfig);

  return <USAMap customize={statesConfig} onClick={mapHandler} />;
};

export default Map;
