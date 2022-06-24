import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://equity-bot-scrapper.herokuapp.com/" || "http://localhost:8080/",
});
