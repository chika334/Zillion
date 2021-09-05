import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function CardInfo() {
  // const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="mt-5">
      <h6>Billing Info</h6>
      <div>
        <label>FULL NAME</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <label>FULL NAME</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div className="allnew">
        <div>
          <label>FULL NAME</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div>
          <label>FULL NAME</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
      <TextField
        id="outlined-select-currency-native"
        select
        fullWidth
        label="Native select"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
        variant="outlined"
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}
