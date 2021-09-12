import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NameandSearchInput from "./otherDesigns/NameandSearchInput";
import Filter from "./otherDesigns/filter";
import "../../../css/sales.css";
import { Button, Paper, InputBase } from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";
import AdvertTable from "./otherDesigns/tableDesign";
import Banner from "./otherDesigns/NewSearchInput";
import ProgressBar from "../../CRM/TaskModal/ProgressBar";
// import Filter from './otherDesigns/filter'

function AllSalesOrder(props) {
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
    // history.push({
    //   pathname: "/sales/extended-sales/new-sales-order",
    //   state: { data: "New Sales Order" },
    // });
    history.push({
      pathname: "/sales/extended-sales/reveive-payments",
      state: { data: "Receive Payments" },
    });
  };
  return (
    <div>
      <div className="property-area pt-5">
        <div className="container">
          <div>
            <span onClick={history.goBack}>
              <FontAwesomeIcon
                style={{ color: "#3c44b1", width: "50", height: "30" }}
                icon={["fas", "arrow-circle-left"]}
              />
            </span>
            <br />
            <div>
              <div
                style={{ marginRight: "20%", float: "left" }}
                className="box"
              >
                <Banner>{props.location.state.data}</Banner>
              </div>
              <div>
                <Paper
                  component="form"
                  style={{ float: "left" }}
                  className="searchPaper"
                >
                  <InputBase
                    className="searchInput"
                    placeholder="Search Google Maps"
                    style={{ paddingTop: "3%", paddingBottom: "3%" }}
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Paper>
                <Button
                  className="buttonSearch"
                  style={{ backgroundColor: "#3c44b1", color: "#fff" }}
                >
                  SEARCH
                </Button>
              </div>
            </div>
            <div className="">
              <div
                style={{ marginRight: "60%", float: "left" }}
                // className="box"
              >
                <Button
                  onClick={handleCreateNew}
                  variant="contained"
                  color="primary"
                >
                  Pay Now
                </Button>
              </div>
              <div style={{ float: "right" }}>
                <Filter onProp={handleProps} />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <table id="customersCreateNew">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Customer</th>
                <th className="text-center">Credit note</th>
                <th className="text-center">Rebate</th>
                <th className="text-center">Number of Invoices</th>
                <th className="text-center">Total Invoice Value</th>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
              <tr>
                <td></td>
                <td>James Bond</td>
                <td>2,000</td>
                <td>2,000</td>
                <td>3</td>
                <td>$77,000</td>
              </tr>
            </table>
          </div>
          {/* <AdvertTable dataTable={tableName} order={order} orderBy={orderBy} /> */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(AllSalesOrder);
