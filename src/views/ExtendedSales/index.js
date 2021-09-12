import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Typography,
  Button,
  Grid,
  Popover,
  Modal,
  Card,
  Paper,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { Link, withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NameandSearchInput from "./NameandSearchInput";
import Filter from "./filter";
import "../../css/ecommerce.css";
import Banner from "./NewSearchInput";
import { ExtendedSalesData } from "../../Data/ecommerce";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  papers: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Index(props) {
  const classes = useStyles();
  const history = useHistory();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [saveChanges, setSaveChanges] = React.useState("");
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };

  const handleCreateNew = () => {
    history.push({
      pathname: "/extended-sales/all-RFP/new-request-price",
      state: { data: "New Request For Price" },
    });
  };

  const handlePopoverOpen = (details) => (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(details);
    setSaveChanges(details);
    // setAnchorEl(event.target.value)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // const handleShow = (details) => (event) => {
  //   setShow(true);
  // };

  // const handleClose = () => {
  //   setShow(null);
  // };

  // const saveHover = (e) => {
  //   setSaveChanges(e.target.value);
  // };

  const opens = Boolean(anchorEl);

  const handleClick = (e, name) => {
    console.log(name);
    if (name === "All RFP") {
      props.history.push({
        pathname: `/sales/extended-sales/all-rfp`,
        state: { data: "All Request for Price's" },
      });
    } else if (name === "New RFP Data") {
      props.history.push({
        pathname: "/extended-sales/all-RFP/new-request-price",
        state: { data: "New Request for Price" },
      });
    } else if (name === "All Estimates") {
      props.history.push({
        pathname: `/sales/extended-sales/all-rfp`,
        state: { data: name },
      });
    } else if (name === "New Estimate Data") {
      props.history.push({
        pathname: "/sales/extended-sales/new-estimates",
        state: { data: name },
      });
    } else if (name === "All Sales Orders") {
      props.history.push({
        pathname: "/sales/extended-sales/sales-orders",
        state: { data: name },
      });
    } else if (name === "New Sales Orders") {
      props.history.push({
        pathname: "/sales/extended-sales/new-sales-order",
        state: { data: name },
      });
    } else if (name === "All Invoices") {
      props.history.push({
        pathname: "/sales/extended-sales/all-invoices",
        state: { data: name },
      });
    } else if (name === "All Receivables") {
      props.history.push({
        pathname: "/sales/extended-sales/receievables",
        state: { data: name },
      });
    }
  };

  const handleOpen = (e, data) => {
    e.preventDefault();
    setOpen(true);
    setTitle(data);
  };

  const handleShowClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div className="mt-5">
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <br />
        <div>
          <div style={{ marginRight: "10%", float: "left" }} className="box">
            <Banner>Extended Sales Dashboard</Banner>
          </div>
          <div>
            <Paper
              component="form"
              style={{ float: "left" }}
              className="searchPaper"
            >
              <InputBase
                className="searchInput"
                placeholder="Search Google Maps"
                style={{ paddingTop: "3%", paddingBottom: "3%" }}
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
            <Button
              className="buttonSearch"
              style={{ backgroundColor: "#3c44b1", color: "#fff" }}
            >
              SEARCH
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <div
            style={{ marginRight: "55%", float: "left" }}
            // className="box"
          >
            {/* <Button
              onClick={handleCreateNew}
              variant="contained"
              color="primary"
              // className="mr-5"
            >
              Create New
            </Button> */}
          </div>
          <div className="">
            <Filter onProp={handleProps} />
          </div>
        </div>

        <div className="property-filter-area row custom-gutter">
          {ExtendedSalesData.items.map((allSales, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-sm-6 mt-5">
              <div>
                <div
                  className="pt-2 pl-2"
                  style={{
                    backgroundColor: "#3c44b1",
                    padding: "15%",
                    borderRadius: "5%",
                  }}
                >
                  <img
                    className="Ecommercemedia"
                    src={allSales.image}
                    alt="img"
                  />
                  <Button
                    onClick={(e) => handleOpen(e, `${allSales.title}`)}
                    to={allSales.url}
                    className="ecommerceArrange"
                    style={{ color: "#fff" }}
                  >
                    {allSales.title}
                  </Button>
                  {allSales.displayButtons.map((allButtons, i) => (
                    <div key={i} className="displayDropButton">
                      <button
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen(allButtons)}
                        onMouseLeave={handlePopoverClose}
                        className="dropButtons"
                        onClick={(e) => handleClick(e, allButtons)}
                      >
                        .
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={opens}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography>{saveChanges}</Typography>
              </Popover>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Index);
