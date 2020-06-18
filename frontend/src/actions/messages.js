import axios from "axios";
import { GET_MESSAGES, POST_MESSAGE, GET_ERRORS } from "./types";
import { tokenConfig } from "./auth";

// GET MESSAGES
export const getMessages = () => (dispatch, getState) => {
  axios
    .get("/api/messages/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
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

// POST MESSAGE
export const postMessage = (data, csrftoken) => (dispatch, getState) => {
  axios
    .post("/api/messages/", data, {
      headers: {
        "X-CSRFTOKEN": csrftoken,
        ...tokenConfig(getState).headers,
      },
    })
    .then((res) => {
      dispatch({
        type: POST_MESSAGE,
        payload: res.data,
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
