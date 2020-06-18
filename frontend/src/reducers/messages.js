import {
  GET_MESSAGES,
  POST_MESSAGE,
  LOGOUT_SUCCESS,
} from "../actions/types.js";

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case POST_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
