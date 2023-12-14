import axios from "axios";

console.log(axios);
const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
});

export default instance;
