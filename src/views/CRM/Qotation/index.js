import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiCheckMark } from "react-icons/gi";
import SearchIpnut from "../SearchInput";
import Filter from "../../filter";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

function CreateNewTable() {
  let history = useHistory();
  const [value, setValue] = React.useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [tableName, setTableName] = React.useState("");

  const handleSelectClick = (e) => {
    setValue(e.target.value);
  };

  const arrayOfValues = ["Number", "Creation Date", "Customer", "Sales"];

  const handleProps = (data) => {
    setTableName(data);

    const isAsc = orderBy === data && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(data);
  };

  return (
    <Container className="mt-3">
      <span onClick={history.goBack}>
        <FontAwesomeIcon
          style={{ color: "#3c44b1", width: "50", height: "30" }}
          icon={["fas", "arrow-circle-left"]}
        />
      </span>
      <br />
      <div
        style={{ display: "flex", alignContent: "space-between" }}
        className="box mt-4"
      >
        <div style={{ float: "left" }}>
          <Typography variant="h5" noWrap>
            <b style={{ color: "#3c44b1" }}>All Estimate</b>
          </Typography>
        </div>
        <div className="box overlay" style={{ marginLeft: "150px" }}>
          <SearchIpnut />
        </div>
      </div>
      <div>
        <Button className="mt-3" color="primary" variant="contained">
          Create New
        </Button>
        <Filter arrayOfValues={arrayOfValues} onProp={handleProps} />
      </div>
      <table id="customersCreateNew">
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Number</th>
          <th className="text-center">Creation Date</th>
          <th className="text-center">Customer</th>
          <th className="text-center">Sales</th>
          {/* <th className="text-center">Discount</th>
          <th className="text-center">Tax</th>
          <th className="text-center">Subtotal</th> */}
        </tr>
        <tr>
          <td>s</td>
          <td>Alfreds Futterkiste</td>
          <td>Individual</td>
          <td>20</td>
          {/* first */}
          <td>800</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td>s</td>
          <td>Maria Anders</td>
          <td>Individual</td>
          <td>10kg</td>
          {/* second */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>John Doe</td>
          <td>Individual</td>
          <td>16packs</td>
          {/* third */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>Mary Jane</td>
          <td>Individual</td>
          <td>28 bags</td>
          {/* fourth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
          {/* fourth ends */}
        </tr>
        <tr>
          <td></td>
          <td>Mary Jane Volunters</td>
          <td>Organization</td>
          <td>10kg</td>
          {/* fifth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
          {/* fifth ends */}
        </tr>
        <tr>
          <td></td>
          <td>Jane Doe</td>
          <td>Individual</td>
          <td>78 pieces</td>
          {/* sixth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Individual</td>
          <td>50 barrels</td>
          {/* seventh */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>Daniel Smart</td>
          <td>Individual</td>
          <td>50kg</td>
          {/* eighth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>Dangote limited</td>
          <td>Organization</td>
          <td>10kg</td>
          {/* ninth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
        <tr>
          <td></td>
          <td>Paris sp??cialit??s</td>
          <td>Individual</td>
          <td>12kg</td>
          {/* tenth */}
          <td>900</td>
          {/* <td>00</td>
          <td>00</td>
          <td></td> */}
        </tr>
      </table>
    </Container>
  );
}

export default withRouter(connect(null, null)(CreateNewTable));
