import React from "react";
import { TextField, MenuItem, TextareaAutosize } from "@material-ui/core";
import "../../../css/textSize.css";

export default function personalDetailsForm() {
  const handleChange = () => {};
  return (
    <div className="property-area pt-5">
      <div className="">
        <hr />
        <form>
          <div className="m-0 p-0">
            <label className="pt-3">Name: </label>
            <TextField
              className="otherSize ml-5"
              id="standard-basic"
              label="Type product name here"
            />
          </div>
          <div className="m-0  p-0">
            <label className="pt-3">category: </label>
            <TextField
              className="otherSize ml-4"
              id="standard-basic"
              label="Middle Name"
            />
          </div>
          <div className="m-0  p-0">
            <label className="pt-3">Sub-category: </label>
            <TextField
              className="otherSize ml-2"
              id="standard-basic"
              label="Type Sub-category name here"
            />
          </div>
          <div className="m-0 p-0">
            <label className="pt-3">Variant: </label>
            <TextField
              className="otherSize ml-5"
              id="standard-basic"
              label="Type product Variant here"
            />
          </div>
          <div className="m-0  p-0">
            <label className="pt-3">Cost Price: </label>
            <TextField
              className="otherSize ml-4"
              id="standard-basic"
              label="Price in USD"
            />
          </div>
          <div className="m-0  p-0">
            <label className="pt-3">Selling Price: </label>
            <TextField
              className="otherSize ml-2"
              id="standard-basic"
              label="Price in USD"
            />
          </div>
          <div>
            <label className="pt-3">Tax: </label>
            <div className="legalSize ml-4 pl-3 m-0 p-0">
              <TextField
                id="standard-select-currency"
                select
                value="all"
                className="mr-5"
                onChange={handleChange}
                helperText="Please select your country"
              >
                <MenuItem value="all">Tax</MenuItem>
              </TextField>
            </div>
          </div>
          <div>
            <label>Product Description: </label>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
