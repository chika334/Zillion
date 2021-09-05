import React from "react";
import { withRouter } from "react-router-dom";
import AdvertTable from "./otherDesigns/tableDesign";

function AllRFP(props) {
  return (
    <div>
      <div className="container">
        <AdvertTable
          dataTable={props.dataTable}
          order={props.order}
          orderBy={props.orderBy}
        />
      </div>
    </div>
  );
}

export default withRouter(AllRFP);
