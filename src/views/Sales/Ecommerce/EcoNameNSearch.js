import React from "react";
import { Typography } from "@material-ui/core";
import Banner from '../NewSearchInput'
import SearchIpnut from "./EcoSeacrchInput";
import "../../../css/ecommerce.css"

export default function NameandSearchInput() {
  return (
    <div className="displays">
      <div className="box mt-4">
        <Banner>E-commerce Dashboard</Banner>
      </div>
      <div
        className="box overlay"
      >
        <SearchIpnut />
      </div>
    </div>
  );
}
