import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM,
  FETCH_ALL_STREAMS,
  FETCH_SINGLE_STREAM,
} from "./types";
import streams from "../apis/streams";

export const signIn = (userid) => {
  return {
    type: SIGN_IN,
    payload: userid,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const userid = getState().auth.userid;
  const response = await streams.post("/streams", { ...formValues, userid });

  dispatch({ type: CREATE_STREAM, payload: response.data });

  history.push("/");
};

export const fetchAllStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_ALL_STREAMS, payload: response.data });
};

export const fetchSingleStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_SINGLE_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};

export const updateStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: UPDATE_STREAM, payload: response.data });

  history.push("/");
};
