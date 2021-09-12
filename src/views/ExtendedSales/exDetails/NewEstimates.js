import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Table from "./newPriceDetails/table";
import "../../../css/table.css";
import { Button, Paper, InputBase, TextField } from "@material-ui/core";
import { Link, useHistory, withRouter } from "react-router-dom";
import gfamIcon1 from "../../../css/icons/gfamIcon1.png";
import Banner from "./otherDesigns/NewSearchInput";
import Filter from "./otherDesigns/filter";

function AllEstimates(props) {
  let history = useHistory();
  const [hover, setHover] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");
  // const [hover, setHover] = useState(false);

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };
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
        {/* <NameandSearchInput /> */}
        <div>
          <div style={{ marginRight: "20%", float: "left" }} className="box">
            <Banner>{props.location.state.data}</Banner>
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
          <div className="mt-3">
            <div
              style={{
                marginRight: "27%",
                float: "left",
                width: "40%",
              }}
            >
              <div className="">
                <div style={{ float: "left" }}>
                  <p style={{ float: "left" }}>Customer</p>
                  <select className="ml-3" style={{ height: "30px" }}>
                    <option>Fill this dropdown</option>
                  </select>
                </div>
                {/* <div> */}
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
                        width="10"
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
                    <img
                      className="ml-2"
                      src={gfamIcon1}
                      width="70"
                      height="15"
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="">
              <Filter onProp={handleProps} />
            </div>
          </div>
        </div>

        <b style={{ marginLeft: "10%" }}>RFP 001</b>
        <div className="mt-4">
          {/* <Table /> */}
          <div className="mt-4">
            <table id="customersCreateNew">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Product</th>
                <th className="text-center">Description</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Unit Price</th>
                <th className="text-center">Discount</th>
                <th className="text-center">Tax</th>
                <th className="text-center">Subtotal</th>
              </tr>
              <tr>
                <td></td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="100" />
                </td>
                <td>
                  <TextField placeholder="00" />
                </td>
                <td>
                  <TextField placeholder="00" />
                </td>
                <td>
                  <TextField placeholder="100" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="Product Name" />
                </td>
                <td>
                  <TextField placeholder="100" />
                </td>
                <td>
                  <TextField placeholder="00" />
                </td>
                <td>
                  <TextField placeholder="00" />
                </td>
                <td>
                  <TextField placeholder="100" />
                </td>
              </tr>
            </table>
          </div>
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
