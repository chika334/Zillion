import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EcoAdvertTotal from "./Products/EcoAdvertTotal";
import Filter from "./Products/Filter";
import ProductSort from "./Products/ProductSort";
import AdvertTable from "./Products/AdvertTable";
import "../../../css/advertLink.css";

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
