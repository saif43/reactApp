import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 673f4cb9d1f284f6b56cbaffdafd1de413b44a3a0d82cca07a79d74bbf3eacb0"
  }
});
