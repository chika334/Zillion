import React from "react";
import PaypalEmail from "./Cash/Cash";
import PaypalName from "./Cash/QrCode";

export default function Paypal() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Card Payment</h4>
      <div className="allnewDoor">
        <PaypalEmail />
        <PaypalName />
      </div>
    </div>
  );
}
