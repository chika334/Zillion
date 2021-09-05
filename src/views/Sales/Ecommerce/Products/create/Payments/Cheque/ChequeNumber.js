import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";

export default function PaypalEmail() {
  // const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="mt-5">
      <small>Cheque Number</small>
      <div>
        <label>Pay</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <label>Address</label>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          fullWidth
          style={{ height: "100px", width: "100%" }}
          placeholder="Minimum 3 rows"
        />
      </div>
    </div>
  );
}
