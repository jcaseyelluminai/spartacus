import { combineReducers } from "redux";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";
import alerts from "./alerts";

export default combineReducers({
  messages,
  errors,
  auth,
  alerts,
});
