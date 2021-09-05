import React from "react";
import SearchIpnut from "../searchInput";
import Banner from "../NewSearchInput";
import "../../../css/advertLink.css";
import { useLocation, withRouter } from "react-router-dom";

function EcoAdvertTotal(props) {
  const location = useLocation();
  const { name } = location.state;
  const nameDetails = name === "Total" ? "All" : name;
  return (
    <div className="displayName">
      <div className="">
        <Banner>All Products</Banner>
      </div>
      <div className="">
        <SearchIpnut />
      </div>
    </div>
  );
}

export default withRouter(EcoAdvertTotal);
