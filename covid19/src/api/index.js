import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19.mathdro.id/api/",
});

export const fetchData = async () => {
  try {
    const response = await api.get();

    const { confirmed, recovered, deaths, lastUpdate } = response.data;
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await api.get("daily");

    const modifiedData = data.map((info) => ({
      confirmed: info.confirmed.total,
      deaths: info.deaths.total,
      date: info.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await api.get("countries");

    const modifiedData = data.countries.map((country) => country.name);

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
