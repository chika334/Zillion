import { SHOW_LOADER, HIDE_LOADER } from "./type";

export const showLoader = () => dispatch => {
  dispatch({
    type: SHOW_LOADER
  })
}

export const hideLoader = () => dispatch => {
  dispatch({
    type: HIDE_LOADER
  })
}
