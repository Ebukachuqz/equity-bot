import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://equitybot-scrapper.herokuapp.com/" || "http://localhost:8080/",
});
