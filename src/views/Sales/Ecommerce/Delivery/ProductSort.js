import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../../../../css/advertLink.css";
import { useHistory, withRouter } from "react-router-dom";

function Filter() {
  const history = useHistory();

  const handleCreateNew = () => {
    // history.push("/sales/ecommerce/createnew");
    history.push("/sales/ecommerce/list-template");
  };
  return (
    <div className="productSort">
      <Button onClick={handleCreateNew} variant="contained" color="primary">
        Upload Products List
      </Button>
      <br />
      {/* <div className="d-inline-flex">
        <Link
          to={{
            pathname: "/sales/ecommerce/products/Total",
            state: { name: "Total" },
          }}
        >
          All
        </Link>
        <Link
          to={{
            pathname: "/sales/ecommerce/products/active",
            state: { name: "Active" },
          }}
          className="ml-5"
        >
          Active
        </Link>
        <Link
          to={{
            pathname: `/sales/ecommerce/products/Inactive`,
            state: { name: "Inactive" },
          }}
          className="ml-5"
        >
          Inactive
        </Link>
        <Link
          to={{
            pathname: "/sales/ecommerce/products/stock-level/total",
            state: { name: "Ecommerce Products Stock Level" },
          }}
          className="ml-5"
        >
          Stock Level
        </Link>
      </div> */}
    </div>
  );
}

export default withRouter(Filter);
