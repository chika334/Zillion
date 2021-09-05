import {
  ADMIN_USER_DETAIL_LOADING,
  ADMIN_USER_DETAIL_LOADED,
  ADMIN_AUTH_ERROR,
} from "../_action/type.js";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  allUser: null,
  msg: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_USER_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_USER_DETAIL_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        allUser: action.payload,
      };
    case ADMIN_AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        allUser: null,
      };
    default:
      return state;
  }
}
