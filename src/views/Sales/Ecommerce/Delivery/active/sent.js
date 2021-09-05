import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import EcoAdvertTotal from "../EcoAdvertTotal";
import Filter from "../Filter";
import ProductSort from "../ProductSort";
import AdvertTable from "../AdvertTable";
import "../../../../../css/advertLink.css";

export default function Index() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };
  return (
    <div className="activeProducts">
      <div className="container">
        <span>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
      </div>
      <EcoAdvertTotal />
      <div className="displayFilter">
        <ProductSort />
        <Filter onProp={handleProps} />
      </div>
      <div className="container">
        <AdvertTable dataTable={tableName} order={order} orderBy={orderBy} />
      </div>
    </div>
  );
}
