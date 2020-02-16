import axios from "axios";

const KEY = "AIzaSyAanRjNlwgxxBM5Hu1Om8aAMg2VcuDHJpg";

export const API_DEFAULT_PARAMS = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
