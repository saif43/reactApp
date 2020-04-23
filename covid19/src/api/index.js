import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);

    const { confirmed, recovered, deaths, lastUpdate } = response.data;
    const data = { confirmed, recovered, deaths, lastUpdate };

    return data;
  } catch (error) {}
};
