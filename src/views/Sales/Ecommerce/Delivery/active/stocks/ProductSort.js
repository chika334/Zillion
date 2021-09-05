import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../../../../../../css/advertLink.css";
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
        Create New
      </Button>
      <br />
      <div className="d-inline-flex">
        <Link
          to={{
            pathname: "/sales/ecommerce/products/stock-level/total",
            state: { name: "Ecommerce Products Stock Level" },
          }}
        >
          All
        </Link>
        <Link
          to={{
            pathname: "/sales/ecommerce/products/stock-level/available",
            state: { name: "Ecommerce Products Stock Level" },
          }}
          className="ml-3"
        >
          Available
        </Link>
        <Link
          to={{
            pathname: `/sales/ecommerce/products/stock-level/low-stock`,
            state: { name: "Ecommerce Products Stock Level" },
          }}
          className="ml-3"
        >
          Low Stock
        </Link>
        <Link
          to={{
            pathname: "/sales/ecommerce/products/stock-level/stock-out",
            state: { name: "Ecommerce Products Stock Level" },
          }}
          className="ml-3"
        >
          Stock out
        </Link>
        <Link
          to={{
            pathname: "/sales/ecommerce/products/Total",
            state: { name: "Total" },
          }}
          className="ml-3"
        >
          Activity stock
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Filter);
