import axios from "axios";

const db = axios.create({
  baseURL: "http://localhost:9000",
});

const currencyApi = axios.create({
  baseURL: "https://api.exchangeratesapi.io",
});

export { db, currencyApi };
