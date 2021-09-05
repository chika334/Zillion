import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import "../../../../css/textSize.css";

export default function personalDetailsForm() {
  const handleChange = () => {};
  return (
    <div className="property-area pt-3">
      <div className="">
        <h5>Personal Details</h5>
        <form>
          <div className="allnewText">
            <label className="pt-3">Name: </label>
            <div className="m-0 ml-5 pl-3 p-0">
              <TextField
                className="textSize"
                id="standard-basic"
                label="First Name"
              />
              <TextField
                className="textSize"
                id="standard-basic"
                label="Middle Name"
              />
              <TextField
                className="textSize"
                id="standard-basic"
                label="Last Name"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Legal Name: </label>
            <div className="m-0 ml-3 p-0">
              <TextField
                className="legalSize"
                id="standard-basic"
                label="First Name"
              />
              <TextField
                className="legalSize"
                id="standard-basic"
                label="Middle Name"
              />
              <TextField
                className="legalSize"
                id="standard-basic"
                label="Last Name"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Location: </label>
            <div className="legalSize ml-4 pl-3 m-0 p-0">
              <TextField
                id="standard-select-currency"
                select
                value="all"
                className="mr-5"
                onChange={handleChange}
                helperText="Please select your country"
              >
                <MenuItem value="all">all</MenuItem>
              </TextField>
              <TextField
                id="standard-select-currency"
                select
                value="all"
                onChange={handleChange}
                helperText="Please select your country"
              >
                <MenuItem value="all">all</MenuItem>
              </TextField>
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Address: </label>
            <div className="m-0 ml-5 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Address"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Phone: </label>
            <div className="m-0 ml-5 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Phone"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Email: </label>
            <div className="m-0 ml-5 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Email"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
