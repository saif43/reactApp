import { combineReducers } from "redux";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: (state.count += 1) };

    case "DECREASE":
      if(state.count === 0){
        return state
      }

      return { ...state, count: (state.count -= 1) };

    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
});
