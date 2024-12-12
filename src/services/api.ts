import axios from "axios";

export const api = axios.create({
  baseURL: "https://ticto-challenge.vercel.app/api",
});
