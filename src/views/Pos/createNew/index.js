import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../NewSearchInput";
import { withRouter, useHistory } from "react-router-dom";
import SearchIpnut from "../searchInput";
import PersonalDetailsForm from "./personalDetailsForm";
import BusinessDetail from "./BusinessDetail";
import { Checkbox, Button } from "@material-ui/core";
// import Profile from "./profile";

export default function CustomerInfo() {
  let history = useHistory();
  const [checked, setChecked] = React.useState(true);
  const [active, setActive] = React.useState("Services");

  const someFunct = (name) => {
    setActive(name);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  console.log(active);
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
            <Banner>Product Configuration</Banner>
          </div>
        </div>
      </div>
      <div className="container allnew w-100">
        <div className="w-50">
          <div>
            <p>Product Type</p>
            <div style={{ float: "left" }}>
              <Button
                className={active === "Services" ? "activeButton" : ""}
                // value="Services"
                onClick={() => someFunct("Services")}
                style={{ backgroundColor: active === "Services" ? "blue" : "" }}
              >
                Services
              </Button>
            </div>
            <div style={{ float: "left" }}>
              <Button
                className={active === "Goods" ? "activeButton" : ""}
                // value="Goods"
                onClick={() => someFunct("Goods")}
                style={{ backgroundColor: active === "Goods" ? "blue" : "" }}
              >
                Goods
              </Button>
            </div>
          </div>
          <PersonalDetailsForm />
        </div>
        <div className="mt-5">
          <BusinessDetail active={active} />
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
