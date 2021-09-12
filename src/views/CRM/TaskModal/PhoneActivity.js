import React, { useState } from "react";
import { DialogContent, DialogTitle, Button } from "@material-ui/core";
import success from "../../../css/images/mark.png";
import ProgressBar from "./ProgressBar";

export default function PhoneActivity(props) {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);

  const onHoverOne = () => {
    setHoverOne(true);
  };
  const onLeaveOne = () => {
    setHoverOne(false);
  };
  const onHoverTwo = () => {
    setHoverTwo(true);
  };
  const onLeaveTwo = () => {
    setHoverTwo(false);
  };
  const onHoverThree = () => {
    setHoverThree(true);
  };
  const onLeaveThree = () => {
    setHoverThree(false);
  };
  const onHoverFour = () => {
    setHoverFour(true);
  };
  const onLeaveFour = () => {
    setHoverFour(false);
  };

  const handlePhone = () => {
    props.setOpen(false);
    props.setOpentwo(true);
  };
  return (
    <div>
      <DialogTitle>
        <h3 className="text-center">
          <b style={{ textDecoration: "underline" }}>Phone Activity</b>
        </h3>
      </DialogTitle>
      <DialogContent>
        <div style={{ float: "left" }}>
          <div>
            <label style={{ float: "left" }}>
              <b>Call List</b>
            </label>
            <label className="ml-3">
              <b>Text List</b>
            </label>
          </div>
          <div>
            <label style={{ float: "left" }}>
              <b>John Doe</b>
              <br />
              <div>
                <small className="mr-3">12345679-87654</small>
                <small
                  onMouseEnter={onHoverOne}
                  onMouseLeave={onLeaveOne}
                  role="button"
                  tabIndex="-3"
                >
                  {hoverOne ? (
                    <>
                      <label>mark when done</label>
                      <img src={success} width="30" />
                    </>
                  ) : (
                    "mark when done"
                  )}
                </small>
              </div>
            </label>
            <label>
              <b>Text List</b>
            </label>
          </div>
          <div className="mt-5">
            <label style={{ float: "left" }}>
              <b>John Doe</b>
              <br />
              <div>
                <small className="mr-3">12345679-87654</small>
                <small
                  onMouseEnter={onHoverTwo}
                  onMouseLeave={onLeaveTwo}
                  role="button"
                  tabIndex="-3"
                >
                  {hoverTwo ? (
                    <>
                      <label>mark when done</label>
                      <img src={success} width="30" />
                    </>
                  ) : (
                    "mark when done"
                  )}
                </small>
              </div>
            </label>
            <label>
              <b>Text List</b>
            </label>
          </div>
          <div className="mt-5">
            <label style={{ float: "left" }}>
              <b>John Doe</b>
              <br />
              <div>
                <small className="mr-3">12345679-87654</small>
                <small
                  onMouseEnter={onHoverThree}
                  onMouseLeave={onLeaveThree}
                  role="button"
                  tabIndex="-3"
                >
                  {hoverThree ? (
                    <>
                      <label>mark when done</label>
                      <img src={success} width="30" />
                    </>
                  ) : (
                    "mark when done"
                  )}
                </small>
              </div>
            </label>
            <label>
              <b>Text List</b>
            </label>
          </div>
          <div className="mt-5">
            <label style={{ float: "left" }}>
              <b>John Doe</b>
              <br />
              <div>
                <small className="mr-3">12345679-87654</small>
                <small
                  onMouseEnter={onHoverFour}
                  onMouseLeave={onLeaveFour}
                  role="button"
                  tabIndex="-3"
                >
                  {hoverFour ? (
                    <>
                      <label>mark when done</label>
                      <img src={success} width="30" />
                    </>
                  ) : (
                    "mark when done"
                  )}
                </small>
              </div>
            </label>
            <label>
              <b>Text List</b>
            </label>
          </div>
        </div>
        <div className="ml-2 mr-2">
          <label>Progress Bar</label>
          <ProgressBar />
          <div className="mt-4 ml-5">
            <h2 style={{ float: "left" }}>004</h2>
            <label className="mt-4">completed</label>
          </div>
          <div className="mt-4 ml-5">
            <h2 style={{ float: "left" }}>024</h2>
            <label className="mt-4">completed</label>
          </div>
          <div>
            <small className="text-center">
              View Activity Calendar Instead
            </small>
          </div>
          <Button onClick={handlePhone} variant="contained" color="primary">
            Create
          </Button>
        </div>
      </DialogContent>
    </div>
  );
}
