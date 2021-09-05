import React from "react";
import BitcoinWallet from "./BitcoinInfo/BitcoinWallet";
import WalletAddress from "./BitcoinInfo/WalletAddress";

export default function Paypal() {
  return (
    <div className="mt-5">
      <h4 className="text-center">Bitcoin Wallet Info</h4>
      <div className="allnewDoor">
        <BitcoinWallet />
        <WalletAddress />
      </div>
    </div>
  );
}
