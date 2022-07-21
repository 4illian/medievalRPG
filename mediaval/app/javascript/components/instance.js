import axios from "axios";

const csrf = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

const instance = (token) =>
  axios.create({
    baseURL: "http://127.0.0.1:3000/",
    headers: {
      Authorization: ``,
      Content_type: "application/json",
      "X-CSRF-Token": token,
      timeout: 3000,
    },
    // .. other options
  });

export default instance;
