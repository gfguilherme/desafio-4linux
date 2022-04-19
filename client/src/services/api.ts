import axios from "axios";

export const publicapis = axios.create({
  baseURL: "https://api.publicapis.org/",
});

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});
