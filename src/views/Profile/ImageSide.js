import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, Grid } from "@material-ui/core";
import SomeDetails from "./SomeDetails";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    padding: "70px",
    // paddingTop: "5px",
    margin: "100px",
    marginTop: "40px",
    marginBottom: "50px",
    backgroundColor: deepPurple[500],
  },
}));

export default function ImageSide() {
  const classes = useStyles();
  const user = useSelector((state) => state.authUser);

  function makeid(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

  return (
    <div className="row">
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} xl={4}>
          <Card className="bg-dark">
            <div className="d-flex justify-content-center">
              <Avatar className={classes.purple}>
                <span className="text-center">{makeid(2)}</span>
              </Avatar>
            </div>
          
            <p className="p-2 text-center">
              Welcome to Mippple pay{" "}
              {user.isAuthenticated ? user.user.firstName : ""}. At Mipple pay
              all your bills are paid fast and we are very reliable.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} xl={4}>
          <div>
            <SomeDetails />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
