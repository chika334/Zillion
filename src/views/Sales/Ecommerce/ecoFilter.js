import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import { Table, LinearProgress, CardContent, Tooltip } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { TextField, Card, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../../../css/ecommerce.css";
import { DateRangePicker } from "react-date-range";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';

export default function Filter() {
  const [values, setValues] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const handleClick = () => {
    setValues(true);
  };

  const handleClose = () => {
    setValues(false);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  console.log(anchorEl);

  return (
    <>
      <div
        className="pt-3 filterDetail"
        // className=""
        // style={{ position: "relative", left: "79%" }}
      >
        <span>
          <Popover
            id={id}
            open={values}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </Popover>
          <Button onClick={handleClick}>
            <DateRangeIcon />
          </Button>
          <AssessmentIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <ChatBubbleIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <SettingsIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <AppsIcon style={{ color: "#3c44b1", width: "50", height: "20" }} />
          <ViewCompactIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
        </span>
      </div>
      <div
        className="hrbodys"
        // style={{ position: "absolute", left: "53%" }}
      >
        <hr
          className="hrLines"
          // style={{ width: "500px" }} /
        />
      </div>
    </>
  );
}
