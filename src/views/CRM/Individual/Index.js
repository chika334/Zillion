import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import naija from "../../../css/images/naijaLogo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
  },
}));

export default function Index(props) {
  const [values, setValues] = useState({});
  const classes = useStyles();

  const handleChange = (e, name) => {
    const newValues = { ...values };
    newValues[name] = e.target.value;
    setValues(newValues);
  };

  const handleIndividualDone = (values) => {
    console.log("daniel");
  };

  console.log(props);
  return (
    <div>
      <div className="p-3">
        <div>
          <div className="">
            <hr />
            <div>
              <div className="allnew single-feature">
                <div className="mt-3">
                  Name:
                  <select
                    className=""
                    onChange={(e) => handleChange(e, "title")}
                  >
                    <option value="">Select title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
                <TextField
                  onChange={(e) => handleChange(e, "firstName")}
                  id="standard-basic"
                  label="First Name"
                  // name="firstName"
                  value={values["firstName"] ? values["firstName"] : ""}
                />
                <TextField
                  onChange={(e) => handleChange(e, "lastName")}
                  id="standard-basic"
                  label="Last Name"
                  value={values["lastName"] ? values["lastName"] : ""}
                />
              </div>
              <div>
                <div>
                  <label style={{ float: "left" }} className="mt-2 mr-3">
                    LinkedIn:
                  </label>
                  <div>
                    <TextField
                      style={{ width: "80%" }}
                      onChange={(e) => handleChange(e, "LinkedIn")}
                      id="standard-basic"
                      label="LinkedIn"
                      name="LinkedIn"
                      value={values["LinkedIn"] ? values["LinkedIn"] : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 allnew">
                <div>
                  <label className="mt-3">Remarkable Days:</label>
                </div>
                <div style={{ float: "left" }}>
                  <div className="mt-4">
                    <select onChange={(e) => handleChange(e, "remark")}>
                      <option value="Choose one or create">
                        Choose one or create new
                      </option>
                      <option value="Choose one or create">
                        Choose one or create new
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <TextField
                    id="date"
                    label="date"
                    type="date"
                    // defaultValue="2017-05-24"
                    // onChange={(e) => handleChange(e, "date")}
                    name="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-3">
                  Organization:
                  <select
                    onChange={(e) => handleChange(e, "organization")}
                    name="organization"
                    style={{ width: "80%" }}
                  >
                    <option value="Choose one or create new">
                      Choose one or create new
                    </option>
                    <option value="Choose one or create new">
                      Choose one or create new
                    </option>
                  </select>
                </div>
                <div>
                  <label style={{ float: "left" }} className="mt-3 mr-3">
                    Website:
                  </label>
                  <div>
                    <TextField
                      style={{ width: "80%" }}
                      onChange={(e) => handleChange(e, "website")}
                      name="website"
                      id="standard-basic"
                      label="Website"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  Position:
                  <select
                    onChange={(e) => handleChange(e, "position")}
                    name="position"
                    style={{ width: "80%" }}
                  >
                    <option value="Choose one or create new">
                      Choose one or create new
                    </option>
                    <option value="Choose one or create new">
                      Choose one or create new
                    </option>
                  </select>
                </div>
                <div className="mt-4">
                  <div style={{ float: "left" }} className="mt-4">
                    Phone:
                    <select
                      onChange={(e) => handleChange(e, "phone")}
                      name="phone"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+233">+233</option>
                    </select>
                  </div>
                  <TextField
                    style={{ width: "70%" }}
                    onChange={(e) => handleChange(e, "PNumber")}
                    id="standard-basic"
                    name="PNumber"
                    label="Phone Number"
                  />
                </div>
                <div className="mt-4">
                  <label style={{ float: "left" }} className="mt-3 mr-3">
                    Email:
                  </label>
                  <div>
                    <TextField
                      style={{ width: "80%" }}
                      onChange={(e) => handleChange(e, "email")}
                      id="standard-basic"
                      name="email"
                      label="email"
                    />
                  </div>
                </div>
                <div className="allnew mt-3">
                  <label className="mt-3">Name:</label>
                  <div className="mt-3">
                    <select onChange={(e) => handleChange(e, "country")}>
                      <option value="Country">Country</option>
                      <option value="Country">Country</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <select onChange={(e) => handleChange(e, "state")}>
                      <option value="state">State</option>
                      <option value="state">State</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <select onChange={(e) => handleChange(e, "area")}>
                      <option value="area">Area</option>
                      <option value="area">Area</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ float: "left" }} className="mt-3 mr-3">
                    Address:
                  </label>
                  <div>
                    <TextField
                      style={{ width: "80%" }}
                      onChange={(e) => handleChange(e, "address")}
                      id="standard-basic"
                      label="Address"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogActions>
          <Button onClick={props.handleClosethree} color="primary">
            Cancel
          </Button>
          <Button onClick={handleIndividualDone} color="primary">
            Done
          </Button>
        </DialogActions>
      </div>
    </div>
  );
}
