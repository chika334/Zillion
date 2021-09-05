import React, { Component } from "react";
import * as styles from "./Invoice.mudule.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faImage } from "@fortawesome/free-solid-svg-icons";
import LineItems from "./LineItems";
import ContentEditable from "react-contenteditable";
import uuidv4 from "uuid/v4";
import Notifications, { notify } from "react-notify-toast";
import { text } from "@fortawesome/fontawesome-svg-core";

const toastColor = {
  background: "#505050",
  text: "#fff",
};

class Invoice extends Component {
  locale = "en-US";
  currency = "USD";

  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
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
      html: "",
      image: "",
    };
  }

  toast = notify.createShowQueue();

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

  onChange = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);
    const blob = new Blob([e.target.files[0]]);
    const blobUrl = URL.createObjectURL(blob);
    this.setState({
      image: blobUrl,
    });
    // console.log(files);

    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      return this.toast(msg, "custom", 2000, toastColor);
    }

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
      return errs.forEach((err) => this.toast(err, "custom", 2000, toastColor));
    }

    this.setState({ uploading: true });
  };

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100);
  };

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
  };

  handleChange = (evt) => {
    this.myRef.current = evt.target.value;
  };

  render = () => {
    // console.log(this.myRef);
    return (
      <div className="invoices">
        {/* <div className="brands">
          <img
            src="https://via.placeholder.com/150x50.png?text=logo"
            alt="Logo"
            className="logos"
          />
        </div> */}
        <div>
          <label htmlFor="single" className="buttonImage">
            {this.state.image === "" ? (
              <FontAwesomeIcon icon={faImage} color="#3B5998" size="10x" />
            ) : (
              <img src={this.state.image} width="150" alt="uploaded image" />
            )}
          </label>
          <input type="file" id="single" onChange={this.onChange} hidden />
        </div>
        <div className="addressess">
          <div className="froms">
            <ContentEditable
              html={
                this.myRef.current === null
                  ? `<strong>Amazing Company</strong>
                        <br />
                        123 Kensington Ave
                        <br />
                        Toronto, ON, Canada &nbsp;A1B2C3
                        <br />
                        416-555-1234`
                  : this.myRef.current
              }
              data-column="price"
              onChange={this.handleChange}
              tagName="article"
            />
          </div>
          <hr />
          <div>
            <div className="valueTables tos">
              <div className="rows">
                <div className="labels">
                  <ContentEditable
                    innerRef={this.myRef.current}
                    html={
                      this.state.html === "" ? "Customer #" : this.state.html
                    }
                    data-column="price"
                    disabled={true}
                    style={{ display: "inline-block" }}
                    onChange={this.handleChange}
                    tagName="article"
                  />
                </div>
                <div className="namenameValues">
                  <ContentEditable
                    html={
                      this.myRef.current === null || this.myRef.current === ""
                        ? "Enter Name"
                        : this.myRef.current
                    }
                    data-column="price"
                    // className=""
                    onChange={this.handleChange}
                    tagName="article"
                  />
                </div>
              </div>
              <div className="rows">
                <div className="labels">
                  <ContentEditable
                    html={
                      this.myRef.current === null
                        ? "Invoice #"
                        : this.myRef.current
                    }
                    data-column="price"
                    disabled={true}
                    onChange={this.handleChange}
                    tagName="article"
                  />
                </div>
                <div className="nameValues">
                  <ContentEditable
                    html={
                      this.myRef.current === null
                        ? "#12345678934567"
                        : this.myRef.current
                    }
                    data-column="price"
                    className=""
                    onChange={this.handleChange}
                    tagName="article"
                  />
                </div>
              </div>
              <div className="rows">
                <div className="labels">Date</div>
                <div className="nameValues dates">2019-01-01</div>
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
                <div className="nameValues">
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
                <div className="nameValues currencys">
                  {this.formatCurrency(this.calcLineItemsTotal())}
                </div>
              </div>
              <div className="rows">
                <div className="labels">Tax ({this.state.taxRate}%)</div>
                <div className="nameValues currencys">
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
          {/* <div className="comments">
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
          </div> */}
          <div className="closings">
            <div>Thank-you for your business</div>
          </div>
        </div>
      </div>
    );
  };
}

export default Invoice;
