import React, { useState } from "react";
import { station } from "../../../../../../Data/station";

export default function Station() {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);
  const [hoverFive, setHoverFive] = useState(false);
  const onHoverOne = () => {
    setHoverOne(true);
  };

  const onLeaveOne = () => {
    setHoverOne(false);
  };
  const onHoverTwo = () => {
    setHoverTwo(true);
  };

  const onLeaveTwo = () => {
    setHoverTwo(false);
  };
  const onHoverThree = () => {
    setHoverThree(true);
  };

  const onLeaveThree = () => {
    setHoverThree(false);
  };
  const onHoverFour = () => {
    setHoverFour(true);
  };

  const onLeaveFour = () => {
    setHoverFour(false);
  };

  const onHoverFive = () => {
    setHoverFive(true);
  };

  const onLeaveFive = () => {
    setHoverFive(false);
  };

  const onChangeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="text-center mb-5 mt-5">
        <h4>Pick Up Station</h4>
      </div>
      <div onChange={onChangeValue}>
        <div>
          <div className="allnewLocation">
            <input value="Maryland Mall" type="radio" />
            <div
              onMouseEnter={onHoverOne}
              onMouseLeave={onLeaveOne}
              role="button"
              tabIndex="-3"
            >
              {hoverOne ? (
                <div>
                  <label>Maryland Mall</label>
                  <label className="addressShow">
                    Address: 5, ijaodola street, Maryland Ikeja
                  </label>
                </div>
              ) : (
                "Maryland Mall"
              )}
            </div>
          </div>
        </div>
        <div className="allnewLocation">
          <input value="Ikeja Warehouse" type="radio" />
          <div
            onMouseEnter={onHoverTwo}
            onMouseLeave={onLeaveTwo}
            role="button"
            tabIndex="-3"
          >
            {hoverTwo ? (
              <div>
                <label>Ikeja Warehouse</label>
                <label className="addressShow">
                  Address: 5, ijaodola street, Maryland Ikeja
                </label>
              </div>
            ) : (
              "Ikeja Warehouse"
            )}
          </div>
        </div>
        <div className="allnewLocation">
          <input value="Isolo station" type="radio" />
          <div
            onMouseEnter={onHoverThree}
            onMouseLeave={onLeaveThree}
            role="button"
            tabIndex="-3"
          >
            {hoverThree ? (
              <div>
                <label>Isolo station</label>
                <label className="addressShow">
                  Address: 5, ijaodola street, Maryland Ikeja
                </label>
              </div>
            ) : (
              "Isolo station"
            )}
          </div>
        </div>
        <div className="allnewLocation">
          <input value="Virginia station" type="radio" />
          <div
            onMouseEnter={onHoverFour}
            onMouseLeave={onLeaveFour}
            role="button"
            tabIndex="-3"
          >
            {hoverFour ? (
              <div>
                <label>Virginia station</label>
                <label className="addressShow">
                  Address: 5, ijaodola street, Maryland Ikeja
                </label>
              </div>
            ) : (
              "Virginia station"
            )}
          </div>
        </div>
        <div className="allnewLocation">
          <input value="Hong Kong Post" type="radio" />
          <div
            onMouseEnter={onHoverFive}
            onMouseLeave={onLeaveFive}
            role="button"
            tabIndex="-3"
          >
            {hoverFive ? (
              <div>
                <label>Hong Kong Post</label>
                <label className="addressShow">
                  Address: 5, ijaodola street, Maryland Ikeja
                </label>
              </div>
            ) : (
              "Hong Kong Post"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
