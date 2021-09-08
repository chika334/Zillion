import React, { useState, useEffect } from "react";
import company from "../../css/images/company.jpg";
import prfile from "../../css/images/prfile.png";
import { useDispatch } from "react-redux";
import ProfileImage from "../../css/images/downloadProfile.png";
import {
  DialogTitle,
  DialogActions,
  Card,
  Dialog,
  DialogContent,
  Button,
} from "@material-ui/core";
import { getCustomer } from "../../_action/Constumer";

export default function LeadForm(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    let value = "customer";
    dispatch(getCustomer(value));
    props.setOpen(false);
    props.setOpentwo(true);
  };
  const handleGeneralButton = () => {
    props.setOpen(false);
    props.setPop(true);
  };

  console.log(props);
  return (
    <Dialog
      open={props.open}
      TransitionComponent={props.Transition}
      keepMounted
      onClose={props.handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="simple-dialog-title" className="pt-3 text-center">
        <b>Lead Generation Form</b>
      </DialogTitle>
      <DialogContent>
        <hr />
        <p className="text-center" style={{ fontSize: "15px" }}>
          <b>How many leads do u want to generate?</b>
        </p>
        <div className="row">
          <div className="col-md-4, col-lg-4">
            <div>
              <div className="mt-5 d-flex justify-content-center">
                <img src={company} width="50" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="allnew mt-3">
                  <input className="mt-2 radio" type="radio" />
                  Organization
                </div>
              </div>
              <div className="text-center">
                <p>Percentage Ratio %</p>
                <hr />
                <select className="removeSelectBorder">
                  <option>Organization</option>
                </select>
                <Card style={{ border: "2px solid #000" }}>
                  <div className="allnew">
                    <div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                    </div>
                    <div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                      <div className="allnew">
                        <p style={{ fontSize: "12px" }}>Creative</p>
                        <p className="text-danger ml-3">x</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-4, col-lg-4 vl">
            <div className="d-flex justify-content-center">
              <button disabled className="text-dark">
                300
              </button>
            </div>
            <p style={{ fontSize: "13px" }} className="text-center">
              Lead Generation Sources
            </p>
            <hr />
            <div className="text-primary">
              <div style={{ float: "left", width: "100px" }}>
                <div className="allnew" style={{ marginRight: "90px" }}>
                  <input className="mt-2 radio" type="radio" />
                  all
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew mr-5">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
              </div>
              <div className="mt-3 mr-5" style={{ width: "100px" }}>
                <div className="allnew" style={{ marginRight: "90px" }}>
                  <input className="mt-2 radio" type="radio" />
                  all
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
                <div className="allnew">
                  <input className="mt-2 radio" type="radio" />
                  Creative
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4, col-lg-4 vl">
            <div className="mt-5 d-flex justify-content-center">
              <img src={ProfileImage} width="50" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="allnew mt-3">
                <input className="mt-2 radio" type="radio" />
                Individual
              </div>
            </div>
            <div className="text-center">
              <p>Percentage Ratio %</p>
              <hr />
              <select className="removeSelectBorder">
                <option>Industries</option>
              </select>
              <Card style={{ border: "2px solid #000" }}>
                <div className="allnew">
                  <div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }} className="mt-0">
                        Creative
                      </p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }}>Creative</p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }}>Creative</p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                  </div>
                  <div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }}>Creative</p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }}>Creative</p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                    <div className="allnew">
                      <p style={{ fontSize: "12px" }}>Creative</p>
                      <p className="text-danger ml-3">x</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </DialogContent>
      <div className="text-center" onClick={handleGenerate}>
        Daniel
      </div>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleGeneralButton}
          variant="contained"
          color="primary"
        >
          Generate
        </Button>
      </DialogActions>
    </Dialog>
  );
}
