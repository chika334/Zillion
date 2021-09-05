import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { FaPaypal, FaBitcoin } from "react-icons/fa";
import "./paymentCards.css";
import cheque from "../../../../../css/images/cheque.jpg";
import { GiMoneyStack } from "react-icons/gi";
import transfer from "../../../../../css/images/transfer.png";
import CardDetails from "./Payments/CardDetails";
import Paypal from "./Payments/Paypal";
import Bitcoin from "./Payments/Bitcoin";
import Cash from "./Payments/Cash";
import Cheque from "./Payments/Cheque";
import Transfer from "./Payments/Transfer";
import InternalTransfer from "./Payments/InternalTransfer";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "70px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const [selectCard, setSelectCard] = useState(0);
  const [open, setOpen] = useState(false);

  const handlePayments = (e, value) => {
    setSelectCard(value);
  };

  const handleSuccess = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSuccess = () => {
  //   props.history.push({
  //     pathname: "/ecommerce/payment/payment-success",
  //     state: { open, handleClose },
  //   });
  // };

  return (
    <div className="container mb-5">
      <div className="allnew">
        <div>
          <h3>Instant Payments</h3>
          <small>Choose payment method below</small>
        </div>
        <div>
          <p>Invoice Number: INV-1234567-0000001</p>
          <p>Total Amount Payable($) 420, 000</p>
        </div>
      </div>
      <div className="cardPay-container">
        <div onClick={(e) => handlePayments(e, 0)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Card payment</h5>
          </header>
          <div className="d-flex justify-content-center">
            <CreditCardIcon style={{ width: "50%", height: "50%" }} />
          </div>
        </div>
        <div onClick={(e) => handlePayments(e, 1)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Paypal</h5>
          </header>
          <FaPaypal style={{ width: "60%", height: "60%" }} />
        </div>

        <div onClick={(e) => handlePayments(e, 2)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Bitcoin</h5>
          </header>
          <FaBitcoin style={{ width: "60%", height: "60%" }} />
        </div>

        <div onClick={(e) => handlePayments(e, 3)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Cash</h5>
          </header>
          <GiMoneyStack style={{ width: "60%", height: "70%" }} />
        </div>
        <div onClick={(e) => handlePayments(e, 4)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Cheque</h5>
          </header>
          <img src={cheque} style={{ width: "50%", height: "50%" }} />
        </div>
        <div onClick={(e) => handlePayments(e, 5)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Transfer</h5>
          </header>
          <img src={transfer} style={{ width: "50%", height: "50%" }} />
        </div>
        <div onClick={(e) => handlePayments(e, 6)} className="cardPay">
          <header className="article-header">
            <h5 className="article-title">Internal Transfers</h5>
          </header>
          <img src={transfer} style={{ width: "50%", height: "50%" }} />
        </div>
      </div>
      {selectCard === 0 ? <CardDetails /> : ""}
      {selectCard === 1 ? <Paypal /> : ""}
      {selectCard === 2 ? <Bitcoin /> : ""}
      {selectCard === 3 ? <Cash /> : ""}
      {selectCard === 4 ? <Cheque /> : ""}
      {selectCard === 5 ? <Transfer /> : ""}
      {selectCard === 6 ? <InternalTransfer /> : ""}
      <div className="allnew">
        <div className="allnew">
          <input value="Maryland Mall" type="radio" />
          <p>I have read, understood and agree to the terms and condition</p>
        </div>
        <div className="allnew">
          <Button variant="contained" color="primary">
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSuccess}
            variant="contained"
            color="primary"
          >
            PROCEED PAYMENT
          </Button>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="lg"
        PaperProps={{
          style: {
            backgroundColor: "blue",
            // boxShadow: 'none',
          },
        }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <h2>
            {
              "Dear, James Gillard, Your Payment has been received for the following items"
            }
          </h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <table className="tableReceipt">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th>Country</th>
                <th>Country</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Alfreds Futterkiste</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Austria</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>UK</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Canada</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Italy</td>
                <td>Italy</td>
              </tr>
            </table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
