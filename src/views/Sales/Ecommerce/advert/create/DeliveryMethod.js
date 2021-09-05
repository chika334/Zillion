import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Station from "./Delivery/station";
import DoorStep from "./Delivery/DoorStep";
import valid from "../../../../../css/images/valid.png";

export default function DeliveryMethod() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div className="property-area pt-5">
      <div className="container">
        <span>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          role="button"
          tabIndex="3"
        >
          {hover ? (
            <div className="validIcon">
              <img src={valid} width="20" />
              <button style={{ padding: "0px", borderRadius: 0 }}>
                <a href="/ecommerce/payment/payment-method">
                  Proceed to Payment
                </a>
              </button>
            </div>
          ) : (
            <div className="validIcon">
              <img src={valid} width="20" />
            </div>
          )}
        </div>

        <h3 className="text-center">
          How would you like your goods delivered?
        </h3>
        <div className="allnewDoor">
          <Station />
          <DoorStep />
        </div>
      </div>
    </div>
  );
}
