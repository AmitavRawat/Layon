import React, { Component } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, Typography } from "@mui/material";

const YearCounter = (props) => {
  const { year, month, data } = props;

  const getCurrentDate = () => {
    let monthLocal = month.slice(0, 3);
    let fullMonth = null;
    if (monthLocal == "Jan") {
      fullMonth = "January";
    } else if (monthLocal == "Feb") {
      fullMonth = "February";
    } else if (monthLocal == "Mar") {
      fullMonth = "March";
    } else if (monthLocal == "Apr") {
      fullMonth = "April";
    } else if (monthLocal == "May") {
      fullMonth = "May";
    } else if (monthLocal == "Jun") {
      fullMonth = "June";
    } else if (monthLocal == "Jul") {
      fullMonth = "July";
    } else if (monthLocal == "Aug") {
      fullMonth = "August";
    } else if (monthLocal == "Sep") {
      fullMonth = "September";
    } else if (monthLocal == "Oct") {
      fullMonth = "October";
    } else if (monthLocal == "Nov") {
      fullMonth = "November";
    } else if (monthLocal == "Dec") {
      fullMonth = "December";
    }

    let stringToDisplay = fullMonth + " " + year;
    return stringToDisplay;
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={2}>
        <RemoveCircleIcon />
      </Grid>
      <Grid item xs={8}>
        <Typography></Typography>
      </Grid>
      <Grid item xs={2}>
        <AddCircleIcon />
      </Grid>
    </Grid>
  );
};

export default YearCounter;
