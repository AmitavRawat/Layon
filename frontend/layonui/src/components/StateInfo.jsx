import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import StateCard from "./StateCard";

export default function StateInfo(props) {
  const { selectedState, data, month } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  React.useEffect(() => {
    if (selectedState != null) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedState]);

  const id = open ? "simple-popper" : undefined;

  let buttonEl = React.useRef(null);

  return (
    <div>
      <Popper
        className="popper-root"
        open={open}
        anchorEl={buttonEl}
        style={{
          position: "fixed",
          bottom: 375,
          right: 35,
          top: "unset",
          left: "unset",
        }}
      >
        <StateCard selectedState={selectedState} data={data} month={month} />
      </Popper>
      {/* <Popover
        classes={{ root: style.popover }}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 400 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        open={true}
        disableEnforceFocus={true}
      >
        The content of the Popover.
      </Popover> */}
    </div>
  );
}
