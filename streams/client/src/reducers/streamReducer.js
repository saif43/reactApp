import _ from "lodash";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM,
  FETCH_ALL_STREAMS,
  FETCH_SINGLE_STREAM
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload); // payload = id

    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_ALL_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    /* Example
         const a = [
           { id: 12, name: "saif" },
           { id: 13, name: "arif" }
        ];

        result of _.mapKeys(a, "id")
           12: {id: 12, name: "saif"}
           13: {id: 13, name: "arif"}
    */

    case FETCH_SINGLE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
