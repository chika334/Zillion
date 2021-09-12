import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NameandSearchInput from "../otherDesigns/NameandSearchInput";
// import Table from "./table";
import "../../../../css/table.css";
import Banner from "../otherDesigns/NewSearchInput";
// import SearchIpnut from "../otherDesigns/searchInput";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory, withRouter } from "react-router-dom";
import gfamIcon1 from "../../../../css/icons/gfamIcon1.png";
import { Paper } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Filter from "../otherDesigns/filter";

function NewRequestPrice(props) {
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
        <div className="mt-5">
          <div
            style={{ marginRight: "55%", float: "left" }}
            // className="box"
          >
            <Button
              onClick={handleCreateNew}
              variant="contained"
              color="primary"
              // className="mr-5"
            >
              Create New
            </Button>
          </div>
          <div className="">
            <Filter onProp={handleProps} />
          </div>
        </div>
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
                    // state: { data: "Customer Information" },
                  }}
                >
                  Create new customer
                </Link>
                {/* <Button onClick={handleClick}>Create new Customer</Button> */}
              </div>
            ) : (
              <img className="ml-2" src={gfamIcon1} width="70" height="15" />
            )}
          </div>
        </div>
        <b style={{ marginLeft: "10%" }}>RFP 001</b>
        <div className="mt-4">
          <table id="customersCreateNew">
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Product</th>
              <th className="text-center">Description</th>
              <th className="text-center">Quantity</th>
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
            </tr>
          </table>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(NewRequestPrice);
