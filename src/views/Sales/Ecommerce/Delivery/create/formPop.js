import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Table from "../../../../../components/Table";
import "../../../../../css/table.scss";
import "../../../../../css/dialog.css";

const driversData = [
  {
    number: 44,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
  {
    number: 77,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
  {
    number: 5,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
  {
    number: 16,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
  {
    number: 33,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
  {
    number: 23,
    product: "Lenovo Laptop",
    description: "Lenovo Laptop",
    quality: "20",
    unitPrice: "$20",
    discount: "2%",
    tax: "10%",
    subTotal: "$1,200",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const proceedToPay = () => {
    props.history.push("/ecommerce/payment-invoice/pay")
  }
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        // className="dialogBody"
        maxWidth="lg"
        fullWidth
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Table
              tableData={driversData}
              headingColumns={[
                "#",
                "Product",
                "Description",
                "Quality",
                "Unit Price",
                "Discount",
                "Tax",
                "Sub Total",
              ]}
            />
            <div className="mt-3 w-30 mb-4" style={{ float: "right" }}>
              <hr />
              <div className="allnew">
                <p>Subtotal</p>
                <p className="estimatePrice">
                  <b>{formatter.format(59800)}</b>
                </p>
              </div>
              <div className="allnew">
                <p>Discount</p>
                <p className="estimatePrice">
                  <b>{formatter.format(59800)}</b>
                </p>
              </div>
              <div className="allnew">
                <p>Tax</p>
                <p className="taxPrice">
                  <b>{formatter.format(598)}</b>
                </p>
              </div>
              <div className="allnew">
                <p>Total</p>
                <p className="totalPrice">
                  <b>{formatter.format(57800)}</b>
                </p>
              </div>
              <hr />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={proceedToPay} color="primary">
            Proceed to pay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(AlertDialogSlide)