import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Table from "./newPriceDetails/table";
import "../../../css/table.css";
import { Button } from "@material-ui/core";
import { Link, useHistory, withRouter } from "react-router-dom";
import gfamIcon1 from "../../../css/icons/gfamIcon1.png";

function AllEstimates() {
  let history = useHistory();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    history.push("/sales/extended-sales/customerInfo");
  };

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="property-area pt-5">
      <div className="container pt-3">
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <br />
        <NameandSearchInput />
        <div className="allnew">
          <p>Customer</p>
          <select className="ml-3" style={{ height: "30px" }}>
            <option>Fill this dropdown</option>
          </select>
          <div
            className="p-0 m-0"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            role="button"
            tabIndex="-3"
          >
            {hover ? (
              <div className="p-0 m-0">
                <img
                  className="ml-2"
                  style={{ cursor: "pointer" }}
                  src={gfamIcon1}
                  width="70"
                  height="15"
                />
                <Link
                  to={{
                    pathname: "/sales/extended-sales/customer-Info",
                  }}
                >
                  Create new customer
                </Link>
              </div>
            ) : (
              <img className="ml-2" src={gfamIcon1} width="70" height="15" />
            )}
          </div>
        </div>
        <b style={{ marginLeft: "10%" }}>RFP 001</b>
        <div className="mt-4">
          <Table />
        </div>
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
      </div>
    </div>
  );
}

export default withRouter(AllEstimates);
