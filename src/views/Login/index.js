import React from "react";
import { Grid, Container, Card, List, ListItem } from "@material-ui/core";
import Login from "./components/Login";
// import hero6 from "../../assets/images/hero-bg/hero-7.jpg";
// import OverviewHeader from "../../example-components/Overview/Overview1/OverviewHeader";

const LoginPage = () => {
  return (
    <>
      <div className="app-wrapper min-vh-100">
        <div className="hero-wrapper w-100 min-vh-100">
          {/* <div className="flex-grow-1 w-100 d-flex align-items-center"> */}
          <div className="bg-composed-wrapper--content p-3 p-md-5">
            <Container>
              <div className="d-flex align-items-center justify-content-center">
                <Login />
              </div>
            </Container>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default LoginPage;
