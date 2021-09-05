import React from "react";
import { Typography } from "@material-ui/core";
import SearchIpnut from "./searchInput";
import Banner from "./NewSearchInput";
import "../../../../css/sales.css";
import { withRouter } from "react-router-dom";

function NameandSearchInput(props) {
  // console.log(props.location);
  return (
    <div className="d-inline-flex display">
      <div className="box pl-2 mt-4">
        <Banner>{props.location.state.data} Dashboard</Banner>
      </div>
      <div className="box overlay">
        <SearchIpnut />
      </div>
    </div>
  );
}

export default withRouter(NameandSearchInput);
