import React from "react";
import Customer from "./InternalTransfer/From";
import Account from "./InternalTransfer/To";

export default function Transfer() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Internal Transfer</h4>
      <div className="allnewDoor">
        <Customer />
        <Account />
      </div>
    </div>
  );
}
