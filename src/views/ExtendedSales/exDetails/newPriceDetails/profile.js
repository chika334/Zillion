import React from "react";
import profileImage from "../../../../css/images/profile.png";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccountDetails from "./Account";
import "../../../../css/textSize.css";

export default function profile() {
  return (
    <div>
      <div className="" style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ float: "left" }}>
          <div className="text-right">
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </div>
          <div className="text-right">30 total orders</div>
          <div className="text-right">$500,000 total order value</div>
          <div className="text-right">$200 last order value</div>
        </div>
        <img width="150" src={profileImage} />
      </div>
      <div className="block2">
        <AccountDetails />
      </div>
    </div>
  );
}
