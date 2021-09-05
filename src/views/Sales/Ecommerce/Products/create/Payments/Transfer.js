import React from "react";
import Customer from "./Transfer/Customer";
import Account from "./Transfer/Account";

export default function Transfer() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Transfer Details</h4>
      <div className="allnewDoor">
        <Customer />
        <Account />
      </div>
    </div>
  );
}
