import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, useHistory, Link } from "react-router-dom";
import "../../../css/textSize.css";
import Table from "../../../components/Table";
import PaymentIcon from "@material-ui/icons/Payment";
import gfamIcon1 from "../../../css/images/icons/gfamicons.png";

const driversData = [
  {
    number: 44,
    Product: "Lewis Hamilton",
    Description: "Mercedes",
    Quality: "United Kingdom",
    UnitOfMeasure: <input className="tableInput" type="text" />,
    unitPrice: <input className="tableInput" type="text" />,
    Tax: <input className="tableInput" type="text" />,
    Discount: <input className="tableInput" type="text" />,
    subTotal: <input className="tableInput" type="text" />,
  },
  {
    number: 77,
    Product: "Valtteri Bottas",
    Description: "Mercedes",
    Quality: "Finland",
    UnitOfMeasure: <input className="tableInput" type="text" />,
    unitPrice: <input className="tableInput" type="text" />,
    Tax: <input className="tableInput" type="text" />,
    Discount: <input className="tableInput" type="text" />,
    subTotal: <input className="tableInput" type="text" />,
  },
];

function CardPaymwent(props) {
  let history = useHistory();
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
        <span onClick={history.goBack}>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <h4>{props.location.state.data}</h4>
        <div className="allnew w-100">
          <div className="w-50">
            <div className="allnew">
              <Fragment>
                <label
                  style={{
                    float: "left",
                  }}
                >
                  Customer
                </label>
                <select style={{ height: "40px" }} className="ml-2 accountText">
                  <option>check out</option>
                </select>
              </Fragment>
              <div
                className="p-0 ml-2 m-0"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                role="button"
                tabIndex="-3"
              >
                {hover ? (
                  <div className="">
                    <img
                      // className="ml-2"
                      style={{ cursor: "pointer" }}
                      src={gfamIcon1}
                      width="20"
                      height="15"
                    />
                    <Link
                      to={{
                        pathname: "/sales/extended-sales/customer-Info",
                      }}
                    >
                      Create new customer
                    </Link>
                  </div>
                ) : (
                  <img
                    // className="ml-2"
                    src={gfamIcon1}
                    width="20"
                    height="15"
                  />
                )}
              </div>
            </div>
            <div className="allnewText mt-2">
              <label>Date</label>
              <input className="ml-2 accountText" type="date" />
            </div>
            <div className="allnewText mt-2">
              <label>Due Date</label>
              <input className="ml-2 accountText" type="date" />
            </div>
            <div className="allnewText mt-4">
              <label>
                <PaymentIcon />
              </label>
              <select className="ml-2 accountText">
                <option>Select one</option>
              </select>
            </div>
          </div>
          <div className="w-50">
            <div className="allnew">
              <Fragment>
                <label
                  style={{
                    float: "left",
                  }}
                >
                  Customer
                </label>
                <select style={{ height: "40px" }} className="ml-2 accountText">
                  <option>check out</option>
                </select>
              </Fragment>
            </div>
            <div className="allnewText mt-2">
              <label>Date</label>
              <select style={{ height: "40px" }} className="ml-2 accountText">
                <option>check out</option>
              </select>
            </div>
            <div className="allnewText mt-2">
              <label>Due Date</label>
              <select style={{ height: "40px" }} className="ml-2 accountText">
                <option>check out</option>
              </select>
            </div>
            <div>
              <div className="w-100"></div>
            </div>
          </div>
        </div>
        <Table
          tableData={driversData}
          headingColumns={[
            "#",
            "Product",
            "Description",
            "Quality",
            "Unit of Measure",
            "Unit Price",
            "Tax",
            "Discount",
            "Sub Total",
          ]}
        />
      </div>
    </div>
  );
}

export default withRouter(CardPaymwent);
