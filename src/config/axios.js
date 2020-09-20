import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "https://depacompserver.rj.r.appspot.com/api/",
  baseURL: "http://localhost:8080/api/",
});

export default clienteAxios;
