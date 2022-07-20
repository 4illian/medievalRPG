import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:3000/",
  headers: {
    //  Authorization: `<Your Auth Token>`,
    Content_type: "application/json",
    timeout: 1000,
  },
  // .. other options
});

export default instance;
