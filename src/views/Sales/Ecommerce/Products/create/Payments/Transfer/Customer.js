import React from "react";
import { TextField } from "@material-ui/core";

export default function PaypalEmail() {
  // const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="mt-5">
      <div>
        <label>Customer Name</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <label>Bank</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
    </div>
  );
}
