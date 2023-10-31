import axios from "axios";

const instance = axios.create({
  //   baseURL: "https://api-radar.cmc-software.com/api/",
  baseURL: "http://localhost:4000/api",
  //timeout (Opcional)
});

export default instance;

// se puede añadir middlewars
