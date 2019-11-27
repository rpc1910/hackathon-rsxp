import axios from "axios";

const api = axios.create({
  baseURL: "https://career-starter-rsxp.herokuapp.com/"
});

export default api;
