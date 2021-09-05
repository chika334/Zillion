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
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import { Link, withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NameandSearchInput from "./NameandSearchInput";
import Filter from "./filter";
import dropbox from "../../css/images/dropbox.png";
import serve from "../../css/images/serve.png";
import "../../css/ecommerce.css";
import { posData, info } from "../../Data/posData";

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
  const [newOrderOpen, setNewOrderOpen] = React.useState(false);
  const [allOrder, setAllOrder] = React.useState(false);
  const [saveName, setSaveName] = React.useState("");

  const handlePopoverOpen = (details) => (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(details);
    setSaveChanges(details);
    // setAnchorEl(event.target.value)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const opens = Boolean(anchorEl);

  const handleOpen = (e, data) => {
    e.preventDefault();
    setOpen(true);
    setTitle(data);
    // console.log(data);
  };

  const handleShowClose = () => {
    setOpen(false);
  };

  const handleButtonRedirect = (e, name) => {
    e.preventDefault();
    setSaveName(name);
    if (name === "New Order") {
      setOpen(true);
    } else if (name === "All Orders") {
      setOpen(true);
    } else if (name === "All") {
      props.history.push({
        pathname: "/pos/all-products",
        state: { name: "All" },
      });
    } else if (name === "Available") {
      props.history.push({
        pathname: "/pos/available",
        state: { name: "Available" },
      });
    } else if (name === "Create New") {
      props.history.push({
        pathname: "/pos/create-new/product-config",
      });
    } else if (name === "invoices") {
      props.history.push({
        pathname: "/pos/invoice",
        state: { data: "Payments" },
      });
    } else if (name === "New Payment") {
      props.history.push({
        pathname: "/pos/payment-method",
        state: { data: "Choose Payment Method" },
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDropbox = () => {
    // alert("dropbox");
    history.push("/pos/sales-order");
  };

  const handleServe = () => {
    // alert("Server");
    history.push("/pos/ticketting");
  };

  const newBody = (
    <div className="p-4">
      <DialogTitle className="text-center pb-5">
        <b className="underLineText">Choose Product Itenary</b>
      </DialogTitle>
      <div className="newBody">
        <div onClick={handleDropbox} className="single-feature cardsDetail">
          <div
            className="single-feature text-center mr-2 cardHeight"
            style={{ backgroundColor: "grey" }}
          >
            <div className="single-feature bg-light m-3 p-4 modalCardHeight">
              <img src={dropbox} width={60} alt="..." />
            </div>
            <h6>Goods</h6>
            <div className="p-2" style={{ fontSize: "15px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </div>
          </div>
        </div>
        <div onClick={handleServe} className="single-feature pl-2">
          <div
            className="single-feature text-center mr-2 cardHeight"
            style={{ backgroundColor: "grey" }}
          >
            <div className="single-feature bg-light m-3 p-4 modalCardHeight">
              <img src={serve} width={60} alt="..." />
            </div>
            <h6>Services</h6>
            <div className="p-2" style={{ fontSize: "15px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const allBody = (
    <DialogTitle>
      <b>The Sales Experience</b>
    </DialogTitle>
  );

  // console.log(saveName);
  return (
    <div>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        {saveName === "New Order" ? newBody : allBody}
      </Dialog>
      <Container>
        <div className="">
          <span>
            <FontAwesomeIcon
              style={{ color: "#3c44b1", width: "50", height: "30" }}
              icon={["fas", "arrow-circle-left"]}
            />
          </span>
          <br />
          <NameandSearchInput />
          <div>
            <Filter />
          </div>

          <div className="property-filter-area row custom-gutter">
            {posData.items.map((allSales, i) => (
              <div key={i} className="col-lg-4 col-md-4 col-sm-6 mt-5">
                <div>
                  <div
                    className="single-feature pt-2 pl-2"
                    style={{ backgroundColor: "#3c44b1" }}
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
                          onClick={(e) => handleButtonRedirect(e, allButtons)}
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
          {/* <div className="property-filter-area row custom-gutter">
          {info.items.map((allData, i) => (
            <div key={i} className="col-lg-4 col-md-4 col-sm-6 mt-5">
              <div className="borderNColor">
                <div
                  className="single-feature pt-2 pl-2"
                  // style={{ backgroundColor: "#3c44b1" }}
                >
                  <p>{allData.text}</p>
                  <p>{allData.text2}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </Container>
    </div>
  );
}

export default withRouter(Index);
