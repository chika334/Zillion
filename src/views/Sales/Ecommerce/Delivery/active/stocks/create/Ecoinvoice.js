import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, useHistory } from "react-router-dom";
import { Button, TextField, MenuItem } from "@material-ui/core";
import Table from "../../../../../components/Table";
import "../../../../../css/table.scss";
import "../../../../../css/dialog.css";
import ProgressInvoices from "./InvoiceTemplates/ProgressInvoices/Invoice";
// import { withTheme } from "@material-ui/styles";
import CompanyName from "./CompanyName";
import { Invoices } from "../../../../../Data/invoices";
import Invoice from "./InvoiceTemplates/PercentageInvoice/Invoice";

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

function Ecoinvoice() {
  const [index, setIndex] = useState(0);
  const history = useHistory();
  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const handleChange = (event) => {
    setIndex(event.target.value);
    // console.log(event.target.value);
  };

  const handleNext = () => {
    history.push("/ecommerce/payment/delivery-method");
  };

  return (
    <div className="pt-5">
      <div className="container">
        <div className="allnew">
          <span>
            <FontAwesomeIcon
              style={{ color: "#3c44b1", width: "50", height: "30" }}
              icon={["fas", "arrow-circle-left"]}
            />
          </span>
          <TextField
            id="standard-select-currency"
            select
            onChange={handleChange}
            label="Select Invoice Type"
            helperText="Please select your currency"
          >
            {Invoices.items.map((option) => (
              <MenuItem
                // onChange={(e) => handleChange(e, option.id)}
                key={option.id}
                value={option.id}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {index === 0 && <Invoice />}
        {index === 1 && <ProgressInvoices />}
        {/* {index === 0 && (
          <>
            <div className="allnew">
              <CompanyName />
              <div className="pt-5">
                <h4>INV-210502-00001</h4>
                <h4>{Date.now()}</h4>
              </div>
            </div>
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
              <div>
                <Button>save to pdf</Button>
                <Button onClick={handlePayment}>Proceed to pay</Button>
              </div>
            </div>
          </>
        )} */}
      </div>

      <div className="d-flex justify-content-center">
        <div className="allnew">
          <Button variant="contained" color="primary">
            Save Invoice Template
          </Button>
          <Button onClick={handleNext} className="ml-5" variant="contained" color="primary">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Ecoinvoice);
