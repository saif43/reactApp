import jsonPlaceHolder from "./../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userids = _.uniq(_.map(getState().posts, "userId"));

  userids.forEach(id => dispatch(getUser(id)));

  // console.log(getState());
};

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

//1st approch
// calling API multiple time for each id
export const getUser = userid => async dispatch => {
  const response = await jsonPlaceHolder.get(`users/${userid}`);

  dispatch({ type: "GET_USER", payload: response.data });
};

// //2nd approch
// // for each unique userid we can call this function only one time
// // if the database changes, then we are fucked
// export const getUser = userid => dispatch => _getUser(userid, dispatch);
// const _getUser = _.memoize(async (userid, dispatch) => {
//   const response = await jsonPlaceHolder.get(`users/${userid}`);

//   dispatch({ type: "GET_USER", payload: response.data });
// });
