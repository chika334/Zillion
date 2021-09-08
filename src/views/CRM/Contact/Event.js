import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MessageIcon from "@material-ui/icons/Message";
import meeting from "../../../css/images/meetings.png";
import conference from "../../../css/images/conference.png";
import { SiGmail } from "react-icons/si";
import prfile from "../../../css/images/prfile.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default function Event() {
  return (
    <div>
      <div className="allnew">
        <label>Activity Type</label>
        <div>
          <PhoneIcon className="ml-3" width="30" />
          <MessageIcon className="ml-3" />
          <img className="ml-3" src={meeting} width="40" />
          <img className="ml-3" src={conference} width="40" />
          <SiGmail />
          <img className="ml-3" src={prfile} width="30" />
          <AddCircleIcon className="ml-3" />
        </div>
      </div>
    </div>
  );
}
