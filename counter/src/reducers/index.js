import { combineReducers } from "redux";

const counterReducer = (count = 0, action) => {
  if (action.type === "INCREASE" || (action.type === "DECREASE" && count > 0)) {
    return action.payload;
  }

  return count;
};

export default combineReducers({
  counter: counterReducer
});
