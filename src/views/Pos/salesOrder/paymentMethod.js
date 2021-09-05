import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PaymentIcon from "@material-ui/icons/Payment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
});

function PaymentMethod(props) {
  const classes = useStyles();
  let history = useHistory();

  const handleCard = () => {
    history.push({
      pathname: "/pos/payment/card",
      state: { data: "Payments" },
    });
  };

  const handleCash = () => {
    history.push({
      pathname: "/pos/payment/cash",
      state: { data: "Payments" },
    });
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
        <div>
          <h4 className="text-center">{props.location.state.data}</h4>
        </div>
        <div className="allnew d-flex justify-content-center">
          <Card
            onClick={handleCard}
            style={{ cursor: "pointer" }}
            className={classes.root}
          >
            <CardContent>
              <PaymentIcon />
            </CardContent>
          </Card>
          <Card
            onClick={handleCash}
            style={{ cursor: "pointer" }}
            className={classes.root}
          >
            <CardContent>
              <AttachMoneyIcon />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PaymentMethod);
