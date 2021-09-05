import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import '../css/sales.css'

export default function filter() {
  return (
    <>
      <div
        className="pt-3 filterDetails"
        // className=""
        // style={{ position: "relative", left: "79%" }}
      >
        <span>
          <AssessmentIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <ChatBubbleIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <SettingsIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
          <AppsIcon style={{ color: "#3c44b1", width: "50", height: "20" }} />
          <ViewCompactIcon
            style={{ color: "#3c44b1", width: "50", height: "20" }}
          />
        </span>
      </div>
      <div className="hrbody" 
      // style={{ position: "absolute", left: "53%" }}
      >
        <hr
        className="hrLine" 
        // style={{ width: "500px" }} /
        />
      </div>
    </>
  );
}
