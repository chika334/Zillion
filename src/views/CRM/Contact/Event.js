import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MessageIcon from "@material-ui/icons/Message";
import meeting from "../../../css/images/meetings.png";
import conference from "../../../css/images/conference.png";
import { SiGmail } from "react-icons/si";
import prfile from "../../../css/images/prfile.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Event() {
  const classes = useStyles();
  return (
    <div>
      <div className="mt-3">
        <label style={{ float: "left" }}>Task Type</label>
        <div>
          <PhoneIcon style={{ float: "left" }} className="ml-3" width="30" />
          <MessageIcon style={{ float: "left" }} className="ml-3" />
          <img
            style={{ float: "left" }}
            className="ml-3"
            src={meeting}
            width="38"
          />
          <img
            style={{ float: "left" }}
            className="ml-3"
            src={conference}
            width="27"
          />
          <SiGmail className="ml-3" style={{ float: "left" }} />
          <img
            style={{ float: "left" }}
            className="ml-3"
            src={prfile}
            width="30"
          />
          <AddCircleIcon style={{ float: "left" }} className="ml-3" />
        </div>
      </div>
      <br />
      <div className="mt-3">
        <label style={{ float: "left" }} className="mt-4 mr-3">
          Task Name:
        </label>
        <TextField style={{ width: "70%" }} label="Standard" />
      </div>
      <div>
        <label style={{ float: "left" }} className="mt-3 mr-3">
          Due Date
        </label>
        <div className="mt-0 mr-4" style={{ float: "left" }}>
          <TextField
            id="date"
            label="Birthday hello"
            type="date"
            defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="mt-3">
          
          <TextField
            // id="date"
            label="Birthday"
            type="text"
            defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className="mt-3">
        <label style={{ float: "left" }} className="mt-4 mr-3">
          Priority:
        </label>
        <TextField style={{ width: "70%" }} label="Standard" />
      </div>
      <div className="mt-3">
        <label style={{ float: "left" }} className="mt-4 mr-3">
          Visibility:
        </label>
        <TextField style={{ width: "70%" }} label="Standard" />
      </div>
      <div className="mt-3">
        <label style={{ float: "left" }} className="mt-4 mr-3">
          Availablity:
        </label>
        <TextField style={{ width: "70%" }} label="Standard" />
      </div>
      <div className="mt-3">
        <label style={{ float: "left" }} className="mt-4 mr-3">
          Leads:
        </label>
        <TextField style={{ width: "70%" }} label="Standard" />
      </div>
    </div>
  );
}
