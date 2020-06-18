import axios from "axios";
import {
  GET_ERRORS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      // const errors = {
      //   msg: err.response.data.detail,
      //   status: err.response.status,
      // };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors,
      // });
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: "INCORRECT USERNAME OR PASSWORD",
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// LOGOUT USER

export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data.detail,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

// REGISTER USER

export const register = ({ username, email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
