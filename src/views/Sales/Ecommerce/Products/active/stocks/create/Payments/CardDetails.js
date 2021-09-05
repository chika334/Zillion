import React from "react";
import CardInfo from "./CardBills/CardInfo";
import BillInfo from "./CardBills/BillInfo";

export default function CardDetails() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Card Payment</h4>
      <div className="allnewDoor">
        <CardInfo />
        <BillInfo />
      </div>
    </div>
  );
}
