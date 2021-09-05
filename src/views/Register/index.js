import React from "react";
import { Grid, Container, Card, List, ListItem } from "@material-ui/core";
import Register from "./components/Register";
// import hero6 from "../../assets/images/hero-bg/hero-7.jpg";
// import OverviewHeader from "../../example-components/Overview/Overview1/OverviewHeader";

const LoginPage = () => {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-white min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image opacity-6"
              // style={{ backgroundImage: "url(" + hero6 + ")" }}
            />
            <div className="bg-composed-wrapper--bg bg-white opacity-0" />
            <div className="bg-composed-wrapper--content p-3 p-md-5">
              <Container>
                {/* <Card className="rounded-sm modal-content p-3 bg-primary"> */}
                <div
                  // style={{ marginLeft: "25%", marginRight: "25%" }}
                  className="login-Card rounded-sm overflow-hidden shadow-xxl font-size-sm p-3 p-sm-0"
                >
                  <Grid container spacing={0}>
                    <Register />
                  </Grid>
                </div>
                {/* </Card> */}
              </Container>
            </div>
          </div>
          <div className="hero-footer w-100 pb-4">
            <Container>
              <div className="py-3 d-block d-lg-flex font-size-xs justify-content-between">
                <div className="text-center d-block mb-3 mb-md-0 text-black">
                  Copyright &copy; 2021 - Pavers.com
                </div>
                <List
                  component="div"
                  className="nav-transparent text-nowrap d-flex justify-content-center"
                >
                  <ListItem
                    button
                    className="text-black-50"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Privacy Policy
                  </ListItem>
                  <ListItem
                    button
                    className="text-black-50"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Terms of Service
                  </ListItem>
                </List>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
