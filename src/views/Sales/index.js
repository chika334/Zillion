import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NameandSearchInput from "./NameandSearchInput";
import Filter from "./filter";
import "../../css/sales.css";
import { Link } from "react-router-dom";
import { SalesData } from "../../Data/salesData";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <div className="property-area pt-5">
      <div className="container">
        <span>
          <FontAwesomeIcon
            style={{ color: "#3c44b1", width: "50", height: "30" }}
            icon={["fas", "arrow-circle-left"]}
          />
        </span>
        <div className="custom-gutter">
          <div className="col-lg-12">
            <div className="property-filter-menu-wrap">
              <div className="property-filter-menu portfolio-filter text-center">
                <br />
                <NameandSearchInput />
                <div>
                  <Filter />
                </div>
                <div className="property-filter-area row custom-gutter">
                  {SalesData.items.map((allSales, i) => (
                    <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-5">
                      {/* // <div key={i} className="col-xl-9 col-lg-8 col-md-6 mt-5"> */}
                      <Link to={allSales.url} size="small">
                        <div className="single-feature">
                          {/* <div className=""> */}
                            <img
                              className="media"
                              src={allSales.image}
                              alt="img"
                            />
                            <div
                            className="detailArrange"
                            >
                              <h6 className="">{allSales.title}</h6>
                              <Typography style={{ fontSize: "12px" }}>
                                {allSales.subtitle}
                              </Typography>
                              <Typography style={{ fontSize: "12px" }}>
                                {allSales.subtitle1}
                              </Typography>
                              <Typography style={{ fontSize: "12px" }}>
                                {allSales.subtitle2}
                              </Typography>
                              <Typography style={{ fontSize: "12px" }}>
                                {allSales.subtitle3}
                              </Typography>
                            </div>
                          {/* </div> */}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
