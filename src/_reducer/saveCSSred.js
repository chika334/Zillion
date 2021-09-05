import { SAVECSS } from "../_action/type";

const initialState = {
  css: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVECSS:
      return {
        css: action.payload.css,
      };
    default:
      return state;
  }
}
