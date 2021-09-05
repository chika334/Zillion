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
import { Link, withRouter, Redirect } from "react-router-dom";
import { showLoader, hideLoader } from "../../../_action/loading";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";
// import "../css/styleCard.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: null,
      redirect: false,
      inError: null,
      inPassError: null,
      loading: false,
      formErrors: {
        email: "",
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
        this.setState({ loading: false, msg: error.msg.msg });
      }
    }

    if (isAuthenticated === true) {
      this.setState({ loading: true });
    }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (e) => {
    const { value } = e.target;
    let formErrors = { ...this.state.formErrors };
    console.log(name, value);

    switch (name) {
      case "email":
        this.state.email = emailRegex.test(value)
          ? ""
          : this.setState({ inError: "Invalid email address" });
        break;
      case "password":
        this.state.password =
          value.length < 6
            ? this.setState({ inPassError: "minimum of 6 charcter required" })
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value, inError: "", inPassError: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // this.props.showLoader();
    this.setState({ loading: true });

    if (this.state.email === "") {
      // this.props.hideLoader();
      this.setState({ loading: false, inError: "Input Required" });
    } else if (this.state.password === "") {
      this.props.hideLoader();
      this.setState({ loading: false, inPassError: "Input Required" });
    } else {
      const user = {
        email,
        password,
      };

      this.props.signin(user);
    }
  };

  handleForgotPassword = (e) => {
    e.preventDefault();
    this.props.history.push("/forgotpassword");
  };

  render() {
    const { formErrors } = this.state;
    if (this.props.isAuthenticated === true) {
      const redirect = localStorage.getItem("redirectPage");
      return <Redirect to={`${redirect}`} />;
    }
    return (
      <>
        {/* {this.state.loading === true ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          >
            <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
              <div className="d-flex align-items-center flex-column px-4">
                <PropagateLoader color={"#3c44b1"} loading={true} />
              </div>
              <div className="text-muted font-size-xl text-dark text-center pt-3">
                <span className="font-size-lg d-block text-dark">
                  Your request is loading
                </span>
              </div>
            </div>
          </motion.div>
        ) : ( */}
        {/* <Grid
          item
          md={12}
          lg={12}
          xl={12}
          className={this.state.loading === true ? "d-none" : "mx-auto pt-5"}
        > */}
          <div className="">
            <div className="text-center">
              <h3>Login</h3>
              <p className="font-size-lg mb-4 text-black-50">
                Fill in the fields below to get started
              </p>
            </div>
            {this.state.msg && (
              <div className="text-center pb-2">
                <span className="text-danger">{this.state.msg}</span>
              </div>
            )}
            <div>
              <div className="mb-4">
                <TextField
                  fullWidth
                  variant="outlined"
                  name="email"
                  value={this.state.email || ""}
                  id="textfield-email"
                  placeholder="Enter Email"
                  helperText={this.state.inError}
                  error={this.state.inError !== null}
                  onChange={this.handleChange("email")}
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

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
              <div className="text-center">
                <small className="small">
                  Don't have an account? <Link to="/register">Signup</Link>
                </small>
              </div>
              <div className="mt-3 d-flex justify-content-space-between mb-5">
                <Button
                  onClick={(e) => this.handleSubmit(e)}
                  className="bg-primary font-weight-bold w-50 my-2 text-white"
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  className="bg-light font-weight-bold w-50 my-2 text-dark"
                  onClick={(e) => this.handleForgotPassword(e)}
                  style={{
                    marginLeft: "7%",
                  }}
                >
                  Forgot password
                </Button>
              </div>
            </div>
          </div>
        {/* </Grid> */}
        {/* )} */}
      </>
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
