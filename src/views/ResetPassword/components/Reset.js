import React, { Component } from "react";
// import "../css/Login.css";
import {
  Form,
  Button,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import { signin } from "../../../_action/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../../../_action/errorAction";
import { Link, withRouter } from "react-router-dom";
import { showLoader, hideLoader } from "../../../_action/loading";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import axios from "axios";
import queryString from "query-string";
// import "../css/styleCard.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      msg: null,
      redirect: false,
      inError: null,
      inPassError: null,
      error: "",
      resetToken: "",
      formErrors: {
        password: "",
      },
    };
  }

  static propType = {
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.props.hideLoader();
        this.setState({ msg: error.msg.msg });
      }
    }

    // if authenticated redirect
    // if (this.state.msg !== null) {
    //   this.sendRedirect();
    //   this.props.hideLoader();
    //   // console.log(this.props.authUser.user.user.role);
    //   // if (this.props.authUser.user.user.role === 0) {
    //   // this.props.history.push("/profile");
    //   // console.log("successfully logged in");
    //   // const redirect = localStorage.getItem("redirectPage");
    //   setTimeout(() => {
    //     window.location.href = `/login`;
    //   }, 2000);
    //   // window.location.href = `${redirect}`;
    //   // } else {
    //   // const redirect = localStorage.getItem("productLink");
    //   // window.location.href = `${redirect}`;
    //   // console.log("admin");
    //   // this.props.history.push("/profile/dashboard");
    //   // }
    // }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (e) => {
    const { value } = e.target;
    let formErrors = { ...this.state.formErrors };
    console.log(name, value);

    switch (name) {
      case "password":
        this.state.password =
          value.length < 6
            ? this.setState({ inPassError: "minimum of 6 charcter required" })
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { resetToken, password } = this.state;

    if (this.state.email === "") {
      this.setState({ inError: "Input Required" });
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const user = {
        resetToken,
        password,
      };

      axios
        .post(`${process.env.REACT_APP_API}/reset-password`, user, config)
        .then((response) => {
          this.setState({
            msg: response.data.message,
            redirect: true,
          });
        })
        .catch((error) => {
          // console.log(error.response.data);
          this.setState({ error: error.response.data.error });
        });

      // this.props.signin(user);
    }
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    // console.log(id);
    this.setState({ resetToken: id });
  }

  // handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   this.props.history.push("/forgotpassword");
  // };
  render() {
    const { formErrors } = this.state;
    if (this.state.redirect === true) {
      setTimeout(() => {
        window.location.href = `/login`;
      }, 2000);
    }
    return (
      <Grid item md={9} lg={9} xl={7} className="mx-auto pt-5">
        <div className="text-center">
          <h1 className="display-4 mb-1 font-weight-bold">Reset Password</h1>
          {/*   <img src={hero6} width="110" /> */}
          <p className="font-size-lg mb-4 text-black-50">
            Fill in the fields below to get started
          </p>
        </div>
        {this.state.msg && (
          <div className="text-center pb-2">
            <span className="text-success">{this.state.msg}</span>
          </div>
        )}
        {this.state.error && (
          <div className="text-center pb-2">
            <span className="text-danger">{this.state.error}</span>
          </div>
        )}
        <div>
          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              name="password"
              value={this.state.password || ""}
              id="textfield-password"
              placeholder="Enter Password"
              helperText={this.state.inPassError}
              error={this.state.inPassError !== null}
              onChange={this.handleChange("password")}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockTwoToneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="mt-3 d-flex justify-content-center mb-5">
            <Button
              onClick={(e) => this.handleSubmit(e)}
              className="bg-primary font-weight-bold w-50 my-2 text-white"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    clearErrors,
    showLoader,
    hideLoader,
  })(Login)
);
