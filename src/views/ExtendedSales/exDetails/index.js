import React from "react";
import AllRFP from "./AllRFP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Filter from "./otherDesigns/filter";
import "../../../css/sales.css";
import { Button } from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";

function Index(props) {
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
          <NameandSearchInput />
          <div className="displayFilter">
            <Button
              onClick={handleCreateNew}
              variant="contained"
              color="primary"
            >
              Create New
            </Button>
            <Filter onProp={handleProps} />
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
