import jsonPlaceHolder from "./../apis/jsonPlaceHolder";

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

export const getUser = userid => async dispatch => {
  const response = await jsonPlaceHolder.get(`users/${userid}`);

  dispatch({ type: "GET_USER", payload: response.data });
};
