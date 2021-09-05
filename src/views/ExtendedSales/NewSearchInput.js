import React from "react";
import { Typography } from "@material-ui/core";

const Banner = ({ children }) => {
  return (
    <div className="">
      <Typography variant="h5" noWrap>
        <b style={{ color: "#3c44b1" }}>{children}</b>
      </Typography>
    </div>
  );
};

export default Banner;
