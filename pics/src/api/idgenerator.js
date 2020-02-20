import axios from "axios";

export default axios.create({
  baseURL: "https://custom-id.herokuapp.com/api/v1/",
  headers: {
    Authorization: "Token f6390ef856adb33724cf81e059b45a241087bdfd"
  }
});
