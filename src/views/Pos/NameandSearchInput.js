import React from "react";
import { Typography } from "@material-ui/core";
import SearchIpnut from "./searchInput";
import Banner from './NewSearchInput'
import "../../css/pos.css"

export default function NameandSearchInput() {
  return (
    <div className="displays">
      <div className="boxpos pl-2 mt-4">
        <Banner>Point of Sale Dashboard</Banner>
      </div>
      <div
        className="boxpos overlaypos"
      >
        <SearchIpnut />
      </div>
    </div>
  );
}
