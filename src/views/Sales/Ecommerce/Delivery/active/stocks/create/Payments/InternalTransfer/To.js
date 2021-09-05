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
        <label>Chart of Account</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <label>Amount</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <label>Balance Before Transfer</label>
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
