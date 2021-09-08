import { SET_CUSTOMER } from "../_action/type.js";

const initialState = {
  setUser: false,
  allUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOMER:
      return {
        ...state,
        setUser: true,
        allUser: action.payload,
      };
    default:
      return state;
  }
}
