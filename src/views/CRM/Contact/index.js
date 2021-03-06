import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, useHistory } from "react-router-dom";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import NameandSearchInput from "../../NameandSearchInput";
import Filter from "../../filter";
import SearchInput from "../SearchInput";
import ContactTable from "./ContactTable";
import Task from "./Task";
import Activities from "./Activities";
import Event from "./Event";
import tasks from "../../../css/images/task.png";
import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";
import TaskModal from "../TaskModal/TaskModal";
import PhoneActivity from "../TaskModal/PhoneActivity";
// import { Calendar } from "@material-ui/pickers";
import Calendar from "./Calendar";

export const data = {
  propertyData: [
    "name",
    "code ",
    "quantity",
    "status",
    "MOQ",
    "price",
    "Revenue",
  ],
};

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function CreateNewTable() {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openPop, setOpenPop] = React.useState(false);
  const [task, setTask] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [values, setValues] = useState(false);
  const [secondPop, setSecondPop] = useState(false);
  const [newTasks, setNewTasks] = useState(false);
  const [newActivites, setNewActivities] = useState(false);
  const [calendar, setCalendar] = useState(false);

  const handleClick = () => {
    setValues(true);
  };

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };

  const handleSelectClick = (e) => {
    setValue(e.target.value);
  };

  const arrayOfValues = [
    "Prospect Name",
    "Prospect Type",
    "Company",
    "Product of Interest",
    "Expected Revenue",
    "Leads Type",
    "probability",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleTask = () => {
    setTask(true);
  };

  const handleCloseTask = () => {
    setTask(false);
  };

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const popupStates = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const handleNewActivites = () => {
    setTask(false);
    setOpenPop(false);
    setSecondPop(true);
  };

  const handleNewActivitesClose = () => {
    setSecondPop(false);
  };

  const handleActivites = () => {
    setTask(false);
    setOpenPop(true);
  };

  const handlePopClose = () => {
    setOpenPop(false);
  };

  const handleDone = () => {
    setSecondPop(false);
    setOpenPop(true);
  };

  const newTask = () => {
    setTask(false);
    setNewTasks(true);
  };

  const handleActivities = () => {
    setOpenPop(false);
    setNewActivities(true);
  };

  const handleCalendar = () => {
    setCalendar(false);
  };

  const activites = () => {
    setOpenPop(true);
  };

  const calendarsDisplay = () => {
    setCalendar(true);
  };

  return (
    <div className="property-area pt-5">
      <div className="container">
        <div>
          <span onClick={history.goBack}>
            <FontAwesomeIcon
              style={{ color: "#3c44b1", width: "50", height: "30" }}
              icon={["fas", "arrow-circle-left"]}
            />
          </span>
          <br />
          <div
            style={{ display: "flex", alignContent: "space-between" }}
            className="box mt-4"
          >
            <div style={{ float: "left" }}>
              <Typography variant="h5" noWrap>
                <b style={{ color: "#3c44b1" }}>Contacting</b>
              </Typography>
            </div>
            <div className="box overlay" style={{ marginLeft: "250px" }}>
              <SearchInput />
            </div>
          </div>
          {/* <NameandSearchInput /> */}
          <div>
            <div>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                style={{ width: "20%" }}
              >
                Create New
              </Button>
              <div id="containershow">
                <div
                  onClick={handleTask}
                  style={{ cursor: "pointer" }}
                  id="left"
                >
                  300 Tasks
                </div>
                <div
                  onClick={activites}
                  style={{ cursor: "pointer" }}
                  id="center"
                >
                  20 Activties
                </div>
                <div
                  onClick={calendarsDisplay}
                  style={{ cursor: "pointer" }}
                  id="right"
                >
                  Calendar
                </div>
              </div>
            </div>
            <Filter arrayOfValues={arrayOfValues} onProp={handleProps} />
          </div>
        </div>
        <div>
          <ContactTable />
        </div>
      </div>
      <Dialog
        open={task}
        keepMounted
        onClose={handleCloseTask}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle>
          <b
            className="d-flex justify-content-center"
            style={{ textDecoration: "underline" }}
          >
            Task List
          </b>
          <Button variant="" {...bindHover(popupState)}>
            Sort By
          </Button>
        </DialogTitle>
        <DialogContent>
          <Task />
        </DialogContent>
        <DialogActions>
          <div className="d-flex justify-content-center">
            <div onClick={handleActivites}>View all activities instead</div>
            <Button onClick={newTask} variant="contained" color="primary">
              Create New
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      {/* activites */}
      <Dialog
        open={openPop}
        keepMounted
        onClose={handlePopClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle>
          <b className="d-flex justify-content-center">Activity Orders</b>
          <Button variant="" {...bindHover(popupStates)}>
            Sort By
          </Button>
        </DialogTitle>
        <DialogContent>
          <Activities />
        </DialogContent>
        <DialogActions>
          <div className="d-flex justify-content-center">
            <div onClick={handleNewActivites}>Create a new task instead</div>
            <div />
            <Button
              onClick={handleActivities}
              variant="contained"
              color="primary"
            >
              Create New
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      {/* Event details */}
      <Dialog
        open={secondPop}
        keepMounted
        onClose={handleNewActivitesClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
        fullWidth
      >
        <DialogTitle>
          <b className="d-flex justify-content-center">Event Details</b>
        </DialogTitle>
        <DialogContent>
          <div className="d-flex justify-content-center">
            <img style={{ marginRight: "20%" }} src={tasks} width="50" />
            <label>Event Type</label>
            <select style={{ marginLeft: "20%" }}>
              <option>Types</option>
              <option>Task</option>
              <option>Activity</option>
            </select>
          </div>
          <Event />
          {/* <Activities /> */}
        </DialogContent>
        <DialogActions>
          <div className="d-flex justify-content-center">
            <div onClick={handleNewActivites}>Create a new task instead</div>
            <div />
            <Button
              onClick={handleNewActivitesClose}
              variant="contained"
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={handleDone} variant="contained" color="primary">
              Done
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        {data.propertyData.map((allData, i) => (
          <Button
            onClick={(e) => handleProps(allData)}
            key={i}
            style={{ margin: 10, display: "block" }}
          >
            {allData}
          </Button>
        ))}
      </Popover>
      {/* activities */}
      <Popover
        {...bindPopover(popupStates)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        {data.propertyData.map((allData, i) => (
          <Button
            onClick={(e) => handleProps(allData)}
            key={i}
            style={{ margin: 10, display: "block" }}
          >
            {allData}
          </Button>
        ))}
      </Popover>
      <Dialog
        open={newTasks}
        keepMounted
        onClose={newTask}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
        fullWidth
      >
        <TaskModal
          setOpen={setNewTasks}
          setOpentwo={setSecondPop}
          setOpenthree={setOpenPop}
        />
      </Dialog>
      <Dialog
        open={newActivites}
        keepMounted
        onClose={handleActivites}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
        fullWidth
      >
        <PhoneActivity setOpen={setNewActivities} setOpentwo={setCalendar} />
      </Dialog>
      <Dialog
        open={calendar}
        keepMounted
        onClose={handleCalendar}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
        fullWidth
      >
        <Calendar />
      </Dialog>
    </div>
  );
}

export default withRouter(CreateNewTable);
