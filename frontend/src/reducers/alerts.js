import { GET_ALERTS, CREATE_ALERT } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERTS:
      return action.payload;
    case CREATE_ALERT:
      return (state = action.payload);
    default:
      return state;
  }
};
