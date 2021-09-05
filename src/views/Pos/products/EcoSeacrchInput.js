import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
// import '../../../css/sales.css'
// import '../../../css/ecommerce.css'
import "../../../css/posProducts.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className="posallnewsDetails">
      {/* <Paper component="form" className={classes.root}> */}
      <Paper component="form" className="possearchPaper">
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          disabled
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          // className={classes.input}
          className="possearchInputs"
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <Button
        className="buttonSearch"
        style={{ backgroundColor: "#3c44b1", color: "#fff" }}
      >
        SEARCH
      </Button>
    </div>
  );
}
