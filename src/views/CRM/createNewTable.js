import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function CreateNewTable() {
  const [hoverOne, setHoverOne] = React.useState(false);
  const [hoverTwo, setHoverTwo] = React.useState(false);
  const [hoverThree, setHoverThree] = React.useState(false);
  const [hoverFour, setHoverFour] = React.useState(false);
  const [hoverFive, setHoverFive] = React.useState(false);
  const [hoverSix, setHoverSix] = React.useState(false);
  const [hoverSeven, setHoverSeven] = React.useState(false);
  const [hoverEight, setHoverEight] = React.useState(false);
  const [hoverNine, setHoverNine] = React.useState(false);
  const [hoverTen, setHoverTen] = React.useState(false);

  // second
  const [secondHoverOne, setSecondHoverOne] = React.useState(false);
  const [secondHoverTwo, setSecondHoverTwo] = React.useState(false);
  const [secondHoverThree, setSecondHoverThree] = React.useState(false);
  const [secondHoverFour, setSecondHoverFour] = React.useState(false);
  const [secondHoverFive, setSecondHoverFive] = React.useState(false);
  const [secondHoverSix, setSecondHoverSix] = React.useState(false);
  const [secondHoverSeven, setSecondHoverSeven] = React.useState(false);
  const [secondHoverEight, setSecondHoverEight] = React.useState(false);
  const [secondHoverNine, setSecondHoverNine] = React.useState(false);
  const [secondHoverTen, setSecondHoverTen] = React.useState(false);

  // third
  const [thirdHoverOne, setThirdHoverOne] = React.useState(false);
  const [thirdHoverTwo, setThirdHoverTwo] = React.useState(false);
  const [thirdHoverThree, setThirdHoverThree] = React.useState(false);
  const [thirdHoverFour, setThirdHoverFour] = React.useState(false);
  const [thirdHoverFive, setThirdHoverFive] = React.useState(false);
  const [thirdHoverSix, setThirdHoverSix] = React.useState(false);
  const [thirdHoverSeven, setThirdHoverSeven] = React.useState(false);
  const [thirdHoverEight, setThirdHoverEight] = React.useState(false);
  const [thirdHoverNine, setThirdHoverNine] = React.useState(false);
  const [thirdHoverTen, setThirdHoverTen] = React.useState(false);

  // fouth
  const [fourthHoverOne, setFourthHoverOne] = React.useState(false);
  const [fourthHoverTwo, setFourthHoverTwo] = React.useState(false);
  const [fourthHoverThree, setFourthHoverThree] = React.useState(false);
  const [fourthHoverFour, setFourthHoverFour] = React.useState(false);
  const [fourthHoverFive, setFourthHoverFive] = React.useState(false);
  const [fourthHoverSix, setFourthHoverSix] = React.useState(false);
  const [fourthHoverSeven, setFourthHoverSeven] = React.useState(false);
  const [fourthHoverEight, setFourthHoverEight] = React.useState(false);
  const [fourthHoverNine, setFourthHoverNine] = React.useState(false);
  const [fourthHoverTen, setFourthHoverTen] = React.useState(false);

  const [value, setValue] = React.useState(false);

  const handleSelectClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <table id="customersCreateNew">
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Property Name</th>
          <th className="text-center">Property Type</th>
          <th className="text-center">Company</th>
          <th className="text-center">Product</th>
          <th className="text-center">Budget</th>
          <th className="text-center">Authority</th>
          <th className="text-center">Time</th>
          <th className="text-center">Total</th>
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Individual</td>
          <td>JDU Enterprises</td>
          {/* first */}
          <td
            onMouseEnter={() => {
              setHoverOne(true);
            }}
            onMouseLeave={() => {
              setHoverOne(false);
            }}
          >
            {hoverOne ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverOne(true);
            }}
            onMouseLeave={() => {
              setSecondHoverOne(false);
            }}
          >
            {secondHoverOne ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverOne(true);
            }}
            onMouseLeave={() => {
              setThirdHoverOne(false);
            }}
          >
            {thirdHoverOne ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverOne(true);
            }}
            onMouseLeave={() => {
              setFourthHoverOne(false);
            }}
          >
            {fourthHoverOne ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          {/* first end */}
          <td>0</td>
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Maria Anders</td>
          <td>Individual</td>
          <td>MJI Club</td>
          {/* second */}
          <td
            onMouseEnter={() => {
              setHoverTwo(true);
            }}
            onMouseLeave={() => {
              setHoverTwo(false);
            }}
          >
            {hoverTwo ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverTwo(true);
            }}
            onMouseLeave={() => {
              setSecondHoverTwo(false);
            }}
          >
            {secondHoverTwo ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverTwo(true);
            }}
            onMouseLeave={() => {
              setThirdHoverTwo(false);
            }}
          >
            {thirdHoverTwo ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverTwo(true);
            }}
            onMouseLeave={() => {
              setFourthHoverTwo(false);
            }}
          >
            {fourthHoverTwo ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* second ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>John Doe</td>
          <td>Individual</td>
          <td>Elite Hub</td>
          {/* third */}
          <td
            onMouseEnter={() => {
              setHoverThree(true);
            }}
            onMouseLeave={() => {
              setHoverThree(false);
            }}
          >
            {hoverThree ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverThree(true);
            }}
            onMouseLeave={() => {
              setSecondHoverThree(false);
            }}
          >
            {secondHoverThree ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverThree(true);
            }}
            onMouseLeave={() => {
              setThirdHoverThree(false);
            }}
          >
            {thirdHoverThree ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverThree(true);
            }}
            onMouseLeave={() => {
              setFourthHoverThree(false);
            }}
          >
            {fourthHoverThree ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* third ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Mary Jane</td>
          <td>Individual</td>
          <td>MIC Teams</td>
          {/* fourth */}
          <td
            onMouseEnter={() => {
              setHoverFour(true);
            }}
            onMouseLeave={() => {
              setHoverFour(false);
            }}
          >
            {hoverFour ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverFour(true);
            }}
            onMouseLeave={() => {
              setSecondHoverFour(false);
            }}
          >
            {secondHoverFour ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverFour(true);
            }}
            onMouseLeave={() => {
              setThirdHoverFour(false);
            }}
          >
            {thirdHoverFour ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverFour(true);
            }}
            onMouseLeave={() => {
              setFourthHoverFour(false);
            }}
          >
            {fourthHoverFour ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* fourth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Mary Jane Volunters</td>
          <td>Organization</td>
          <td>Grace Ventures</td>
          {/* fifth */}
          <td
            onMouseEnter={() => {
              setHoverFive(true);
            }}
            onMouseLeave={() => {
              setHoverFive(false);
            }}
          >
            {hoverFive ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverFive(true);
            }}
            onMouseLeave={() => {
              setSecondHoverFive(false);
            }}
          >
            {secondHoverFive ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverFive(true);
            }}
            onMouseLeave={() => {
              setThirdHoverFive(false);
            }}
          >
            {thirdHoverFive ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverFive(true);
            }}
            onMouseLeave={() => {
              setFourthHoverFive(false);
            }}
          >
            {fourthHoverFive ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* fifth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Jane Doe</td>
          <td>Individual</td>
          <td>HLT Life</td>
          {/* sixth */}
          <td
            onMouseEnter={() => {
              setHoverSix(true);
            }}
            onMouseLeave={() => {
              setHoverSix(false);
            }}
          >
            {hoverSix ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverSix(true);
            }}
            onMouseLeave={() => {
              setSecondHoverSix(false);
            }}
          >
            {secondHoverSix ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverSix(true);
            }}
            onMouseLeave={() => {
              setThirdHoverSix(false);
            }}
          >
            {thirdHoverSix ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverSix(true);
            }}
            onMouseLeave={() => {
              setFourthHoverSix(false);
            }}
          >
            {fourthHoverSix ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* sixth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Individual</td>
          <td>Glo Comms</td>
          {/* seventh */}
          <td
            onMouseEnter={() => {
              setHoverSeven(true);
            }}
            onMouseLeave={() => {
              setHoverSeven(false);
            }}
          >
            {hoverSeven ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverSeven(true);
            }}
            onMouseLeave={() => {
              setSecondHoverSeven(false);
            }}
          >
            {secondHoverSeven ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverSeven(true);
            }}
            onMouseLeave={() => {
              setThirdHoverSeven(false);
            }}
          >
            {thirdHoverSeven ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverSeven(true);
            }}
            onMouseLeave={() => {
              setFourthHoverSeven(false);
            }}
          >
            {fourthHoverSeven ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* seventh ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Daniel Smart</td>
          <td>Individual</td>
          <td>SKI Finance</td>
          {/* eighth */}
          <td
            onMouseEnter={() => {
              setHoverEight(true);
            }}
            onMouseLeave={() => {
              setHoverEight(false);
            }}
          >
            {hoverEight ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverEight(true);
            }}
            onMouseLeave={() => {
              setSecondHoverEight(false);
            }}
          >
            {secondHoverEight ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverEight(true);
            }}
            onMouseLeave={() => {
              setThirdHoverEight(false);
            }}
          >
            {thirdHoverEight ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverEight(true);
            }}
            onMouseLeave={() => {
              setFourthHoverEight(false);
            }}
          >
            {fourthHoverEight ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* eighth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Dangote limited</td>
          <td>Organization</td>
          <td>J Club</td>
          {/* ninth */}
          <td
            onMouseEnter={() => {
              setHoverNine(true);
            }}
            onMouseLeave={() => {
              setHoverNine(false);
            }}
          >
            {hoverNine ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverNine(true);
            }}
            onMouseLeave={() => {
              setSecondHoverNine(false);
            }}
          >
            {secondHoverNine ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverNine(true);
            }}
            onMouseLeave={() => {
              setThirdHoverNine(false);
            }}
          >
            {thirdHoverNine ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverNine(true);
            }}
            onMouseLeave={() => {
              setFourthHoverNine(false);
            }}
          >
            {fourthHoverNine ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* ninth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              // value={value}
              type="radio"
            />
          </td>
          <td>Paris spécialités</td>
          <td>Individual</td>
          <td>JDV</td>
          {/* tenth */}
          <td
            onMouseEnter={() => {
              setHoverTen(true);
            }}
            onMouseLeave={() => {
              setHoverTen(false);
            }}
          >
            {hoverTen ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setSecondHoverTen(true);
            }}
            onMouseLeave={() => {
              setSecondHoverTen(false);
            }}
          >
            {secondHoverTen ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setThirdHoverTen(true);
            }}
            onMouseLeave={() => {
              setThirdHoverTen(false);
            }}
          >
            {thirdHoverTen ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td
            onMouseEnter={() => {
              setFourthHoverTen(true);
            }}
            onMouseLeave={() => {
              setFourthHoverTen(false);
            }}
          >
            {fourthHoverTen ? (
              <div style={{ float: "left" }} className="square">
                <GiCheckMark style={{ color: "#fff" }} width="30" />
              </div>
            ) : (
              <>
                <div style={{ float: "left" }} className="square"></div>
                <GiCheckMark width="30" />
              </>
            )}
          </td>
          <td>0</td>
          {/* tenth ends */}
        </tr>
      </table>
    </div>
  );
}
