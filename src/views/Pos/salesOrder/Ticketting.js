import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import NameandSearchInput from "./salesOrderSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/pos.css";
import "../../../css/salesOrder.css";
import "../../../css/calculator.css";
import ProductCard from "./productsCard";
// import Calculator from "./Calculator";
import NumberFormat from "react-number-format";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Index() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "*":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  // const percent = () => {
  //   preState
  //     ? setCurState(String((parseFloat(curState) / 100) * preState))
  //     : setCurState(String(parseFloat(curState) / 100));
  // };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  return (
    <Container className="pt-5">
      <span>
        <FontAwesomeIcon
          style={{ color: "#3c44b1", width: "50", height: "30" }}
          icon={["fas", "arrow-circle-left"]}
        />
      </span>
      <br />
      <NameandSearchInput />
      <div />
      <div className="newBody iconDesign pt-5">
        <div className="single-feature salesOrderCard text-center mr-2  w-100">
          <div className="p-2">
            <span className="cartIcon">
              <ShoppingCartIcon
                style={{ color: "#3c44b1", width: "70", height: "90" }}
              />
              <hr />
            </span>
            <div className="newBody w-100">
              <div className="bg-white single-feature text-right">
                <div className="calculator-screen">
                  {input !== "" || input === "0" ? (
                    <input
                      type="text"
                      class="calculator-screen"
                      value={input}
                      disabled
                    />
                  ) : (
                    <input
                      type="text"
                      class="calculator-screen"
                      value={preState}
                      disabled
                    />
                  )}
                </div>
              </div>
              <div class="calculator">
                <div class="calculator-keys">
                  <button
                    type="button"
                    onClick={operatorType}
                    className="operator numbers"
                    value="+"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={operatorType}
                    className="operator numbers"
                    value="-"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={operatorType}
                    className="operator numbers"
                    value="*"
                  >
                    &times;
                  </button>
                  <button
                    type="button"
                    onClick={operatorType}
                    className="operator numbers"
                    value="/"
                  >
                    &divide;
                  </button>

                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="7"
                  >
                    7
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="8"
                  >
                    8
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="9"
                  >
                    9
                  </button>

                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="4"
                  >
                    4
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="5"
                  >
                    5
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="6"
                  >
                    6
                  </button>

                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="1"
                  >
                    1
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="2"
                  >
                    2
                  </button>
                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="3"
                  >
                    3
                  </button>

                  <button
                    className="numbers"
                    type="button"
                    onClick={inputNum}
                    value="0"
                  >
                    0
                  </button>
                  <button
                    type="button"
                    className="decimal numbers"
                    onClick={inputNum}
                    value="."
                  >
                    .
                  </button>
                  <button
                    type="button"
                    className="all-clear numbers"
                    value="all-clear"
                    onClick={reset}
                  >
                    AC
                  </button>

                  <button
                    type="button"
                    className="equal-sign numbers"
                    value="="
                    onClick={equals}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-feature text-center mr-2 salesOrderCard w-100">
          <ProductCard />
        </div>
        <div
          className="single-feature text-center mr-2 salesOrderCard w-100"
          // style={{ backgroundColor: "grey" }}
        >
          <h6>Goods</h6>
          <div className="p-2" style={{ fontSize: "15px" }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document
          </div>
        </div>
      </div>
    </Container>
  );
}
