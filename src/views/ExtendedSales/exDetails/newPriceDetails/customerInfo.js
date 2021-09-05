import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../otherDesigns/NewSearchInput";
import { withRouter, useHistory } from "react-router-dom";
import SearchIpnut from "../otherDesigns/searchInput";
import PersonalDetailsForm from "./personalDetailsForm";
import BusinessDetail from "./BusinessDetail";
import { Checkbox, Button } from "@material-ui/core";
import Profile from "./profile";

export default function CustomerInfo() {
  let history = useHistory();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="property-area pt-5">
      <div className="container">
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <br />
        <div className="d-inline-flex display">
          <div className="box pl-2 mt-4">
            <Banner>Customer information</Banner>
          </div>
          <div className="box overlay">
            <SearchIpnut />
          </div>
        </div>
      </div>
      <div className="container allnew w-100">
        <div className="w-50">
          <div style={{ float: "left" }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <label>
              <b>Indiviual</b>
            </label>
          </div>
          <div>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <label>
              <b>Company</b>
            </label>
          </div>
          <PersonalDetailsForm />
          <hr />
          <BusinessDetail />
        </div>
        <div className="mt-5">
          <Profile />
        </div>
      </div>
      <div>
        <Button>Cancel</Button>
        <Button variant="contained" style={{ backgroundColor: "green" }}>
          save
        </Button>
      </div>
    </div>
  );
}
