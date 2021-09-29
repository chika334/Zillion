import React from "react";
import AllRFP from "./AllRFP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Filter from "./otherDesigns/filter";
import "../../../css/sales.css";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import Banner from "./otherDesigns/NewSearchInput";
import InputBase from "@material-ui/core/InputBase";
// import SearchIpnut from "./otherDesigns/searchInput";

import { AllProducts } from "../../../api";

function Index(props) {
  //Testing Product API!
  AllProducts(1, 10, 'services')

  let history = useHistory();
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
  return (
    <div className="property-area pt-5">
      <div className="container paddinContainer">
        <div>
          <span onClick={history.goBack}>
            <FontAwesomeIcon
              style={{ color: "#3c44b1", width: "50", height: "30" }}
              icon={["fas", "arrow-circle-left"]}
            />
          </span>
          <br />
          <div>
            <div style={{ marginRight: "29%", float: "left" }} className="box">
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
        </div>
        <div>
          <AllRFP dataTable={tableName} order={order} orderBy={orderBy} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Index);
