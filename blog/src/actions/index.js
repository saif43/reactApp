import jsonPlaceHolder from "./../apis/jsonPlaceHolder";
import _ from "lodash";

/*
export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POST", payload: response });
  };
}; */

//refactored
// getState is not being used, so we removed
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};

//---------------------------------------------------------

// // calling API multiple time for each id
// export const getUser = userid => async dispatch => {
//   const response = await jsonPlaceHolder.get(`users/${userid}`);

//   dispatch({ type: "GET_USER", payload: response.data });
// };

// if database changes, we are not gonna get changed value in this solution
export const getUser = userid => dispatch => _getUser(userid, dispatch);
const _getUser = _.memoize(async (userid, dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${userid}`);

  dispatch({ type: "GET_USER", payload: response.data });
});
