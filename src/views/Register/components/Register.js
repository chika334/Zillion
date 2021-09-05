import React, { Component } from "react";
// import "../css/Login.css";
import {
  Form,
  Button,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import { signup } from "../../../_action/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../../../_action/errorAction";
import { Link, withRouter } from "react-router-dom";
import { showLoader, hideLoader } from "../../../_action/loading";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
// import "../css/styleCard.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      countryCode: "+234",
      msg: null,
      redirect: false,
      inError: null,
      formErrors: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        password: null,
      },
    };
  }

  static propType = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "REGISTER_FAIL") {
        this.props.hideLoader();
        this.setState({ msg: error.msg.msg });
      }
    }

    // if authenticated redirect
    if (isAuthenticated) {
      this.sendRedirect();
      this.props.hideLoader();
      // console.log(this.props.authUser.user.user.role);
      if (this.props.authUser.user.user.role === 0) {
        // this.props.history.push("/profile");
        // console.log("successfully logged in");
        // const redirect = localStorage.getItem("productLink");
        window.location.href = "/login";
      } else {
        // const redirect = localStorage.getItem("productLink");
        // window.location.href = `${redirect}`;
        console.log("admin");
        // this.props.history.push("/profile/dashboard");
      }
    }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (e) => {
    const { value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 6 ? "minimum of 6 charcter required" : null;
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 6 ? "minimum of 6 charcter required" : null;
        break;
      case "phone":
        formErrors.phone =
          value.length < 11 ? "minimum of 11 digits required" : null;
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? null
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum of 6 charcter required" : null;
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.showLoader();
    const {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      password,
    } = this.state;

    // console.log(e.target.name);

    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      phone === ""
    ) {
      this.setState({ msg: "All Input are Required" });
    } else {
      const user = {
        firstName,
        lastName,
        email,
        countryCode,
        phone,
        password,
      };

      // console.log(user);

      this.props.signup(user);
    }
  };

  // handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   this.props.history.push("/forgotpassword");
  // };
  render() {
    const { formErrors } = this.state;
    return (
      <Grid item md={9} lg={9} xl={7} className="mx-auto pt-5">
        <div className="text-center">
          <h1 className="display-4 mb-1 font-weight-bold">Register</h1>
          {/*   <img src={hero6} width="110" /> */}
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
          <div className="mb-2">
            <TextField
              fullWidth
              placeholder="Enter First Name"
              variant="outlined"
              name="firstName"
              value={this.state.firstName || ""}
              id="textfield-firstName"
              helperText={this.state.formErrors.firstName}
              error={this.state.formErrors.firstName !== null}
              onChange={this.handleChange("firstName")}
              type="firstName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-2">
            <TextField
              fullWidth
              placeholder="Enter Last Name"
              variant="outlined"
              name="lastName"
              value={this.state.lastName || ""}
              id="textfield-lastName"
              helperText={this.state.formErrors.lastName}
              error={this.state.formErrors.lastName !== null}
              onChange={this.handleChange("lastName")}
              type="lastName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-2">
            <TextField
              fullWidth
              placeholder="Enter Email"
              variant="outlined"
              name="email"
              value={this.state.email || ""}
              id="textfield-email"
              helperText={this.state.formErrors.email}
              error={this.state.formErrors.email !== null}
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

          <div className="mb-2">
            <TextField
              fullWidth
              placeholder="Enter Phone"
              variant="outlined"
              name="phone"
              value={this.state.phone || ""}
              id="textfield-phone"
              helperText={this.state.formErrors.phone}
              error={this.state.formErrors.phone !== null}
              onChange={this.handleChange("phone")}
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mb-2">
            <TextField
              fullWidth
              variant="outlined"
              name="password"
              value={this.state.password || ""}
              id="textfield-password"
              placeholder="Enter Password"
              helperText={this.state.formErrors.password}
              error={this.state.formErrors.password !== null}
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
              have an account? <Link to="/login">Login</Link>
            </small>
          </div>
          <div className="mt-3 d-flex justify-content-center mb-5">
            <Button
              onClick={(e) => this.handleSubmit(e)}
              className="bg-primary font-weight-bold w-50 my-2 text-white"
              type="submit"
            >
              Submit
            </Button>
            {/* <Button
              className="bg-light font-weight-bold w-50 my-2 text-dark"
              onClick={(e) => this.handleForgotPassword(e)}
              style={{
                marginLeft: "7%",
              }}
            >
              Forgot password
            </Button> */}
          </div>
          {/* <div className="text-center">
            <Link to="/">Back Home</Link>
          </div> */}
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
    signup,
    clearErrors,
    showLoader,
    hideLoader,
  })(Login)
);
