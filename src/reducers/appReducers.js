import { SET_APP_STATE } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = null , action) {
  switch (action.type) {
    case SET_APP_STATE:
      return action.payload;
    default:
      return state;
  }
}