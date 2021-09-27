import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import dotIcons from "../../css/images/dotIcons.png";
import parse from "html-react-parser";
// import { timeEnd } from "console";

const headers = [
  "#",
  "Property Name",
  "Property Type",
  "Company",
  "Product",
  "Budget",
  "Authority",
  "Time",
  "Total",
];

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

  const [colour, setColour] = React.useState("");
  const [addCol, setAddCol] = React.useState(false);
  const [isChecked, setisChecked] = React.useState(false);

  const [id, setId] = React.useState([1]);
  // let [removeId, setRemoveId] = React.useState("9");
  let [removeId, setRemoveId] = React.useState([2, 3, 4, 5, 6, 7, 8]);
  // const [update, setUpdate] = React.useState(false);

  const handleSelectClick = (e) => {
    setisChecked(!isChecked);
    setHoverOne(!hoverOne);
    setHoverTwo(!hoverTwo);
    setHoverThree(!hoverThree);
    setHoverFour(!hoverFour);
    setHoverFive(!hoverFive);
    setHoverSix(!hoverSix);
    setHoverSeven(!hoverSeven);
  };

  const handleClosetwo = () => {
    setAddCol(false);
  };

  React.useEffect(() => {
    const total = document.getElementById("total").innerText;
    // console.log(total);
    isChecked === true && parseInt(total) > 60
      ? setColour("green")
      : isChecked == true && parseInt(total) > 45 && parseInt(total) < 60
      ? setColour("yellow")
      : setColour("red");
  }, [isChecked === true]);

  const [first, setfirst] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Alfreds Futterkiste</td>,
    <td id="3">Individual</td>,
    <td id="4">JDU Enterprises</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">100</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [second, setSecond] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Maria Anders</td>,
    <td id="3">Individual</td>,
    <td id="4">MJI Club</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">75</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [third, setThird] = React.useState([
    <td id="1">
      <input onChange={handleSelectClick} type="checkbox" checked={isChecked} />
    </td>,
    <td id="2">John Doe</td>,
    <td id="3">Individual</td>,
    <td id="4">Elite Hub</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">75</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [fourth, setFourth] = React.useState([
    <td id="1">
      <input onChange={handleSelectClick} type="checkbox" checked={isChecked} />
    </td>,
    <td id="2">Mary Jane</td>,
    <td id="3">Individual</td>,
    <td id="4">MIC Teams</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">75</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [fifth, setFifth] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Mary Jane Volunters</td>,
    <td id="3">Organization</td>,
    <td id="4">Grace Ventures</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">75</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [sixth, setSixth] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Jane Doe</td>,
    <td id="3">Individual</td>,
    <td id="4">HLT Life</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td id="total">25</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [seventh, setSeventh] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Laughing Bacchus Winecellars</td>,
    <td id="3">Individual</td>,
    <td id="4">Glo Comms</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td>0</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [eighth, setEighth] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Daniel Smart</td>,
    <td id="3">Individual</td>,
    <td id="4">SKI Finance</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td>0</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [nineth, setNineth] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Dangote limited</td>,
    <td id="3">Organization</td>,
    <td id="4">J Club</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td>0</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [tableTen, setTableTen] = React.useState([
    <td id="1">
      <input
        // checked={value === "on"}
        onChange={handleSelectClick}
        // value={value}
        type="checkbox"
        checked={isChecked}
      />
    </td>,
    <td id="2">Paris spécialités</td>,
    <td id="3">Individual</td>,
    <td id="4">JDV</td>,
    <td
      id="5"
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
    </td>,
    <td
      id="6"
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
    </td>,
    <td
      id="7"
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
    </td>,
    <td
      id="8"
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
    </td>,
    <td id="9">
      <td>0</td>
      <td style={{ backgroundColor: colour }}></td>
    </td>,
  ]);

  const [header, setHeader] = React.useState(
    headers.map((allData, index) => (
      // console.log("header", allData, index)
      <th id={index} contentEditable={true} className="text-center">
        <span
          style={{ cursor: "pointer", backgroundColor: "red" }}
          onClick={(e) => removeColumn(e, index)}
        >
          -
        </span>
        {allData}
      </th>
    ))
  );

  // const [header, setHeader] = React.useState([
  //   <th className="text-center">#</th>,
  //   <th id="2" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn("Prospect Name")}
  //     >
  //       -
  //     </span>
  //     Prospect Name
  //   </th>,
  //   <th id="3" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn("Prospect Type")}
  //     >
  //       -
  //     </span>
  //     Prospect Type
  //   </th>,
  //   <th id="4" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Company
  //   </th>,
  //   <th id="5" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Product
  //   </th>,
  //   <th id="6" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Budget
  //   </th>,
  //   <th id="7" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Authority
  //   </th>,
  //   <th id="8" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Time
  //   </th>,
  //   <th id="9" contentEditable={true} className="text-center">
  //     <span
  //       style={{ cursor: "pointer", backgroundColor: "red" }}
  //       onClick={removeColumn}
  //     >
  //       -
  //     </span>
  //     Total
  //   </th>,
  // ]);

  // console.log(isChecked);
  const hanldeImageOnClick = () => {
    setAddCol(true);
  };

  // function generateTableRow(data) {
  //   var emptyColumn = document.createElement("th");

  //   emptyColumn.setAttribute("id", `${data}`);

  //   emptyColumn.innerHTML = `<td class="valueId">${data}</td>`;

  //   return emptyColumn;
  // }

  // function generateRow(data) {
  //   var emptyColumn = document.createElement("td");
  //   // <tr>

  //   emptyColumn.setAttribute("id", `${data}`);

  //   emptyColumn.innerHTML = `John Doe`;

  //   return emptyColumn;
  // }

  // const AddColumn = (e, data) => {
  //   document
  //     .querySelector("table#customersCreateNew tr.tableHeader")
  //     .append(generateTableRow(data));

  //   document.querySelector("tr#tableRow").append(generateRow(data));
  // };

  // const removeColumn = (e, data) => {
  //   e.preventDefault();
  //   var el = document.getElementById(`${data}`);

  //   console.log(data);
  //   console.log(el);
  //   // el.remove();
  //   // setIndexNumber(indexNumber--);
  // };

  // const [tableArray, setTableArray] = React.useState([

  // alert("daniel");

  const increaseColumn = () => {
    setRemoveId([...removeId, removeId++]);

    setTimeout(() => {
      AddColumn();
    }, 300);
  };

  console.log(removeId);

  const AddColumn = (e) => {
    // const indexData = setRemoveId();
    setHeader([
      ...header,
      <th id={`${removeId}`}>
        <span
          style={{ cursor: "pointer", backgroundColor: "red" }}
          onClick={removeColumn}
        >
          --
        </span>
        Rand Header {Math.ceil(Math.random() * 100)}
      </th>,
    ]);
    setfirst([
      ...first,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setSecond([
      ...second,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setThird([
      ...third,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setFourth([
      ...fourth,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setFifth([
      ...fifth,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setSixth([
      ...sixth,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setSeventh([
      ...seventh,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setEighth([
      ...eighth,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setNineth([
      ...nineth,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);
    setTableTen([
      ...tableTen,
      <td id={`${removeId}`}>Item {Math.ceil(Math.random() * 100)}</td>,
    ]);

    // setId(String(Number(id) + 1));
    // setId([...id, Number(id) + 1]);
  };

  // console.log(id, removeId);

  // const removeColumn = (e, data) => {
  //   e.preventDefault();
  //   // var el = document.getElementById(data);
  //   var el = document.querySelector(`table#customersCreateNew tr#tableHeader`);
  //   var el = document.querySelector(`table#customersCreateNew tbody tr#tableRow`);

  //   // els.remove();
  //   el.remove();
  // };

  function removeColumn(e, data) {
    e.preventDefault();
    // alert("nice");
    // console.log(removeId);
    var el = document.getElementById(data);
    // var el = document.querySelector(`${removeId}`);
    // console.log(el);
    el.remove();

    // let newHeader = header.filter(
    //   (item) => String(header.indexOf(item)) != removeId
    // );
    let firstOne = first.filter(
      (item) => String(first.indexOf(item)) != data
    );
    let secondOne = second.filter(
      (item) => String(second.indexOf(item)) != data
    );
    let thirdOne = third.filter(
      (item) => String(third.indexOf(item)) != data
    );
    let fourthOne = fourth.filter(
      (item) => String(fourth.indexOf(item)) != data
    );
    let fifthOne = fifth.filter(
      (item) => String(fifth.indexOf(item)) != data
    );
    let sixthOne = sixth.filter(
      (item) => String(sixth.indexOf(item)) != data
    );
    let seventhOne = seventh.filter(
      (item) => String(seventh.indexOf(item)) != data
    );
    let eighthOne = eighth.filter(
      (item) => String(eighth.indexOf(item)) != data
    );
    let ninethOne = nineth.filter(
      (item) => String(nineth.indexOf(item)) != data
    );
    let tenthOne = tableTen.filter(
      (item) => String(tableTen.indexOf(item)) != data
    );

    // setHeader(newHeader);
    setfirst(firstOne);
    setSecond(secondOne);
    setThird(thirdOne);
    setFourth(fourthOne);
    setFifth(fifthOne);
    setSixth(sixthOne);
    setSeventh(seventhOne);
    setEighth(eighthOne);
    setNineth(ninethOne);
    setTableTen(tenthOne);

    setRemoveId(removeId--);

    // setTimeout(() => {
    //   setUpdate(true);
    // }, 300);
  }

  const bodyData = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    nineth,
    tableTen,
  ];

  // React.useEffect(() => {
  //   if (update === true) {
  //     bodyData.push(
  //       first,
  //       second,
  //       third,
  //       fourth,
  //       fifth,
  //       sixth,
  //       seventh,
  //       eighth,
  //       nineth,
  //       tableTen
  //     );
  //   }
  // }, [update]);

  return (
    <div>
      <Button variant="contained" color="primary">
        Save
      </Button>
      <Button variant="contained" color="primary">
        Save & Send
      </Button>
      {/* <img
        src={dotIcons}
        width="20"
        style={{ cursor: "pointer" }}
        className="ml-4"
        onClick={hanldeImageOnClick}
        alt="..."
      /> */}
      <Button onClick={increaseColumn}>Add column</Button>
      {/* <Button onClick={removeColumn}>Remove column</Button> */}
      {/* <Dialog
        open={addCol}
        fullWidth
        keepMounted
        onClose={handleClosetwo}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <DialogTitle className="text-center p-5">
          <b className="underLineText">You can add column or remove one</b>
        </DialogTitle>
        <div>
          {headers.map((allData, i) => (
            <ul key={i}>
              <li style={{ float: "left" }}>{allData}</li>
              <Button onClick={(e) => AddColumn(e, allData)}>Add column</Button>
              <Button onClick={removeColumn}>Remove column</Button>
            </ul>
          ))}
        </div>
      </Dialog> */}
      <table id="customersCreateNew">
        <tr className="tableHeader">{header}</tr>
        {bodyData.map((allData) => (
          <tbody>
            <tr id="tableRow">{allData}</tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
