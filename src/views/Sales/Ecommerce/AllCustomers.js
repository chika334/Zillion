import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EcoAdvertTotal from "./Products/EcoAdvertTotal";
import Filter from "./Products/Filter";
import ProductSort from "./Products/ProductSort";
import AdvertTable from "./Products/AdvertTable";
import Banner from "../NewSearchInput";
import SearchIpnut from "../searchInput";
import "../../../css/advertLink.css";
import { useLocation, withRouter } from "react-router-dom";

function Index() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const location = useLocation();
  const { name } = location.state;
  const nameDetails = name === "Total" ? "All" : name;

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
      {/* <EcoAdvertTotal /> */}
      <div className="displayName">
        <div className="">
          <Banner>{nameDetails}</Banner>
        </div>
        <div className="">
          <SearchIpnut />
        </div>
      </div>
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

export default withRouter(Index);
