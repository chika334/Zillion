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
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NameandSearchInput from "./EcoNameNSearch";
import Filter from "./ecoFilter";
import "../../../css/ecommerce.css";
import { SalesData } from "../../../Data/ecommerce";

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
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [saveChanges, setSaveChanges] = React.useState("");

  const handlePopoverOpen = (details) => (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(details);
    setSaveChanges(details);
    // setAnchorEl(event.target.value)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleShow = (details) => (event) => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(null);
  };

  const saveHover = (e) => {
    setSaveChanges(e.target.value);
  };

  const opens = Boolean(anchorEl);

  // console.log(saveChanges);
  const handleClick = (e, name) => {
    // console.log(detail);
    // props.history.push(`/sales/ecommerce/advertlinks/${detail}`);
    if (saveChanges === "Total") {
      if (name === "Advert Links") {
        props.history.push({
          pathname: "/sales/ecommerce/advertlinks/Total",
          state: { name: "Total" },
        });
      } else if (name === "Products") {
        props.history.push({
          pathname: "/sales/ecommerce/products/Total",
          state: { name: "Total" },
        });
      } else if (name === "Customers") {
        props.history.push({
          pathname: "/sales/ecommerce/products/createNew/customers/total",
          state: { name: "All Customers" },
        });
      } else if (name === "Delivery") {
        props.history.push({
          pathname: "/sales/ecommerce/delivery/order/total",
          state: { name: "Delivery Orders" },
        });
      }
    } else if (saveChanges === "Sent") {
      props.history.push({
        pathname: "/sales/ecommerce/advertlinks/Sent",
        state: { name: "Sent" },
      });
    } else if (saveChanges === "Inactive") {
      if (name === "Advert Links") {
        props.history.push({
          pathname: "/sales/ecommerce/advertlinks/Inactive",
          state: { name: "Inactive" },
        });
      } else if (name === "Customers") {
        props.history.push({
          pathname: "/sales/ecommerce/products/createNew/customers/inactive",
          state: { name: "Inactive" },
        });
      }
    } else if (saveChanges === "Active") {
      if (name === "Advert Links") {
        props.history.push({
          pathname: "/sales/ecommerce/advertlinks/Active",
          state: { name: "Active" },
        });
      } else if (name === "Products") {
        props.history.push({
          pathname: "/sales/ecommerce/products/active",
          state: { name: "Active" },
        });
      } else if (name === "Customers") {
        props.history.push({
          pathname: "/sales/ecommerce/products/createNew/customers/active",
          state: { name: "Active" },
        });
      }
    } else if (saveChanges === "Available") {
      props.history.push({
        pathname: "/sales/ecommerce/products/stock-level/available",
        state: { name: "Available" },
      });
    } else if (saveChanges === "Create New") {
      if (name === "Products") {
        props.history.push({
          pathname: "/sales/ecommerce/products/createNew/productsAndPricing",
          state: { name: "Products and Pricing" },
        });
      } else if (name === "Advert Links") {
        props.history.push({
          pathname: "/sales/ecommerce/products/createNew/productsAndPricing",
          state: { name: "Products and Pricing" },
        });
      } else if (name === "Customers") {
        props.history.push({
          pathname: "/sales/extended-sales/customer-Info",
          state: { name: "Customer Information" },
        });
      }
    } else if (saveChanges === "Transit") {
      props.history.push({
        pathname: "/sales/ecommerce/delivery/order/transit",
        state: { name: "Delivery Orders" },
      });
    } else if (saveChanges === "Delivered") {
      props.history.push({
        pathname: "/sales/ecommerce/delivery/order/delivered",
        state: { name: "Delivery Orders" },
      });
    } else if (saveChanges === "Settings") {
      props.history.push({
        pathname: "/sales/ecommerce/delivery/order/settings",
        state: { name: "Delivery Orders" },
      });
    }
  };

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
    // console.log("good", name);
    if (name === "total") {
      props.history.push({
        pathname: "/sales/ecommerce/advertlinks/Total",
        state: { name: "Total" },
      });
    } else if (name === "sent") {
      props.history.push({
        pathname: "/sales/ecommerce/advertlinks/Sent",
        state: { name: "Sent" },
      });
    } else if (name === "inactive") {
      props.history.push({
        pathname: "/ecommerce/advertlinks/Inactive",
        state: { name: "Inactive" },
      });
    } else if (name === "active") {
      props.history.push({
        pathname: "/ecommerce/advertlinks/Active",
        state: { name: "Active" },
      });
    }
  };

  const body = (
    <div style={modalStyle} className={classes.papers}>
      <h5
        id="simple-modal-title"
        className="d-flex align-content-center justify-content-center"
      >
        {title}
      </h5>
      <div className="">
        <div className="allnew d-flex align-content-center justify-content-center">
          <p className="pr-3">Total: </p>
          <button
            onClick={(e) => handleButtonRedirect(e, "total")}
            style={{
              borderRadius: "30px",
              backgroundColor: "#000",
              color: "#fff",
              paddingLeft: 15,
              paddingRight: 15,
              textAlign: "center",
            }}
          >
            30
          </button>
        </div>
        <div className="allnew d-flex align-content-center justify-content-center">
          <p className="pr-3">Active: </p>
          <button
            onClick={(e) => handleButtonRedirect(e, "active")}
            style={{
              borderRadius: "30px",
              backgroundColor: "green",
              color: "#fff",
              paddingLeft: 15,
              paddingRight: 15,
              textAlign: "center",
            }}
          >
            30
          </button>
        </div>
        <div className="allnew d-flex align-content-center justify-content-center">
          <p className="pr-3">Inactive: </p>
          <button
            onClick={(e) => handleButtonRedirect(e, "inactive")}
            style={{
              borderRadius: "30px",
              backgroundColor: "grey",
              color: "#fff",
              paddingLeft: 15,
              paddingRight: 15,
              textAlign: "center",
            }}
          >
            30
          </button>
        </div>
        <div className="allnew d-flex align-content-center justify-content-center">
          <p className="pr-3">Sent: </p>
          <button
            onClick={(e) => handleButtonRedirect(e, "sent")}
            style={{
              borderRadius: "30px",
              backgroundColor: "yellow",
              color: "#fff",
              paddingLeft: 15,
              paddingRight: 15,
              textAlign: "center",
            }}
          >
            30
          </button>
        </div>
      </div>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <Container fixed>
      <Modal
        open={open}
        onClose={handleShowClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
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
          {SalesData.items.map((allSales, i) => (
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
                        onClick={(e) => handleClick(e, allSales.title)}
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
