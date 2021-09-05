import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "material-ui-popup-state/HoverPopover";
import { Button, Dialog } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import { withRouter } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";

export const data = {
  propertyData: ["number", "date", "customer", "sales"],
};

const Filter = (props) => {
  const [value, setValue] = useState(null);
  const [values, setValues] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleClick = () => {
    setValues(true);
  };

  const handleClose = () => {
    setValues(false);
  };
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const handleclick = (detail) => {
    props.onProp(detail);
  };

  return (
    <div className="filterMove">
      {/* <div> */}
      <Button variant="" {...bindHover(popupState)}>
        Sort By
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        {data.propertyData.map((allData, i) => (
          <Button
            onClick={(e) => handleclick(allData)}
            key={i}
            style={{ margin: 10, display: "block" }}
          >
            {allData}
          </Button>
        ))}
      </Popover>
      <Dialog
        onClose={handleClose}
        // aria-labelledby="simple-dialog-title"
        open={values}
      >
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          // months={2}
          ranges={state}
          // direction="horizontal"
        />
      </Dialog>
      <Button onClick={handleClick}>
        <DateRangeIcon />
      </Button>
      {/* </div> */}
      <span>
        <Button style={{ width: "10px", padding: 0 }}>
          <ChatBubbleIcon
            style={{ color: "#3c44b1", width: "20", height: "20" }}
          />
        </Button>
        <Button style={{ width: "10px", padding: 0 }}>
          <SettingsIcon
            style={{ color: "#3c44b1", width: "20", height: "20" }}
          />
        </Button>
        <Button style={{ width: "10px", padding: 0 }}>
          <ViewCompactIcon
            style={{ color: "#3c44b1", width: "20", height: "20" }}
          />
        </Button>
      </span>
      <div className="hrbodyFilter">
        <hr className="hrLineFilter" />
      </div>
    </div>
  );
};

export default withRouter(Filter);
