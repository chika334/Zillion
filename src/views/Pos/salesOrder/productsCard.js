import React from "react";
import Tabs from "./Tabs";
import { Button } from "@material-ui/core";

export default function productsCard() {
  return (
    <div>
      <Tabs />
      <hr />
      <Button>Cancel Order</Button>
    </div>
  );
}
