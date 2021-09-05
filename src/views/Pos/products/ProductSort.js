import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../../../css/posProducts.css";
import { useHistory, withRouter } from "react-router-dom";

function Filter() {
  const history = useHistory();

  const handleCreateNew = () => {
    alert("Add Products")
    // history.push("/sales/ecommerce/createnew");
  };
  return (
    <div className="posproductSort">
      <Button onClick={handleCreateNew} variant="contained" color="primary">
        Add Products
      </Button>
      <br />
      <div className="d-inline-flex">
        <Link
          to={{
            pathname: "/pos/all-products",
            state: { name: "All" },
          }}
        >
          All
        </Link>
        <Link
          to={{
            pathname: "/pos/available",
            state: { name: "Available" },
          }}
          className="ml-5"
        >
          Available
        </Link>
        <Link
          to={{
            pathname: `/pos/low-stock`,
            state: { name: "Low Stock" },
          }}
          className="ml-5"
        >
          Low Stock
        </Link>
        <Link
          to={{
            pathname: "/pos/stock-out",
            state: { name: "Stock out" },
          }}
          className="ml-5"
        >
          Stock out
        </Link>
        <Link
          to={{
            pathname: "/pos/services",
            state: { name: "Services" },
          }}
          className="ml-5"
        >
          Services
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Filter);
