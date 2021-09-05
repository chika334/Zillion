import React from "react";
import PaypalEmail from "./Cheque/ChequeNumber";
import PaypalName from "./Cheque/ChequeAmount";

export default function Paypal() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Cheque details</h4>
      <div className="allnewDoor">
        <PaypalEmail />
        <PaypalName />
      </div>
    </div>
  );
}
