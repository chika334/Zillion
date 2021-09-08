import { combineReducers } from "redux";
import authUser from "./userReducer.js";
import error from "./error.js";
import loading from "./loading";
import allUser from "./allUser";
import saveCss from "./saveCSSred";
import invoiceCal from "./invoiceCal";
import customer from "./customer.js";

export default combineReducers({
  authUser,
  allUser,
  error,
  loading,
  saveCss,
  invoiceCal,
  customer,
});
