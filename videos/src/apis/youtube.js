import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API;

export const API_DEFAULT_PARAMS = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
