import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import "../../../../css/textSize.css";

export default function Account() {
  const handleChange = () => {};
  return (
    <div className="mt-5">
      <h5>Account Details</h5>
      <div className="allnewText bg-dark">
        <label className="pt-3">Account: </label>
        <div className="legalSize ml-4 pl-3 m-0 p-0">
          <TextField
            id="standard-select-currency"
            select
            value="all"
            className="mr-5 otherSize"
            onChange={handleChange}
            helperText="Please select your country"
          >
            <MenuItem value="all">all</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="allnewText">
        <label className="pt-3">Account: </label>
        <div className="legalSize ml-4 pl-3 m-0 p-0">
          <TextField
            id="standard-select-currency"
            select
            value="all"
            className="mr-5 otherSize"
            onChange={handleChange}
            helperText="Please select your country"
          >
            <MenuItem value="all">all</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="allnewText">
        <label className="pt-3">Tax ID: </label>
        <div className="m-0 ml-4 pl-3 p-0">
          <TextField
            className="mr-5 otherSize"
            id="standard-basic"
            label="First Name"
          />
        </div>
      </div>
    </div>
  );
}
