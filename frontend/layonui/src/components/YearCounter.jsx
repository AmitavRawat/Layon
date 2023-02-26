import React, { Component } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, Typography } from "@mui/material";

const YearCounter = (props) => {
  const { year, month, setYear, setMonth, inFuture, setInFuture, dark } = props;

  const getCurrentDate = () => {
    if (inFuture) {
      return year;
    } else {
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
    }
  };

  const handleIncrementDecrement = (increment) => {
    if (month != "Jan2023") {
      if (increment) {
        let newMonth = month.slice(0, 3) + (parseInt(year) + 1).toString();
        setMonth(newMonth);
        setYear((parseInt(year) + 1).toString());
      } else {
        let newMonth = month.slice(0, 3) + (year - 1);
        setMonth(newMonth);
        setYear(year - 1);
      }
    } else {
      if (increment) {
        setInFuture(true);
        setYear((parseInt(year) + 1).toString());
      } else {
        if (year != "2024") {
          // setInFuture(false);
          setYear((parseInt(year) - 1).toString());
        } else {
          setInFuture(false);
          setMonth("Jan2023");
          setYear(year - 1);
        }
      }
    }
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
        <RemoveCircleIcon
          style={{ color: dark ? "white" : null }}
          onClick={() => handleIncrementDecrement(false)}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography
          color={dark ? "white" : null}
          align="center"
        >{`${getCurrentDate()}`}</Typography>
      </Grid>
      <Grid item xs={2}>
        <AddCircleIcon
          style={{ color: dark ? "white" : null }}
          onClick={() => handleIncrementDecrement(true)}
        />
      </Grid>
    </Grid>
  );
};

export default YearCounter;
