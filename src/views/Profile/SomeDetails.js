import React, { Component } from "react";
import { useSelector, connect } from "react-redux";
import { Card, List, ListItem } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class SomeDetails extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
    };
  }

  componentDidMount() {
    this._isMounted = true;

    const user = `${process.env.REACT_APP_VTPASS_EMAIL}:${process.env.REACT_APP_VTPASS_PASSWORD}`;
    const base64 = Buffer.from(user).toString("base64");

    const config = {
      headers: {
        Authorization: `Basic ${base64}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_VTPASS_BALANCE}`, config)
      .then((res) => {
        if (this._isMounted) {
          this.setState({ amount: res.data.contents.balance });
        }
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const user =
      this.props.authUser.user === null ? "" : this.props.authUser.user;
    return (
      <div>
        <Card style={{ width: "100%" }} className="bg-dark p-4">
          <div>
            <List
              component="div"
              className="nav-pills nav-neutral-primary mb-3 nav-pills-rounded flex-column"
            >
              <ListItem>
                <p className="mb-1 font-weight-bold">Full Name: </p>
                <span className="pl-5">
                  {`${user.firstName} ${user.lastName}`}
                </span>
              </ListItem>
              <ListItem>
                <p className="mb-1 font-weight-bold">Email: </p>
                <span className="pl-5">{`${user.email}`}</span>
              </ListItem>
              <ListItem>
                <p className="mb-1 font-weight-bold">Country Code: </p>
                <span className="pl-5">{`${user.countryCode}`}</span>
              </ListItem>
              <ListItem>
                <p className="mb-1 font-weight-bold">Phone Number: </p>
                <span className="pl-5">{`${user.phone}`}</span>
              </ListItem>
              {user.role === 1 ? (
                <ListItem>
                  <p className="mb-1 font-weight-bold">Vtpass Balance: </p>
                  <span className="pl-5">{this.state.amount}</span>
                </ListItem>
              ) : null}
            </List>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, null)(SomeDetails);
