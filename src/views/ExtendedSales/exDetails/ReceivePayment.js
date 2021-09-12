import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Filter from "./otherDesigns/filter";
import "../../../css/sales.css";
import { Select, MenuItem, ListItemIcon } from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";
import AdvertTable from "./otherDesigns/tableDesign";
import Banner from "./otherDesigns/NewSearchInput";
import ProgressBar from "../../CRM/TaskModal/ProgressBar";
import CreditCard from "@material-ui/icons/CreditCard";

// import Filter from './otherDesigns/filter'

function ReceivePayment(props) {
  let history = useHistory();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };

  const handleCreateNew = () => {
    history.push({
      pathname: "/sales/extended-sales/new-sales-order",
      state: { data: "New Sales Order" },
    });
  };
  return (
    <div>
      <div className="pt-5">
        <div className="container">
          <div>
            <span onClick={history.goBack}>
              <FontAwesomeIcon
                style={{ color: "#3c44b1", width: "50", height: "30" }}
                icon={["fas", "arrow-circle-left"]}
              />
            </span>
            <br />
            <div style={{ display: "inline-flex" }}>
              <div
                // style={{ marginRight: "50%", backgroundColor: "red"}}
                className="box"
              >
                <Banner>{props.location.state.data}</Banner>
                <div>
                  <label style={{ float: "left" }}>customer</label>
                  <select>
                    <option>John Vonsky</option>
                    <option>John Vonsky</option>
                  </select>
                </div>
                <div className="mt-3">
                  <label style={{ float: "left" }}>customer</label>
                  <select>
                    <option>John Vonsky</option>
                    <option>John Vonsky</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <Filter onProp={handleProps} />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Select>
              <MenuItem value="">
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
              </MenuItem>
              <MenuItem value="">
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
              </MenuItem>
              <MenuItem value="">
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
              </MenuItem>
              <MenuItem value="">
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
              </MenuItem>
            </Select>
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ width: "50%" }} className="mt-3">
              <select style={{ width: "200px" }}>
                <option>Unpaid Invoices</option>
                <option>Deposit</option>
              </select>
              <div style={{ border: "3px solid #000", borderRadius: "7px" }}>
                <label>Daniel</label>
                <label>same</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ReceivePayment);
