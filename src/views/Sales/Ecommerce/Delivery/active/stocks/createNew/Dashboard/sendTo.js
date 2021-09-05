import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TextsmsIcon from "@material-ui/icons/Textsms";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PrintIcon from "@material-ui/icons/Print";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import "../../../../../../css/modal.css";
import { useHistory, withRouter } from "react-router-dom";
// import { findByDisplayValue } from "@testing-library/dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleModal(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    props.handleClose();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    history.push({
      pathname: "/zillion/mobilaxia",
      search: "?query=sales",
      state: props.saveDesign,
    });
  };

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="modalSend"
      >
        <div className="bg-primary">
          <span onClick={props.handleClose} className="close">
            &times;
          </span>
          <DialogTitle>
            <b>The Sales Experience</b>
          </DialogTitle>
          <div className="allnew">
            <DialogTitle>
              <b>Send Auto RFP</b>
            </DialogTitle>
            <DialogTitle>
              <b>Send Auto RFP</b>
            </DialogTitle>
          </div>
          <hr />
          <DialogContent className="modalContent">
            <div className="allnew">
              <Button onClick={handleClose} color="primary">
                <InstagramIcon className="instagram" />
              </Button>
              <Button onClick={handleClose}>
                <FacebookIcon color="primary" />
              </Button>
              <Button onClick={handleClose} color="primary">
                <TwitterIcon />
              </Button>
              <Button onClick={handleClose} color="primary">
                <WhatsAppIcon className="whatsapp" />
              </Button>
              <Button onClick={handleClose} color="primary">
                <TextsmsIcon />
              </Button>
              <Button onClick={handleClose} color="primary">
                <MailOutlineIcon className="gmail" />
              </Button>
              <Button onClick={handleClose} color="primary">
                <PrintIcon />
              </Button>
              <Button onClick={handleClose} color="primary">
                <FileCopyIcon />
              </Button>
            </div>
          </DialogContent>
          <hr />
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              cancel
            </Button>
            <Button
              onClick={handleOpen}
              style={{ backgroundColor: "green", color: "#fff" }}
            >
              Send Auto RFP
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      <Dialog open={open} TransitionComponent={Transition} keepMounted>
        <DialogTitle>
          <b className="d-flex justify-content-center">
            Proceed To Customer View
          </b>
        </DialogTitle>
        <DialogContent className="modalContent">
          Verify that your last session was not an error, do you want to process
        </DialogContent>
        <div className="allnew">
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "blue",
              color: "#fff",
              marginLeft: "80px",
              marginRight: "45%",
            }}
          >
            No
          </Button>
          <Button
            onClick={handleRedirect}
            style={{ backgroundColor: "blue", color: "#fff" }}
          >
            Yes
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default withRouter(SimpleModal);
