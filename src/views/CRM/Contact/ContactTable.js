import React, { useEffect } from "react";
import "./message.scss";
import $ from "jquery";
import { FiMessageSquare } from "react-icons/fi";

export default function ContactTable() {
  const [value, setValue] = React.useState(false);
  const [first, setFirst] = React.useState(false);
  const [second, setSecond] = React.useState(false);
  const [third, setThird] = React.useState(false);
  const [fourth, setFourth] = React.useState(false);
  const [fifth, setFifth] = React.useState(false);
  const [sixth, setSixth] = React.useState(false);
  const [seventh, setSeventh] = React.useState(false);
  const [eighth, setEighth] = React.useState(false);
  const [nineth, setNineth] = React.useState(false);
  const [tenth, setTenth] = React.useState(false);

  const handleSelectClick = (e) => {
    setValue(e.target.value);
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

  const handleIconClick = (e, data) => {
    if (data === "first") {
      setFirst(true);
    } else if (data === "second") {
      setSecond(true);
    } else if (data === "third") {
      setThird(true);
    } else if (data === "fourth") {
      setFourth(true);
    } else if (data === "fifth") {
      setFifth(true);
    } else if (data === "sixth") {
      setSixth(true);
    } else if (data === "seventh") {
      setSeventh(true);
    } else if (data === "eighth") {
      setEighth(true);
    } else if (data === "nineth") {
      setNineth(true);
    } else if (data === "tenth") {
      setTenth(true);
    }
  };

  return (
    <div>
      <table id="customersCreateNew">
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Property Name</th>
          <th className="text-center">Property Type</th>
          <th className="text-center">Company</th>
          <th className="text-center">Product of Interest</th>
          <th className="text-center">Expected Revenue</th>
          <th className="text-center">Qualification Criteria</th>
          <th className="text-center">Probability</th>
        </tr>
        <tr>
          <td>
            <input
              checked={value === "on"}
              onChange={handleSelectClick}
              type="radio"
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
            <div onClick={(e) => handleIconClick(e, "first")}>
              <FiMessageSquare width="20" />
            </div>
            {first === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
          {/* first end */}
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
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.8</p>
            <div onClick={(e) => handleIconClick(e, "second")}>
              <FiMessageSquare width="20" />
            </div>
            {second === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            <div onClick={(e) => handleIconClick(e, "third")}>
              <FiMessageSquare width="20" />
            </div>
            {third === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.2</p>
            <div onClick={(e) => handleIconClick(e, "fourth")}>
              <FiMessageSquare width="20" />
            </div>
            {fourth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.8</p>
            <div onClick={(e) => handleIconClick(e, "fifth")}>
              <FiMessageSquare width="20" />
            </div>
            {fifth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Game Console</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            <div onClick={(e) => handleIconClick(e, "sixth")}>
              <FiMessageSquare width="20" />
            </div>
            {sixth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Goat</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>1</p>
            <div onClick={(e) => handleIconClick(e, "seventh")}>
              <FiMessageSquare width="20" />
            </div>
            {seventh === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Headset</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            <div onClick={(e) => handleIconClick(e, "eighth")}>
              <FiMessageSquare width="20" />
            </div>
            {eighth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Paper</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            <div onClick={(e) => handleIconClick(e, "nineth")}>
              <FiMessageSquare width="20" />
            </div>
            {nineth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
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
          <td>Rice</td>
          <td>2,000</td>
          <td>100%</td>
          <td className="open-ot-alert">
            <p style={{ float: "left" }}>0.1</p>
            <div onClick={(e) => handleIconClick(e, "tenth")}>
              <FiMessageSquare width="20" />
            </div>
            {tenth === true ? (
              <div className="more-ot-alert">
                <span onClick={closeAlert} className="close-ot-alert">
                  <i className="fa fa-close"></i>
                </span>
                <p>
                  There is more OT in the upcoming weeks. Scan your calendar to
                  see it.
                </p>
              </div>
            ) : (
              ""
            )}
          </td>
          {/* tenth ends */}
        </tr>
      </table>
    </div>
  );
}
