import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Typography,
  Button,
  Popover,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import company from "../../css/images/company.jpg";
import { withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import NameandSearchInput from "../NameandSearchInput";
import Filter from "./Filter";
// import dropbox from "../../css/images/dropbox.png";
// import serve from "../../css/images/serve.png";
import "../../css/ecommerce.css";
// import person from "../../css/images/person.png";
import { CRMData } from "../../Data/crmData";
import Individual from "./Individual/Index";
import Company from "./Company/Index";
import prfile from "../../css/images/prfile.png";
import CrmComtactModal from "./CrmComtactModal";
import LeadForm from "./LeadForm";
import Slide from "@material-ui/core/Slide";
import SearchIpnut from "./SearchInput";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const [otherOpen, setOtherOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [saveChanges, setSaveChanges] = React.useState("");
  const [newOrderOpen, setNewOrderOpen] = React.useState(false);
  const [allOrder, setAllOrder] = React.useState(false);
  const [saveName, setSaveName] = React.useState("");
  const [openTwo, setOpentwo] = React.useState(false);
  const [openThree, setOpenthree] = React.useState(false);
  const [pop, setPop] = React.useState(false);
  const [values, setValues] = useState({});

  const handlePopoverOpen = (details) => (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(details);
    setSaveChanges(details);
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
    if (name === "Contacts") {
      setOpen(true);
    } else if (name === "Lead Generation") {
      setOpen(false);
      setOtherOpen(true);
    } else if (name === "Qualifying Leads") {
      props.history.push({
        pathname: "/sales/crm/qaulifying-leads",
        state: { name: "Qualifying Leads" },
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
    } else if (name === "Contacting") {
      props.history.push({
        pathname: "/sales/crm/contact",
        state: { data: "Contact" },
      });
    } else if (name === "Quotations") {
      props.history.push({
        pathname: "/sales/crm/quotation",
        state: { data: name },
      });
    } else if (name === "Sales Orders") {
      props.history.push({
        pathname: "/sales/extended-sales/sales-orders",
        state: { data: name },
      });
    } else if (name === "Incentives") {
      props.history.push({
        pathname: "/sales/extended-sales/all-invoices",
        state: { data: name },
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClosetwo = () => {
    setOpentwo(false);
  };

  const handleClosethree = () => {
    setOpenthree(false);
  };

  const handleServe = () => {
    // alert("Server");
    setOpen(false);
    setOpenthree(true);
  };

  const handleChange = (e, name) => {
    const newValues = { ...values };
    newValues[name] = e.target.value;
    setValues(newValues);
  };

  useEffect(() => {
    if (values["Individual"] === "Organization") {
      setOpentwo(false);
      setOpenthree(true);
    } else if (values["Organization"] == "Individual") {
      setOpenthree(false);
      setOpentwo(true);
    }
  }, []);

  const handleCloseOther = () => {
    setOtherOpen(false);
  };

  const handlepop = () => {
    setPop(false);
  };

  return (
    <div>
      <Dialog
        open={pop}
        keepMounted
        onClose={handlepop}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle>Save Generated Leads</DialogTitle>
        <DialogContent>
          <p>Would you like to save these leads as contacts?</p>
        </DialogContent>
        <DialogActions>
          <div className="d-flex justify-content-center">
            <Button variant="contained" color="primary">
              No
            </Button>
            <Button variant="contained" color="primary">
              Yes
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        {saveName === "Contacts" ? (
          <CrmComtactModal
            setOpen={setOpen}
            setOpenthree={setOpenthree}
            setOpentwo={setOpentwo}
          />
        ) : (
          ""
        )}
      </Dialog>
      <LeadForm
        open={otherOpen}
        handleClose={handleCloseOther}
        Transition={Transition}
        setOpen={setOtherOpen}
        setPop={setPop}
        setOpentwo={setOpentwo}
      />
      <Dialog
        open={openTwo}
        fullWidth
        keepMounted
        onClose={handleClosetwo}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle className="text-center p-5">
          <b className="underLineText">Contact Generation Form</b>
        </DialogTitle>
        <div className="allnew d-flex justify-content-center">
          <img src={prfile} width="30" height="40" />
          <div className="text-center">
            <b>Contact Type</b>
          </div>
          <select
            onChange={(e) => handleChange(e, "individual")}
            style={{ maxHeight: "40px" }}
          >
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
        </div>
        <Individual handleClosetwo={handleClosetwo} />
      </Dialog>
      <Dialog
        open={openThree}
        keepMounted
        onClose={handleClosethree}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle className="text-center p-5">
          <b className="underLineText">Contact Generation Form</b>
        </DialogTitle>
        <div className="allnew d-flex justify-content-center">
          <img src={company} width="30" height="40" />
          <div className="text-center">
            <b>Contact Type</b>
          </div>
          <select
            onChange={(e) => handleChange(e, "individual")}
            style={{ maxHeight: "40px" }}
          >
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
        </div>
        <Company handleClosethree={handleClosethree} />
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
          {/* <NameandSearchInput /> */}
          <div
            style={{ display: "flex", alignContent: "space-between" }}
            className="box mt-4"
          >
            <div style={{ float: "left" }}>
              <Typography variant="h5" noWrap>
                <b style={{ color: "#3c44b1" }}>CRM Dashboard</b>
              </Typography>
            </div>
            <div className="box overlay" style={{ marginLeft: "150px" }}>
              <SearchIpnut />
            </div>
          </div>
          <div>
            <Filter />
          </div>

          <div className="property-filter-area row custom-gutter">
            {CRMData.items.map((allSales, i) => (
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
        </div>
      </Container>
    </div>
  );
}

export default withRouter(Index);
