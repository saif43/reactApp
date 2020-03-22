import jsonPlaceHolder from "./../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  const response = jsonPlaceHolder.get("/posts");
  return {
    type: "FETCH_POST",
    payload: response
  };
};
 