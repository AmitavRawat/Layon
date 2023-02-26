import React, { Component, useState, useEffect } from "react";
import "../App.css";
import USAMap from "react-usa-map";
import importedStateData from "../data/data"; //actual data beinig used

const Map = (props) => {
  const {
    selectedState,
    setSelectedState,
    data,
    setData,
    month,
    setMonth,
    statesConfig,
    setStatesConfig,
    currentCities,
    setCurrentCities,
    year,
  } = props;

  //this function returns a hexadecimal value for the map based on the intensity
  function getColor(value, range) {
    const colors = [
      { r: 255, g: 229, b: 217 }, // color 1
      { r: 217, g: 75, b: 44 }, // color 2
      { r: 222, g: 44, b: 38 }, // color 3
      { r: 166, g: 15, b: 20 }, // red
    ];
    let idx1 = Math.floor(
      ((value - range.min) / (range.max - range.min)) * (colors.length - 1)
    );
    let idx2 = Math.ceil(
      ((value - range.min) / (range.max - range.min)) * (colors.length - 1)
    );

    if (idx1 < 0) {
      idx1 = 0;
    }
    if (idx2 < 0) {
      idx2 = 0;
    }

    console.log(idx1, idx2);
    const color1 = colors[idx1];
    const color2 = colors[idx2];
    const factor =
      ((value - range.min) / (range.max - range.min)) * (colors.length - 1) -
      idx1;
    const r = Math.round(color1.r + factor * (color2.r - color1.r));
    const g = Math.round(color1.g + factor * (color2.g - color1.g));
    const b = Math.round(color1.b + factor * (color2.b - color1.b));
    return `rgb(${r},${g},${b})`;
  }

  const mapHandler = (event) => {
    // console.log(event.target.dataset.name);
    let stateName = event.target.dataset.name;
    var statesConfigLocal = JSON.parse(JSON.stringify(statesConfig));

    if (selectedState == stateName) {
      setSelectedState(null);
      statesConfigLocal[stateName]["fill"] =
        statesConfigLocal[stateName]["backupFill"];
      setCurrentCities([]);
    } else {
      //changes the color of the current selected state back to the original color
      if (selectedState != null) {
        console.log(statesConfigLocal[selectedState].backupFill);
        statesConfigLocal[selectedState].fill =
          statesConfigLocal[selectedState].backupFill;
      }

      //changing the color of the selected state on the map
      if (statesConfigLocal[stateName] == null) {
        statesConfigLocal[stateName] = {
          backupFill: "#FFE5D9",
          fill: "#36b3c2",
        };
      } else {
        statesConfigLocal[stateName].fill = "#36b3c2";
      }

      setSelectedState(stateName);

      //now setting the selected cities based on the currently selected state
      if (data != null && data[month][stateName] != null) {
        setCurrentCities(data[month][stateName]["cities"]);
      }
    }

    // for (const [key, value] of Object.entries(statesConfigLocal)) {
    //   if (key == stateName) {
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

      for (const [key, value] of Object.entries(statesConfigLocal)) {
        if (dataSubset != null && dataSubset[key] != null) {
          statesConfigLocal[key]["layoffs"] = dataSubset[key]["layoffs"];
          // if (dataSubset[key]["layoffs"] < range.min) {
          //   //setting min and max values
          //   range.min = dataSubset[key]["layoffs"];
          // }
          // if (dataSubset[key]["layoffs"] > range.max) {
          //   range.max = dataSubset[key]["layoffs"];
          // }
        } else if (dataSubset[key] == null) {
          statesConfigLocal[key]["layoffs"] = 0;
        }
      }

      //keep track of min & max layoff values to generate the map shading range
      let range = { min: Number.MAX_SAFE_INTEGER, max: -1 };

      //looping through the dataset for the whole year to find the max and min values
      for (let i = 0; i < 12; i++) {
        let month = "Jan";
        if (i == 1) {
          month = "Feb";
        } else if (i == 2) {
          month = "Mar";
        } else if (i == 3) {
          month = "Apr";
        } else if (i == 4) {
          month = "May";
        } else if (i == 5) {
          month = "Jun";
        } else if (i == 6) {
          month = "Jul";
        } else if (i == 7) {
          month = "Aug";
        } else if (i == 8) {
          month = "Sep";
        } else if (i == 9) {
          month = "Oct";
        } else if (i == 10) {
          month = "Nov";
        } else if (i == 11) {
          month = "Dec";
        }

        month += year;

        if (data[month] != null) {
          for (const [key, value] of Object.entries(data[month])) {
            if (data[month][key] != null) {
              if (data[month][key]["layoffs"] < range.min) {
                range.min = data[month][key]["layoffs"];
              }
              if (data[month][key]["layoffs"] > range.max) {
                range.max = data[month][key]["layoffs"];
              }
            }
          }
        }
      }

      //sets the color for the state based on the number of layoffs relative to the whole year
      for (const [key, value] of Object.entries(statesConfigLocal)) {
        if (statesConfigLocal[key] != null) {
          statesConfigLocal[key]["fill"] = getColor(
            statesConfigLocal[key]["layoffs"],
            range
          );
          statesConfigLocal[key]["backupFill"] = getColor(
            statesConfigLocal[key]["layoffs"],
            range
          );
        }
      }

      setStatesConfig({ ...statesConfigLocal });
    }
  }, [data, month]);

  console.log(statesConfig);

  return <USAMap customize={statesConfig} onClick={mapHandler} />;
};

export default Map;
