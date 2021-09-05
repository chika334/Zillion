import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { station } from "../../../../../../Data/station";

export default function Station() {
  return (
    <div>
      <div className="text-center mb-5 mt-4">
        <h4>Your Doorstep</h4>
      </div>
      <div>
        <div className="allnewLocation mb-2">
          <label>Country</label>
          <select className="ml-5 w-100">
            <option>Select</option>
            <option>Nigeria</option>
          </select>
        </div>
        <div className="allnewLocation mb-2">
          <label>Country</label>
          <select className="ml-5 w-100">
            <option>Select</option>
            <option>Nigeria</option>
          </select>
        </div>
        <div className="allnewLocation mb-2">
          <label>Country</label>
          <select className="ml-5 w-100">
            <option>Select</option>
            <option>Nigeria</option>
          </select>
        </div>
        <div className="allnewLocation mb-2">
          <label>Country</label>
          <select className="ml-5 w-100">
            <option>Select</option>
            <option>Nigeria</option>
          </select>
        </div>
        <div className="allnewLocation mb-2">
          <label>Country</label>
          <select className="ml-5 w-100">
            <option>Select</option>
            <option>Nigeria</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <TextField id="outlined-basic" className="w-100" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}
