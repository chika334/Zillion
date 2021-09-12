import React from "react";
// import dropbox from "../../css/images/dropbox.png";
// import serve from "../../css/images/serve.png";
import "../../../css/ecommerce.css";
import person from "../../../css/images/person.png";
import { withRouter } from "react-router";
import {
  // Container,
  // Typography,
  // Button,
  // Popover,
  // Dialog,
  DialogTitle,
} from "@material-ui/core";
import company from "../../../css/images/company.jpg";
import { useSelector } from "react-redux";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

function CrmComtactModal(props) {
  const customer = useSelector((state) => state.customer);
  const [open, setOpen] = React.useState(false);

  const handleDropbox = () => {
    // alert("dropbox");
    if (customer.setUser === true) {
      props.setOpen(false);
      props.setOpenthree(true);
    } else {
      props.setOpen(false);
      props.setOpentwo(true);
    }
    // history.push("/pos/sales-order");
  };
  const handleServe = () => {
    if (customer.setUser === true) {
      props.setOpen(false);
      props.setOpenfour(true);
    } else {
      props.setOpen(false);
      props.setOpenthree(true);
    }
  };

  return (
    <div className="p-3">
      <DialogTitle className="text-center pb-5">
        <b className="underLineText">Choose Product Itenary</b>
      </DialogTitle>
      <div className="newBody">
        <div onClick={handleDropbox} className="single-feature cardsDetail">
          <div
            className="single-feature text-center mr-2 cardHeight"
            style={{ backgroundColor: "grey" }}
          >
            <div className="single-feature bg-light m-3 p-4 modalCardHeight">
              <ListAltIcon width={90} />
            </div>
            <h6>Task</h6>
            <div className="p-2" style={{ fontSize: "15px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </div>
          </div>
        </div>
        <div onClick={handleServe} className="single-feature pl-2">
          <div
            className="single-feature text-center mr-2 cardHeight"
            style={{ backgroundColor: "grey" }}
          >
            <div className="single-feature bg-light m-3 p-4 modalCardHeight">
              <PlaylistAddCheckIcon width={90} />
            </div>
            <h6>Activities</h6>
            <div className="p-2" style={{ fontSize: "15px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CrmComtactModal);
