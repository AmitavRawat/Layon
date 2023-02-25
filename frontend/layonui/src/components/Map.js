import React, { Component, useState, useEffect } from "react";
import "../App.css";
import USAMap from "react-usa-map";
import stateData from "../data/data";

const Map = () => {
  //data that is loaded containing the dataset data
  const [data, setData] = useState(null);

  //current month
  const [month, setMonth] = useState("Feb20");

  const [statesConfig, setStatesConfig] = useState({
    NJ: {
      backupFill: "navy",
      fill: "navy",
      clickHandler: (event) =>
        console.log("Custom handler for NJ", event.target.dataset),
    },
    NY: {
      backupFill: "#CC0000",
      fill: "#CC0000",
    },
  });

  const mapHandler = (event) => {
    // console.log(event.target.dataset.name);
    var statesConfigLocal = JSON.parse(JSON.stringify(statesConfig));

    //changing the color of the selected state on the map

    //

    // for (const [key, value] of Object.entries(statesConfigLocal)) {
    //   if (key == event.target.dataset.name) {
    // }

    setStatesConfig({ ...statesConfigLocal });
  };

  //useEffect hook that runs on initial load
  useEffect(() => {
    console.log(stateData);
    setData(stateData); //sets the data after loading it
  }, []);

  //useEffect hook to change statesConfig based on data
  useEffect(() => {}, [data]);

  return <USAMap customize={statesConfig} onClick={mapHandler} />;
};

export default Map;
