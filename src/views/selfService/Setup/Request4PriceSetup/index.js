import React from "react";
import {
  Container,
  Typography,
  Button,
  Popover,
  Card,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchIpnut from "../../../searchInput";
import Products from "./Products";

const topHeader = [
  "All Products",
  "Food & Beverages",
  "Furniture & Fittings",
  "Stationery",
  "IT & Tech",
  "Clothing",
  "Electrical",
  "Beauty",
  "Agriculture",
];

export default function Index() {
  const [values, setValues] = React.useState(0);
  const handleClick = (e, data) => {
    e.preventDefault();
    setValues(data);
    // console.log("data", typeof data);
  };
  return (
    <Container className="mt-2">
      <span>
        <FontAwesomeIcon
          style={{ color: "#3c44b1", width: "50", height: "30" }}
          icon={["fas", "arrow-circle-left"]}
        />
      </span>
      <br />
      {/* <NameandSearchInput /> */}
      <div
        style={{ display: "flex", alignContent: "space-between" }}
        className="box mt-4"
      >
        <div style={{ float: "left" }}>
          <Typography variant="h5" noWrap>
            <b style={{ color: "#3c44b1" }}>Self Service</b>
          </Typography>
        </div>
        <div className="" style={{ marginLeft: "150px" }}>
          <SearchIpnut />
        </div>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Settings
        </Button>
        <br />
        <div>
          <p style={{ float: "left" }}>CATEGORIES</p>
          <AddIcon />
        </div>
      </div>
      <div style={{ backgroundColor: "green", marginTop: "20px" }}>
        {topHeader.map((allData, i) => (
          <Card
            onClick={(e) => handleClick(e, i)}
            key={i}
            style={{
              width: "100px",
              float: "left",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            {allData}
          </Card>
        ))}
      </div>
      <br />
      <Products values={values} />
    </Container>
  );
}
