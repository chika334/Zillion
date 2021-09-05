import React from "react";
import image from "../../../css/images/image.png";
import { TextField, MenuItem } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import AccountDetails from "./Account";
import "../../../css/textSize.css";
import { withRouter } from "react-router-dom";

function profile(props) {
  const handleChange = () => {};
  return (
    <div>
      <div
        // className="bg-dark"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div style={{ float: "right" }}>
          <br />
          <div className="allnewText">
            <p>Service Category Code</p>
            <p className="ml-3">GHT</p>
          </div>
          <div className="allnewText">
            <p className="mr-3">Service ID Code</p>
            <input className="removedBorder" id="standard-basic" name="help" />
          </div>
        </div>
        <img width="150" src={image} />
      </div>
      {props.active === "Services" ? (
        <div className="block2">
          <div className="allnewText">
            <label className="pt-3">Unit of Measure: </label>
            <select
              className="accountText removeSelectBorder ml-4"
              name="cars"
              id="cars"
              // className=""
              form="carform"
            >
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="allnewText mt-3">
            <p className="mr-3">One Service unit</p>
            <input className="removedBorder" id="standard-basic" name="help" />
            Minutes
          </div>
          <div className="allnewText mt-3">
            <p className="mr-3">Maximum Order Capacity</p>
            <input className="removedBorder" id="standard-basic" name="help" />
            Unit per hour
          </div>
        </div>
      ) : (
        <div className="block2">
          <div className="allnewText">
            <label className="pt-3">Unit of Measure: </label>
            <select
              className="accountText removeSelectBorder ml-4"
              name="cars"
              id="cars"
              // className=""
              form="carform"
            >
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="allnewText mt-3">
            <p className="mr-3">Available stock</p>
            <input
              className="accountText removeSelectBorder"
              id="standard-basic"
              name="help"
            />
          </div>
          <div className="allnewText mt-3">
            <p className="mr-3">MOQ</p>
            <input
              className="accountText removeSelectBorder"
              id="standard-basic"
              name="help"
            />
          </div>
          <div className="allnewText mt-3">
            <p className="mr-3">Reorder Level</p>
            <input
              className="accountText removeSelectBorder"
              id="standard-basic"
              name="help"
            />
          </div>
        </div>
      )}
      <div>
        <div className="mt-5">
          <div className="allnewText">
            <label className="disabledLabel pt-3">Unit of Measure: </label>
            <select
              className="accountText removeSelectBorder disabledInput ml-4"
              name="cars"
              id="cars"
              disabled="disabled"
              // className=""
              form="carform"
            >
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="allnewText">
            <label className="disabledLabel pt-3">Unit of Measure: </label>
            <select
              className="accountText removeSelectBorder disabledInput ml-4"
              name="cars"
              id="cars"
              disabled="disabled"
              // className=""
              form="carform"
            >
              <option value="volvo">Volvo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(profile);
