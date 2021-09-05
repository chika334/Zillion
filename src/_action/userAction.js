import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_FAIL,
  LOGIN_FAIL,
  UPDATE_PASSWORD,
  USER_DETAIL_LOADING,
  USER_DETAIL_LOADED,
  ADMIN_USER_DETAIL_LOADING,
  ADMIN_USER_DETAIL_LOADED,
  ADMIN_AUTH_ERROR,
} from "./type.js";
import { returnErrors } from "./errorAction.js";
import { hideLoader } from "./loading";

// export const getAllUserDetails = () => (dispatch, getState) => {
//   dispatch({ type: ADMIN_USER_DETAIL_LOADING });
//   axios
//     .get(`${process.env.REACT_APP_API}/adminUserGet`, tokenConfig(getState))
//     .then((res) =>
//       dispatch({
//         type: ADMIN_USER_DETAIL_LOADED,
//         payload: res.data,
//       })
//     )
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: ADMIN_AUTH_ERROR,
//       });
//     });
// };

// get all authenticated users details
export const getUserDetails = () => (dispatch, getState) => {
  dispatch({ type: USER_DETAIL_LOADING });
  axios
    .get(`${process.env.REACT_APP_API}/auth/me`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_DETAIL_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// export const getUserDetails = async (value, token) => {

// // set Header
// const config = {
//   headers: {
//     "Content-Type": "application/json"
//   }
// }

// // if token, add to header
// if(token) {
//   config.headers['x-auth-token'] = token;
// }

//   return await axios.post(`${process.env.REACT_APP_API}/auth/me`, value, config)
//     .then(res => res.data)
// }

export const getUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(`${process.env.REACT_APP_API}/getUser`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const signup = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  axios
    .post(`${process.env.REACT_APP_API}/register`, body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const updatePassword = (users) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(users);
  // console.log(body)

  axios
    .post(`${process.env.REACT_APP_API}/updatePassword`, body, config)
    .then((res) =>
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const signin = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);
  // console.log(body)

  axios
    .post(`${process.env.REACT_APP_API}/login`, body, config)
    .then(
      (res) =>
        dispatch({
          type: LOGIN_USER,
          payload: res.data,
        }),
      dispatch(hideLoader())
    )
    .catch((err) => {
      dispatch(hideLoader());
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().authUser.token;

  // set Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token, add to header
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
