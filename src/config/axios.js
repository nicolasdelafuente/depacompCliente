import axios from "axios";

const seguimientoAxios = axios.create({
  baseURL: "https://depacompserver.rj.r.appspot.com/api/",
});

export default seguimientoAxios;
