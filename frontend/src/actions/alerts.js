import { CREATE_ALERT, GET_ALERTS } from "./types";

// CREATE ALERT
export const createAlert = (msg) => {
  return {
    type: CREATE_ALERT,
    payload: msg,
  };
};
