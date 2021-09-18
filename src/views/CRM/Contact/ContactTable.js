import React, { useEffect } from "react";
import "./message.scss";
import $ from "jquery";
import { FiMessageSquare } from "react-icons/fi";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

export default function ContactTable() {
  const [open, setOpen] = React.useState(false);
  const [valueData, setValueData] = React.useState("");
  const [value, setValue] = React.useState(false);
  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState("");
  const [third, setThird] = React.useState("");
  const [fourth, setFourth] = React.useState("");
  const [fifth, setFifth] = React.useState("");
  const [sixth, setSixth] = React.useState("");
  const [seventh, setSeventh] = React.useState("");
  const [eighth, setEighth] = React.useState("");
  const [nineth, setNineth] = React.useState("");
  const [tenth, setTenth] = React.useState("");
  const [change, setChange] = React.useState("");
  const [submit, setSubmit] = React.useState("");

  const handleSelectClick = (e) => {
    setValue(!value);
  };

  function closeAlert() {
    setTimeout(function () {
      $(".more-ot-alert").fadeOut("fast");
    }, 100);
  }
  function openAlert() {
    $(".more-ot-alert").fadeIn("fast");
    // IE8 animation polyfill
    if ($("html").hasClass("lt-ie9")) {
      var speed = 300;
      var times = 3;
      var loop = setInterval(anim, 300);
      function anim() {
        times--;
        if (times === 0) {
          clearInterval(loop);
        }
        $(".more-ot-alert")
          .animate({ left: 450 }, speed)
          .animate({ left: 440 }, speed);
        //.stop( true, true ).fadeIn();
      }
      anim();
    }
  }

  useEffect(() => {
    $(".close-ot-alert").on("click", function () {
      closeAlert();
    });

    $(".open-ot-alert").on("click", function () {
      openAlert();
      // console.log("daniel");
    });

    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        closeAlert();
      }
      if (e.keyCode == 67) {
        openAlert();
      } // C is for click?
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmit(change);
    if (valueData === "First") {
      setFirst(change);
    } else if (valueData === "Second") {
      setSecond(change);
    } else if (valueData === "Third") {
      setThird(change);
    } else if (valueData === "Fourth") {
      setFourth(change);
    } else if (valueData === "Fifth") {
      setFifth(change);
    } else if (valueData === "Sixth") {
      setSixth(change);
    } else if (valueData === "Seventh") {
      setSeventh(change);
    } else if (valueData === "Eighth") {
      setEighth(change);
    } else if (valueData === "Nineth") {
      setNineth(change);
    } else if (valueData === "Tenth") {
      setTenth(change);
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  // alert(change);

  const handleIconClick = (e, data) => {
    setOpen(true);
    setValueData(data);
    // if (data === "First") {
    //   setFirst(true);
    // } else if (data === "Second") {
    //   setSecond(true);
    // } else if (data === "Third") {
    //   setThird(true);
    // } else if (data === "Fourth") {
    //   setFourth(true);
    // } else if (data === "Fifth") {
    //   setFifth(true);
    // } else if (data === "Sixth") {
    //   setSixth(true);
    // } else if (data === "Seventh") {
    //   setSeventh(true);
    // } else if (data === "Eighth") {
    //   setEighth(true);
    // } else if (data === "Nineth") {
    //   setNineth(true);
    // } else if (data === "Tenth") {
    //   setTenth(true);
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        // Transition={Transition}
        className="p-3"
      >
        <DialogTitle>{valueData} Row Comment Input</DialogTitle>
        <DialogContent>
          <TextField onChange={handleChange} value={change} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <table id="customersCreateNew">
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Prospect Name</th>
          <th className="text-center">Prospect Type</th>
          <th className="text-center">Company</th>
          <th className="text-center">Product of Interest</th>
          <th className="text-center">Expected Revenue</th>
          <th className="text-center">Leads type</th>
          <th className="text-center">Probability</th>
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              type="checkbox"
            />
          </td>
          <td>Alfreds Futterkiste</td>
          <td>Individual</td>
          <td>JDU Enterprises</td>
          {/* first */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            {valueData === "First" ? (
              <div onClick={(e) => handleIconClick(e, "First")}>{first}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "First")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* first end */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              type="checkbox"
            />
          </td>
          <td>Maria Anders</td>
          <td>Individual</td>
          <td>MJI Club</td>
          {/* second */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.8</p>
            {valueData === "Second" ? (
              second
            ) : (
              <div onClick={(e) => handleIconClick(e, "Second")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* second ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>John Doe</td>
          <td>Individual</td>
          <td>Elite Hub</td>
          {/* third */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            {valueData === "Third" ? (
              <div onClick={(e) => handleIconClick(e, "Third")}>{third}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Third")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* third ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>Mary Jane</td>
          <td>Individual</td>
          <td>MIC Teams</td>
          {/* fourth */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.2</p>
            {valueData === "Fourth" ? (
              <div onClick={(e) => handleIconClick(e, "Fourth")}>{fourth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Fourth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* fourth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>Mary Jane Volunters</td>
          <td>Organization</td>
          <td>Grace Ventures</td>
          {/* fifth */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.8</p>
            {valueData === "Fifth" ? (
              <div onClick={(e) => handleIconClick(e, "Fifth")}>{fifth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Fifth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* fifth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              type="checkbox"
            />
          </td>
          <td>Jane Doe</td>
          <td>Individual</td>
          <td>HLT Life</td>
          {/* sixth */}
          <td>Game Console</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            {valueData === "Sixth" ? (
              <div onClick={(e) => handleIconClick(e, "Sixth")}>{sixth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Sixth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* sixth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Individual</td>
          <td>Glo Comms</td>
          {/* seventh */}
          <td>Goat</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            
            {valueData === "Seventh" ? (
              <div onClick={(e) => handleIconClick(e, "Seventh")}>{seventh}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Seventh")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* seventh ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              type="checkbox"
            />
          </td>
          <td>Daniel Smart</td>
          <td>Individual</td>
          <td>SKI Finance</td>
          {/* eighth */}
          <td>Headset</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            {valueData === "Eighth" ? (
              <div onClick={(e) => handleIconClick(e, "Eighth")}>{eighth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Eighth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* eighth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>Dangote limited</td>
          <td>Organization</td>
          <td>J Club</td>
          {/* ninth */}
          <td>Paper</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            {valueData === "Nineth" ? (
              <div onClick={(e) => handleIconClick(e, "Nineth")}>{nineth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Nineth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* ninth ends */}
        </tr>
        <tr>
          <td>
            <input
              checked={value}
              onChange={handleSelectClick}
              // value={value}
              type="checkbox"
            />
          </td>
          <td>Paris spécialités</td>
          <td>Individual</td>
          <td>JDV</td>
          {/* tenth */}
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            {valueData === "Tenth" ? (
              <div onClick={(e) => handleIconClick(e, "Tenth")}>{tenth}</div>
            ) : (
              <div onClick={(e) => handleIconClick(e, "Tenth")}>
                <FiMessageSquare width="20" />
              </div>
            )}
          </td>
          {/* tenth ends */}
        </tr>
      </table>
    </div>
  );
}
