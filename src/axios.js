import axios from "axios";

export const money = axios.create({
  baseURL: "https://api.exchangerate.host/",
});

export const github = axios.create({
  baseURL: "https://api.github.com/",
});

export const books = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});
