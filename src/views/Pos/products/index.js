import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EcoAdvertTotal from "./EcoAdvertTotal";
import Filter from "./Filter";
import ProductSort from "./ProductSort";
import AdvertTable from "./AdvertTable";
import "../../../css/posProducts.css";

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
    <div className="posactiveProducts">
      <div className="container">
        <span>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
      </div>
      <EcoAdvertTotal />
      <div className="posdisplayFilter">
        <ProductSort />
        <Filter onProp={handleProps} />
      </div>
      <div className="container">
        <AdvertTable
          dataTable={tableName}
          order={order}
          orderBy={orderBy}
        />
      </div>
    </div>
  );
}
