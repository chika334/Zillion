import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NameandSearchInput from "../otherDesigns/NameandSearchInput";
// import Table from "./table";
// import "../../../../css/table.css";
import Banner from "../NewSearchInput";
// import SearchIpnut from "../otherDesigns/searchInput";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory, withRouter } from "react-router-dom";
import gfamIcon1 from "../../../css/icons/gfamIcon1.png";
import { Paper } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Filter from "../filter";

function NewSalesOrder(props) {
  let history = useHistory();
  const [hover, setHover] = useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };

  const handleCreateNew = () => {
    history.push({
      pathname: "/extended-sales/all-RFP/new-request-price",
      state: { data: "New Request For Price" },
    });
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
        </div>
        <div className="mt-2">
          <div
            style={{ marginRight: "10%", float: "left" }}
            // className="box"
          >
            <div className="allnew">
              <p style={{ width: "50%" }}>Customer</p>
              <select className="ml-2" style={{ height: "30px" }}>
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
                      width="10"
                      height="15"
                    />
                    <Link
                      to={{
                        pathname: "/sales/extended-sales/customer-Info",
                        // state: { data: "Customer Information" },
                      }}
                    >
                      Create new customer
                    </Link>
                    {/* <Button onClick={handleClick}>Create new Customer</Button> */}
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
            </div>
            <b style={{ marginLeft: "10%" }}>RFP 001</b>
          </div>
          <div className="">
            <Filter onProp={handleProps} />
          </div>
        </div>

        
        <div className="mt-4">
          <table id="customersCreateNew">
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Product</th>
              <th className="text-center">Description</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Unit Price</th>
              <th className="text-center">Tax</th>
              <th className="text-center">Discount</th>
              <th className="text-center">Sub Total</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <TextField placeholder="Product Name" />
              </td>
              <td>
                <TextField placeholder="Short Description" />
              </td>
              <td>
                <TextField placeholder="Quantity" />
              </td>
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
                <TextField placeholder="Product Name" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <TextField placeholder="Product Name" />
              </td>
              <td>
                <TextField placeholder="Short Description" />
              </td>
              <td>
                <TextField placeholder="Quantity" />
              </td>
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
                <TextField placeholder="Product Name" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <TextField placeholder="Product Name" />
              </td>
              <td>
                <TextField placeholder="Short Description" />
              </td>
              <td>
                <TextField placeholder="Quantity" />
              </td>
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
                <TextField placeholder="Product Name" />
              </td>
            </tr>
          </table>
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

export default withRouter(NewSalesOrder);
