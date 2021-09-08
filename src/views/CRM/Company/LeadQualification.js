import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "../../NameandSearchInput";
import Filter from "../../filter";
import { withRouter, useHistory } from "react-router-dom";

function LeadQualification() {
  let history = useHistory();
  return (
    <div>
      <span onClick={history.goBack}>
        <FontAwesomeIcon
          style={{ color: "#3c44b1", width: "50", height: "30" }}
          icon={["fas", "arrow-circle-left"]}
        />
      </span>
      <br />
      <NameandSearchInput />
      <div className="displayFilter">
        <Button onClick={handleClickOpen} variant="contained" color="primary">
          Create New
        </Button>
        <Filter onProp={handleProps} />
      </div>
    </div>
  );
}

export default withRouter(LeadQualification);
