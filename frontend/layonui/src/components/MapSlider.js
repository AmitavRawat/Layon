import { Box, Slider } from "@mui/material";
import React, { Component } from "react";

const MapSlider = (props) => {
  const { year, setMonth } = props;

  function valuetext(value) {
    return value;
  }

  const handleSliderChange = (val) => {
    if (val == 1) {
      setMonth("Jan" + year);
    } else if (val == 2) {
      setMonth("Feb" + year);
    } else if (val == 3) {
      setMonth("Mar" + year);
    } else if (val == 4) {
      setMonth("Apr" + year);
    } else if (val == 5) {
      setMonth("May" + year);
    } else if (val == 6) {
      setMonth("Jun" + year);
    } else if (val == 7) {
      setMonth("Jul" + year);
    } else if (val == 8) {
      setMonth("Aug" + year);
    } else if (val == 9) {
      setMonth("Sep" + year);
    } else if (val == 10) {
      setMonth("Oct" + year);
    } else if (val == 11) {
      setMonth("Nov" + year);
    } else if (val == 12) {
      setMonth("Dec" + year);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Month"
        defaultValue={1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={1}
        marks
        min={1}
        max={12}
        onChange={(event) => handleSliderChange(event.target.value)}
        color="warning"
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
  );
};

export default MapSlider;
