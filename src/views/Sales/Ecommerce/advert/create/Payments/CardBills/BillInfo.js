import React from "react";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";

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

export default function BillInfo() {
  // const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="mt-5">
      <h6>Card Info</h6>
      <div>
        <label>FULL NAME</label>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <b>VISA</b>
              </InputAdornment>
            ),
          }}
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
        <div />
        <div>
          <label>FULL NAME</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </div>
  );
}
