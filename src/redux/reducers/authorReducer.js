import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authours, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCESS:
      return action.authors;
    default:
      return state;
  }
}
