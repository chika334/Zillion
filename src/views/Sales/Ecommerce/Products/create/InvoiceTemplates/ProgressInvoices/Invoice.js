import React, { Component } from "react";
import * as styles from "./Invoice.mudule.scss";

import LineItems from "./LineItems";

import uuidv4 from "uuid/v4";

class Invoice extends Component {
  locale = "en-US";
  currency = "USD";

  state = {
    taxRate: 0.0,
    lineItems: [
      {
        id: "initial", // react-beautiful-dnd unique key
        name: "",
        description: "",
        quantity: 0,
        price: 0.0,
      },
    ],
  };

  handleInvoiceChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item;
      return { ...item, [event.target.name]: event.target.value };
    });
    this.setState({ lineItems });
  };

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        { id: uuidv4(), name: "", description: "", quantity: 0, price: 0.0 },
      ]),
    });
  };

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i;
      }),
    });
  };

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    });
  };

  handleFocusSelect = (event) => {
    event.target.select();
  };

  handlePayButtonClick = () => {
    alert("Not implemented");
  };

  formatCurrency = (amount) => {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100);
  };

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price,
      0
    );
  };

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100);
  };

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
  };

  render = () => {
    return (
      <div className="invoices">
        <div className="brands">
          <img
            src="https://via.placeholder.com/150x50.png?text=logo"
            alt="Logo"
            className="logos"
          />
        </div>
        <div className="addressess">
          <div className="froms">
            <strong>Amazing Company</strong>
            <br />
            123 Kensington Ave
            <br />
            Toronto, ON, Canada &nbsp;A1B2C3
            <br />
            416-555-1234
          </div>
          <hr />
          <div>
            <div className="valueTables tos">
              <div className="row">
                <div className="labels">Customer #</div>
                <div className="values">123456</div>
              </div>
              <div className="rows">
                <div className="labels">Invoice #</div>
                <div className="values">123456</div>
              </div>
              <div className="rows">
                <div className="labels">Date</div>
                <div className="values dates">2019-01-01</div>
              </div>
            </div>
          </div>
        </div>
        <h2>Invoice</h2>

        <LineItems
          items={this.state.lineItems}
          currencyFormatter={this.formatCurrency}
          addHandler={this.handleAddLineItem}
          changeHandler={this.handleLineItemChange}
          focusHandler={this.handleFocusSelect}
          deleteHandler={this.handleRemoveLineItem}
          reorderHandler={this.handleReorderLineItems}
        />

        <div className="totalContainers">
          <form>
            <div className="valueTables">
              <div className="rows">
                <div className="labels">Tax Rate (%)</div>
                <div className="values">
                  <input
                    name="taxRate"
                    type="number"
                    step="0.01"
                    value={this.state.taxRate}
                    onChange={this.handleInvoiceChange}
                    onFocus={this.handleFocusSelect}
                  />
                </div>
              </div>
            </div>
          </form>
          <form>
            <div className="valueTables">
              <div className="rows">
                <div className="labels">Subtotal</div>
                <div className="values currencys">
                  {this.formatCurrency(this.calcLineItemsTotal())}
                </div>
              </div>
              <div className="rows">
                <div className="labels">Tax ({this.state.taxRate}%)</div>
                <div className="values currencys">
                  {this.formatCurrency(this.calcTaxTotal())}
                </div>
              </div>
              <div className="rows">
                <div className="labels">Total Due</div>
                <div className="value currencys">
                  {this.formatCurrency(this.calcGrandTotal())}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="pays">
          <button className="payNows" onClick={this.handlePayButtonClick}>
            Pay Now
          </button>
        </div>

        {/* <div className={styles.footer}> */}
        <div className="footers">
          {/* <div className={styles.comments}> */}
          <div className="comments">
            <h4>Notes</h4>
            <p>
              Demo by Kevin Firko, independent consulting developer at{" "}
              <a href="https://bitcurve.com">Bitcurve</a>.
            </p>
            <p>
              Check out my blog{" "}
              <a href="https://firxworx.com">https://firxworx.com</a> and{" "}
              <a href="https://firxworx.com/blog/coding/creating-an-invoice-component-with-dynamic-line-items-using-react/">
                the related post
              </a>{" "}
              covering how to create a dynamic Invoice component in React.{" "}
            </p>
            <p>
              Find the{" "}
              <a href="https://github.com/firxworx/react-simple-invoice">
                code on Github
              </a>
              .
            </p>
          </div>
          <div className={styles.closing}>
            <div>Thank-you for your business</div>
          </div>
        </div>
      </div>
    );
  };
}

export default Invoice;
