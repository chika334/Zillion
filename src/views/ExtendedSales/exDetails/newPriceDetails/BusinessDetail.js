import React from "react";
import { TextField, MenuItem } from "@material-ui/core";

export default function personalDetailsForm() {
  const handleChange = () => {};
  return (
    <div className="property-area pt-3">
      <div className="">
        <h5>Business Details</h5>
        <form>
          <div className="allnewText">
            <label className="pt-3">Company: </label>
            <div className="m-0 ml-4 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Type Company name here"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Website: </label>
            <div className="m-0 ml-5 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Type website name here"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Location: </label>
            <div className="legalSize ml-4 pl-3 m-0">
              <TextField
                id="standard-select-currency"
                select
                // label="Select"
                className="mr-5"
                value="all"
                onChange={handleChange}
                helperText="Please select your country"
              >
                <MenuItem value="all">Country</MenuItem>
              </TextField>
              <TextField
                id="standard-select-currency"
                select
                // label="Select"
                value="all"
                onChange={handleChange}
                helperText="Please select your state"
              >
                <MenuItem value="all">state</MenuItem>
              </TextField>
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Address: </label>
            <div className="m-0 ml-4 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Type Company name here"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Billing Address: </label>
            <div className="m-0 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Type Company name here"
              />
            </div>
          </div>
          <div className="allnewText">
            <label className="pt-3">Sales Person: </label>
            <div className="m-0 p-0">
              <TextField
                className="otherSize"
                id="standard-basic"
                label="Type Company name here"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
