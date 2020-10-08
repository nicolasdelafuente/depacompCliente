import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "https://depacompserver.rj.r.appspot.com/api/",
  baseURL: "http://localhost:4000/api/",
});

export default clienteAxios;
