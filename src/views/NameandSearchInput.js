import React from "react";
import { Typography } from "@material-ui/core";
import SearchIpnut from "./searchInput";
import Banner from "./NewSearchInput";
import "../css/sales.css";

export default function NameandSearchInput() {
  return (
    <div className="d-inline-flex display">
      <div className="box pl-2 mt-4">
        <Banner>Sales Dashboard</Banner>
      </div>
      <div className="box overlay">
        <SearchIpnut />
      </div>
    </div>
  );
}
